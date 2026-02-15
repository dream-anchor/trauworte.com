import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import HeroImage from "@/components/HeroImage";

/* ─── Artikel-Daten ─── */
const articles = [
  {
    title: "Die schönsten Trausprüche für eure freie Trauung",
    description:
      "Über 40 handverlesene Trausprüche — von poetisch bis modern. Findet den perfekten Spruch für eure Einladung, Traurede oder Eheversprechen.",
    path: "/magazin/trausprueche-freie-trauung",
    tag: "Inspiration",
  },
];

const Magazin = () => {
  usePrerenderReady(true);

  return (
    <Layout>
      <SEO
        title="Magazin – Inspiration & Tipps für eure freie Trauung | TrauWorte"
        description="Trausprüche, Rituale, Planungstipps und Inspiration für eure freie Trauung. Das TrauWorte Magazin von Traurednerin Stefanie Sick."
        canonical="/magazin"
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Magazin", url: "/magazin/" },
        ]}
      />
      <Helmet>
        <link rel="alternate" hrefLang="de" href="https://trauworte.com/magazin/" />
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
            TrauWorte Magazin
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
            Inspiration & Tipps für{" "}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#B8956A",
              }}
            >
              eure freie Trauung
            </span>
          </h1>
          <p
            className="font-body max-w-[600px] mx-auto mt-6"
            style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}
          >
            Trausprüche, Rituale, Planungstipps und persönliche Gedanken rund um die freie
            Trauung — zusammengestellt von Traurednerin Stefanie Sick.
          </p>
        </div>
      </section>

      <HeroImage src="/images/hero-magazin.webp" alt="Hochzeitsfeier — Inspiration aus dem TrauWorte Magazin" credit="In Lieu & In View Photography" />

      {/* Artikel-Grid */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[1000px] relative z-10">
          <h2
            className="font-display mb-12 text-center"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            }}
          >
            Aktuelle{" "}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#B8956A",
              }}
            >
              Beiträge
            </span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.path}
                to={article.path}
                className="group block"
                style={{
                  background: "rgba(255, 255, 255, 0.5)",
                  borderLeft: "3px solid #B8956A",
                  borderRadius: "0 16px 16px 0",
                  padding: "32px 28px",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.03)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#B8956A",
                    marginBottom: "12px",
                  }}
                >
                  {article.tag}
                </p>
                <h3
                  className="font-display mb-3 group-hover:text-[#B8956A] transition-colors duration-300"
                  style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a", lineHeight: 1.35 }}
                >
                  {article.title}
                </h3>
                <p
                  className="font-body"
                  style={{ fontSize: "14px", fontWeight: 300, lineHeight: 1.8, color: "#5C4A3A" }}
                >
                  {article.description}
                </p>
                <span
                  className="inline-block mt-4 font-body text-sm group-hover:translate-x-1 transition-transform duration-300"
                  style={{ color: "#B8956A", fontWeight: 400 }}
                >
                  Weiterlesen &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Weitere Themen */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10 text-center">
          <h2
            className="font-display mb-6"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            }}
          >
            Noch mehr{" "}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#B8956A",
              }}
            >
              Wissenswertes
            </span>
          </h2>
          <p
            className="font-body mb-10"
            style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}
          >
            Auf meinen anderen Seiten findet ihr ausführliche Informationen zu allen Aspekten
            der freien Trauung:
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/eure-freie-trauung"
              className="btn-gold inline-block"
            >
              Eure freie Trauung
            </Link>
            <Link
              to="/persoenliche-trauung-haeufige-fragen"
              className="btn-outline inline-block"
            >
              Häufige Fragen
            </Link>
            <Link
              to="/zeitlicher-ablauf-freie-trauung"
              className="btn-outline inline-block"
            >
              Zeitlicher Ablauf
            </Link>
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
            Ihr habt{" "}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#B8956A",
              }}
            >
              Fragen?
            </span>
          </h2>
          <p
            className="font-body mb-8"
            style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}
          >
            Schreibt mir gerne — ich freue mich auf eure Nachricht und berate euch
            persönlich zu eurer freien Trauung.
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

export default Magazin;
