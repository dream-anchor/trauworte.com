import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";

const TraurednerinPreise = () => {
  usePrerenderReady(true);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hochzeitsreden von TrauWorte",
    provider: {
      "@type": "ProfessionalService",
      name: "TrauWorte – Stefanie Sick",
      url: "https://trauworte.com",
    },
    description:
      "Professionelle Hochzeitsreden und Trauungszeremonien – persönlich, emotional und individuell gestaltet.",
    url: "https://trauworte.com/hochzeitsreden-traurednerin/",
    areaServed: [
      { "@type": "Country", name: "Deutschland" },
      { "@type": "Country", name: "Österreich" },
      { "@type": "Country", name: "Schweiz" },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Traurednerin & Preise – Hochzeitsreden von TrauWorte"
        description="Professionelle Hochzeitsreden und Trauungszeremonien von Stefanie Sick. Erfahrt mehr über Leistungen, Ablauf und Preise."
        canonical="/hochzeitsreden-traurednerin"
        schema={serviceSchema}
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Meine Angebote", url: "/meine-angebote-freie-trauung/" },
          { name: "Traurednerin & Preise", url: "/hochzeitsreden-traurednerin/" },
        ]}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl" style={{ color: "#111827" }}>
            Traurednerin &amp; Preise
          </h1>
          <p className="font-body mt-4 text-lg" style={{ color: "#111827" }}>
            Hochzeitsreden von TrauWorte – persönlich, emotional, unvergesslich
          </p>
        </div>
      </section>

      {/* Was ist enthalten? */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
            Was ist in meiner Leistung enthalten?
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Wenn ihr mich als eure Traurednerin bucht, bekommt ihr nicht einfach nur eine Rede –
            ihr bekommt eine Rundumbetreuung von der ersten Anfrage bis zum letzten Wort eurer
            Zeremonie. Hier ist, was dazugehört:
          </p>
          <ul className="font-body leading-relaxed space-y-4" style={{ color: "#111827" }}>
            <li className="flex gap-3">
              <span className="text-xl" aria-hidden="true">&#10045;</span>
              <span>
                <strong>Persönliches Kennenlerngespräch:</strong> Wir treffen uns (persönlich,
                per Videocall oder Telefon) und ich lerne euch als Paar kennen – eure Geschichte,
                eure Wünsche, eure Vision.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl" aria-hidden="true">&#10045;</span>
              <span>
                <strong>Individuelle Traurede:</strong> Auf Basis unseres Gesprächs verfasse ich
                eine maßgeschneiderte Rede, die eure Liebesgeschichte erzählt – emotional, humorvoll
                oder romantisch, ganz nach euren Wünschen.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl" aria-hidden="true">&#10045;</span>
              <span>
                <strong>Abstimmungsrunden:</strong> Ihr bekommt die Rede vorab zum Lesen und könnt
                Änderungswünsche einbringen. Erst wenn ihr zu 100 % zufrieden seid, ist die Rede
                fertig.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl" aria-hidden="true">&#10045;</span>
              <span>
                <strong>Planung der Zeremonie:</strong> Gemeinsam legen wir den Ablauf fest –
                inklusive Rituale, Musikwünsche und Einbindung von Gästen.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl" aria-hidden="true">&#10045;</span>
              <span>
                <strong>Generalprobe (optional):</strong> Auf Wunsch probe ich den Ablauf mit
                euch am Vortag oder am Hochzeitstag selbst durch.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl" aria-hidden="true">&#10045;</span>
              <span>
                <strong>Durchführung der Zeremonie:</strong> Am großen Tag bin ich rechtzeitig
                vor Ort, sorge für einen reibungslosen Ablauf und halte eure persönliche Traurede.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl" aria-hidden="true">&#10045;</span>
              <span>
                <strong>Eure Rede als Andenken:</strong> Nach der Hochzeit erhaltet ihr eure
                Traurede in schriftlicher Form als persönliche Erinnerung.
              </span>
            </li>
          </ul>

          <h2 className="font-display text-3xl md:text-4xl pt-8" style={{ color: "#111827" }}>
            Preise und Konditionen
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Jede Hochzeit ist einzigartig – und deshalb erstelle ich für jedes Paar ein
            individuelles Angebot, das genau auf eure Wünsche und Bedürfnisse zugeschnitten ist.
            Der Preis richtet sich unter anderem nach:
          </p>
          <ul className="font-body leading-relaxed space-y-2 pl-6 list-disc" style={{ color: "#111827" }}>
            <li>Umfang der gewünschten Leistungen (Traurede, Moderation, Beratung etc.)</li>
            <li>Entfernung zum Veranstaltungsort (Anfahrt und ggf. Übernachtung)</li>
            <li>Besondere Wünsche (z. B. zweisprachige Zeremonie, aufwändige Rituale)</li>
          </ul>
          <p className="font-body leading-relaxed pt-4" style={{ color: "#111827" }}>
            Schreibt mir gerne eine unverbindliche Nachricht mit euren Vorstellungen und ich
            sende euch zeitnah ein persönliches Angebot zu. Transparenz ist mir wichtig – es
            gibt keine versteckten Kosten.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
            Euer individuelles Angebot
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Schreibt mir und erzählt mir von euren Plänen. Ich erstelle euch ein
            persönliches Angebot – unverbindlich und kostenlos.
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

export default TraurednerinPreise;
