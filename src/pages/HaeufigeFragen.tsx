import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import HeroImage from "@/components/HeroImage";
import usePrerenderReady from "@/hooks/usePrerenderReady";

const faqs = [
  {
    frage: "Was ist eine freie Trauung?",
    antwort:
      "Eine freie Trauung ist eine nicht-konfessionelle, nicht-standesamtliche Zeremonie, die vollständig nach euren Wünschen gestaltet wird. Sie ist rechtlich nicht bindend, bietet aber maximale Freiheit bei der Gestaltung: Ihr bestimmt den Ort, den Ablauf, die Rituale und die Worte. Eine freie Rednerin begleitet euch durch die Zeremonie und erzählt eure persönliche Liebesgeschichte.",
  },
  {
    frage: "Ist eine freie Trauung rechtlich gültig?",
    antwort:
      "Nein, eine freie Trauung ist rechtlich nicht bindend. Für die rechtliche Eheschließung ist eine standesamtliche Trauung erforderlich. Viele Paare heiraten standesamtlich im kleinen Kreis und feiern die freie Trauung als große, persönliche Zeremonie mit allen Gästen. Die standesamtliche Trauung kann vor oder nach der freien Trauung stattfinden.",
  },
  {
    frage: "Wie lange dauert eine freie Trauung?",
    antwort:
      "Eine freie Trauung dauert in der Regel zwischen 30 und 45 Minuten. Die genaue Dauer hängt von euren Wünschen ab: Möchtet ihr Rituale einbauen? Sollen Gäste zu Wort kommen? Gibt es musikalische Einlagen? Gemeinsam planen wir den Ablauf so, dass er perfekt zu euch passt.",
  },
  {
    frage: "Wo kann eine freie Trauung stattfinden?",
    antwort:
      "Überall! Das ist einer der größten Vorteile einer freien Trauung. Ob im Garten, am Strand, in einer Scheune, auf einer Almwiese, in einem Schloss, auf einem Boot oder in eurem Lieblingsrestaurant – ihr wählt den Ort, der euch am meisten bedeutet. Ich bin in ganz Deutschland, Österreich, der Schweiz und auch an Destinationen wie Mallorca oder der Toskana für euch da.",
  },
  {
    frage: "Wie weit im Voraus sollte ich buchen?",
    antwort:
      "Ich empfehle, mich 6 bis 12 Monate vor eurem Wunschtermin zu kontaktieren. Beliebte Termine (insbesondere im Sommer und an Wochenenden) sind schnell vergeben. Je früher ihr euch meldet, desto größer ist die Chance, dass euer Wunschtermin noch frei ist. Aber auch bei kurzfristigen Anfragen lohnt es sich, mich zu kontaktieren.",
  },
  {
    frage: "Was kostet eine freie Trauung?",
    antwort:
      "Die Kosten für eine freie Trauung hängen von verschiedenen Faktoren ab: Umfang der gewünschten Leistungen, Entfernung zum Veranstaltungsort und besondere Wünsche. Ich erstelle für jedes Paar ein individuelles, transparentes Angebot. Schreibt mir einfach eine unverbindliche Nachricht mit euren Vorstellungen.",
  },
  {
    frage: "Können wir eigene Rituale einbauen?",
    antwort:
      "Auf jeden Fall! Das ist das Schöne an einer freien Trauung. Beliebte Rituale sind zum Beispiel die Sandzeremonie, das Kerzenritual, Handfasting (keltisches Bandritual), das Baumstammsägen, eine Weinbox-Zeremonie oder das gemeinsame Pflanzen eines Baumes. Ihr könnt aber auch ein ganz eigenes Ritual einbringen, das zu euch und eurer Geschichte passt.",
  },
  {
    frage: "Können Familie und Freunde in die Zeremonie eingebunden werden?",
    antwort:
      "Selbstverständlich! Viele Paare wünschen sich, dass nahestehende Personen einen aktiven Part in der Zeremonie übernehmen – sei es durch eine Lesung, ein Fürbittengebet, ein Lied oder ein Grußwort. Auch die Trauzeugen oder Kinder des Paares können wunderbar eingebunden werden. Gemeinsam planen wir, wie eure Liebsten Teil der Zeremonie werden.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.frage,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.antwort,
    },
  })),
};

const HaeufigeFragen = () => {
  usePrerenderReady(true);

  return (
    <Layout>
      <SEO
        title="Häufige Fragen zur freien Trauung – FAQ"
        description="Antworten auf die häufigsten Fragen zur freien Trauung: Was kostet sie? Wie läuft sie ab? Wo kann sie stattfinden? Alle Infos auf einen Blick."
        canonical="/persoenliche-trauung-haeufige-fragen"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Häufige Fragen", url: "/persoenliche-trauung-haeufige-fragen/" },
        ]}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#FCECDF" }} className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-5 sm:px-8 text-center">
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
            Wissenswertes
          </p>
          <h1
            className="font-display"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
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
              freien Trauung
            </span>
          </h1>
          <p
            className="font-body mt-4 max-w-[550px] mx-auto"
            style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}
          >
            Alles, was ihr über eine freie Trauung wissen müsst — ehrlich und auf den Punkt.
          </p>
        </div>
      </section>

      <HeroImage src="/images/hero-haeufige-fragen.webp" alt="Hochzeitszeremonie — Antworten auf eure Fragen" credit="Sergio Butko" />

      {/* FAQ — immer offen */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[1000px]">
          <div className="space-y-5">
            {faqs.map((faq, i) => (
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
                <h2
                  className="font-display mb-4"
                  style={{
                    fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
                    fontWeight: 400,
                    color: "#1a1a1a",
                    letterSpacing: "0.01em",
                  }}
                >
                  {faq.frage}
                </h2>
                <p
                  className="font-body leading-[1.9]"
                  style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}
                >
                  {faq.antwort}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[700px] text-center">
          <h2
            className="font-display"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            }}
          >
            Noch Fragen?
          </h2>
          <p
            className="font-body mt-4 mb-8"
            style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}
          >
            Wenn eure Frage hier nicht beantwortet wurde, schreibt mir gerne.
            Ich nehme mir Zeit für euch und eure Anliegen.
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

export default HaeufigeFragen;
