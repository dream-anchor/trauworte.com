import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import usePageContent from "@/hooks/usePageContent";
import HeroImage from "@/components/HeroImage";

const angebote = [
  {
    title: "Persönliche Trauungszeremonie",
    desc: "Eure Liebe verdient eine Zeremonie, die so einzigartig ist wie ihr selbst. Ich gestalte eure freie Trauung ganz individuell – mit eurer Geschichte, euren Wünschen und den Worten, die euch berühren.",
  },
  {
    title: "Moderation",
    desc: "Ihr wünscht euch jemanden, der charmant und souverän durch euren Hochzeitstag führt? Als eure Moderatorin sorge ich dafür, dass alles reibungslos läuft und eure Gäste sich rundum wohlfühlen.",
  },
  {
    title: "Briefliche Traurede",
    desc: "Ihr feiert im Ausland oder möchtet eure Zeremonie selbst gestalten? Ich verfasse eine individuelle Traurede, die eure Geschichte auf berührende Weise erzählt – zum Vorlesen durch eine Person eurer Wahl.",
  },
  {
    title: "Beratung",
    desc: "Ihr braucht Unterstützung bei der Planung eurer Trauungszeremonie? In einem persönlichen Beratungsgespräch helfe ich euch, eure Vorstellungen zu konkretisieren und gebe euch wertvolle Tipps.",
  },
  {
    title: "Kreative Ehegelübde",
    desc: "Ihr möchtet euch eigene Ehegelübde schreiben, wisst aber nicht, wo ihr anfangen sollt? Ich helfe euch dabei, eure Gefühle in die richtigen Worte zu fassen – authentisch und von Herzen kommend.",
  },
  {
    title: "Trauungszeremonie im Freien",
    desc: "Eine Trauung unter freiem Himmel hat ihren ganz eigenen Zauber. Ob am See, im Wald, auf einer Wiese oder in einem Garten – ich gestalte eure Outdoor-Zeremonie so, dass sie perfekt zu euch passt.",
  },
];

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

const MeineAngebote = () => {
  usePrerenderReady(true);
  const cms = usePageContent("meine-angebote-freie-trauung");
  const hero = cms.content.hero;
  const cta = cms.content.cta;

  const offersSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "TrauWorte – Meine Angebote",
    url: "https://trauworte.com/meine-angebote-freie-trauung/",
    itemListElement: angebote.map((a, i) => ({
      "@type": "Offer",
      position: i + 1,
      name: a.title,
      description: a.desc,
    })),
  };

  return (
    <Layout>
      <SEO
        title={cms.seoTitle || "Meine Angebote – Freie Trauung und mehr"}
        description={cms.seoDescription || "Entdeckt meine 6 Angebote: Persönliche Trauungszeremonie, Moderation, Traurede, Beratung, Ehegelübde und Outdoor-Trauung. Für eure perfekte Hochzeit."}
        canonical={cms.seoCanonical || "/meine-angebote-freie-trauung"}
        schema={offersSchema}
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Meine Angebote", url: "/meine-angebote-freie-trauung/" },
        ]}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#FCECDF" }} className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-5 sm:px-8 max-w-[900px] text-center">
          <Label>{hero?.label || "Leistungen & Angebote"}</Label>
          <h1
            className="font-display"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              lineHeight: 1.15,
            }}
          >
            Meine Angebote als{" "}
            <Accent>eure Traurednerin</Accent>
          </h1>
          <p
            className="font-body max-w-[600px] mx-auto mt-6"
            style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}
          >
            {hero?.subtitle || "Freie Trauung, Moderation, Traurede und mehr — alles für euren besonderen Tag, individuell auf euch zugeschnitten."}
          </p>
        </div>
      </section>

      <HeroImage src="/images/hero-angebote.webp" alt="Hochzeitsblumenstrauß — Meine Angebote für eure Trauung" credit="Stefan Maass" />

      {/* Angebote Grid */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[1100px] relative z-10">
          <div className="grid md:grid-cols-2 gap-5">
            {angebote.map((a) => (
              <div
                key={a.title}
                style={{
                  background: "rgba(255, 255, 255, 0.5)",
                  borderLeft: "3px solid #B8956A",
                  borderRadius: "0 16px 16px 0",
                  padding: "28px 32px",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.03)",
                }}
              >
                <h2
                  className="font-display mb-3"
                  style={{
                    fontSize: "clamp(1.15rem, 2vw, 1.35rem)",
                    fontWeight: 400,
                    color: "#1a1a1a",
                    letterSpacing: "0.01em",
                  }}
                >
                  {a.title}
                </h2>
                <p
                  className="font-body leading-[1.9]"
                  style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}
                >
                  {a.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mehr erfahren */}
          <div className="text-center mt-12">
            <Link
              to="/hochzeitsreden-traurednerin"
              className="inline-flex items-center gap-2 transition-all duration-300 hover:gap-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#B8956A",
                textDecoration: "none",
              }}
            >
              Leistungen &amp; Preise ansehen <span style={{ fontSize: "16px" }}>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Weitere Links */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[900px] relative z-10">
          <div className="text-center mb-12">
            <Label>Mehr entdecken</Label>
            <h2
              className="font-display"
              style={{
                color: "#1a1a1a",
                letterSpacing: "0.02em",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              }}
            >
              Weitere Informationen für{" "}
              <Accent>eure Hochzeit</Accent>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { to: "/hochzeitsreden-traurednerin", label: "Traurednerin & Preise" },
              { to: "/hochzeitsplanerin-fotograf", label: "Hochzeitsplanerin & Fotograf" },
              { to: "/zeitlicher-ablauf-freie-trauung", label: "Zeitlicher Ablauf" },
              { to: "/persoenliche-trauung-haeufige-fragen", label: "Häufige Fragen" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block font-body transition-all duration-300 hover:translate-x-1"
                style={{
                  background: "rgba(255, 255, 255, 0.5)",
                  borderLeft: "3px solid #B8956A",
                  borderRadius: "0 12px 12px 0",
                  padding: "20px 24px",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.03)",
                  color: "#1a1a1a",
                  fontSize: "15px",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28">
        <div className="container mx-auto px-5 sm:px-8 max-w-[700px] text-center">
          <h2
            className="font-display mb-6"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            }}
          >
            {cta?.title || "Welches Angebot passt"}{" "}
            <Accent>{cta?.titleAccent || "zu euch?"}</Accent>
          </h2>
          <p
            className="font-body mb-8"
            style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}
          >
            {cta?.text || "Lasst uns in einem unverbindlichen Gespräch herausfinden, wie ich euren besonderen Tag gestalten kann."}
          </p>
          <Link to={cta?.buttonLink || "/freie-trauung-kontakt"} className="btn-gold inline-block">
            {cta?.buttonText || "Jetzt unverbindlich anfragen"}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default MeineAngebote;
