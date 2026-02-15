import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import https from "https";
import http from "http";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "../public/images");

fs.mkdirSync(OUT_DIR, { recursive: true });

// Alle externen Bilder mit SEO-optimierten Dateinamen
const IMAGES = [
  {
    url: "https://cdn.durable.co/blocks/fD5L1qAV0Jq1mm6juDiJouPrpzDiaAxwG2jUhpHMKJ59qZwRZaEDDQdsXR8pmXeR.png",
    name: "traurednerin-stefanie-sick-portrait",
  },
  {
    url: "https://cdn.durable.co/shutterstock/32KzhE001knAG9Tdks4KwoABZhoKOfvP33Zkox667naeeMPtK7hf7ita1Nv1jB7B.jpeg",
    name: "traumhochzeit-brautpaar-zeremonie",
  },
  {
    url: "https://cdn.durable.co/shutterstock/19UsepJJI79iMphdecQBVR3YoAjQFl2UiP3xRb2avIimQZ9cLaahvfyulik4yxSC.jpeg",
    name: "hochzeit-europa-deutschland-oesterreich-schweiz",
  },
  {
    url: "https://cdn.durable.co/shutterstock/14rl8pNeIZJXkEJIWMIE9UEVNt0JbbYPBg7g17WYPAovBa5amUSd5KJ0Y3zVosjT.jpeg",
    name: "freie-trauung-hochzeitstanz-romantisch",
  },
  {
    url: "https://cdn.durable.co/shutterstock/2bcDWS6MQREb8GLqc24h5eW57yNxwWHyPxG4rvX9N8GDfb8dKXtwt2PanXvCgKJR.jpeg",
    name: "testimonial-kundin-sybille-hochzeit",
  },
  {
    url: "https://cdn.durable.co/shutterstock/1bmUV28L4mWx0qNACJaUsJ6ZFiZzMTE0RUCWxikO4Yyuom54fZITzEf9FG3UcZL5.jpeg",
    name: "angebot-freie-trauungszeremonie",
  },
  {
    url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8d2VkZGluZyUyMGRpbm5lcnxlbnwwfHx8fDE3Mzk5NzA3NDl8MA&ixlib=rb-4.0.3&q=80&w=1080",
    name: "angebot-hochzeitsmoderation-dinner",
  },
  {
    url: "https://cdn.durable.co/blocks/1d9jKiHP9rOLaAegmtxI20pDUpwojNN70eHDkvLZk6FfUNyBrgGnXMFsMKpRGss5.png",
    name: "angebot-feierliche-traurede-rednerin",
  },
  {
    url: "https://cdn.durable.co/shutterstock/1eo1c1LaWskyy8BSovyzuu00BxWtR7UYbBJG9gP6SWI3vZCUePYVy3iGE4ROioWS.jpeg",
    name: "angebot-hochzeitsberatung-planung",
  },
  {
    url: "https://cdn.durable.co/shutterstock/3KlhuJuXWpqtSLY2SI2z4b45VGP0Uehyo1X8xiOBgAkvyvQ48O1knC9qn69hBjNq.jpeg",
    name: "angebot-individuelle-ehegeluebde",
  },
  {
    url: "https://images.unsplash.com/photo-1515232389446-a17ce9ca7434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8b3V0ZG9vciUyMHdlZGRpbmd8ZW58MHx8fHwxNzM5OTcwNzQ5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    name: "angebot-outdoor-hochzeit-strand",
  },
  {
    url: "https://cdn.durable.co/blocks/dQ3cBEXFTRESpwpPWP8YwCVR4XygOvrXgd09r9CKfF1GjjyEyoTRMOhJwlYgrlo1.png",
    name: "trauworte-logo",
  },
  {
    url: "https://cdn.durable.co/blocks/28WgJlNB0NjlXm864tNt8kzDRIBtK7oCzWwfB6iltWojwV4SMXVTRGjonFQWvGoj.png",
    name: "trauworte-logo-footer",
  },
];

function download(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    client.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks)));
      res.on("error", reject);
    }).on("error", reject);
  });
}

async function processImage({ url, name }) {
  try {
    const buf = await download(url);
    const img = sharp(buf);
    const meta = await img.metadata();

    // Logos: WebP mit Transparenz beibehalten
    // Fotos: WebP mit Qualität 82, max 1920px breit
    const isLogo = name.includes("logo");
    const maxWidth = isLogo ? meta.width : 1920;

    const outPath = path.join(OUT_DIR, `${name}.webp`);
    await img
      .resize({ width: Math.min(meta.width, maxWidth), withoutEnlargement: true })
      .webp({ quality: isLogo ? 90 : 82, effort: 6 })
      .toFile(outPath);

    const stat = fs.statSync(outPath);
    const origKB = Math.round(buf.length / 1024);
    const newKB = Math.round(stat.size / 1024);
    const saved = Math.round((1 - stat.size / buf.length) * 100);
    console.log(`  ✅ ${name}.webp (${origKB}KB → ${newKB}KB, -${saved}%)`);
  } catch (err) {
    console.error(`  ❌ ${name}: ${err.message}`);
  }
}

console.log(`\n🖼️  Lade ${IMAGES.length} Bilder herunter und konvertiere zu WebP...\n`);

for (const img of IMAGES) {
  await processImage(img);
}

console.log(`\n✅ Fertig! Bilder gespeichert in: ${OUT_DIR}\n`);
