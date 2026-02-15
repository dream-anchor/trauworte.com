import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import { Link } from "react-router-dom";

const Impressum = () => {
  usePrerenderReady(true);

  return (
    <Layout>
      <SEO
        title="Impressum | TrauWorte"
        description="Impressum von TrauWorte – Freie Rednerin Stefanie Sick. Angaben gemäß § 5 TMG."
        canonical="/impressum"
        noIndex
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Impressum", url: "/impressum/" },
        ]}
      />

      <section className="py-20 bg-peach">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl text-foreground">Impressum</h1>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
            <h2 className="font-display text-2xl text-foreground">Angaben gemäß § 5 TMG</h2>
            <p>Stefanie Sick<br />TrauWorte – Freie Rednerin<br />[Adresse wird ergänzt]</p>
            <h2 className="font-display text-2xl text-foreground">Kontakt</h2>
            <p>E-Mail: <ObfuscatedEmail /></p>
            <h2 className="font-display text-2xl text-foreground">Bildnachweise</h2>
            <p>
              Die auf dieser Website verwendeten Fotos stammen u.a. von Unsplash.com.
              Eine vollständige Liste aller Bildnachweise finden Sie auf der Seite{" "}
              <Link to="/bildnachweise" style={{ color: "#B8956A", textDecoration: "underline" }}>
                Bildnachweise
              </Link>.
            </p>
            <p className="text-sm italic">Weitere Angaben werden noch ergänzt.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
