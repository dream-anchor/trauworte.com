import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";

const angebote = [
  {
    title: "Persönliche Trauungszeremonie",
    desc: "Eure Liebe verdient eine Zeremonie, die so einzigartig ist wie ihr selbst. Ich gestalte eure freie Trauung ganz individuell – mit eurer Geschichte, euren Wünschen und den Worten, die euch berühren.",
    link: "/meine-angebote-freie-trauung/hochzeitsreden-traurednerin",
  },
  {
    title: "Moderation",
    desc: "Ihr wünscht euch jemanden, der charmant und souverän durch euren Hochzeitstag führt? Als eure Moderatorin sorge ich dafür, dass alles reibungslos läuft und eure Gäste sich rundum wohlfühlen.",
    link: "/meine-angebote-freie-trauung/hochzeitsreden-traurednerin",
  },
  {
    title: "Briefliche Traurede",
    desc: "Ihr feiert im Ausland oder möchtet eure Zeremonie selbst gestalten? Ich verfasse eine individuelle Traurede, die eure Geschichte auf berührende Weise erzählt – zum Vorlesen durch eine Person eurer Wahl.",
    link: "/meine-angebote-freie-trauung/hochzeitsreden-traurednerin",
  },
  {
    title: "Beratung",
    desc: "Ihr braucht Unterstützung bei der Planung eurer Trauungszeremonie? In einem persönlichen Beratungsgespräch helfe ich euch, eure Vorstellungen zu konkretisieren und gebe euch wertvolle Tipps.",
    link: "/meine-angebote-freie-trauung/hochzeitsreden-traurednerin",
  },
  {
    title: "Kreative Ehegelübde",
    desc: "Ihr möchtet euch eigene Ehegelübde schreiben, wisst aber nicht, wo ihr anfangen sollt? Ich helfe euch dabei, eure Gefühle in die richtigen Worte zu fassen – authentisch und von Herzen kommend.",
    link: "/meine-angebote-freie-trauung/hochzeitsreden-traurednerin",
  },
  {
    title: "Trauungszeremonie im Freien",
    desc: "Eine Trauung unter freiem Himmel hat ihren ganz eigenen Zauber. Ob am See, im Wald, auf einer Wiese oder in einem Garten – ich gestalte eure Outdoor-Zeremonie so, dass sie perfekt zu euch passt.",
    link: "/meine-angebote-freie-trauung/hochzeitsreden-traurednerin",
  },
];

const MeineAngebote = () => {
  usePrerenderReady(true);

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
        title="Meine Angebote – Freie Trauung und mehr"
        description="Entdeckt meine 6 Angebote: Persönliche Trauungszeremonie, Moderation, Traurede, Beratung, Ehegelübde und Outdoor-Trauung. Für eure perfekte Hochzeit."
        canonical="/meine-angebote-freie-trauung"
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
      <section style={{ backgroundColor: "#FCECDF" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl" style={{ color: "#111827" }}>
            Meine Angebote
          </h1>
          <p className="font-body mt-4 text-lg" style={{ color: "#111827" }}>
            Freie Trauung, Moderation, Traurede und mehr – alles für euren besonderen Tag
          </p>
        </div>
      </section>

      {/* Angebote */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          {angebote.map((a, i) => (
            <div
              key={a.title}
              className="p-6 md:p-8 rounded-lg space-y-4"
              style={{ backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#FBE9DA" }}
            >
              <h2 className="font-display text-2xl md:text-3xl" style={{ color: "#111827" }}>
                {a.title}
              </h2>
              <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
                {a.desc}
              </p>
              <Link
                to={a.link}
                className="inline-block font-body text-sm px-5 py-2.5 transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#333333", color: "#FFFFFF", borderRadius: "0px" }}
              >
                Mehr erfahren
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Weitere Links */}
      <section style={{ backgroundColor: "#FFFFFF" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <h2 className="font-display text-3xl md:text-4xl text-center" style={{ color: "#111827" }}>
            Mehr entdecken
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              to="/hochzeitsreden-traurednerin"
              className="block font-body p-4 rounded-lg border transition-colors hover:bg-gray-50"
              style={{ borderColor: "#B8956A", color: "#111827" }}
            >
              Traurednerin &amp; Preise
            </Link>
            <Link
              to="/hochzeitsplanerin-fotograf"
              className="block font-body p-4 rounded-lg border transition-colors hover:bg-gray-50"
              style={{ borderColor: "#B8956A", color: "#111827" }}
            >
              Hochzeitsplanerin &amp; Fotograf
            </Link>
            <Link
              to="/zeitlicher-ablauf-freie-trauung"
              className="block font-body p-4 rounded-lg border transition-colors hover:bg-gray-50"
              style={{ borderColor: "#B8956A", color: "#111827" }}
            >
              Zeitlicher Ablauf
            </Link>
            <Link
              to="/persoenliche-trauung-haeufige-fragen"
              className="block font-body p-4 rounded-lg border transition-colors hover:bg-gray-50"
              style={{ borderColor: "#B8956A", color: "#111827" }}
            >
              Häufige Fragen
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
            Welches Angebot passt zu euch?
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Lasst uns in einem unverbindlichen Gespräch herausfinden, wie ich euren
            besonderen Tag gestalten kann.
          </p>
          <div className="pt-2">
            <Link
              to="/freie-trauung-kontakt"
              className="inline-block font-body text-sm px-6 py-3 rounded-lg border transition-colors hover:bg-gray-100"
              style={{ borderColor: "#111827", color: "#111827" }}
            >
              Jetzt unverbindlich anfragen
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MeineAngebote;
