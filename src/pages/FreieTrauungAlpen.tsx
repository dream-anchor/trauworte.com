import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";

const faqItems = [
  {
    q: "Wo finden freie Trauungen in den Alpen statt?",
    a: "Die Alpen bieten endlose Möglichkeiten: Von bayerischen Almhütten und österreichischen Berghöfen über Schweizer Chalets bis hin zu Berggipfeln auf über 2.000 Metern Höhe. Beliebte Regionen sind das Allgäu, Tirol, das Berner Oberland und das Berchtesgadener Land.",
  },
  {
    q: "Kann man auf einem Berggipfel heiraten?",
    a: "Ja! Eine freie Trauung auf einem Berggipfel ist möglich und absolut magisch. Wir planen gemeinsam die Logistik — ob Gondelbahn, Wanderung oder Helikopter. Als eure Traurednerin bin ich bereit, für eure Traumhochzeit auch auf über 2.000 Meter zu steigen.",
  },
  {
    q: "Was passiert bei schlechtem Wetter in den Bergen?",
    a: "Berge und Wetter sind unberechenbar — deshalb planen wir immer einen stimmungsvollen Plan B. Ob gemütliche Almhütte, rustikale Scheune oder eleganter Berggasthof: Eure freie Trauung wird bei jedem Wetter wunderschön.",
  },
  {
    q: "Wie weit reist die Traurednerin in die Alpen?",
    a: "Von München aus bin ich in den bayerischen, österreichischen und Schweizer Alpen zu Hause. Ob Zugspitze, Kitzbhühel, Zermatt oder Garmisch-Partenkirchen — ich reise überall hin, wo eure Alpen-Hochzeit stattfinden soll.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Freie Trauung in den Alpen",
  provider: {
    "@type": "Person",
    name: "Stefanie Sick",
    jobTitle: "Traurednerin",
    url: "https://trauworte.com",
  },
  serviceType: "Freie Trauung / Berghochzeit",
  areaServed: [
    { "@type": "Place", name: "Bayerische Alpen, Deutschland" },
    { "@type": "Place", name: "Tiroler Alpen, Österreich" },
    { "@type": "Place", name: "Schweizer Alpen" },
  ],
  description: "Freie Trauungen in den Alpen — auf Bergspitzen, Almhütten und Bergseen in Bayern, Österreich und der Schweiz.",
  url: "https://trauworte.com/freie-trauung-alpen/",
};

const FreieTrauungAlpen = () => {
  usePrerenderReady(true);

  return (
    <Layout>
      <SEO
        title="Freie Trauung Alpen – Berghochzeit mit Traurednerin"
        description="Freie Trauung in den Alpen: Traurednerin Stefanie Sick gestaltet Berghochzeiten auf Almhütten, Gipfeln & Bergseen in Bayern, Österreich & der Schweiz."
        canonical="/freie-trauung-alpen"
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Freie Trauung Alpen", url: "/freie-trauung-alpen/" },
        ]}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
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
            Berghochzeit
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
            Freie Trauung in den Alpen –{" "}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#B8956A",
              }}
            >
              Eure Berghochzeit
            </span>
          </h1>
          <p
            className="font-body max-w-[600px] mx-auto mt-6"
            style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}
          >
            Gipfelglück und Liebesversprechen: Als eure Traurednerin gestalte ich freie Trauungen
            in den Alpen — auf Bergspitzen, Almwiesen und an kristallklaren Bergseen in Bayern,
            Österreich und der Schweiz.
          </p>
        </div>
      </section>

      {/* Haupttext */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <h2
            className="font-display mb-8"
            style={{ color: "#1a1a1a", letterSpacing: "0.02em", fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            Heiraten in den Alpen:{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, color: "#B8956A" }}>
              Wo die Berge zu euren Trauzeugen werden
            </span>
          </h2>

          <div className="space-y-6 font-body" style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}>
            <p>
              Eine freie Trauung in den Alpen ist für viele Paare ein Lebenstraum. Die majestätischen
              Berggipfel, die weiten Almwiesen und die kristallklaren Seen bilden eine Kulisse, die
              jede Zeremonie zu einem unvergesslichen Erlebnis macht. Als eure Traurednerin für
              Berghochzeiten bringe ich eure Liebesgeschichte an die schönsten Orte der Alpen.
            </p>
            <p>
              Die Alpen erstrecken sich über drei Länder, die ich als Traurednerin regelmäßig bereise:
              In den <strong>Bayerischen Alpen</strong> feiert ihr eure freie Trauung zwischen
              Zugspitze, Watzmann und Wendelstein. Die <strong>Tiroler Alpen</strong> in Österreich
              bestechen durch elegante Berghotels und urige Hütten rund um Kitzbhühel, Innsbruck und
              das Zillertal. Und in den <strong>Schweizer Alpen</strong> bieten Orte wie Zermatt,
              Interlaken oder Luzern eine Kulisse, die einfach sprachlos macht.
            </p>
            <p>
              Egal ob ihr von einer intimen Zeremonie auf einem Berggipfel träumt, einer rustikalen
              Feier auf einer Almhütte oder einer eleganten Hochzeit in einem Berghotel — ich gestalte
              eure freie Trauung in den Alpen so persönlich und emotional, dass sie so tief berührt
              wie der Anblick der Berge selbst.
            </p>
          </div>

          <div style={{ width: "40px", height: "1px", background: "#B8956A", margin: "40px 0" }} />

          <h2
            className="font-display mb-8"
            style={{ color: "#1a1a1a", letterSpacing: "0.02em", fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            Beliebte Locations für{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, color: "#B8956A" }}>
              Berghochzeiten
            </span>
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "Almhütten & Bergscheunen",
                text: "Rustikale Almhütten mit Holzbalken und Kaminfeuer bieten den perfekten Rahmen für eine gemütliche und authentische freie Trauung in den Bergen. Hier verbinden sich Tradition und Romantik auf einzigartige Weise.",
              },
              {
                title: "Berggipfel & Aussichtspunkte",
                text: "Die dramatischste Kulisse für eure freie Trauung: ein Berggipfel mit 360-Grad-Panorama. Ob per Gondel, Wanderung oder sogar Helikopter — der Moment, wenn ihr auf dem Gipfel euer Ja-Wort sprecht, ist unbezahlbar.",
              },
              {
                title: "Bergseen & Uferwiesen",
                text: "An einem kristallklaren Bergsee widerspiegeln die Berge eure Liebe. Ob Eibsee, Achensee, Blausee oder Vierwaldstättersee — eine freie Trauung am Bergsee verbindet alpine Grandezza mit stiller Romantik.",
              },
              {
                title: "Berghotels & Chalets",
                text: "Elegante Berghotels und private Chalets vereinen alpines Flair mit modernem Komfort. Perfekt für Paare, die das Bergfeeling lieben, aber nicht auf Annehmlichkeiten verzichten möchten.",
              },
            ].map((loc) => (
              <div key={loc.title}>
                <h3 className="font-display mb-2" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                  {loc.title}
                </h3>
                <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                  {loc.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <h2
            className="font-display text-center mb-12"
            style={{ color: "#1a1a1a", letterSpacing: "0.02em", fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            Häufige Fragen zur{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, color: "#B8956A" }}>
              Berghochzeit in den Alpen
            </span>
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <div key={i} className="p-6" style={{ background: "rgba(253, 244, 237, 0.7)", border: "1px solid rgba(184, 149, 106, 0.12)" }}>
                <h3 className="font-display mb-3" style={{ fontSize: "1.15rem", fontWeight: 400, color: "#1a1a1a" }}>{item.q}</h3>
                <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28">
        <div className="container mx-auto px-5 sm:px-8 max-w-[600px] text-center">
          <h2
            className="font-display mb-6"
            style={{ color: "#1a1a1a", letterSpacing: "0.02em", fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            Berghochzeit in den Alpen{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, color: "#B8956A" }}>
              anfragen
            </span>
          </h2>
          <p className="font-body mb-8" style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, color: "#5C4A3A" }}>
            Ihr träumt von einer freien Trauung in den Alpen? Schreibt mir unverbindlich —
            gemeinsam finden wir die perfekte Bergkulisse für eure Zeremonie.
          </p>
          <Link to="/freie-trauung-kontakt" className="btn-gold inline-block">
            Jetzt Berghochzeit anfragen
          </Link>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/traurednerin-bayern" className="font-body text-sm" style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              Traurednerin in Bayern
            </Link>
            <Link to="/traurednerin-oesterreich" className="font-body text-sm" style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              Traurednerin in Österreich
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FreieTrauungAlpen;
