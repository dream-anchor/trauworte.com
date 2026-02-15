import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = "https://trauworte.com";

// Alle Seiten mit Priority und Changefreq
const PAGES = [
  { slug: "", priority: "1.0", changefreq: "daily" },
  { slug: "eure-freie-trauung", priority: "0.8", changefreq: "monthly" },
  { slug: "unterschiede-der-trauungen", priority: "0.7", changefreq: "monthly" },
  { slug: "bayrisch-tracht-trauung", priority: "0.7", changefreq: "monthly" },
  { slug: "gleichgeschlechtliche-queer-und-diverse-trauung", priority: "0.7", changefreq: "monthly" },
  { slug: "meine-angebote-freie-trauung", priority: "0.9", changefreq: "weekly" },
  { slug: "hochzeitsreden-traurednerin", priority: "0.8", changefreq: "monthly" },
  { slug: "hochzeitsplanerin-fotograf", priority: "0.7", changefreq: "monthly" },
  { slug: "zeitlicher-ablauf-freie-trauung", priority: "0.7", changefreq: "monthly" },
  { slug: "persoenliche-trauung-haeufige-fragen", priority: "0.8", changefreq: "monthly" },
  { slug: "freie-trauung-kontakt", priority: "0.9", changefreq: "monthly" },
  { slug: "ueber-traurednerin-stefanie", priority: "0.8", changefreq: "monthly" },
  { slug: "magazin", priority: "0.6", changefreq: "weekly" },
  { slug: "impressum", priority: "0.3", changefreq: "yearly" },
  { slug: "datenschutzerklaerung", priority: "0.3", changefreq: "yearly" },
  { slug: "traurednerin-muenchen", priority: "0.8", changefreq: "monthly" },
  { slug: "traurednerin-bayern", priority: "0.8", changefreq: "monthly" },
  { slug: "traurednerin-oesterreich", priority: "0.8", changefreq: "monthly" },
  { slug: "freie-trauung-mallorca", priority: "0.8", changefreq: "monthly" },
  { slug: "freie-trauung-toskana", priority: "0.8", changefreq: "monthly" },
  { slug: "freie-trauung-gardasee", priority: "0.8", changefreq: "monthly" },
  { slug: "freie-trauung-alpen", priority: "0.8", changefreq: "monthly" },
  { slug: "freie-trauung-italien", priority: "0.8", changefreq: "monthly" },
  { slug: "magazin/trausprueche-freie-trauung", priority: "0.8", changefreq: "monthly" },
];

const today = new Date().toISOString().split("T")[0];

const urls = PAGES.map((page) => {
  const loc = page.slug ? `${BASE_URL}/${page.slug}/` : `${BASE_URL}/`;
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

const outPath = path.resolve(__dirname, "../dist/sitemap.xml");
fs.writeFileSync(outPath, sitemap, "utf-8");
console.log(`✅ Sitemap generiert: ${PAGES.length} URLs → ${outPath}`);
