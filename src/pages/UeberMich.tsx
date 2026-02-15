import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import { Link } from "react-router-dom";

const HERO_IMG = "/images/traurednerin-stefanie-sick-portrait.webp";

const UeberMich = () => {
  usePrerenderReady(true);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Stefanie Sick",
    jobTitle: "Freie Rednerin",
    url: "https://trauworte.com/ueber-mich/",
    image: HERO_IMG,
    description: "Studierte Kommunikationswissenschaftlerin mit über 10 Jahren Erfahrung in der Medien- und Eventbranche",
    worksFor: {
      "@type": "ProfessionalService",
      name: "TrauWorte",
      url: "https://trauworte.com",
    },
  };

  return (
    <Layout>
      <SEO
        title="Über mich – Stefanie Sick | TrauWorte"
        description="Stefanie Sick – studierte Kommunikationswissenschaftlerin mit über 10 Jahren Erfahrung in der Medien- und Eventbranche. Freie Rednerin für persönliche Trauungszeremonien."
        canonical="/ueber-traurednerin-stefanie"
        ogImage={HERO_IMG}
        schema={personSchema}
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Über mich", url: "/ueber-mich/" },
        ]}
      />

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
            Über mich
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
            Freie Rednerin mit{" "}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#B8956A",
              }}
            >
              Herz und Leidenschaft
            </span>
          </h1>
        </div>
      </section>

      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div className="sticky top-24">
              <img
                src={HERO_IMG}
                alt="Stefanie Sick – Freie Rednerin"
                width={600}
                height={600}
                loading="eager"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl" style={{ color: "#1a1a1a" }}>Stefanie Sick</h2>
              <p className="font-body leading-relaxed" style={{ color: "#5C4A3A" }}>
                Ich bin Stefanie Sick, ausgebildete Hochzeitsrednerin und Moderatorin.
                Seit meinem Kommunikations-Studium führt mich meine berufliche Reise durch
                verschiedene Stationen und Moderationen in der Medien- und Eventbranche.
              </p>
              <p className="font-body leading-relaxed" style={{ color: "#5C4A3A" }}>
                Mit viel Freude und Herz gestalte ich eure freie Trauung. In einer einzigartigen
                und individuellen Zeremonie werde ich eure Liebesgeschichte mit viel Gefühl und
                Hingabe erzählen, um euren besonderen Tag unvergesslich zu machen.
              </p>
              <div className="pt-4">
                <Link to="/freie-trauung-kontakt" className="btn-gold inline-block">
                  Lernt mich kennen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UeberMich;
