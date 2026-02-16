import { Hono } from "hono";
import { getDb } from "../db";

type Env = { DATABASE_URL: string };

export const navigation = new Hono<{ Bindings: Env }>();

// GET /api/navigation/:key
navigation.get("/:key", async (c) => {
  const key = c.req.param("key");
  const sql = getDb(c.env.DATABASE_URL);
  const rows = await sql`
    SELECT nav_key, items, updated_at
    FROM site_navigation
    WHERE nav_key = ${key}
  `;
  if (rows.length === 0) return c.json(null, 404);
  return c.json(rows[0]);
});

// PUT /api/navigation/:key
navigation.put("/:key", async (c) => {
  const key = c.req.param("key");
  const body = await c.req.json();
  const sql = getDb(c.env.DATABASE_URL);
  const rows = await sql`
    INSERT INTO site_navigation (nav_key, items)
    VALUES (${key}, ${JSON.stringify(body.items ?? [])})
    ON CONFLICT (nav_key) DO UPDATE SET
      items = EXCLUDED.items
    RETURNING nav_key, items, updated_at
  `;
  return c.json(rows[0]);
});
