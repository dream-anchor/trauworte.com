import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import HeroImage from "@/components/HeroImage";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import usePageContent from "@/hooks/usePageContent";

const UnterschiedeDerTrauungen = () => {
  usePrerenderReady(true);
  const cms = usePageContent("unterschiede-der-trauungen");
  const hero = cms.content.hero;
  const cta = cms.content.cta;

  return (
    <Layout>
      <SEO
        title={cms.seoTitle || "Unterschiede der Trauungen – Standesamtlich, kirchlich, frei"}
        description={cms.seoDescription || "Standesamtliche, kirchliche oder freie Trauung? Erfahrt die Unterschiede und findet heraus, welche Zeremonie am besten zu euch passt."}
        canonical={cms.seoCanonical || "/unterschiede-der-trauungen"}
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Eure freie Trauung", url: "/eure-freie-trauung/" },
          { name: "Unterschiede der Trauungen", url: "/unterschiede-der-trauungen/" },
        ]}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#FCECDF" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl" style={{ color: "#111827" }}>
            {hero?.label || "Unterschiede der Trauungen"}
          </h1>
          <p className="font-body mt-4 text-lg" style={{ color: "#111827" }}>
            {hero?.subtitle || "Standesamtlich, kirchlich oder frei – welche Trauung passt zu euch?"}
          </p>
        </div>
      </section>

      <HeroImage src="/images/hero-kirche-trauung.webp" alt="Kirchliche Trauung — Vergleich der Trauungsarten" credit="Josh Applegate" />

      {/* Inhalt */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">

          {/* Standesamtliche Trauung */}
          <div className="space-y-4">
            <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
              Die standesamtliche Trauung
            </h2>
            <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
              Die standesamtliche Trauung ist die einzige rechtlich bindende Eheschließung in
              Deutschland. Sie findet im Standesamt statt und wird von einem Standesbeamten
              durchgeführt. Der Ablauf ist formal geregelt und folgt einem festen Protokoll:
              Begrüßung, Belehrung über die Rechte und Pflichten der Ehe, Ja-Wort, Ringwechsel
              und Unterzeichnung der Heiratsurkunde.
            </p>
            <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
              <strong>Vorteile:</strong> Rechtlich anerkannt, unkompliziert, kostengünstig.
            </p>
            <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
              <strong>Einschränkungen:</strong> Wenig Gestaltungsspielraum, fester Ablauf,
              begrenzte Dauer (meist 15–30 Minuten), ortsgebunden.
            </p>
          </div>

          {/* Kirchliche Trauung */}
          <div className="space-y-4">
            <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
              Die kirchliche Trauung
            </h2>
            <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
              Die kirchliche Trauung ist eine religiöse Zeremonie, die in einer Kirche von
              einem Pfarrer oder Pastor durchgeführt wird. Sie ist an die jeweilige Konfession
              gebunden und folgt dem Ritus der Kirchengemeinde. In der Regel ist eine vorherige
              standesamtliche Trauung Voraussetzung.
            </p>
            <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
              <strong>Vorteile:</strong> Feierlicher Rahmen, traditionell, Einbindung des Glaubens,
              musikalische Begleitung durch Kirchenorgel oder Chor.
            </p>
            <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
              <strong>Einschränkungen:</strong> Konfessionszugehörigkeit erforderlich, fester
              liturgischer Ablauf, wenig individuelle Gestaltungsmöglichkeiten, an die Kirche
              als Ort gebunden.
            </p>
          </div>

          {/* Freie Trauung */}
          <div className="space-y-4">
            <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
              Die freie Trauung
            </h2>
            <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
              Die freie Trauung ist eine nicht-konfessionelle, nicht-standesamtliche Zeremonie,
              die vollständig nach euren Wünschen gestaltet wird. Ein freier Redner oder eine
              freie Rednerin begleitet euch durch die Zeremonie und erzählt eure ganz persönliche
              Liebesgeschichte. Es gibt keine festen Vorgaben – ihr bestimmt den Ablauf, den Ort,
              die Rituale und die Worte.
            </p>
            <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
              <strong>Vorteile:</strong> Maximale Individualität, ortsunabhängig, konfessionslos,
              persönliche und emotionale Zeremonie, Familie und Freunde können aktiv eingebunden
              werden, flexibler Zeitrahmen.
            </p>
            <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
              <strong>Gut zu wissen:</strong> Eine freie Trauung ist rechtlich nicht bindend.
              Die standesamtliche Eheschließung kann separat (vorher oder nachher) durchgeführt werden.
            </p>
          </div>

          {/* Vergleich */}
          <div className="space-y-4">
            <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
              Auf einen Blick
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full font-body text-sm border-collapse" style={{ color: "#111827" }}>
                <thead>
                  <tr style={{ backgroundColor: "#FBE9DA" }}>
                    <th className="text-left p-3 border-b" style={{ borderColor: "#B8956A" }}></th>
                    <th className="text-left p-3 border-b" style={{ borderColor: "#B8956A" }}>Standesamtlich</th>
                    <th className="text-left p-3 border-b" style={{ borderColor: "#B8956A" }}>Kirchlich</th>
                    <th className="text-left p-3 border-b" style={{ borderColor: "#B8956A" }}>Frei</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b font-semibold" style={{ borderColor: "#e5d5c5" }}>Rechtlich bindend</td>
                    <td className="p-3 border-b" style={{ borderColor: "#e5d5c5" }}>Ja</td>
                    <td className="p-3 border-b" style={{ borderColor: "#e5d5c5" }}>Nein</td>
                    <td className="p-3 border-b" style={{ borderColor: "#e5d5c5" }}>Nein</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b font-semibold" style={{ borderColor: "#e5d5c5" }}>Ortswahl</td>
                    <td className="p-3 border-b" style={{ borderColor: "#e5d5c5" }}>Standesamt</td>
                    <td className="p-3 border-b" style={{ borderColor: "#e5d5c5" }}>Kirche</td>
                    <td className="p-3 border-b" style={{ borderColor: "#e5d5c5" }}>Frei wählbar</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b font-semibold" style={{ borderColor: "#e5d5c5" }}>Gestaltung</td>
                    <td className="p-3 border-b" style={{ borderColor: "#e5d5c5" }}>Festgelegt</td>
                    <td className="p-3 border-b" style={{ borderColor: "#e5d5c5" }}>Liturgisch</td>
                    <td className="p-3 border-b" style={{ borderColor: "#e5d5c5" }}>Individuell</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b font-semibold" style={{ borderColor: "#e5d5c5" }}>Konfession</td>
                    <td className="p-3 border-b" style={{ borderColor: "#e5d5c5" }}>Keine nötig</td>
                    <td className="p-3 border-b" style={{ borderColor: "#e5d5c5" }}>Erforderlich</td>
                    <td className="p-3 border-b" style={{ borderColor: "#e5d5c5" }}>Keine nötig</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Dauer</td>
                    <td className="p-3">15–30 Min.</td>
                    <td className="p-3">30–60 Min.</td>
                    <td className="p-3">30–60 Min.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
            {cta?.title || "Eure freie Trauung mit TrauWorte"}
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            {cta?.text || "Ihr wünscht euch eine individuelle und persönliche Zeremonie? Ich gestalte eure freie Trauung genau so, wie ihr es euch vorstellt."}
          </p>
          <div className="pt-2">
            <Link
              to={cta?.buttonLink || "/freie-trauung-kontakt"}
              className="inline-block font-body text-sm px-6 py-3 rounded-lg border transition-colors hover:bg-gray-100"
              style={{ borderColor: "#111827", color: "#111827" }}
            >
              {cta?.buttonText || "Jetzt unverbindlich anfragen"}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UnterschiedeDerTrauungen;
