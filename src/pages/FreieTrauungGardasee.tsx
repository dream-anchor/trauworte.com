import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";

/* ── FAQ ── */
const faqItems = [
  {
    q: "Reist die Traurednerin an den Gardasee?",
    a: "Ja! Der Gardasee ist von München aus in nur vier Stunden erreichbar. Ich reise für eure freie Trauung am Gardasee gerne an und bin am Vortag vor Ort, um die Location zu besichtigen, die Technik zu prüfen und alles in Ruhe vorzubereiten.",
  },
  {
    q: "Welche Orte am Gardasee eignen sich für freie Trauungen?",
    a: "Der Gardasee bietet traumhafte Locations: Von eleganten Villen in Sirmione und Gardone Riviera über Zitronenhaine in Limone sul Garda bis hin zu Olivenhainen bei Malcesine mit Blick auf den Monte Baldo. Auch Riva del Garda im Norden und die charmanten Orte Lazise, Torri del Benaco und Salò sind beliebt.",
  },
  {
    q: "Kann die Trauung am Gardasee zweisprachig sein?",
    a: "Selbstverständlich! Gerade am Gardasee sind häufig internationale Gäste dabei. Ich gestalte eure freie Trauung fließend zweisprachig auf Deutsch und Englisch, damit alle die Emotionen eurer Zeremonie erleben. Die Übergänge zwischen den Sprachen sind natürlich und nahtlos.",
  },
  {
    q: "Was kostet eine freie Trauung am Gardasee?",
    a: "Mein Honorar umfasst das komplette Leistungspaket: Kennenlerngespräch, ausführliches Paargespräch, individuelle Traurede und professionelle Zeremonie-Durchführung. Hinzu kommen Anfahrt und Übernachtung. Schreibt mir für ein individuelles Angebot — ich berate euch unverbindlich.",
  },
  {
    q: "Wann ist die beste Jahreszeit für eine Hochzeit am Gardasee?",
    a: "Die schönste Zeit für eine freie Trauung am Gardasee ist Mai bis Oktober. Besonders beliebt sind Juni und September — warm genug für eine Outdoor-Zeremonie, aber angenehmer als im Hochsommer. Der Gardasee verzaubert aber auch im Frühling mit Zitronenblüte und im Herbst mit goldenem Licht über dem See.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Freie Trauung am Gardasee",
  provider: {
    "@type": "Person",
    name: "Stefanie Sick",
    jobTitle: "Traurednerin",
    url: "https://trauworte.com",
  },
  serviceType: "Freie Trauung / Destination Wedding",
  areaServed: { "@type": "Place", name: "Gardasee, Italien" },
  description: "Persönliche und emotionale freie Trauungen am Gardasee — zweisprachig, individuell und unvergesslich.",
  url: "https://trauworte.com/freie-trauung-gardasee/",
};

/* ── Helpers ── */
const Accent = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontStyle: "italic",
      fontWeight: 300,
      color: "#B8956A",
    }}
  >
    {children}
  </span>
);

const GoldLine = () => (
  <div style={{ width: "40px", height: "1px", background: "#B8956A", margin: "40px 0" }} />
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <p
    style={{
      fontFamily: "'Inter', sans-serif",
      fontSize: "11px",
      fontWeight: 500,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "#B8956A",
      marginBottom: "20px",
    }}
  >
    {children}
  </p>
);

const SH2 = ({ children, center }: { children: React.ReactNode; center?: boolean }) => (
  <h2
    className={`font-display mb-8 ${center ? "text-center" : ""}`}
    style={{ color: "#1a1a1a", letterSpacing: "0.02em", fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
  >
    {children}
  </h2>
);

const bodyStyle = { fontSize: "16px", fontWeight: 300 as const, lineHeight: 1.9, color: "#5C4A3A" };

/* ═══════════════════════════════════════════════ */

const FreieTrauungGardasee = () => {
  usePrerenderReady(true);

  return (
    <Layout>
      <SEO
        title="Freie Trauung Gardasee – Traurednerin Stefanie Sick"
        description="Freie Trauung am Gardasee mit Traurednerin Stefanie Sick. Destination Weddings in Sirmione, Malcesine, Limone & an den schönsten Orten Norditaliens."
        canonical="/freie-trauung-gardasee"
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Freie Trauung Italien", url: "/freie-trauung-italien/" },
          { name: "Freie Trauung Gardasee", url: "/freie-trauung-gardasee/" },
        ]}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* ═══ HERO ═══ */}
      <section style={{ backgroundColor: "#FCECDF" }} className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] text-center">
          <Label>Destination Wedding</Label>
          <h1
            className="font-display"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              lineHeight: 1.15,
            }}
          >
            Freie Trauung am Gardasee –{" "}
            <Accent>Eure Traurednerin für Norditalien</Accent>
          </h1>
          <p className="font-body max-w-[600px] mx-auto mt-6" style={bodyStyle}>
            Zypressen, Olivenhaine und türkisblaues Wasser: Als eure Traurednerin gestalte ich freie
            Trauungen am Gardasee, die italienische Romantik und persönliche Worte vereinen —
            eingerahmt von einer Kulisse zwischen See und Bergen.
          </p>
        </div>
      </section>

      {/* ═══ WARUM GARDASEE ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            Warum der Gardasee perfekt für eure{" "}
            <Accent>freie Trauung</Accent>{" "}
            ist
          </SH2>

          <div className="space-y-6 font-body" style={bodyStyle}>
            <p>
              Der Gardasee ist Italiens größter und einer seiner schönsten Seen — und ein
              Traumziel für freie Trauungen. Die Kombination aus mediterranem Klima, dramatischen
              Bergkulissen und charmanten Ortschaften macht den Gardasee zu einer der beliebtesten
              Hochzeitsdestinationen in Südeuropa. Von München aus ist er in nur vier Stunden
              erreichbar — nah genug für einen Tagesausflug, weit genug für echtes Urlaubsgefühl.
            </p>
            <p>
              Das Besondere am Gardasee: Er vereint mediterranes Flair mit alpiner Grandezza.
              Im Süden erwartet euch mildes Klima mit Palmen und Oleander, im Norden thronen
              imposante Berggipfel über dem See. Diese einzigartige Kombination macht jede freie
              Trauung am Gardasee zu einem visuellen und emotionalen Erlebnis, das eure Gäste
              nie vergessen werden.
            </p>
            <p>
              Ob auf einer <strong>historischen Villa</strong> in Sirmione, einem{" "}
              <strong>Zitronenhain</strong> in Limone sul Garda oder mit Blick auf die{" "}
              <strong>Burg von Malcesine</strong> — der Gardasee bietet Locations, die wie aus einem
              Gemälde wirken. Als eure Traurednerin lasse ich mich von der Atmosphäre eures Ortes
              inspirieren und gestalte eine Zeremonie, die perfekt in diese magische Kulisse passt.
            </p>
          </div>

          <GoldLine />

          {/* ═══ TRAUREDNERIN GARDASEE ═══ */}
          <SH2>
            Eure Traurednerin am Gardasee –{" "}
            <Accent>persönlich und zweisprachig</Accent>
          </SH2>

          <div className="space-y-6 font-body" style={bodyStyle}>
            <p>
              Als eure Traurednerin für den Gardasee verbinde ich persönliche Worte mit
              italienischem Flair. Ich lerne eure Liebesgeschichte kennen und schreibe eine
              Traurede, die unter die Haut geht — eingerahmt von der atemberaubenden Kulisse
              des Sees. Jede Zeremonie ist so individuell wie das Paar, das sie feiert.
            </p>
            <p>
              Da bei Hochzeiten am Gardasee oft Gäste aus verschiedenen Ländern dabei sind,
              biete ich eure freie Trauung gerne{" "}
              <strong>zweisprachig auf Deutsch und Englisch</strong> an. Die Zeremonie wechselt
              fließend und natürlich zwischen beiden Sprachen. Die Planung funktioniert
              unkompliziert per Videocall — am Vortag bin ich vor Ort, um die Location zu
              besichtigen, die Technik zu prüfen und die letzten Details abzustimmen.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ LOCATIONS ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            Die schönsten Hochzeitslocations{" "}
            <Accent>am Gardasee</Accent>
          </SH2>

          <div className="space-y-10">
            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Villen und Palazzi — elegante Pracht am Seeufer
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Die historischen Villen am Gardasee gehören zu den begehrtesten Hochzeitslocations
                Italiens. In <strong>Sirmione</strong> feiert ihr eure Zeremonie mit Blick auf
                die Halbinsel und die Scaliger-Burg. In <strong>Gardone Riviera</strong> bestechen
                Belle-Époque-Villen mit üppigen Gärten am See. Und in <strong>Salò</strong> vereinen
                elegante Palazzi italienische Geschichte mit atemberaubendem Panorama.
              </p>
            </div>

            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Olivenhaine und Weingüter — rustikale Romantik
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Die Hügel rund um den Gardasee sind geprägt von Olivenhainen und Weingütern.
                Bei <strong>Malcesine</strong> und am Ostufer erstrecken sich silbrig-grüne
                Olivenhaine mit Blick auf den Monte Baldo. Die Weinregion{" "}
                <strong>Bardolino</strong> bietet Weingüter, die Genuss und Romantik vereinen.
                Eure freie Trauung zwischen Olivenbäumen und Rebstöcken wird ein Fest für alle
                Sinne.
              </p>
            </div>

            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Burgen und historische Orte — mittelalterlicher Charme
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Der Gardasee ist reich an mittelalterlichen Burgen und historischen Ortschaften.
                Die <strong>Scaliger-Burg in Malcesine</strong> thront hoch über dem See mit
                Bergpanorama. <strong>Lazise</strong> verzaubert mit seiner Altstadt direkt am
                Wasser. Und <strong>Torri del Benaco</strong> bietet eine der romantischsten
                kleinen Burgen am gesamten See — perfekt für eine intime freie Trauung.
              </p>
            </div>

            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Terrassen und Boote — Zeremonie direkt am Wasser
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Für Paare, die das Wasser lieben, bietet der Gardasee besondere Möglichkeiten:
                Zeremonien auf einer Seeterrasse in <strong>Limone sul Garda</strong>, umgeben
                von Zitronenbäumen. Oder eine freie Trauung auf einem historischen Boot, das
                über den See gleitet. Auch die Promenaden von <strong>Riva del Garda</strong> im
                Norden bieten mit ihrem Bergpanorama eine dramatische Kulisse für euer Ja-Wort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLANUNGSPROZESS ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            So planen wir eure Hochzeit{" "}
            <Accent>am Gardasee</Accent>
          </SH2>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Erstkontakt und Kennenlernen per Videocall",
                text: "Wir lernen uns in einem entspannten Videocall kennen. Ihr erzählt mir von eurer Wunsch-Location am Gardasee, eurem Termin und euren ersten Ideen für die freie Trauung. Ich berate euch zu den schönsten Orten am See.",
              },
              {
                step: "02",
                title: "Eure Liebesgeschichte — das Fundament eurer Rede",
                text: "Im ausführlichen Paargespräch tauche ich tief in eure Geschichte ein. Wie habt ihr euch kennengelernt? Was verbindet euch mit Italien? Aus diesen persönlichen Details entsteht eine Traurede, die wirklich eure ist.",
              },
              {
                step: "03",
                title: "Traurede, Rituale und Ablauf",
                text: "Ich schreibe eure individuelle Traurede und stimme mit euch Rituale, Musik und den Ablauf ab. Ihr bekommt den Entwurf vorab und könnt Wünsche äußern — bis jedes Wort sitzt.",
              },
              {
                step: "04",
                title: "Anreise und Vorbereitung vor Ort",
                text: "Ein bis zwei Tage vor eurer Hochzeit reise ich an den Gardasee. Vor Ort besichtige ich die Location, koordiniere mich mit Fotograf, Florist und Caterer und stimme die letzten Details ab.",
              },
              {
                step: "05",
                title: "Euer Hochzeitstag am Gardasee",
                text: "Am Tag eurer freien Trauung am Gardasee führe ich euch und eure Gäste mit Herz und Leidenschaft durch eine Zeremonie, die so berührt wie der Anblick des Sees bei Sonnenuntergang. Euer Moment — unter italienischem Himmel.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 md:gap-8">
                <div
                  className="font-body text-xs tracking-[0.2em] uppercase pt-1 shrink-0"
                  style={{ color: "#B8956A", width: "48px" }}
                >
                  Schritt {item.step}
                </div>
                <div>
                  <h3 className="font-display mb-2" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                    {item.title}
                  </h3>
                  <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RITUALE ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            Rituale für eure freie Trauung{" "}
            <Accent>am Gardasee</Accent>
          </SH2>

          <p className="font-body mb-8" style={bodyStyle}>
            Am Gardasee lassen sich viele Rituale mit einem besonderen regionalen Bezug gestalten:
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                name: "Olivenöl-Zeremonie",
                text: "Gießt zwei verschiedene Olivenöle in eine gemeinsame Karaffe — das flüssige Gold des Gardasees als Symbol für die Vereinigung eurer Leben. Ein Ritual, das nur hier so authentisch ist.",
              },
              {
                name: "Sand-Ritual am See",
                text: "Zwei verschiedenfarbige Sande fließen in ein Glas zusammen — wie eure zwei Leben, die sich am Ufer des Gardasees verbinden. Untrennbar und einzigartig, wie die Muster im Sand.",
              },
              {
                name: "Weinzeremonie mit Bardolino",
                text: "Gießt zwei Weine aus der Region Bardolino in ein gemeinsames Glas und trinkt daraus. Ein genussvolles Ritual mit echtem Gardasee-Flair, das eure Verbindung mit diesem besonderen Ort besiegelt.",
              },
              {
                name: "Brief an die Zukunft",
                text: "Versiegelt persönliche Briefe zusammen mit einer Flasche Lugana in einer Holzkiste. Öffnet sie an eurem fünften Hochzeitstag — ein Ritual voller Vorfreude und Erinnerung an euren Tag am See.",
              },
            ].map((r) => (
              <div
                key={r.name}
                className="p-6"
                style={{ background: "rgba(255, 255, 255, 0.4)", border: "1px solid rgba(184, 149, 106, 0.15)" }}
              >
                <h3 className="font-display mb-2" style={{ fontSize: "1.1rem", fontWeight: 400, color: "#1a1a1a" }}>
                  {r.name}
                </h3>
                <p className="font-body leading-[1.85]" style={{ fontSize: "14px", fontWeight: 300, color: "#5C4A3A" }}>
                  {r.text}
                </p>
              </div>
            ))}
          </div>

          <p className="font-body mt-8" style={{ fontSize: "14px", fontWeight: 300, color: "#5C4A3A" }}>
            Mehr Ideen für Traurituale findet ihr auf meiner{" "}
            <Link
              to="/#rituale"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Übersicht aller Rituale für freie Trauungen
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2 center>
            Häufige Fragen zur{" "}
            <Accent>Hochzeit am Gardasee</Accent>
          </SH2>
          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="p-6"
                style={{ background: "rgba(253, 244, 237, 0.7)", border: "1px solid rgba(184, 149, 106, 0.12)" }}
              >
                <h3 className="font-display mb-3" style={{ fontSize: "1.15rem", fontWeight: 400, color: "#1a1a1a" }}>
                  {item.q}
                </h3>
                <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIAL ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2 center>
            Stimmen von Paaren, die am{" "}
            <Accent>Gardasee geheiratet haben</Accent>
          </SH2>

          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-body text-xs tracking-[0.15em] uppercase mb-6" style={{ color: "#B8956A" }}>
              Villa am Westufer &middot; Gardasee
            </h3>
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#B8956A">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <blockquote
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#1a1a1a",
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                lineHeight: 1.7,
              }}
            >
              Unsere freie Trauung am Gardasee war dank Stefanie der emotionalste Moment unserer
              Hochzeit. Mit Blick auf den See und die Berge hat sie unsere Geschichte so wunderschön
              erzählt, dass kein Auge trocken blieb — auch nicht bei uns.
            </blockquote>
            {/* <!-- Echtes Testimonial hier einfügen --> */}
            <div style={{ width: "40px", height: "1px", background: "#B8956A", margin: "20px auto" }} />
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(26, 26, 26, 0.45)",
              }}
            >
              Laura & Thomas
            </p>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28">
        <div className="container mx-auto px-5 sm:px-8 max-w-[600px] text-center">
          <SH2 center>
            Eure Traumhochzeit am Gardasee{" "}
            <Accent>beginnt hier</Accent>
          </SH2>
          <p className="font-body mb-8" style={bodyStyle}>
            Ihr träumt von einer freien Trauung am Gardasee? Schreibt mir unverbindlich und
            erzählt von euren Wünschen. Gemeinsam machen wir euren italienischen Hochzeitstraum
            wahr — zwischen See, Bergen und Olivenhainen.
          </p>
          <Link to="/freie-trauung-kontakt" className="btn-gold inline-block">
            Jetzt Gardasee-Hochzeit anfragen
          </Link>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="/freie-trauung-italien"
              className="font-body text-sm"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Alle Italien-Destinationen
            </Link>
            <Link
              to="/freie-trauung-toskana"
              className="font-body text-sm"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Auch Trauungen in der Toskana
            </Link>
            <Link
              to="/freie-trauung-mallorca"
              className="font-body text-sm"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Auch Trauungen auf Mallorca
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FreieTrauungGardasee;
