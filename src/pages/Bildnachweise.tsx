import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import credits from "@/data/credits.json";

interface Credit {
  verwendung: string;
  datei: string;
  fotograf: string;
  profil: string;
  unsplash_url: string;
}

const Bildnachweise = () => {
  usePrerenderReady(true);

  return (
    <Layout>
      <SEO
        title="Bildnachweise | TrauWorte"
        description="Bildnachweise und Fotografen-Credits für alle auf trauworte.com verwendeten Fotos."
        canonical="/bildnachweise"
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Bildnachweise", url: "/bildnachweise" },
        ]}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#FCECDF" }} className="pt-32 pb-16 md:pt-40 md:pb-20">
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
            Rechtliches
          </p>
          <h1
            className="font-display"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              lineHeight: 1.2,
            }}
          >
            Bildnachweise
          </h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-16 md:py-24 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px]">
          <p
            className="mb-10 font-body leading-relaxed"
            style={{ color: "#5C4A3A", fontSize: "15px" }}
          >
            Auf dieser Website verwendete Fotos stammen u.a. von{" "}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#B8956A", textDecoration: "underline" }}
            >
              Unsplash.com
            </a>{" "}
            und werden unter der Unsplash License genutzt.
          </p>

          <div className="space-y-4">
            {(credits as Credit[]).map((credit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 py-4"
                style={{
                  borderBottom: idx < credits.length - 1 ? "1px solid rgba(184,149,106,0.15)" : "none",
                }}
              >
                <span
                  className="shrink-0 mt-0.5"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#B8956A",
                    width: "28px",
                    textAlign: "right",
                  }}
                >
                  {idx + 1}.
                </span>
                <div>
                  <p
                    className="font-body"
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#1a1a1a",
                    }}
                  >
                    {credit.verwendung}
                  </p>
                  <p
                    className="mt-1 font-body"
                    style={{ fontSize: "13px", color: "#5C4A3A" }}
                  >
                    Foto:{" "}
                    <a
                      href={credit.profil}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#B8956A", textDecoration: "underline" }}
                    >
                      {credit.fotograf}
                    </a>{" "}
                    / Unsplash
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Bildnachweise;
