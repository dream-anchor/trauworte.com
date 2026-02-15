# Blog-Struktur für TrauWorte

## Strategie

Der Blog dient drei Zwecken:
1. **SEO:** Longtail-Keywords abdecken, die auf den Hauptseiten keinen Platz haben
2. **Backlinks:** Linkwürdige Inhalte erstellen, die natürlich geteilt werden
3. **Vertrauen:** Expertise zeigen, Brautpaare inspirieren

## Technische Umsetzung

- Route: `/blog/[slug]`
- Jeder Blogpost als eigene React-Komponente in `src/pages/blog/`
- SEO: Eigener Title, Description, Canonical
- Schema: BlogPosting JSON-LD
- Breadcrumbs: Startseite > Blog > Beitrag

## Geplante Blogposts (Priorität nach SEO-Potenzial)

### Priorität 1 — Pillar Content (1.500+ Wörter)

#### 1. Freie Trauung planen: Der komplette Guide 2026
- **URL:** `/blog/freie-trauung-planen-guide`
- **Keywords:** freie trauung planen, ablauf freie trauung, freie trauung vorbereitung
- **Inhalt:** Schritt-für-Schritt-Anleitung von der Traurednerin-Suche bis zum großen Tag
- **Interne Links:** → Prozess-Timeline, → Kontakt, → Angebote

#### 2. Was kostet eine freie Trauung? Ehrliche Übersicht 2026
- **URL:** `/blog/kosten-freie-trauung`
- **Keywords:** freie trauung kosten, traurednerin kosten, hochzeitsrednerin preise
- **Inhalt:** Preisrahmen, was ist inklusive, worauf achten, versteckte Kosten
- **Interne Links:** → Preise/Angebote, → Kontakt

#### 3. Die 30 schönsten Hochzeitslocations in München & Bayern
- **URL:** `/blog/hochzeitslocations-muenchen-bayern`
- **Keywords:** hochzeitslocations münchen, heiraten in münchen, location hochzeit bayern
- **Inhalt:** Locations nach Kategorie (Schloss, See, Alm, Stadt), mit Beschreibung & Tipps
- **Interne Links:** → Traurednerin München, → Traurednerin Bayern

### Priorität 2 — Inspirations-Content (800–1.200 Wörter)

#### 4. 15 Rituale für eure freie Trauung: Von klassisch bis kreativ
- **URL:** `/blog/rituale-freie-trauung`
- **Keywords:** rituale freie trauung, hochzeitsrituale, sandritual hochzeit
- **Inhalt:** Erweiterte Version der Ritual-Sektion, mit mehr Detail & Bildern
- **Interne Links:** → Ritual-Bereich Startseite, → Angebote

#### 5. Musik für die freie Trauung: Die ultimative Playlist 2026
- **URL:** `/blog/musik-freie-trauung-playlist`
- **Keywords:** musik freie trauung, hochzeitsmusik, lieder trauung
- **Inhalt:** 50+ Songs nach Moment sortiert, mit Tipps zur Live-Musik vs. DJ
- **Interne Links:** → Musik-Sektion Startseite, → Kontakt

#### 6. Destination Wedding Mallorca: So plant ihr eure Traumhochzeit
- **URL:** `/blog/destination-wedding-mallorca-planen`
- **Keywords:** destination wedding mallorca, hochzeit mallorca planen, heiraten mallorca
- **Inhalt:** Planung, Locations, Kosten, Wetter, rechtliche Hinweise
- **Interne Links:** → Mallorca-Landingpage, → Kontakt

#### 7. Freie Trauung im Freien: 10 Tipps für die perfekte Outdoor-Zeremonie
- **URL:** `/blog/freie-trauung-outdoor-tipps`
- **Keywords:** freie trauung outdoor, outdoor hochzeit, hochzeit im freien
- **Inhalt:** Wetter-Plan B, Technik, Dekoration, Location-Wahl
- **Interne Links:** → Angebote (Outdoor), → Alpen-Landingpage

#### 8. Hochzeitsgelübde schreiben: Anleitung & Beispiele
- **URL:** `/blog/hochzeitsgeluebde-schreiben`
- **Keywords:** hochzeitsgelübde schreiben, ehegelübde beispiele, persönliche gelübde
- **Inhalt:** Schritt-für-Schritt-Anleitung, Dos & Don'ts, Beispiel-Struktur
- **Interne Links:** → Angebote (Gelübde-Beratung), → Kontakt

### Priorität 3 — Saisonaler Content (500–800 Wörter)

#### 9. Herbsthochzeit: Warum der Herbst perfekt für eine freie Trauung ist
#### 10. Winterhochzeit in den Alpen: Romantik im Schnee
#### 11. Hochzeitstrends 2026: Was Brautpaare dieses Jahr bewegt
#### 12. Zweisprachige Hochzeit: So klappt die bilinguale Trauung

## Veröffentlichungsplan

| Monat | Blogpost | Kategorie |
|-------|----------|-----------|
| 1 | Freie Trauung planen: Guide | Pillar |
| 2 | Kosten freie Trauung | Pillar |
| 3 | Hochzeitslocations München & Bayern | Pillar |
| 4 | Rituale für freie Trauung | Inspiration |
| 5 | Musik-Playlist | Inspiration |
| 6 | Destination Wedding Mallorca | Inspiration |
| 7 | Outdoor-Zeremonie Tipps | Inspiration |
| 8 | Hochzeitsgelübde schreiben | Inspiration |
| 9 | Herbsthochzeit | Saisonal |
| 10 | Hochzeitstrends 2026 | Saisonal |
| 11 | Winterhochzeit Alpen | Saisonal |
| 12 | Zweisprachige Hochzeit | Saisonal |

## SEO-Checkliste pro Blogpost

- [ ] Title unter 60 Zeichen mit Hauptkeyword
- [ ] Meta Description unter 155 Zeichen
- [ ] H1 = Title (einmal)
- [ ] H2s mit Keywords
- [ ] Min. 800 Wörter
- [ ] 2-3 interne Links zu anderen Seiten
- [ ] 1-2 externe Links (Quellen)
- [ ] Min. 3 Bilder mit Alt-Text
- [ ] BlogPosting JSON-LD Schema
- [ ] Breadcrumb Schema
- [ ] Canonical URL gesetzt
- [ ] In Sitemap aufgenommen
