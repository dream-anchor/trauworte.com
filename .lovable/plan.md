
# TrauWorte – Website für Hochzeitsrednerin Stefanie Sick

Nachbau der TrauWorte-Website als originalgetreue, mehrseitige Webseite mit warmem, elegantem Design und funktionierendem Kontaktformular.

---

## Design & Farbschema
- Warmes Farbschema: Beige/Peach-Töne (#F5E6D8, #FDF0E7), dunkle Akzente für Text
- Elegante Schriftarten: Handschrift-ähnliche Schrift für Überschriften (z.B. Playfair Display oder ähnlich), klare Serifenlose für Fließtext
- Dezente, feminine Ästhetik passend zum Hochzeitsthema
- Logo "TRAUWORTE" im Header

---

## Seitenstruktur

### 1. Startseite (Landingpage)
- **Header/Navigation**: Logo + Menüpunkte (Startseite, Die Trauung, Meine Angebote, Freie Rednerin, Über mich, Podcast/Blog, Kontakt)
- **Hero-Bereich**: "Herzlich Willkommen" mit Vorstellungstext und Portrait-Platzhalter
- **Beratungssektion**: "Ich berate euch gerne" mit CTA-Button
- **Über TrauWorte**: Kurzvorstellung der Dienstleistungen
- **Verfügbarkeit**: "Ich bin überall für euch da" – Deutschland, Österreich, Schweiz, Europa
- **Magische Momente**: Emotionaler Text über die Arbeit als Rednerin
- **Angebote-Übersicht**: 6 Angebotskarten (Persönliche Trauungszeremonie, Moderation, Briefliche Traurede, Beratung, Kreative Ehegelübde, Trauungszeremonie im Freien)
- **Testimonial**: Kundenbewertung (Sybille M. aus Frankfurt)
- **Kontakt-CTA**: "Nehmt Kontakt mit mir auf" mit Button
- **Footer**: Logo, Links (Impressum, Datenschutz)

### 2. Über mich / Freie Rednerin
- Detaillierter Vorstellungstext über Stefanie Sick
- Werdegang und Qualifikation

### 3. Meine Angebote
- Detailseiten für die 6 Angebote mit ausführlichen Beschreibungen
- Jeweils mit CTA zur Kontaktaufnahme

### 4. Kontaktseite
- **Funktionierendes Kontaktformular** mit Feldern: Name, E-Mail, Telefon, Nachricht, Wunschtermin
- E-Mails werden an info@stefaniesick.com gesendet
- Wird über eine Supabase Edge Function realisiert (z.B. via Resend)

### 5. Impressum & Datenschutz
- Platzhalter-Seiten für rechtliche Texte

---

## Backend (Lovable Cloud)
- **Edge Function** für Kontaktformular-E-Mail-Versand (via Resend API)
- Kein Login, keine Datenbank nötig

---

## Bilder
- Platzhalter-Bilder werden zunächst eingesetzt
- Du kannst später eigene Fotos hochladen und ersetzen

---

## Responsive Design
- Vollständig responsive für Desktop, Tablet und Mobile
- Hamburger-Menü auf kleinen Bildschirmen
