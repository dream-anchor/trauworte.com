import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";

const faqItems = [
  {
    q: "Reist die Traurednerin an den Gardasee?",
    a: "Ja! Der Gardasee ist von München aus in nur vier Stunden erreichbar. Ich reise für eure freie Trauung am Gardasee gerne an und bin am Vortag vor Ort, um alles in Ruhe vorzubereiten.",
  },
  {
    q: "Welche Orte am Gardasee eignen sich für freie Trauungen?",
    a: "Der Gardasee bietet traumhafte Locations: Von eleganten Villen in Sirmione und Gardone Riviera über Zitronenhaine in Limone sul Garda bis hin zu Olivenhainen bei Malcesine mit Blick auf den Monte Baldo. Auch Riva del Garda im Norden ist beliebt.",
  },
  {
    q: "Kann die Trauung am Gardasee zweisprachig sein?",
    a: "Selbstverständlich! Gerade am Gardasee sind häufig internationale Gäste dabei. Ich gestalte eure freie Trauung fließend zweisprachig auf Deutsch und Englisch, damit alle die Emotionen eurer Zeremonie erleben.",
  },
  {
    q: "Was kostet eine freie Trauung am Gardasee?",
    a: "Mein Honorar umfasst das komplette Leistungspaket: Kennenlernen, Paargespräch, individuelle Traurede und Zeremonie. Hinzu kommen Anfahrt und Übernachtung. Schreibt mir für ein individuelles Angebot.",
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
          { name: "Freie Trauung Gardasee", url: "/freie-trauung-gardasee/" },
        ]}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ backgroundColor: "#FCECDF" }} className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] text-center">
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
            Destination Wedding
          </p>
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
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#B8956A",
              }}
            >
              Eure Traurednerin für Norditalien
            </span>
          </h1>
          <p
            className="font-body max-w-[600px] mx-auto mt-6"
            style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}
          >
            Zypressen, Olivenhaine und türkisblaues Wasser: Als eure Traurednerin gestalte ich freie
            Trauungen am Gardasee, die italienische Romantik und persönliche Worte vereinen.
          </p>
        </div>
      </section>

      {/* Haupttext */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <h2
            className="font-display mb-8"
            style={{ color: "#1a1a1a", letterSpacing: "0.02em", fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            Warum der Gardasee perfekt für eure{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, color: "#B8956A" }}>
              freie Trauung
            </span>{" "}
            ist
          </h2>

          <div className="space-y-6 font-body" style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}>
            <p>
              Der Gardasee ist Italiens größter und einer seiner schönsten Seen — und ein
              Traumziel für freie Trauungen. Die Kombination aus mediterranem Klima, dramatischen
              Bergkulissen und charmanten Ortschaften macht den Gardasee zu einer der beliebtesten
              Hochzeitsdestinationen in Südeuropa. Von München aus ist er in nur vier Stunden
              erreichbar.
            </p>
            <p>
              Ob auf einer <strong>historischen Villa</strong> in Sirmione, einem{" "}
              <strong>Zitronenhain</strong> in Limone sul Garda oder mit Blick auf die{" "}
              <strong>Burg von Malcesine</strong> — der Gardasee bietet Locations, die wie aus einem
              Gemälde wirken. Als eure Traurednerin lasse ich mich von der Atmosphäre eures Ortes
              inspirieren und gestalte eine Zeremonie, die perfekt in diese magische Kulisse passt.
            </p>
            <p>
              Die Westufer-Orte <strong>Gardone Riviera</strong> und <strong>Sal\u00F2</strong> bestechen
              durch ihre Belle-Époque-Eleganz. Im Norden erwartet euch{" "}
              <strong>Riva del Garda</strong> mit Bergpanorama. Und die Südspitze bei{" "}
              <strong>Sirmione</strong> und <strong>Lazise</strong> vereint mittelalterlichen Charme
              mit Seeblick. Egal welche Location ihr wählt: Eure freie Trauung am Gardasee wird
              unvergesslich.
            </p>
          </div>

          <div style={{ width: "40px", height: "1px", background: "#B8956A", margin: "40px 0" }} />

          <h2
            className="font-display mb-8"
            style={{ color: "#1a1a1a", letterSpacing: "0.02em", fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            Eure Traurednerin am Gardasee –{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, color: "#B8956A" }}>
              persönlich und zweisprachig
            </span>
          </h2>

          <div className="space-y-6 font-body" style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}>
            <p>
              Als eure Traurednerin für den Gardasee verbinde ich persönliche Worte mit italienischem
              Flair. Ich lerne eure Liebesgeschichte kennen und schreibe eine Traurede, die unter die
              Haut geht — eingerahmt von der atemberaubenden Kulisse des Sees.
            </p>
            <p>
              Da bei Hochzeiten am Gardasee oft Gäste aus verschiedenen Ländern dabei sind, biete ich
              eure freie Trauung gerne <strong>zweisprachig auf Deutsch und Englisch</strong> an. Die
              Planung funktioniert unkompliziert per Videocall. Am Tag vor eurer Hochzeit bin ich vor
              Ort, um die Location zu besichtigen und die letzten Details abzustimmen.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <h2
            className="font-display text-center mb-12"
            style={{ color: "#1a1a1a", letterSpacing: "0.02em", fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            Häufige Fragen zur{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, color: "#B8956A" }}>
              Hochzeit am Gardasee
            </span>
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <div key={i} className="p-6" style={{ background: "rgba(253, 244, 237, 0.7)", border: "1px solid rgba(184, 149, 106, 0.12)" }}>
                <h3 className="font-display mb-3" style={{ fontSize: "1.15rem", fontWeight: 400, color: "#1a1a1a" }}>{item.q}</h3>
                <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28">
        <div className="container mx-auto px-5 sm:px-8 max-w-[600px] text-center">
          <h2
            className="font-display mb-6"
            style={{ color: "#1a1a1a", letterSpacing: "0.02em", fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            Destination Wedding Gardasee{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, color: "#B8956A" }}>
              anfragen
            </span>
          </h2>
          <p className="font-body mb-8" style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}>
            Ihr träumt von einer freien Trauung am Gardasee? Schreibt mir unverbindlich —
            gemeinsam machen wir euren italienischen Hochzeitstraum wahr.
          </p>
          <Link to="/freie-trauung-kontakt" className="btn-gold inline-block">
            Jetzt unverbindlich anfragen
          </Link>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/freie-trauung-toskana" className="font-body text-sm" style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              Auch Trauungen in der Toskana
            </Link>
            <Link to="/freie-trauung-mallorca" className="font-body text-sm" style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              Auch Trauungen auf Mallorca
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FreieTrauungGardasee;
