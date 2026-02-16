import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import usePageContent from "@/hooks/usePageContent";
import { Link } from "react-router-dom";

const HERO_IMG = "/images/traurednerin-stefanie-sick-portrait.webp";

const UeberMich = () => {
  usePrerenderReady(true);
  const cms = usePageContent("ueber-traurednerin-stefanie");
  const hero = cms.content.hero;
  const cta = cms.content.cta;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Stefanie Sick",
    jobTitle: "Freie Rednerin",
    url: "https://trauworte.com/ueber-mich/",
    image: HERO_IMG,
    description: "Studierte Kommunikationswissenschaftlerin und Moderatorin mit 30 Jahren Erfahrung in der Medien- und Eventbranche",
    worksFor: {
      "@type": "ProfessionalService",
      name: "TrauWorte",
      url: "https://trauworte.com",
    },
  };

  return (
    <Layout>
      <SEO
        title={cms.seoTitle || "Über mich – Stefanie Sick | TrauWorte"}
        description={cms.seoDescription || "Stefanie Sick – studierte Kommunikationswissenschaftlerin und Moderatorin mit 30 Jahren Erfahrung in der Medien- und Eventbranche. Freie Rednerin für persönliche Trauungszeremonien."}
        canonical={cms.seoCanonical || "/ueber-traurednerin-stefanie"}
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
            {hero?.label || "Über mich"}
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
                Ich bin ausgebildete Hochzeitsrednerin für freie Trauungen.
                Seit einigen Jahren begleite ich Paare an ihrem schönsten Tag und gestalte
                Trauungszeremonien, die von Herzen kommen.
              </p>
              <p className="font-body leading-relaxed" style={{ color: "#5C4A3A" }}>
                Jede Liebe ist einzigartig – und genau so sollte auch eure Trauung sein.
                Ich nehme mir die Zeit, euch persönlich kennenzulernen, eure Geschichte zu
                erfahren und daraus eine individuelle und einzigartige Zeremonie mit Freude
                und Herz zu kreieren, die euch und eure Gäste berührt und bewegt.
              </p>
              <p className="font-body leading-relaxed" style={{ color: "#5C4A3A" }}>
                Als studierte Kommunikationswissenschaftlerin und Moderatorin mit 30 Jahren
                Erfahrung in der Medien- und Eventbranche verbinde ich Professionalität mit
                Einfühlungsvermögen und Leidenschaft. Mir ist es wichtig, dass ihr euch in
                jeder Phase der Planung wohl und gut aufgehoben fühlt.
              </p>
              <p className="font-body leading-relaxed" style={{ color: "#5C4A3A" }}>
                Glück ist für mich der Moment, in dem ich in eure Augen schaue und sehe, dass
                meine Worte euer Herz berühren. Der Moment, in dem Freudentränen fließen und
                Gäste mir später sagen: „Das war die schönste Trauung, die ich je erlebt habe.
                Unvergesslich!"
              </p>
              <div className="pt-4">
                <Link to={cta?.buttonLink || "/freie-trauung-kontakt"} className="btn-gold inline-block">
                  {cta?.buttonText || "Lernt mich kennen"}
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
