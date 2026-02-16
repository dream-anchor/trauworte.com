import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import HeroImage from "@/components/HeroImage";
import usePageContent from "@/hooks/usePageContent";

/* ── FAQ ── */
const defaultFaqItems = [
  {
    q: "Was kostet eine freie Trauung auf Mallorca?",
    a: "Die Kosten für eine freie Trauung auf Mallorca hängen vom Umfang eures Wunschpakets ab. Mein Honorar als Traurednerin umfasst Vorbereitung, Paargespräch, individuelle Traurede und Zeremonie. Hinzu kommen Reisekosten (Flug und Übernachtung). Schreibt mir für ein unverbindliches, maßgeschneidertes Angebot.",
  },
  {
    q: "Kann man auf Mallorca standesamtlich heiraten?",
    a: "Eine standesamtliche Trauung auf Mallorca ist nur für Residenten möglich. Die meisten Paare heiraten daher standesamtlich in Deutschland und feiern ihre freie Trauung auf Mallorca als den emotionalen Höhepunkt. Als eure Traurednerin gestalte ich diesen Moment unvergesslich.",
  },
  {
    q: "Wie weit im Voraus sollte man eine Traurednerin für Mallorca buchen?",
    a: "Für eine Destination Wedding auf Mallorca empfehle ich, mindestens 8–12 Monate im Voraus zu buchen. Beliebte Termine in der Hochzeitssaison von Mai bis Oktober sind schnell vergeben. Je früher ihr euch meldet, desto besser kann ich euren Wunschtermin sichern.",
  },
  {
    q: "Reist die Traurednerin nach Mallorca?",
    a: "Ja! Ich reise für eure freie Trauung nach Mallorca und bin bereits am Vortag vor Ort. So kann ich die Location besichtigen, die Technik prüfen und den Ablauf in Ruhe vorbereiten. Am Tag eurer Hochzeit könnt ihr euch ganz auf eure Emotionen konzentrieren.",
  },
  {
    q: "Was ist, wenn internationale Gäste bei der Trauung dabei sind?",
    a: "Ich gestalte eure Zeremonie auf Deutsch. Wenn internationale Gäste dabei sind, kann ich einzelne Passagen so gestalten, dass sie auch ohne perfekte Deutschkenntnisse emotional mitgenommen werden — etwa durch universelle Gesten, Rituale und ein kurzes gedrucktes Programm in anderen Sprachen.",
  },
  {
    q: "Was passiert bei schlechtem Wetter auf Mallorca?",
    a: "Regen auf Mallorca ist in der Hochzeitssaison selten, aber wir planen immer einen Plan B. Ob überdachte Terrasse, eleganter Festsaal oder romantisches Zelt — gemeinsam mit eurer Location finden wir die perfekte Lösung, damit eure freie Trauung bei jedem Wetter wunderschön wird.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Freie Trauung auf Mallorca",
  provider: {
    "@type": "Person",
    name: "Stefanie Sick",
    jobTitle: "Traurednerin",
    url: "https://trauworte.com",
  },
  serviceType: "Freie Trauung / Destination Wedding",
  areaServed: {
    "@type": "Place",
    name: "Mallorca, Spanien",
  },
  description:
    "Persönliche und emotionale freie Trauungen auf Mallorca — individuell und unvergesslich.",
  url: "https://trauworte.com/freie-trauung-mallorca/",
};

/* ── Italic Accent ── */
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

/* ── Goldlinie ── */
const GoldLine = () => (
  <div style={{ width: "40px", height: "1px", background: "#B8956A", margin: "40px 0" }} />
);

/* ── Label ── */
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

/* ── Section Heading ── */
const SH2 = ({ children, center }: { children: React.ReactNode; center?: boolean }) => (
  <h2
    className={`font-display mb-8 ${center ? "text-center" : ""}`}
    style={{
      color: "#1a1a1a",
      letterSpacing: "0.02em",
      fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
    }}
  >
    {children}
  </h2>
);

/* ── Body style ── */
const bodyStyle = { fontSize: "16px", fontWeight: 300 as const, lineHeight: 1.9, color: "#5C4A3A" };

/* ═══════════════════════════════════════════════ */

const FreieTrauungMallorca = () => {
  usePrerenderReady(true);

  const cms = usePageContent("freie-trauung-mallorca");

  const faqItems = cms.content.faq?.length
    ? cms.content.faq.map((f) => ({ q: f.question || f.q || "", a: f.answer || f.a || "" }))
    : defaultFaqItems;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const hero = cms.content.hero;
  const cta = cms.content.cta;

  return (
    <Layout>
      <SEO
        title={cms.seoTitle || "Freie Trauung Mallorca – Traurednerin Stefanie Sick"}
        description={cms.seoDescription || "Eure freie Trauung auf Mallorca: Traurednerin Stefanie Sick gestaltet persönliche Zeremonien auf Fincas, am Strand und an den schönsten Orten der Insel."}
        canonical={cms.seoCanonical || "/freie-trauung-mallorca"}
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Freie Trauung Mallorca", url: "/freie-trauung-mallorca/" },
        ]}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* ═══ HERO ═══ */}
      <section style={{ backgroundColor: "#FCECDF" }} className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] text-center">
          <Label>{hero?.label || "Destination Wedding"}</Label>
          <h1
            className="font-display"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              lineHeight: 1.15,
            }}
          >
            Freie Trauung auf Mallorca –{" "}
            <Accent>Eure Traurednerin für die Insel</Accent>
          </h1>
          <p className="font-body max-w-[600px] mx-auto mt-6" style={bodyStyle}>
            {hero?.subtitle || "Sonne, Meer und eure Liebe: Als eure Traurednerin gestalte ich freie Trauungen auf Mallorca, die so traumhaft sind wie die Insel selbst. Mediterrane Atmosphäre, persönliche Worte und eine Zeremonie, die ihr nie vergessen werdet."}
          </p>
        </div>
      </section>

      <HeroImage src="/images/hero-mallorca.webp" alt="Mallorca — Mittelmeerküste für Destination Weddings" credit="Xiskya Valladares" />

      {/* ═══ WARUM MALLORCA ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            Warum Mallorca perfekt für eure{" "}
            <Accent>freie Trauung</Accent> ist
          </SH2>

          <div className="space-y-6 font-body" style={bodyStyle}>
            <p>
              Mallorca ist weit mehr als ein Urlaubsziel — die Baleareninsel gehört zu den beliebtesten
              Destinationen für freie Trauungen in Europa. Goldenes Licht, das Rauschen des Mittelmeers,
              der Duft von Oliven und Rosmarin: Heiraten auf Mallorca ist ein Fest für alle Sinne. Die
              Insel bietet rund 300 Sonnentage im Jahr und ist von Deutschland in nur zwei Flugstunden
              erreichbar. Perfekte Bedingungen für eure Traumhochzeit.
            </p>
            <p>
              Ob auf einer eleganten <strong>Finca</strong> zwischen Mandelhaine, bei einer{" "}
              <strong>Strandhochzeit</strong> mit den Füßen im warmen Sand oder in einem charmanten{" "}
              <strong>Bergdorf der Serra de Tramuntana</strong> — Mallorca bietet für jeden
              Hochzeitsstil die perfekte Kulisse. Als eure Traurednerin auf Mallorca kenne ich die
              schönsten Orte und gestalte eure Zeremonie so, dass sie sich anfühlt wie ein Traum.
            </p>
          </div>

          <GoldLine />

          {/* ═══ TRAUREDNERIN AUF MALLORCA ═══ */}
          <SH2>
            Eure Traurednerin auf Mallorca –{" "}
            <Accent>persönlich und von Herzen</Accent>
          </SH2>

          <div className="space-y-6 font-body" style={bodyStyle}>
            <p>
              Als eure Traurednerin für Mallorca verbinde ich das Beste aus zwei Welten: deutsche
              Gründlichkeit in der Vorbereitung und mediterrane Leichtigkeit in der Zeremonie. Ich lerne
              eure Liebesgeschichte kennen, höre zu und verwandle eure Erlebnisse in eine Traurede, die
              tief berührt. Jede freie Trauung auf Mallorca, die ich gestalte, ist ein Unikat.
            </p>
            <p>
              Wenn internationale Gäste dabei sind, sorge ich dafür, dass sie sich einbezogen
              fühlen — durch universelle Gesten, Rituale und auf Wunsch ein gedrucktes
              Programm in anderen Sprachen. Die persönliche
              Betreuung beginnt trotz Entfernung vom ersten Moment an: per Videocall, WhatsApp und E-Mail
              bin ich immer für euch da.
            </p>
          </div>

          <GoldLine />

          {/* ═══ PLANUNGSPROZESS ═══ */}
          <SH2>
            So planen wir eure freie Trauung{" "}
            <Accent>auf Mallorca</Accent>
          </SH2>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Erstes Kennenlernen per Videocall",
                text: "Wir lernen uns in einem entspannten Videocall kennen. Ihr erzählt mir von eurem Wunschtermin, eurer Location auf Mallorca und euren ersten Ideen für die freie Trauung. Ich erfahre, was euch als Paar ausmacht.",
              },
              {
                step: "02",
                title: "Eure Liebesgeschichte erzählen",
                text: "Im ausführlichen Paargespräch tauche ich tief in eure Geschichte ein. Wie habt ihr euch kennengelernt? Was macht eure Liebe besonders? Aus diesen Details entsteht eine Traurede, die wirklich eure ist.",
              },
              {
                step: "03",
                title: "Abstimmung von Rede, Ritualen und Ablauf",
                text: "Ich schreibe eure individuelle Traurede und stimme mit euch Rituale, Musik und den Ablauf eurer Hochzeit auf Mallorca ab. Ihr bekommt den Entwurf vorab und könnt Wünsche äußern.",
              },
              {
                step: "04",
                title: "Anreise und Generalprobe vor Ort",
                text: "Ich reise ein bis zwei Tage vor eurer Hochzeit nach Mallorca an. Vor Ort besichtige ich eure Location, stimme die Technik ab und koordiniere mich mit Fotograf, Florist und weiteren Dienstleistern.",
              },
              {
                step: "05",
                title: "Euer großer Tag auf Mallorca",
                text: "Am Tag eurer freien Trauung auf Mallorca bin ich ganz für euch da. Ich führe euch und eure Gäste mit Herz und Leidenschaft durch eine Zeremonie, die tief berührt. Euer Moment — unvergesslich.",
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
                  <h3
                    className="font-display mb-2"
                    style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}
                  >
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

      {/* ═══ LOCATIONS ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            Die schönsten Locations für eure{" "}
            <Accent>Hochzeit auf Mallorca</Accent>
          </SH2>

          <div className="space-y-10">
            <div>
              <h3
                className="font-display mb-3"
                style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}
              >
                Fincas im Landesinneren
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Die mallorquinischen Fincas sind der Inbegriff von mediterraner Hochzeitsromantik.
                Zwischen Olivenbäumen und Mandelhaine feiert ihr eure freie Trauung in einem Ambiente, das
                Eleganz und Natürlichkeit vereint. Beliebte Regionen für eine Finca-Hochzeit auf Mallorca
                sind das Landesinnere rund um Inca, die Hügel bei Alaró und das Tal von Sóller.
              </p>
            </div>

            <div>
              <h3
                className="font-display mb-3"
                style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}
              >
                Am Strand oder am Meer
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Eine Strandhochzeit auf Mallorca ist pure Romantik: die Füße im warmen Sand, das
                Rauschen der Wellen als Hintergrundmusik und ein Sonnenuntergang, der alles in Gold
                taucht. Die Küsten um Santanyí, Formentor und Cala d'Or bieten traumhafte Kulissen für
                eure Zeremonie direkt am Mittelmeer.
              </p>
            </div>

            <div>
              <h3
                className="font-display mb-3"
                style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}
              >
                Historische Locations und Weingüter
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Mallorca hat eine reiche Geschichte, und das spürt man in seinen Locations. Historische
                Herrensitze (Possessions), Weingüter mit eigener Bodega und charmante Bergdörfer wie
                Deià, Valldemossa und Fornalutx bieten einen einzigartigen Rahmen für eure
                Hochzeit auf Mallorca. Die Serra de Tramuntana, UNESCO-Welterbe, ist die
                dramatischste Kulisse der Insel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RITUALE ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            Rituale für eure freie Trauung{" "}
            <Accent>auf Mallorca</Accent>
          </SH2>

          <div className="space-y-6 font-body" style={bodyStyle}>
            <p>
              Rituale machen eure freie Trauung auf Mallorca noch persönlicher und unvergesslicher.
              Auf der Insel lassen sich viele Rituale mit einem besonderen mediterranen Bezug gestalten:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-8">
            {[
              {
                name: "Sandritual mit Mallorca-Sand",
                text: "Bringt Sand von eurem Lieblingsstrand mit und lasst ihn während der Zeremonie in ein gemeinsames Gefäß fließen — ein sichtbares Symbol eurer Verbindung.",
              },
              {
                name: "Olivenbaum pflanzen",
                text: "Gemeinsam pflanzt ihr einen Olivenbaum — das Symbol Mallorcas. Er wächst mit eurer Liebe und erinnert euch an diesen besonderen Tag auf der Insel.",
              },
              {
                name: "Hand-Fasting unter freiem Himmel",
                text: "Eure Hände werden mit einem Band verbunden, während das Mittelmeer rauscht. Ein uraltes Ritual mit besonderer Kraft unter dem mallorquinischen Himmel.",
              },
              {
                name: "Weinzeremonie mit Inselwein",
                text: "Mallorcas Weine sind exzellent. Gießt zwei Sorten in ein Glas und trinkt gemeinsam — ein Sinnbild für die Vereinigung eurer Leben, mit echtem Insel-Flair.",
              },
            ].map((r) => (
              <div
                key={r.name}
                style={{
                  background: "rgba(255, 255, 255, 0.45)",
                  borderLeft: "3px solid #B8956A",
                  borderRadius: "0 16px 16px 0",
                  padding: "28px 32px",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.03)",
                }}
              >
                <h3
                  className="font-display mb-2"
                  style={{ fontSize: "1.1rem", fontWeight: 400, color: "#1a1a1a" }}
                >
                  {r.name}
                </h3>
                <p
                  className="font-body leading-[1.85]"
                  style={{ fontSize: "14px", fontWeight: 300, color: "#5C4A3A" }}
                >
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
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[1000px] relative z-10">
          <SH2 center>
            Häufige Fragen zur{" "}
            <Accent>freien Trauung auf Mallorca</Accent>
          </SH2>

          <div className="space-y-5">
            {faqItems.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255, 255, 255, 0.5)",
                  borderLeft: "3px solid #B8956A",
                  borderRadius: "0 16px 16px 0",
                  padding: "28px 32px",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.03)",
                }}
              >
                <h3
                  className="font-display mb-3"
                  style={{ fontSize: "1.15rem", fontWeight: 400, color: "#1a1a1a" }}
                >
                  {item.q}
                </h3>
                <p
                  className="font-body leading-[1.85]"
                  style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIAL PLACEHOLDER ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2 center>
            Stimmen von Paaren, die auf{" "}
            <Accent>Mallorca geheiratet haben</Accent>
          </SH2>

          {/* Platzhalter-Testimonial */}
          <div className="text-center max-w-2xl mx-auto">
            <h3
              className="font-body text-xs tracking-[0.15em] uppercase mb-6"
              style={{ color: "#B8956A" }}
            >
              Finca Son Marroig &middot; Mallorca
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
              Unsere freie Trauung auf Mallorca war dank Stefanie der emotionalste Moment unserer
              Hochzeit. Sie hat unsere Geschichte so wunderschön in Worte gefasst — mitten auf der
              Insel, mit Meerblick und Sonnenuntergang. Unsere Gäste waren tief berührt.
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
              Marie & David
            </p>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[600px] text-center relative z-10">
          <SH2 center>
            {cta?.title || "Bereit für eure"}{" "}
            <Accent>{cta?.titleAccent || "Traumhochzeit auf Mallorca?"}</Accent>
          </SH2>
          <p className="font-body mb-8" style={bodyStyle}>
            {cta?.text || "Ihr träumt von einer freien Trauung auf Mallorca? Sichert euch euren Wunschtermin und schreibt mir unverbindlich. Ich freue mich darauf, eure Liebesgeschichte kennenzulernen und eure Hochzeit auf der Insel zu einem unvergesslichen Erlebnis zu machen."}
          </p>
          <Link to={cta?.buttonLink || "/freie-trauung-kontakt"} className="btn-gold inline-block">
            {cta?.buttonText || "Jetzt Mallorca-Termin anfragen"}
          </Link>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="/"
              className="font-body text-sm"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Mehr über mich als Traurednerin
            </Link>
            <Link
              to="/traurednerin-muenchen"
              className="font-body text-sm"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Auch in München und Bayern
            </Link>
            <Link
              to="/freie-trauung-toskana"
              className="font-body text-sm"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Auch Trauungen in der Toskana
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FreieTrauungMallorca;
