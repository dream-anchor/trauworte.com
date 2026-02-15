import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";

const Blog = () => {
  usePrerenderReady(true);

  return (
    <Layout>
      <SEO
        title="Hochzeits-Blog – Tipps und Inspiration"
        description="Tipps, Inspiration und Wissenswertes rund um die freie Trauung, Hochzeitsplanung und persönliche Zeremonien. Der TrauWorte Blog."
        canonical="/blog"
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Blog", url: "/blog/" },
        ]}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl" style={{ color: "#111827" }}>
            Hochzeits-Blog
          </h1>
          <p className="font-body mt-4 text-lg" style={{ color: "#111827" }}>
            Tipps, Inspiration und Wissenswertes rund um eure Hochzeit
          </p>
        </div>
      </section>

      {/* Inhalt */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-8">
          <div
            className="p-8 md:p-12 rounded-lg"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4" style={{ color: "#111827" }}>
              Beiträge folgen in Kürze
            </h2>
            <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
              Hier entstehen demnächst spannende Beiträge rund um die Themen freie Trauung,
              Hochzeitsplanung, Rituale, Tipps für eure Zeremonie und vieles mehr. Schaut
              bald wieder vorbei!
            </p>
            <p className="font-body leading-relaxed mt-4" style={{ color: "#111827" }}>
              In der Zwischenzeit findet ihr auf meinen anderen Seiten bereits viele hilfreiche
              Informationen:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link
                to="/eure-freie-trauung"
                className="inline-block font-body text-sm px-5 py-2.5 rounded-lg border transition-colors hover:bg-gray-50"
                style={{ borderColor: "#B8956A", color: "#111827" }}
              >
                Eure freie Trauung
              </Link>
              <Link
                to="/persoenliche-trauung-haeufige-fragen"
                className="inline-block font-body text-sm px-5 py-2.5 rounded-lg border transition-colors hover:bg-gray-50"
                style={{ borderColor: "#B8956A", color: "#111827" }}
              >
                Häufige Fragen
              </Link>
              <Link
                to="/zeitlicher-ablauf-freie-trauung"
                className="inline-block font-body text-sm px-5 py-2.5 rounded-lg border transition-colors hover:bg-gray-50"
                style={{ borderColor: "#B8956A", color: "#111827" }}
              >
                Zeitlicher Ablauf
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
            Ihr habt Fragen?
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "#111827" }}>
            Schreibt mir gerne – ich freue mich auf eure Nachricht und berate euch
            persönlich zu eurer freien Trauung.
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

export default Blog;
