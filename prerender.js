import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Alle Routen die prerendered werden sollen
const ROUTES = [
  "/",
  "/eure-freie-trauung",
  "/unterschiede-der-trauungen",
  "/bayrisch-tracht-trauung",
  "/gleichgeschlechtliche-queer-und-diverse-trauung",
  "/meine-angebote-freie-trauung",
  "/hochzeitsreden-traurednerin",
  "/hochzeitsplanerin-fotograf",
  "/zeitlicher-ablauf-freie-trauung",
  "/persoenliche-trauung-haeufige-fragen",
  "/freie-trauung-kontakt",
  "/ueber-traurednerin-stefanie",
  "/blog",
  "/impressum",
  "/datenschutzerklaerung",
  "/v2",
  "/v3",
];

async function prerender() {
  // Client-Build Template lesen
  const template = fs.readFileSync(path.resolve(__dirname, "dist/index.html"), "utf-8");

  // SSR-Bundle importieren
  const { render } = await import("./dist/server/entry-server.js");

  for (const url of ROUTES) {
    console.log(`Prerendering: ${url}`);

    const { html, helmet, dehydratedState } = render(url);

    // 1. App-HTML in Template injizieren
    let finalHtml = template.replace(
      /<div id="root">(?:<!--app-html-->|\s)*<\/div>/,
      `<div id="root">${html}</div>`
    );

    // 2. React Query State für Hydration injizieren
    if (dehydratedState?.queries?.length > 0) {
      const stateScript = `<script>window.__REACT_QUERY_STATE__=${JSON.stringify(dehydratedState)}</script>`;
      finalHtml = finalHtml.replace("</head>", `${stateScript}\n</head>`);
    }

    // 3. Helmet SEO-Tags injizieren (title, meta, link, script)
    if (helmet) {
      const helmetParts = [
        helmet.title?.toString(),
        helmet.meta?.toString(),
        helmet.link?.toString(),
        helmet.script?.toString(),
      ].filter(Boolean);

      if (helmetParts.length > 0) {
        const helmetHtml = helmetParts.join("\n");
        finalHtml = finalHtml.replace("</head>", `${helmetHtml}\n</head>`);
      }
    }

    // 4. Ordnerstruktur für GitHub Pages
    const cleanUrl = url === "/" ? "" : url.replace(/\/$/, "");
    const filePath = path.resolve(__dirname, `dist${cleanUrl}/index.html`);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, finalHtml);
    console.log(`  → ${filePath}`);
  }

  // 5. 404-Seite generieren
  console.log("Prerendering: 404");
  const { html: notFoundHtml, helmet: notFoundHelmet } = render("/404-not-found");
  let finalNotFound = template.replace(
    /<div id="root">(?:<!--app-html-->|\s)*<\/div>/,
    `<div id="root">${notFoundHtml}</div>`
  );
  if (notFoundHelmet) {
    const helmetParts = [
      notFoundHelmet.title?.toString(),
      notFoundHelmet.meta?.toString(),
      notFoundHelmet.link?.toString(),
    ].filter(Boolean);
    if (helmetParts.length > 0) {
      finalNotFound = finalNotFound.replace("</head>", `${helmetParts.join("\n")}\n</head>`);
    }
  }
  fs.writeFileSync(path.resolve(__dirname, "dist/404.html"), finalNotFound);
  console.log("  → dist/404.html");

  // 6. CNAME kopieren (für GitHub Pages)
  const cnameSrc = path.resolve(__dirname, "CNAME");
  if (fs.existsSync(cnameSrc)) {
    fs.copyFileSync(cnameSrc, path.resolve(__dirname, "dist/CNAME"));
    console.log("  → dist/CNAME");
  }

  console.log(`\n✅ Prerender abgeschlossen: ${ROUTES.length + 1} Seiten generiert`);
}

prerender().catch((err) => {
  console.error("Prerender fehlgeschlagen:", err);
  process.exit(1);
});
