import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import HeroImage from "@/components/HeroImage";

const faqItems = [
  {
    q: "Wo finden freie Trauungen in München statt?",
    a: "München bietet wunderschöne Locations für eure freie Trauung: vom Englischen Garten über die Isarauen bis hin zu eleganten Schlossanlagen wie Schloss Nymphenburg oder Gut Kaltenbrunn. Auch der Starnberger See und der Tegernsee sind beliebte Orte für freie Trauungen in der Region München.",
  },
  {
    q: "Wie früh sollte man eine Traurednerin in München buchen?",
    a: "Ich empfehle, eure Traurednerin mindestens 9–12 Monate vor dem Hochzeitstermin zu buchen. In der Hochzeitssaison von Mai bis Oktober sind die Wochenenden in München besonders beliebt und schnell vergeben.",
  },
  {
    q: "Was ist, wenn internationale Gäste bei der Trauung dabei sind?",
    a: "Ich gestalte eure Zeremonie auf Deutsch. Wenn internationale Gäste dabei sind, kann ich einzelne Passagen so gestalten, dass sie auch ohne perfekte Deutschkenntnisse emotional mitgenommen werden — etwa durch universelle Gesten, Rituale und ein kurzes gedrucktes Programm in anderen Sprachen.",
  },
  {
    q: "Was kostet eine Traurednerin in München?",
    a: "Die Kosten für eine Traurednerin in München variieren je nach Umfang und Leistungspaket. Mein Angebot umfasst immer ein persönliches Kennenlerngespräch, ein ausführliches Paargespräch, eine individuell geschriebene Traurede und die professionelle Durchführung eurer Zeremonie. Schreibt mir für ein unverbindliches Angebot.",
  },
  {
    q: "Reist die Traurednerin auch außerhalb von München?",
    a: "Ja! München ist mein Zuhause, aber ich reise gerne zu eurer Wunsch-Location — ob Starnberger See, Tegernsee, Chiemsee oder weiter nach ganz Bayern, Österreich, in die Schweiz oder zu Destination Weddings in Südeuropa.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const TraurednerinMuenchen = () => {
  usePrerenderReady(true);

  return (
    <Layout>
      <SEO
        title="Traurednerin München – Freie Trauungen | TrauWorte"
        description="Traurednerin Stefanie Sick gestaltet eure freie Trauung in München persönlich & emotional. Zeremonien am Starnberger See, Tegernsee & ganz Oberbayern."
        canonical="/traurednerin-muenchen"
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Traurednerin München", url: "/traurednerin-muenchen/" },
        ]}
      />
      <Helmet>
        <link rel="alternate" hrefLang="de" href="https://trauworte.com/traurednerin-muenchen/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
            Traurednerin in München
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
            Eure Traurednerin für{" "}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#B8956A",
              }}
            >
              freie Trauungen in München
            </span>
          </h1>
          <p
            className="font-body max-w-[600px] mx-auto mt-6"
            style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}
          >
            Als eure Traurednerin in München gestalte ich Zeremonien, die so einzigartig sind wie eure
            Liebesgeschichte. Persönlich, emotional und unvergesslich — an den schönsten Orten
            Münchens und Oberbayerns.
          </p>
        </div>
      </section>

      <HeroImage src="/images/hero-muenchen.webp" alt="Freie Trauung München — Blick auf die Frauenkirche" credit="Camilla Bundgaard" />

      {/* Haupttext */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <h2
            className="font-display mb-8"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            }}
          >
            Freie Trauung in München:{" "}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#B8956A",
              }}
            >
              Persönlich und von Herzen
            </span>
          </h2>

          <div className="space-y-6 font-body" style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}>
            <p>
              München ist nicht nur eine der schönsten Städte Deutschlands — es ist auch ein Ort
              voller romantischer Möglichkeiten für eure freie Trauung. Ob im Englischen Garten unter
              alten Baumkronen, in einer eleganten Villa am Starnberger See oder auf einer urigen Almhütte
              mit Blick auf die bayerischen Alpen: Als eure Traurednerin in München kenne ich die
              schönsten Orte und gestalte eure Zeremonie genau so, wie ihr sie euch erträumt.
            </p>
            <p>
              Eine freie Trauung in München bedeutet völlige Freiheit: Ihr entscheidet, wo, wann und
              wie eure Zeremonie stattfindet. Kein fester Rahmen, keine Vorgaben — nur ihr, eure Liebe
              und die Menschen, die euch am Herzen liegen. Ich höre euch zu, lerne eure Geschichte kennen
              und verwandle sie in eine Traurede, die tief berührt.
            </p>
            <p>
              Als Traurednerin mit Sitz in München begleite ich euch von der ersten Anfrage bis zum
              großen Tag. In einem persönlichen Kennenlerngespräch — gerne bei einem Kaffee in der
              Münchner Innenstadt oder per Video-Call — erfahre ich alles über eure Wünsche. Im
              ausführlichen Paargespräch tauche ich tief in eure Liebesgeschichte ein und schreibe daraus
              eine individuelle Traurede, die euch und eure Gäste zu Tränen rührt.
            </p>
          </div>

          <div style={{ width: "40px", height: "1px", background: "#B8956A", margin: "40px 0" }} />

          <h2
            className="font-display mb-8"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            }}
          >
            Beliebte Locations für freie Trauungen{" "}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#B8956A",
              }}
            >
              in München & Oberbayern
            </span>
          </h2>

          <div className="space-y-6 font-body" style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}>
            <p>
              Die Region München bietet eine unglaubliche Vielfalt an Locations für eure freie Trauung.
              Am <strong>Starnberger See</strong> könnt ihr eure Zeremonie mit Blick auf das Alpenpanorama
              feiern — eine Kulisse, die atemberaubender kaum sein könnte. Der{" "}
              <strong>Tegernsee</strong> verzaubert mit seiner eleganten Atmosphäre und Locations wie dem
              historischen Gut Kaltenbrunn.
            </p>
            <p>
              Für Paare, die das Besondere suchen, bieten sich <strong>Schloss Hohenkammer</strong>,{" "}
              <strong>Schloss Nymphenburg</strong> oder die zahlreichen Gutshöfe im Münchner Umland an.
              Wer es urban mag, findet in den Münchner Lofts, Rooftop-Terrassen und Boutique-Hotels
              stilvolle Rahmen für die Zeremonie. Als eure Traurednerin berate ich euch gerne bei der
              Location-Wahl und kenne viele versteckte Juwelen in und um München.
            </p>
            <p>
              Ob <strong>Chiemgau</strong>, <strong>Allgäu</strong> oder{" "}
              <strong>Berchtesgadener Land</strong> — auch im weiteren Umkreis von München bin ich als
              Traurednerin für euch da. Die bayerische Landschaft bietet mit ihren Bergen, Seen und
              Wäldern die perfekte Naturkulisse für eine unvergessliche freie Trauung.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[1000px] relative z-10">
          <h2
            className="font-display text-center mb-12"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            }}
          >
            Häufige Fragen zur{" "}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#B8956A",
              }}
            >
              Traurednerin in München
            </span>
          </h2>

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

      {/* CTA */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28">
        <div className="container mx-auto px-5 sm:px-8 max-w-[600px] text-center">
          <h2
            className="font-display mb-6"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            }}
          >
            Traurednerin München{" "}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#B8956A",
              }}
            >
              anfragen
            </span>
          </h2>
          <p
            className="font-body mb-8"
            style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}
          >
            Ihr plant eine freie Trauung in München oder Oberbayern? Schreibt mir unverbindlich und
            erzählt von euren Wünschen. Ich melde mich innerhalb von 24 Stunden bei euch zurück.
          </p>
          <Link
            to="/freie-trauung-kontakt"
            className="btn-gold inline-block"
          >
            Jetzt unverbindlich anfragen
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default TraurednerinMuenchen;
