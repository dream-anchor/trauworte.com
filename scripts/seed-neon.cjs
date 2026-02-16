// Seed-Daten von cmsSeedData.ts nach Neon migrieren
// Einmalig: node scripts/seed-neon.cjs

const pg = require("pg");
const fs = require("fs");

const DB_URL =
  "postgresql://neondb_owner:npg_Y9joJuIEq2QM@ep-orange-moon-aglh6g8y-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require";

const raw = fs.readFileSync(__dirname + "/../src/data/cmsSeedData.ts", "utf-8");

// seedPages Array aus TypeScript extrahieren
const match = raw.match(/export const seedPages[^=]*=\s*(\[[\s\S]*\]);\s*$/m);
if (!match) {
  console.error("Konnte seedPages nicht parsen!");
  process.exit(1);
}

// TypeScript-Annotationen entfernen
const jsCode = match[1].replace(/:\s*PageContent\[\]/g, "");
const seedPages = new Function("return " + jsCode)();
console.log(seedPages.length + " Seiten gefunden");

const client = new pg.Client({ connectionString: DB_URL });

async function main() {
  await client.connect();
  console.log("Connected to Neon!");

  let inserted = 0;
  let skipped = 0;

  for (const p of seedPages) {
    const existing = await client.query(
      "SELECT page_slug FROM page_content WHERE page_slug = $1",
      [p.page_slug]
    );

    if (existing.rows.length > 0) {
      console.log("  SKIP: " + p.page_slug);
      skipped++;
      continue;
    }

    await client.query(
      `INSERT INTO page_content (page_slug, page_title, content, seo_title, seo_description, seo_canonical, keywords, updated_by)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        p.page_slug,
        p.page_title,
        JSON.stringify(p.content),
        p.seo_title || null,
        p.seo_description || null,
        p.seo_canonical || null,
        p.keywords || [],
        "seed",
      ]
    );
    console.log("  OK: " + p.page_slug);
    inserted++;
  }

  console.log("\nFertig: " + inserted + " eingefuegt, " + skipped + " uebersprungen");

  const count = await client.query("SELECT COUNT(*) FROM page_content");
  console.log("Total in DB: " + count.rows[0].count + " Seiten");

  await client.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
