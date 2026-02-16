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
  "/magazin",
  "/impressum",
  "/datenschutzerklaerung",
  "/traurednerin-muenchen",
  "/traurednerin-bayern",
  "/traurednerin-oesterreich",
  "/freie-trauung-mallorca",
  "/freie-trauung-toskana",
  "/freie-trauung-gardasee",
  "/freie-trauung-alpen",
  "/freie-trauung-italien",
  "/magazin/trausprueche-freie-trauung",
  "/bildnachweise",
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

  // 7. Redirect-HTML für alte Slugs (SEO-freundlich, GitHub Pages hat kein .htaccess)
  const REDIRECTS = [
    { from: "/blog", to: "/magazin" },
    { from: "/ueber-mich", to: "/ueber-traurednerin-stefanie" },
    { from: "/angebote", to: "/meine-angebote-freie-trauung" },
    { from: "/kontakt", to: "/freie-trauung-kontakt" },
    { from: "/datenschutz", to: "/datenschutzerklaerung" },
    { from: "/meine-angebote-freie-trauung/hochzeitsreden-traurednerin", to: "/hochzeitsreden-traurednerin" },
  ];

  for (const { from, to } of REDIRECTS) {
    const absTo = `https://trauworte.com${to}`;
    const redirectHtml = `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<title>Weiterleitung</title>
<link rel="canonical" href="${absTo}">
<meta http-equiv="refresh" content="0;url=${absTo}">
<meta name="robots" content="noindex">
</head>
<body>
<p>Diese Seite ist umgezogen: <a href="${absTo}">${absTo}</a></p>
<script>window.location.replace("${absTo}");</script>
</body>
</html>`;
    const redirectPath = path.resolve(__dirname, `dist${from}/index.html`);
    fs.mkdirSync(path.dirname(redirectPath), { recursive: true });
    fs.writeFileSync(redirectPath, redirectHtml);
    console.log(`  ↳ Redirect: ${from} → ${to}`);
  }

  console.log(`\n✅ Prerender abgeschlossen: ${ROUTES.length + 1} Seiten + ${REDIRECTS.length} Redirects generiert`);
}

prerender().catch((err) => {
  console.error("Prerender fehlgeschlagen:", err);
  process.exit(1);
});
