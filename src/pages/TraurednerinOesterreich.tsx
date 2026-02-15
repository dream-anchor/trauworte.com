import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";

const faqItems = [
  {
    q: "Reist die Traurednerin nach Österreich?",
    a: "Ja! Als Traurednerin mit Sitz in München ist Österreich eines meiner liebsten Reiseziele. Von München aus sind Salzburg, Tirol und das Salzkammergut schnell erreichbar. Ich reise aber auch gerne nach Wien, Kärnten oder in die Steiermark.",
  },
  {
    q: "Welche Locations in Österreich eignen sich für freie Trauungen?",
    a: "Von den Salzburger Schlössern über die Tiroler Almhütten bis zu den Weingutshöfen der Wachau — Österreich bietet für jeden Hochzeitsstil die perfekte Location. Besonders beliebt sind das Salzkammergut, der Wolfgangsee und die Region rund um Kitzbühel.",
  },
  {
    q: "Kann die Zeremonie in Österreich auf Deutsch und Englisch sein?",
    a: "Selbstverständlich! Gerade bei Hochzeiten in Österreich sind oft internationale Gäste dabei. Ich gestalte eure freie Trauung gerne zweisprachig — auf Deutsch und Englisch, fließend und natürlich.",
  },
  {
    q: "Was kostet eine Traurednerin für Österreich?",
    a: "Mein Honorar enthält das komplette Leistungspaket inklusive Kennenlerngespräch, Paargespräch, individuelle Traurede und Zeremonie-Durchführung. Bei Reisen nach Österreich kommen Anfahrt und gegebenenfalls Übernachtung hinzu. Schreibt mir für ein individuelles Angebot.",
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

const TraurednerinOesterreich = () => {
  usePrerenderReady(true);

  return (
    <Layout>
      <SEO
        title="Traurednerin Österreich – Freie Trauungen | TrauWorte"
        description="Traurednerin Stefanie Sick für freie Trauungen in Österreich. Zeremonien in Salzburg, Tirol, am Wolfgangsee & im Salzkammergut."
        canonical="/traurednerin-oesterreich"
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Traurednerin Österreich", url: "/traurednerin-oesterreich/" },
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
            Traurednerin in Österreich
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
              Österreich
            </span>
          </h1>
          <p
            className="font-body max-w-[600px] mx-auto mt-6"
            style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}
          >
            Zwischen Alpengipfeln und Seenlandschaften: Als eure Traurednerin gestalte ich freie Trauungen
            in Österreich, die so atemberaubend sind wie die Kulisse selbst.
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
            Österreich:{" "}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#B8956A",
              }}
            >
              Ein Traumziel für freie Trauungen
            </span>
          </h2>

          <div className="space-y-6 font-body" style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}>
            <p>
              Österreich gehört zu den schönsten Zielen für eine freie Trauung in Europa.
              Die Alpenlandschaft mit ihren kristallklaren Seen, den majestätischen Bergen und den
              charmanten Ortschaften bietet eine Kulisse, die jedes Brautpaar verzaubert. Als eure
              Traurednerin für Österreich bringe ich eure Liebesgeschichte an diesen magischen Ort.
            </p>
            <p>
              <strong>Salzburg und das Salzkammergut</strong> sind besonders beliebte Regionen für
              freie Trauungen. Die Mozartstadt begeistert mit historischen Schlössern und barocker
              Eleganz, während das Salzkammergut mit dem Wolfgangsee, dem Hallstätter See und dem
              Mondsee unvergessliche Naturkulissen bietet. Hier, wo einst schon Kaiserin Sisi ihre
              Sommer verbrachte, könnt ihr eure freie Trauung in königlichem Rahmen feiern.
            </p>
            <p>
              In <strong>Tirol</strong> erwarten euch romantische Almhütten, elegante Berghotels und
              Locations mit Panoramablick auf die Tiroler Alpen. Ob eine intime Zeremonie auf über
              2.000 Metern Höhe oder eine feierliche Trauung in einem historischen Schloss — als
              eure Traurednerin gestalte ich jeden Moment so, dass er unvergesslich wird.
            </p>
            <p>
              Von München aus ist Österreich schnell erreichbar, was die Planung besonders
              unkompliziert macht. Ich übernehme die Koordination mit eurer Location, stimme den Ablauf
              ab und sorge am Tag eurer Hochzeit dafür, dass alles perfekt läuft. Eure freie Trauung
              in Österreich wird ein Erlebnis, an das ihr und eure Gäste noch lange zurückdenken.
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
              freien Trauung in Österreich
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
            Freie Trauung in Österreich{" "}
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
            Ihr träumt von einer freien Trauung in Österreich? Schreibt mir unverbindlich —
            ich freue mich auf eure Geschichte und berate euch zu den schönsten Locations.
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

export default TraurednerinOesterreich;
