import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import HeroImage from "@/components/HeroImage";
import usePageContent from "@/hooks/usePageContent";

/* ── FAQ ── */
const defaultFaqItems = [
  {
    q: "Was kostet eine Traurednerin in Bayern?",
    a: "Die Kosten für eine freie Trauung in Bayern variieren je nach Umfang und Leistungspaket. Mein Honorar umfasst immer ein persönliches Kennenlerngespräch, ein ausführliches Paargespräch, eine individuell geschriebene Traurede und die professionelle Durchführung eurer Zeremonie. Die Anfahrt innerhalb Bayerns ist im Preis inbegriffen. Schreibt mir für ein unverbindliches Angebot.",
  },
  {
    q: "Wie weit im Voraus sollte man eine Traurednerin buchen?",
    a: "Ich empfehle, eure Traurednerin 6 bis 12 Monate vor dem Hochzeitstermin zu buchen. Besonders in der Hochzeitssaison von Mai bis September sind die Wochenenden schnell vergeben. Beliebte Seen-Locations am Starnberger See oder Tegernsee sind oft schon früh ausgebucht — also lieber rechtzeitig anfragen.",
  },
  {
    q: "Was ist, wenn internationale Gäste bei der Trauung dabei sind?",
    a: "Ich gestalte eure Zeremonie auf Deutsch. Wenn internationale Gäste dabei sind, kann ich einzelne Passagen so gestalten, dass sie auch ohne perfekte Deutschkenntnisse emotional mitgenommen werden — etwa durch universelle Gesten, Rituale und ein kurzes gedrucktes Programm in anderen Sprachen.",
  },
  {
    q: "Braucht man zusätzlich eine standesamtliche Trauung?",
    a: "Ja, eine freie Trauung ist in Deutschland nicht rechtlich bindend. Für die rechtsgültige Ehe benötigt ihr eine standesamtliche Trauung. Viele Paare machen beides am gleichen Tag oder legen die standesamtliche Trauung auf einen separaten, intimeren Termin.",
  },
  {
    q: "Welche Jahreszeit ist am besten für eine Seehochzeit in Bayern?",
    a: "Die beliebteste Zeit für Hochzeiten an bayerischen Seen ist Mai bis Oktober. Der Frühsommer (Mai und Juni) bietet mildere Temperaturen und lange Abende. Der Herbst (September und Oktober) verzaubert mit goldenem Licht, weniger Touristen und einer besonders stimmungsvollen Atmosphäre am Wasser.",
  },
  {
    q: "Reist die Traurednerin auch an abgelegene Locations?",
    a: "Absolut! Ob Alm ohne Straßenanbindung, einsamer Bergsee oder die Fraueninsel im Chiemsee — ich komme überall hin. Die Anreise-Logistik besprechen wir gemeinsam im Vorfeld, damit am Tag eurer Hochzeit alles reibungslos läuft.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Traurednerin Bayern",
  provider: {
    "@type": "Person",
    name: "Stefanie Sick",
    jobTitle: "Traurednerin",
    url: "https://trauworte.com",
  },
  serviceType: "Freie Trauung",
  areaServed: [
    { "@type": "Place", name: "Bayern, Deutschland" },
    { "@type": "Place", name: "Starnberger See" },
    { "@type": "Place", name: "Tegernsee" },
    { "@type": "Place", name: "Chiemsee" },
  ],
  description:
    "Freie Trauungen in ganz Bayern: Am Starnberger See, Tegernsee, Chiemsee, auf Almen und in Schlössern. Persönlich, emotional und unvergesslich.",
  url: "https://trauworte.com/traurednerin-bayern/",
};

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

const GoldLine = () => (
  <div style={{ width: "40px", height: "1px", background: "#B8956A", margin: "40px 0" }} />
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

const SH2 = ({ children, center }: { children: React.ReactNode; center?: boolean }) => (
  <h2
    className={`font-display mb-8 ${center ? "text-center" : ""}`}
    style={{ color: "#1a1a1a", letterSpacing: "0.02em", fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
  >
    {children}
  </h2>
);

const bodyStyle = { fontSize: "16px", fontWeight: 300 as const, lineHeight: 1.9, color: "#5C4A3A" };

/* ═══════════════════════════════════════════════ */

const TraurednerinBayern = () => {
  usePrerenderReady(true);
  const cms = usePageContent("traurednerin-bayern");

  const faqItems = cms.content.faq?.length
    ? cms.content.faq.map((f) => ({ q: f.question || f.q || "", a: f.answer || f.a || "" }))
    : defaultFaqItems;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const hero = cms.content.hero;
  const cta = cms.content.cta;

  return (
    <Layout>
      <SEO
        title={cms.seoTitle || "Traurednerin Bayern – Freie Trauung am See & in den Bergen"}
        description={cms.seoDescription || "Eure Traurednerin für Bayern: Stefanie Sick gestaltet freie Trauungen am Starnberger See, Tegernsee, Chiemsee und in den Alpen. Persönlich & emotional."}
        canonical={cms.seoCanonical || "/traurednerin-bayern"}
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Traurednerin Bayern", url: "/traurednerin-bayern/" },
        ]}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* ═══ HERO ═══ */}
      <section style={{ backgroundColor: "#FCECDF" }} className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] text-center">
          <Label>{hero?.label || "Traurednerin in Bayern"}</Label>
          <h1
            className="font-display"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              lineHeight: 1.15,
            }}
          >
            Traurednerin in Bayern –{" "}
            <Accent>Eure freie Trauung am See, auf der Alm oder im Schloss</Accent>
          </h1>
          <p className="font-body max-w-[600px] mx-auto mt-6" style={bodyStyle}>
            {hero?.subtitle || "Von den Ufern des Starnberger Sees bis zu den Gipfeln der Alpen: Als eure Traurednerin in Bayern gestalte ich Zeremonien, die so vielfältig und schön sind wie der Freistaat selbst. Persönlich, emotional und unvergesslich."}
          </p>
        </div>
      </section>

      <HeroImage src="/images/hero-bayern.webp" alt="Brautpaar Hand in Hand auf grünem Hügel — Hochzeit in Bayern" credit="Micah & Sammie Chaffin" />

      {/* ═══ WARUM BAYERN ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            Warum Bayern der schönste Ort für eure{" "}
            <Accent>freie Trauung</Accent>{" "}
            ist
          </SH2>

          <div className="space-y-6 font-body" style={bodyStyle}>
            <p>
              Bayern ist ein Paradies für freie Trauungen. Kaum eine andere Region in Europa
              bietet eine solche Vielfalt an traumhaften Locations: kristallklare Seen mit
              Alpenpanorama, majestätische Schlösser, urige Almhütten und charmante Städte.
              Vom Münchner Stadtleben seid ihr in einer Stunde am See oder in den Bergen —
              dieser Kontrast macht Bayern einzigartig für Hochzeiten.
            </p>
            <p>
              Bayern ist ganzjährig wunderschön: Im Sommer feiert ihr eure freie Trauung am
              See mit Blick auf die Berge, im Herbst tauchen die Wälder in Gold und Rot,
              und im Winter verzaubert eine verschneite Schloss- oder Almhochzeit mit
              Kerzenlicht und Kaminfeuer. Als eure Traurednerin in Bayern bringe ich eure
              Liebesgeschichte an genau den Ort, der zu euch passt.
            </p>
          </div>

          <GoldLine />

          {/* ═══ TRAUREDNERIN FÜR BAYERN ═══ */}
          <SH2>
            Eure Traurednerin{" "}
            <Accent>für ganz Bayern</Accent>
          </SH2>

          <div className="space-y-6 font-body" style={bodyStyle}>
            <p>
              Als Traurednerin mit Sitz in München kenne ich Bayern wie meine Westentasche.
              Ob ihr eine intime Zeremonie zu zweit am Bergsee plant, eine große Feier in
              einem bayerischen Schloss oder eine rustikale Almhochzeit — ich gestalte eure
              freie Trauung so persönlich und emotional, dass sie euch und eure Gäste tief
              berührt. Jede Traurede ist ein Unikat, geschrieben aus eurer Geschichte.
            </p>
            <p>
              Ich reise flexibel in ganz Bayern zu euch — von Oberbayern über Schwaben und
              das Allgäu bis nach Franken und in die Oberpfalz. Jede Traurede ist ein
              Unikat, geschrieben aus eurer einzigartigen Geschichte. Die Anfahrt innerhalb
              Bayerns ist immer im Preis inbegriffen.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ SEEN (Kernstück) ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            Freie Trauung an Bayerns{" "}
            <Accent>schönsten Seen</Accent>
          </SH2>

          <p className="font-body mb-10" style={bodyStyle}>
            Die bayerischen Seen gehören zu den romantischsten Orten für eine freie Trauung
            in ganz Deutschland. Jeder See hat seinen eigenen Charakter — und als eure
            Traurednerin finde ich genau die Worte, die zu euch und eurer Location passen.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Hochzeit am Starnberger See
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Der Starnberger See ist Münchens elegantes Hausmeer — nur 30 Minuten von der
                Stadt entfernt und doch eine andere Welt. Mondäne Villen, weitläufige Uferwiesen
                und ein atemberaubendes Alpenpanorama machen den Starnberger See zu einer der
                beliebtesten Hochzeitslocations in Bayern. Ob auf einem privaten Steg, in einer
                Villa am Westufer oder in der berühmten Bucherer Bucht: Eure freie Trauung am
                Starnberger See wird ein Fest der Sinne. Als eure Traurednerin am Starnberger
                See gestalte ich eine Zeremonie, die so elegant und gleichzeitig persönlich ist
                wie dieser besondere Ort.
              </p>
            </div>

            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Hochzeit am Tegernsee
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Der Tegernsee vereint bayerische Eleganz mit Bergkulisse auf einzigartige Weise.
                Das türkisblaue Wasser, die umliegenden Gipfel und die exklusive Atmosphäre machen
                den Tegernsee zum Traumziel für Hochzeiten in Bayern. Locations wie das{" "}
                <strong>Gut Kaltenbrunn</strong>, das <strong>Hotel Überfahrt</strong> oder
                ein Bootshaus direkt am See bieten den perfekten Rahmen für eure Zeremonie.
                Auch die Almen rund um den Tegernsee sind beliebte Orte für eine freie Trauung
                mit Bergblick. Bayerische Gastlichkeit und alpine Eleganz — als eure Traurednerin
                am Tegernsee fange ich diese besondere Atmosphäre in Worten ein.
              </p>
            </div>

            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Hochzeit am Chiemsee
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Das Bayerische Meer — so wird der Chiemsee liebevoll genannt, und das zu Recht.
                Der größte See Bayerns bietet eine großzügige Weite, die euch den Atem raubt.
                Die <strong>Fraueninsel</strong> mit ihrem klösterlichen Charme ist eine der
                romantischsten Hochzeitslocations Deutschlands. Auf der{" "}
                <strong>Herreninsel</strong> feiert ihr vor königlicher Kulisse. Und am Ufer
                erwarten euch Locations wie der Hafenwirt oder die Chiemgauer Almen. Eine
                Hochzeit am Chiemsee lässt sich wunderbar mit einer Schifffahrt kombinieren —
                eure freie Trauung auf dem Wasser, umgeben von Bergpanorama.
              </p>
            </div>

            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Weitere Seen: Ammersee, Königssee, Schliersee
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Bayern hat noch viele weitere Seen, die perfekt für eine freie Trauung sind.
                Der <strong>Ammersee</strong> ist der entspannte Nachbar des Starnberger Sees —
                mit Künstler-Vibes, charmanten Biergärten und einer Atmosphäre, die zum Verweilen
                einlädt. Der <strong>Königssee</strong> bei Berchtesgaden beeindruckt mit seiner
                dramatischen Bergkulisse und der berühmten Wallfahrtskirche St. Bartholomä. Und
                der <strong>Schliersee</strong> verzaubert mit seiner idyllischen Ruhe — weniger
                touristisch, authentisch bayerisch und ideal für intime Zeremonien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BERGE ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            Berghochzeiten in Bayern –{" "}
            <Accent>Almen, Gipfel und Panoramablick</Accent>
          </SH2>

          <div className="space-y-6 font-body" style={bodyStyle}>
            <p>
              Bayern ist nicht nur Seen — es ist auch Berge. Von rustikalen Almhütten
              über Gipfeltrauungen mit 360-Grad-Panorama bis hin zu eleganten Berghotels
              wie <strong>Schloss Elmau</strong> bietet die bayerische Alpenregion
              unvergessliche Kulissen für eure freie Trauung. Rund um{" "}
              <strong>Garmisch-Partenkirchen</strong>, im <strong>Berchtesgadener Land</strong>{" "}
              und am <strong>Tegernsee</strong> findet ihr Almen und Gipfel, die euch den
              Atem rauben.
            </p>
            <p>
              Als eure Traurednerin für Berghochzeiten in Bayern plane ich flexibel mit
              Wetter-Plan B, Timing für Gondelbahn oder Wanderung und einem Ablauf, der sich
              der Natur anpasst.
            </p>
          </div>

          <Link
            to="/freie-trauung-alpen"
            className="font-body inline-block mt-4 text-sm"
            style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            Ausführliche Infos zu Berghochzeiten in den Alpen →
          </Link>

          <GoldLine />

          {/* ═══ SCHLÖSSER ═══ */}
          <SH2>
            Schlösser und historische Locations{" "}
            <Accent>in Bayern</Accent>
          </SH2>

          <div className="space-y-6 font-body" style={bodyStyle}>
            <p>
              Bayern ist das Land der Schlösser — und viele davon bieten den perfekten Rahmen
              für eine freie Trauung. <strong>Schloss Nymphenburg</strong> in München verbindet
              barocke Pracht mit weitläufigen Gärten. <strong>Schloss Hohenschwangau</strong> im
              Allgäu liegt märchenhaft am Fuß der Berge, mit Blick auf den Alpsee und die
              Königsschlösser.
            </p>
            <p>
              Auch die <strong>Residenz Würzburg</strong> in Franken, <strong>Schloss
              Schleißheim</strong> bei München und zahlreiche historische Gutshöfe und Scheunen
              in ganz Bayern bieten einzigartige Kulissen. Als eure Traurednerin in Bayern lasse
              ich die Geschichte und Eleganz dieser Orte in eure Zeremonie einfließen — eine
              Hochzeit, die sich anfühlt wie aus einem Märchen.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ PLANUNGSPROZESS ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            So planen wir eure{" "}
            <Accent>freie Trauung in Bayern</Accent>
          </SH2>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Videocall zum Kennenlernen",
                text: "Wir lernen uns in einem entspannten Videocall kennen. Ihr erzählt mir von eurer Wunsch-Location in Bayern, eurem Termin und euren ersten Ideen. Ich berate euch gerne zu den schönsten Orten — ob See, Alm oder Schloss.",
              },
              {
                step: "02",
                title: "Eure Liebesgeschichte — das Herzstück",
                text: "Im ausführlichen Paargespräch tauche ich tief in eure Geschichte ein. Wie habt ihr euch kennengelernt? Was verbindet euch? Aus diesen persönlichen Details entsteht eine Traurede, die so einzigartig ist wie eure Liebe.",
              },
              {
                step: "03",
                title: "Ablauf, Rituale und persönliche Details",
                text: "Ich schreibe eure individuelle Traurede und stimme mit euch den Ablauf ab — Rituale, Musik, persönliche Elemente. Ihr bekommt den Entwurf vorab und könnt Wünsche äußern, bis jedes Wort sitzt.",
              },
              {
                step: "04",
                title: "Location-Tipps und Logistik",
                text: "Als eure Traurednerin in Bayern kenne ich die Locations und ihre Besonderheiten. Ich berate euch zur Technik, zur besten Tageszeit für eure Zeremonie und koordiniere mich mit euren anderen Dienstleistern.",
              },
              {
                step: "05",
                title: "Euer großer Tag",
                text: "Am Tag eurer freien Trauung in Bayern führe ich euch und eure Gäste mit Herz und Leidenschaft durch eine Zeremonie, die tief berührt. Euer Moment — an eurem Ort in Bayern.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 md:gap-8">
                <div
                  className="font-body text-xs tracking-[0.2em] uppercase pt-1 shrink-0"
                  style={{ color: "#B8956A", width: "48px" }}
                >
                  Schritt {item.step}
                </div>
                <div>
                  <h3 className="font-display mb-2" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                    {item.title}
                  </h3>
                  <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[1000px] relative z-10">
          <SH2 center>
            Häufige Fragen zur{" "}
            <Accent>freien Trauung in Bayern</Accent>
          </SH2>
          <div className="space-y-5">
            {faqItems.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255, 255, 255, 0.5)",
                  borderLeft: "3px solid #B8956A",
                  borderRadius: "0 16px 16px 0",
                  padding: "28px 32px",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.03)",
                }}
              >
                <h3 className="font-display mb-3" style={{ fontSize: "1.15rem", fontWeight: 400, color: "#1a1a1a" }}>
                  {item.q}
                </h3>
                <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[600px] text-center relative z-10">
          <SH2 center>
            {cta?.title || "Eure Traumhochzeit in Bayern"}{" "}
            <Accent>{cta?.titleAccent || "beginnt hier"}</Accent>
          </SH2>
          <p className="font-body mb-8" style={bodyStyle}>
            {cta?.text || "Ihr plant eine freie Trauung in Bayern? Ob am Starnberger See, auf einer Alm am Tegernsee oder in einem bayerischen Schloss — schreibt mir unverbindlich und erzählt von euren Wünschen. Ich freue mich darauf, euch und eure Geschichte kennenzulernen."}
          </p>
          <Link to={cta?.buttonLink || "/freie-trauung-kontakt"} className="btn-gold inline-block">
            {cta?.buttonText || "Jetzt unverbindlich anfragen"}
          </Link>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="/traurednerin-muenchen"
              className="font-body text-sm"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Traurednerin in München
            </Link>
            <Link
              to="/freie-trauung-alpen"
              className="font-body text-sm"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Berghochzeiten in den Alpen
            </Link>
            <Link
              to="/freie-trauung-italien"
              className="font-body text-sm"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Über die Alpen: Gardasee und Toskana
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TraurednerinBayern;
