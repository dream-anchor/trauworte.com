import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      <section style={{ backgroundColor: "#FCECDF" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl" style={{ color: "#111827" }}>
            Häufige Fragen
          </h1>
          <p className="font-body mt-4 text-lg" style={{ color: "#111827" }}>
            Alles, was ihr über eine freie Trauung wissen müsst
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="multiple" className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-lg overflow-hidden border"
                style={{ borderColor: "#e5d5c5", backgroundColor: "#FFFFFF" }}
              >
                <AccordionTrigger
                  className="font-display text-left text-lg px-6 py-4 hover:no-underline"
                  style={{ color: "#111827" }}
                >
                  {faq.frage}
                </AccordionTrigger>
                <AccordionContent
                  forceMount
                  className="data-[state=closed]:hidden font-body leading-relaxed px-6 pb-4"
                  style={{ color: "#111827" }}
                >
                  {faq.antwort}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
            Noch Fragen?
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Wenn eure Frage hier nicht beantwortet wurde, schreibt mir gerne.
            Ich nehme mir Zeit für euch und eure Anliegen.
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

export default HaeufigeFragen;
