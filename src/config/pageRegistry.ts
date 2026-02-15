// Alle Seiten von trauworte.com mit Gruppierung für CMS-Sidebar

export interface PageEntry {
  slug: string;
  title: string;
  group: string;
  icon?: string;
}

export const PAGE_GROUPS = [
  "Hauptseiten",
  "Regionale LPs",
  "Magazin",
  "Rechtliches",
] as const;

export const pageRegistry: PageEntry[] = [
  // Hauptseiten
  { slug: "index", title: "Startseite", group: "Hauptseiten" },
  { slug: "eure-freie-trauung", title: "Eure freie Trauung", group: "Hauptseiten" },
  { slug: "unterschiede-der-trauungen", title: "Unterschiede der Trauungen", group: "Hauptseiten" },
  { slug: "bayrisch-tracht-trauung", title: "Bayrisch-Tracht Trauung", group: "Hauptseiten" },
  { slug: "gleichgeschlechtliche-queer-und-diverse-trauung", title: "Queere Trauung", group: "Hauptseiten" },
  { slug: "meine-angebote-freie-trauung", title: "Meine Angebote", group: "Hauptseiten" },
  { slug: "hochzeitsreden-traurednerin", title: "Preise & Pakete", group: "Hauptseiten" },
  { slug: "hochzeitsplanerin-fotograf", title: "Partner", group: "Hauptseiten" },
  { slug: "zeitlicher-ablauf-freie-trauung", title: "Zeitlicher Ablauf", group: "Hauptseiten" },
  { slug: "persoenliche-trauung-haeufige-fragen", title: "Häufige Fragen", group: "Hauptseiten" },
  { slug: "freie-trauung-kontakt", title: "Kontakt", group: "Hauptseiten" },
  { slug: "ueber-traurednerin-stefanie", title: "Über mich", group: "Hauptseiten" },

  // Regionale Landingpages
  { slug: "traurednerin-muenchen", title: "München", group: "Regionale LPs" },
  { slug: "traurednerin-bayern", title: "Bayern", group: "Regionale LPs" },
  { slug: "traurednerin-oesterreich", title: "Österreich", group: "Regionale LPs" },
  { slug: "freie-trauung-mallorca", title: "Mallorca", group: "Regionale LPs" },
  { slug: "freie-trauung-toskana", title: "Toskana", group: "Regionale LPs" },
  { slug: "freie-trauung-gardasee", title: "Gardasee", group: "Regionale LPs" },
  { slug: "freie-trauung-alpen", title: "Alpen", group: "Regionale LPs" },
  { slug: "freie-trauung-italien", title: "Italien", group: "Regionale LPs" },

  // Magazin
  { slug: "magazin", title: "Magazin (Hub)", group: "Magazin" },
  { slug: "magazin/trausprueche-freie-trauung", title: "Trausprüche", group: "Magazin" },

  // Rechtliches
  { slug: "impressum", title: "Impressum", group: "Rechtliches" },
  { slug: "datenschutzerklaerung", title: "Datenschutz", group: "Rechtliches" },
];

export function getPageBySlug(slug: string): PageEntry | undefined {
  return pageRegistry.find((p) => p.slug === slug);
}

export function getPagesByGroup(group: string): PageEntry[] {
  return pageRegistry.filter((p) => p.group === group);
}
