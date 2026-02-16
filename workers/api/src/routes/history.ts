import { Hono } from "hono";
import { getDb } from "../db";

type Env = { DATABASE_URL: string };

export const history = new Hono<{ Bindings: Env }>();

// GET /api/history/:slug — Letzte 100 Versionen einer Seite
history.get("/:slug{.+}", async (c) => {
  const slug = c.req.param("slug");
  const sql = getDb(c.env.DATABASE_URL);
  const rows = await sql`
    SELECT id, page_slug, snapshot, changed_by, created_at
    FROM page_history
    WHERE page_slug = ${slug}
    ORDER BY created_at DESC
    LIMIT 100
  `;
  return c.json(rows);
});

// GET /api/history/:slug/:id — Einzelnen Snapshot laden
history.get("/:slug{.+}/:id", async (c) => {
  const id = c.req.param("id");
  const sql = getDb(c.env.DATABASE_URL);
  const rows = await sql`
    SELECT id, page_slug, snapshot, changed_by, created_at
    FROM page_history
    WHERE id = ${id}
  `;
  if (rows.length === 0) return c.json(null, 404);
  return c.json(rows[0]);
});
