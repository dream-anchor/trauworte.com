import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";

const faqItems = [
  {
    q: "Wo in Bayern finden freie Trauungen statt?",
    a: "Bayern bietet unzählige traumhafte Locations: Schlösser in Oberbayern, Weingutshöfe in Franken, Almhütten im Allgäu, Seeufer am Chiemsee oder historische Brauereigärten. Als eure Traurednerin in Bayern kenne ich die schönsten Orte und berate euch gerne.",
  },
  {
    q: "Plant die Traurednerin auch bayerische Trauungen in Tracht?",
    a: "Absolut! Eine freie Trauung in Tracht hat ihren ganz eigenen Charme. Ob Dirndl und Lederhose oder eine Mischung aus traditionell und modern — ich gestalte eure Zeremonie so, dass sie perfekt zu euch und eurem Stil passt. Mehr dazu erfahrt ihr auf meiner Seite zur bayerischen Trauung.",
  },
  {
    q: "Wie weit reist die Traurednerin innerhalb Bayerns?",
    a: "Als Traurednerin mit Sitz in München reise ich in ganz Bayern zu euch — von Oberbayern über Schwaben und Franken bis zur Oberpfalz. Die Anfahrt innerhalb Bayerns ist im Preis inbegriffen.",
  },
  {
    q: "Was kostet eine Traurednerin in Bayern?",
    a: "Mein Honorar als Traurednerin in Bayern richtet sich nach dem gewählten Leistungspaket. Jedes Paket enthält mindestens ein Kennenlerngespräch, ein Paargespräch, eine individuell geschriebene Traurede und die Zeremonie-Durchführung. Schreibt mir für ein persönliches Angebot.",
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

const TraurednerinBayern = () => {
  usePrerenderReady(true);

  return (
    <Layout>
      <SEO
        title="Traurednerin Bayern – Freie Trauungen | TrauWorte"
        description="Traurednerin Stefanie Sick für freie Trauungen in ganz Bayern. Zeremonien in Oberbayern, Allgäu, Franken, am Chiemsee & Starnberger See."
        canonical="/traurednerin-bayern"
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Traurednerin Bayern", url: "/traurednerin-bayern/" },
        ]}
      />
      <Helmet>
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
            Traurednerin in Bayern
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
            Freie Trauungen in{" "}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#B8956A",
              }}
            >
              ganz Bayern
            </span>
          </h1>
          <p
            className="font-body max-w-[600px] mx-auto mt-6"
            style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}
          >
            Von den Alpen bis nach Franken: Als eure Traurednerin in Bayern gestalte ich Zeremonien,
            die eure Liebesgeschichte erzählen — an den schönsten Orten des Freistaats.
          </p>
        </div>
      </section>

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
            Bayern:{" "}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#B8956A",
              }}
            >
              Das schönste Bundesland für freie Trauungen
            </span>
          </h2>

          <div className="space-y-6 font-body" style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}>
            <p>
              Bayern ist ein Paradies für freie Trauungen. Kaum eine andere Region in Deutschland bietet
              eine solche Vielfalt an traumhaften Locations: majestätische Schlösser, idyllische Seen,
              beeindruckende Bergkulissen und charmante Gutshöfe. Als eure Traurednerin in Bayern bringe
              ich eure Liebesgeschichte an genau den Ort, der zu euch passt.
            </p>
            <p>
              In <strong>Oberbayern</strong> locken der Starnberger See, der Tegernsee und der Ammersee
              mit ihrem Alpenpanorama. Das <strong>Allgäu</strong> verzaubert mit saftigen Wiesen und
              romantischen Almhütten. Am <strong>Chiemsee</strong> — dem bayerischen Meer — feiert
              ihr eure freie Trauung mit Blick auf die Chiemgauer Alpen. Und in{" "}
              <strong>Franken</strong> erwarten euch historische Weinberge und malerische Fachwerkdörfer.
            </p>
            <p>
              Als Traurednerin mit Sitz in München kenne ich Bayern wie meine Westentasche. Ob ihr eine
              intime Zeremonie zu zweit auf einer Bergspitze plant oder eine große Feier in einem
              bayerischen Schloss — ich gestalte eure freie Trauung so persönlich und emotional, dass
              sie euch und eure Gäste tief berührt. Jede Traurede ist ein Unikat, geschrieben aus
              eurer Geschichte, mit Herzblut und Feingefühl.
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
            Beliebte Regionen für{" "}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#B8956A",
              }}
            >
              freie Trauungen in Bayern
            </span>
          </h2>

          <div className="space-y-6 font-body" style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}>
            <p>
              <strong>München & Umgebung:</strong> Die bayerische Landeshauptstadt bietet stilvolle
              Locations von Rooftop-Terrassen bis hin zu historischen Gutshöfen. Im Münchner Umland
              findet ihr Schloss Hohenkammer, Gut Sonnenhausen oder romantische Gärten, die wie geschaffen
              sind für eine freie Trauung.
            </p>
            <p>
              <strong>Bayerische Seen:</strong> Starnberger See, Tegernsee, Ammersee, Chiemsee,
              Wörthsee — jeder See hat seinen eigenen Charakter. Ob auf einem Steg über dem Wasser,
              in einem Seehaus oder auf einer Wiese mit Seeblick: Die bayerischen Seen bieten magische
              Kulissen für eure Zeremonie.
            </p>
            <p>
              <strong>Berge & Almen:</strong> Für abenteuerlustige Paare gestalte ich freie Trauungen
              auf Almhütten, Berggipfeln oder in geschmückten Scheunen. Das Berchtesgadener Land, das
              Zugspitz-Gebiet und das Allgäu sind beliebte Ziele für Hochzeiten mit Bergpanorama.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
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
              Traurednerin in Bayern
            </span>
          </h2>

          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="p-6"
                style={{
                  background: "rgba(253, 244, 237, 0.7)",
                  border: "1px solid rgba(184, 149, 106, 0.12)",
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
            Traurednerin Bayern{" "}
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
            Ihr plant eine freie Trauung in Bayern? Schreibt mir unverbindlich und erzählt von
            euren Wünschen. Ich freue mich darauf, euch und eure Geschichte kennenzulernen.
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

export default TraurednerinBayern;
