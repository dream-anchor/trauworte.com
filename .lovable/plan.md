

# TrauWorte Website – Update mit Original-Bildern und Design

## Zusammenfassung
Die hochgeladene HTML-Datei enthaelt das vollstaendige Original-Design der TrauWorte-Website mit allen Bildern, Farben, Schriften und Inhalten. Ich werde die bestehende React-Website aktualisieren, um das Original so genau wie moeglich nachzubauen.

---

## 1. Design-System aktualisieren

### Schriften
- Aktuell: Playfair Display + Lato
- Original: **Boska** (von Fontshare) + **Inter** (von Google Fonts)
- Aenderung in `index.css`: Font-Imports und CSS-Variablen anpassen

### Farbschema (aus dem Original)
| Variable | Wert |
|---|---|
| beige | #FBE9DA |
| beige-light | #FDF4ED |
| beige-dark | #FCECDF |
| brown | #8B7355 |
| black | #1a1a1a |
| gray | #666666 |
| accent | #B8956A |
| gold (stars) | #FFB800 |

### Tailwind Config
- Font-Familien auf Boska + Inter umstellen
- Farbwerte an das Original anpassen

---

## 2. Bilder einbinden (externe URLs)

Alle Bilder sind auf CDNs gehostet und koennen direkt per URL eingebunden werden:

| Bild | URL |
|---|---|
| Logo (Header + Footer) | `https://cdn.durable.co/blocks/dQ3cBEXFTRESpwpPWP8YwCVR4XygOvrXgd09r9CKfF1GjjyEyoTRMOhJwlYgrlo1.png` |
| Hero-Portrait | `https://cdn.durable.co/blocks/fD5L1qAV0Jq1mm6juDiJouPrpzDiaAxwG2jUhpHMKJ59qZwRZaEDDQdsXR8pmXeR.png` |
| Ueber TrauWorte | `https://cdn.durable.co/shutterstock/32KzhE001knAG9Tdks4KwoABZhoKOfvP33Zkox667naeeMPtK7hf7ita1Nv1jB7B.jpeg` |
| Angebot 1: Trauungszeremonie | `https://cdn.durable.co/shutterstock/1bmUV28L4mWx0qNACJaUsJ6ZFiZzMTE0RUCWxikO4Yyuom54fZITzEf9FG3UcZL5.jpeg` |
| Angebot 2: Moderation | `https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80` |
| Angebot 3: Traurede | `https://cdn.durable.co/blocks/1d9jKiHP9rOLaAegmtxI20pDUpwojNN70eHDkvLZk6FfUNyBrgGnXMFsMKpRGss5.png` |
| Angebot 4: Beratung | `https://cdn.durable.co/shutterstock/1eo1c1LaWskyy8BSovyzuu00BxWtR7UYbBJG9gP6SWI3vZCUePYVy3iGE4ROioWS.jpeg` |
| Angebot 5: Ehegeluebde | `https://cdn.durable.co/shutterstock/3KlhuJuXWpqtSLY2SI2z4b45VGP0Uehyo1X8xiOBgAkvyvQ48O1knC9qn69hBjNq.jpeg` |
| Angebot 6: Freien | `https://images.unsplash.com/photo-1515232389446-a17ce9ca7434?w=800&q=80` |

---

## 3. Betroffene Dateien

### `src/index.css`
- Font-Imports aendern (Boska + Inter statt Playfair Display + Lato)
- CSS-Variablen an Original-Farbschema anpassen

### `tailwind.config.ts`
- Font-Familien aktualisieren

### `src/components/Header.tsx`
- Logo-Bild statt Text "TRAUWORTE"
- Scroll-Effekt mit Hintergrund-Blur
- Navigation-Links: Home, Ueber mich, Angebote, Kontakt (als CTA-Button)

### `src/components/Footer.tsx`
- Logo-Bild einbinden
- 3-Spalten-Layout (Info, Navigation, Kontakt)
- Footer-Bottom mit Impressum/Datenschutz Links

### `src/pages/Index.tsx`
- Hero: Portrait-Bild mit leichter Rotation, Grid-Layout
- CTA-Box: "Ich berate euch gerne" mit Gradient-Hintergrund
- Ueber TrauWorte: Bild einbinden
- Standorte: Karten mit Flaggen-Emojis (Deutschland, Oesterreich, Schweiz, Mallorca, Toskana)
- Statement: "Magische und unvergessliche Momente" mit 2-Spalten-Text
- Angebote: 6 Karten mit echten Bildern statt Icons
- Testimonial: Exakter Text aus dem Original
- Kontakt-CTA: Zwei Buttons (E-Mail + Anrufen)

### `src/pages/Angebote.tsx`
- Angebots-Karten mit echten Bildern aktualisieren

### `src/pages/UeberMich.tsx`
- Portrait-Bild einbinden

---

## 4. Inhaltliche Aktualisierungen

Texte werden an das Original angepasst:
- Hero-Text: Erwaehnung des Kommunikations-Studiums und der Medien-/Eventbranche
- Testimonial: Vollstaendiger Originaltext von Sybille M.
- Standorte: Mallorca und Toskana hinzufuegen
- Kontakt-Bereich: E-Mail und Telefon-Buttons

---

## Technische Details

- Bilder werden als externe URLs direkt in `<img>`-Tags eingebunden (keine Downloads noetig, da CDN-gehostet)
- Scroll-Reveal-Animationen werden als einfache CSS-Transitions implementiert
- Scroll-Indikator im Hero-Bereich wird hinzugefuegt
- Header bekommt Scroll-Effekt (Hintergrund verdunkelt sich beim Scrollen)
