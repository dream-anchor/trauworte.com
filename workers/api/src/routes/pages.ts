import { Hono } from "hono";
import { getDb } from "../db";

type Env = { DATABASE_URL: string };

export const pages = new Hono<{ Bindings: Env }>();

// GET /api/pages — Alle Seiten (ohne gelöschte)
pages.get("/", async (c) => {
  const sql = getDb(c.env.DATABASE_URL);
  const rows = await sql`
    SELECT page_slug, page_title, content, seo_title, seo_description,
           seo_canonical, keywords, updated_at, updated_by
    FROM page_content
    WHERE deleted_at IS NULL
    ORDER BY page_slug
  `;
  return c.json(rows);
});

// GET /api/pages/trash — Papierkorb (gelöschte Seiten, letzte 30 Tage)
pages.get("/trash", async (c) => {
  const sql = getDb(c.env.DATABASE_URL);
  const rows = await sql`
    SELECT page_slug, page_title, deleted_at, updated_by
    FROM page_content
    WHERE deleted_at IS NOT NULL
      AND deleted_at > now() - INTERVAL '30 days'
    ORDER BY deleted_at DESC
  `;
  return c.json(rows);
});

// GET /api/pages/:slug — Einzelne Seite
pages.get("/:slug{.+}", async (c) => {
  const slug = c.req.param("slug");
  const sql = getDb(c.env.DATABASE_URL);
  const rows = await sql`
    SELECT page_slug, page_title, content, seo_title, seo_description,
           seo_canonical, keywords, updated_at, updated_by
    FROM page_content
    WHERE page_slug = ${slug} AND deleted_at IS NULL
  `;
  if (rows.length === 0) return c.json(null, 404);
  return c.json(rows[0]);
});

// PUT /api/pages/:slug — Seite speichern (upsert) + History-Snapshot
pages.put("/:slug{.+}", async (c) => {
  const slug = c.req.param("slug");
  const body = await c.req.json();
  const sql = getDb(c.env.DATABASE_URL);

  // Aktuellen Stand als History-Snapshot speichern (falls vorhanden)
  const existing = await sql`
    SELECT content, seo_title, seo_description, seo_canonical, keywords, page_title
    FROM page_content WHERE page_slug = ${slug}
  `;
  if (existing.length > 0) {
    await sql`
      INSERT INTO page_history (page_slug, snapshot, changed_by)
      VALUES (${slug}, ${JSON.stringify(existing[0])}, ${body.updated_by ?? null})
    `;
  }

  // Upsert
  const rows = await sql`
    INSERT INTO page_content (page_slug, page_title, content, seo_title, seo_description, seo_canonical, keywords, updated_by)
    VALUES (
      ${slug},
      ${body.page_title ?? ""},
      ${JSON.stringify(body.content ?? {})},
      ${body.seo_title ?? null},
      ${body.seo_description ?? null},
      ${body.seo_canonical ?? null},
      ${body.keywords ?? []},
      ${body.updated_by ?? null}
    )
    ON CONFLICT (page_slug) DO UPDATE SET
      page_title = EXCLUDED.page_title,
      content = EXCLUDED.content,
      seo_title = EXCLUDED.seo_title,
      seo_description = EXCLUDED.seo_description,
      seo_canonical = EXCLUDED.seo_canonical,
      keywords = EXCLUDED.keywords,
      updated_by = EXCLUDED.updated_by,
      deleted_at = NULL
    RETURNING page_slug, page_title, content, seo_title, seo_description,
              seo_canonical, keywords, updated_at, updated_by
  `;
  return c.json(rows[0]);
});

// DELETE /api/pages/:slug — Soft-Delete (Papierkorb)
pages.delete("/:slug{.+}", async (c) => {
  const slug = c.req.param("slug");
  const sql = getDb(c.env.DATABASE_URL);
  await sql`
    UPDATE page_content SET deleted_at = now()
    WHERE page_slug = ${slug}
  `;
  return c.json({ ok: true });
});

// PUT /api/pages/:slug/restore — Aus Papierkorb wiederherstellen
pages.put("/:slug{.+}/restore", async (c) => {
  const slug = c.req.param("slug");
  const sql = getDb(c.env.DATABASE_URL);
  const rows = await sql`
    UPDATE page_content SET deleted_at = NULL
    WHERE page_slug = ${slug}
    RETURNING page_slug, page_title, updated_at
  `;
  if (rows.length === 0) return c.json(null, 404);
  return c.json(rows[0]);
});
