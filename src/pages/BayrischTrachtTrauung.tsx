import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import HeroImage from "@/components/HeroImage";

const BayrischTrachtTrauung = () => {
  usePrerenderReady(true);

  return (
    <Layout>
      <SEO
        title="Bayrisch & Tracht – Freie Trauung im bayerischen Stil"
        description="Freie Trauung im bayerischen Stil mit Tracht und Dirndl. Erfahrt, wie eure Hochzeit bayerische Tradition und persönliche Zeremonie vereint."
        canonical="/bayrisch-tracht-trauung"
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Eure freie Trauung", url: "/eure-freie-trauung/" },
          { name: "Bayrisch & Tracht", url: "/bayrisch-tracht-trauung/" },
        ]}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl" style={{ color: "#111827" }}>
            Bayrisch &amp; Tracht Trauung
          </h1>
          <p className="font-body mt-4 text-lg" style={{ color: "#111827" }}>
            Freie Trauung im bayerischen Stil – Tradition trifft Individualität
          </p>
        </div>
      </section>

      <HeroImage src="/images/hero-bayerisch-tracht.webp" alt="Bayerische Hochzeit — Trauung mit Tradition" credit="Tim Dennert" />

      {/* Inhalt */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
            Tradition und Herzlichkeit
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Bayern steht für Herzlichkeit, Lebensfreude und tiefe Verbundenheit mit
            Traditionen. Eine freie Trauung im bayerischen Stil verbindet genau diese Werte
            mit einer modernen, persönlichen Zeremonie. Ob in Tracht und Dirndl, auf einer
            Almwiese mit Blick auf die Berge oder in einem rustikalen Stadl – eure bayerische
            Hochzeit wird ein unvergessliches Erlebnis.
          </p>

          <h2 className="font-display text-3xl md:text-4xl pt-8" style={{ color: "#111827" }}>
            Was macht eine bayerische Trauung besonders?
          </h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-display text-2xl" style={{ color: "#111827" }}>
                Tracht und Dirndl
              </h3>
              <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
                Die Braut im eleganten Dirndl, der Bräutigam in Lederhose oder festlicher
                Tracht – bayerische Hochzeitskleidung strahlt Charme und Authentizität aus.
                Auch die Gäste in Tracht verleihen der Feier einen ganz besonderen Charakter.
                Ob traditionell oder modern interpretiert: Tracht ist immer ein Hingucker.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl" style={{ color: "#111827" }}>
                Bayerische Rituale
              </h3>
              <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
                Bayerische Hochzeiten leben von ihren Bräuchen: das gemeinsame Baumstammsägen
                als Symbol für die Zusammenarbeit in der Ehe, der Brautschuhkauf als
                Sparsamkeitsbeweis, oder das Maßkrugstemmen als lustiger Wettbewerb. Ich
                integriere diese Traditionen auf charmante Weise in eure freie Zeremonie.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl" style={{ color: "#111827" }}>
                Traumhafte Locations
              </h3>
              <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
                Bayern bietet eine Fülle an wunderschönen Hochzeitslocations: Almhütten und
                Berggipfel, historische Biergärten und Gutshöfe, romantische Seen und
                Schlösser. Ob Oberbayern, Franken oder Schwaben – ich bin überall in Bayern
                für euch da und gestalte eure Zeremonie passend zur Umgebung.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl" style={{ color: "#111827" }}>
                Bayerische Gemütlichkeit
              </h3>
              <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
                Eine bayerische Trauung lebt von der Gemütlichkeit und der herzlichen
                Atmosphäre. Volksmusik, Jodler oder ein Alphornbläser können eure Zeremonie
                musikalisch begleiten. Bayerische Schmankerl und ein kühles Bier nach der
                Trauung runden den perfekten Tag ab.
              </p>
            </div>
          </div>

          <h2 className="font-display text-3xl md:text-4xl pt-8" style={{ color: "#111827" }}>
            Eure Trauung – bayerisch und persönlich
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Egal, ob ihr waschechte Bayern seid oder einfach die bayerische Lebensart liebt:
            Ich gestalte eure freie Trauung so, dass sie bayerische Tradition mit eurer ganz
            persönlichen Geschichte verbindet. Mit Humor, Herzlichkeit und einem Augenzwinkern
            – so wie es in Bayern eben sein soll. Auf Wunsch halte ich die Zeremonie auch
            gerne auf Bairisch.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
            Servus! Lasst uns reden
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Ihr plant eine Hochzeit im bayerischen Stil? Ich freue mich darauf, eure
            Trauung mit Tradition, Herz und einer Prise bayerischem Charme zu gestalten.
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

export default BayrischTrachtTrauung;
