import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";

/* ── Helpers ── */
const Accent = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontStyle: "italic",
      fontWeight: 300,
      color: "#B8956A",
    }}
  >
    {children}
  </span>
);

const Label = ({ children }: { children: React.ReactNode }) => (
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
    {children}
  </p>
);

const leistungen = [
  {
    title: "Persönliches Kennenlerngespräch",
    desc: "Wir treffen uns (persönlich, per Videocall oder Telefon) und ich lerne euch als Paar kennen — eure Geschichte, eure Wünsche, eure Vision.",
  },
  {
    title: "Individuelle Traurede",
    desc: "Auf Basis unseres Gesprächs verfasse ich eine maßgeschneiderte Rede, die eure Liebesgeschichte erzählt — emotional, humorvoll oder romantisch, ganz nach euren Wünschen.",
  },
  {
    title: "Abstimmungsrunden",
    desc: "Ihr bekommt die Rede vorab zum Lesen und könnt Änderungswünsche einbringen. Erst wenn ihr zu 100 % zufrieden seid, ist die Rede fertig.",
  },
  {
    title: "Planung der Zeremonie",
    desc: "Gemeinsam legen wir den Ablauf fest — inklusive Rituale, Musikwünsche und Einbindung von Gästen.",
  },
  {
    title: "Generalprobe (optional)",
    desc: "Auf Wunsch probe ich den Ablauf mit euch am Vortag oder am Hochzeitstag selbst durch.",
  },
  {
    title: "Durchführung der Zeremonie",
    desc: "Am großen Tag bin ich rechtzeitig vor Ort, sorge für einen reibungslosen Ablauf und halte eure persönliche Traurede.",
  },
  {
    title: "Eure Rede als Andenken",
    desc: "Nach der Hochzeit erhaltet ihr eure Traurede in schriftlicher Form als persönliche Erinnerung.",
  },
];

const preisfaktoren = [
  "Umfang der gewünschten Leistungen (Traurede, Moderation, Beratung etc.)",
  "Entfernung zum Veranstaltungsort (Anfahrt und ggf. Übernachtung)",
  "Besondere Wünsche (z. B. aufwändige Rituale, Moderation des Abends)",
];

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
      <section style={{ backgroundColor: "#FCECDF" }} className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-5 sm:px-8 max-w-[900px] text-center">
          <Label>Leistungen &amp; Preise</Label>
          <h1
            className="font-display"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              lineHeight: 1.15,
            }}
          >
            Traurednerin &amp; Preise –{" "}
            <Accent>Hochzeitsreden von TrauWorte</Accent>
          </h1>
          <p
            className="font-body max-w-[600px] mx-auto mt-6"
            style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}
          >
            Persönlich, emotional, unvergesslich — erfahrt, was in meiner
            Leistung enthalten ist und wie wir gemeinsam eure Traumzeremonie gestalten.
          </p>
        </div>
      </section>

      {/* Was ist enthalten? */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[1000px] relative z-10">
          <div className="text-center mb-12">
            <Label>Euer Rundum-Paket</Label>
            <h2
              className="font-display"
              style={{
                color: "#1a1a1a",
                letterSpacing: "0.02em",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              }}
            >
              Was ist in meiner{" "}
              <Accent>Leistung enthalten?</Accent>
            </h2>
          </div>

          <p
            className="font-body max-w-[700px] mx-auto text-center mb-12"
            style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}
          >
            Wenn ihr mich als eure Traurednerin bucht, bekommt ihr nicht einfach nur eine Rede —
            ihr bekommt eine Rundumbetreuung von der ersten Anfrage bis zum letzten Wort eurer Zeremonie.
          </p>

          <div className="space-y-4">
            {leistungen.map((item, i) => (
              <div
                key={item.title}
                className="flex gap-5 md:gap-7"
                style={{
                  background: "rgba(255, 255, 255, 0.5)",
                  borderLeft: "3px solid #B8956A",
                  borderRadius: "0 16px 16px 0",
                  padding: "24px 28px",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.03)",
                }}
              >
                <span
                  className="font-body shrink-0 flex items-center justify-center"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(184, 149, 106, 0.12)",
                    color: "#B8956A",
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    className="font-display mb-1"
                    style={{ fontSize: "clamp(1.05rem, 2vw, 1.2rem)", fontWeight: 400, color: "#1a1a1a" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-body leading-[1.85]"
                    style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preise */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <div className="text-center mb-12">
            <Label>Transparente Preisgestaltung</Label>
            <h2
              className="font-display"
              style={{
                color: "#1a1a1a",
                letterSpacing: "0.02em",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              }}
            >
              Preise und{" "}
              <Accent>Konditionen</Accent>
            </h2>
          </div>

          <p
            className="font-body mb-8"
            style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}
          >
            Jede Hochzeit ist einzigartig — und deshalb erstelle ich für jedes Paar ein
            individuelles Angebot, das genau auf eure Wünsche und Bedürfnisse zugeschnitten ist.
            Der Preis richtet sich unter anderem nach:
          </p>

          <div className="space-y-3 mb-8">
            {preisfaktoren.map((faktor) => (
              <div
                key={faktor}
                className="flex items-start gap-4"
                style={{ paddingLeft: "4px" }}
              >
                <span
                  className="shrink-0 mt-2"
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #B8956A, #D4AF7A)",
                  }}
                />
                <p
                  className="font-body leading-[1.85]"
                  style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}
                >
                  {faktor}
                </p>
              </div>
            ))}
          </div>

          <p
            className="font-body"
            style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}
          >
            Schreibt mir gerne eine unverbindliche Nachricht mit euren Vorstellungen und ich
            sende euch zeitnah ein persönliches Angebot zu. Transparenz ist mir wichtig —
            es gibt keine versteckten Kosten.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28">
        <div className="container mx-auto px-5 sm:px-8 max-w-[700px] text-center">
          <h2
            className="font-display mb-6"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            }}
          >
            Euer individuelles{" "}
            <Accent>Angebot</Accent>
          </h2>
          <p
            className="font-body mb-8"
            style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}
          >
            Schreibt mir und erzählt mir von euren Plänen. Ich erstelle euch ein
            persönliches Angebot — unverbindlich und kostenlos.
          </p>
          <Link to="/freie-trauung-kontakt" className="btn-gold inline-block">
            Jetzt unverbindlich anfragen
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default TraurednerinPreise;
