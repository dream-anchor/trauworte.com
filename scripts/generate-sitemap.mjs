import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = "https://trauworte.com";

// Alle Seiten mit Priority und Changefreq
const PAGES = [
  { slug: "", priority: "1.0", changefreq: "daily" },
  { slug: "ueber-mich", priority: "0.8", changefreq: "monthly" },
  { slug: "angebote", priority: "0.9", changefreq: "weekly" },
  { slug: "kontakt", priority: "0.9", changefreq: "monthly" },
  { slug: "impressum", priority: "0.3", changefreq: "monthly" },
  { slug: "datenschutz", priority: "0.3", changefreq: "monthly" },
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
