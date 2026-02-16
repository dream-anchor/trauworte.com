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
    q: "Was kostet eine freie Trauung in der Toskana?",
    a: "Die Kosten für eine freie Trauung in der Toskana hängen von Umfang, Location und Anreise ab. Mein Honorar als Traurednerin umfasst Vorbereitung, Paargespräch, individuelle Traurede und Zeremonie. Hinzu kommen Flug und Übernachtung. Schreibt mir für ein Angebot, das zu eurem Budget passt.",
  },
  {
    q: "Kann man in Italien standesamtlich heiraten?",
    a: "Ja, auch als deutsche Staatsbürger könnt ihr in Italien standesamtlich heiraten. Die meisten Paare kombinieren die standesamtliche Trauung mit einer emotionalen freien Trauung als Höhepunkt des Tages. Die freie Trauung in der Toskana wird dann zum persönlichsten Moment eurer Hochzeit.",
  },
  {
    q: "Wann ist die beste Jahreszeit für eine Hochzeit in der Toskana?",
    a: "Die schönste Zeit für eine Hochzeit in der Toskana ist von Mai bis Oktober. Besonders beliebt sind Juni und September — warm genug für eine Zeremonie im Freien, aber nicht so heiß wie im Hochsommer. Die Weinlese im September verleiht eurer freien Trauung einen besonderen Zauber.",
  },
  {
    q: "Reist die Traurednerin in die Toskana?",
    a: "Selbstverständlich! Ich reise für eure freie Trauung in die Toskana und bin bereits am Vortag vor Ort. So kann ich eure Location kennenlernen, die Technik prüfen und alles in Ruhe vorbereiten. Am Hochzeitstag könnt ihr euch ganz auf eure Emotionen konzentrieren.",
  },
  {
    q: "Was ist, wenn internationale Gäste bei der Trauung dabei sind?",
    a: "Ich gestalte eure Zeremonie auf Deutsch. Wenn internationale Gäste dabei sind, kann ich einzelne Passagen so gestalten, dass sie auch ohne perfekte Deutschkenntnisse emotional mitgenommen werden — etwa durch universelle Gesten, Rituale und ein kurzes gedrucktes Programm in anderen Sprachen.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Freie Trauung in der Toskana",
  provider: {
    "@type": "Person",
    name: "Stefanie Sick",
    jobTitle: "Traurednerin",
    url: "https://trauworte.com",
  },
  serviceType: "Freie Trauung / Destination Wedding",
  areaServed: { "@type": "Place", name: "Toskana, Italien" },
  description:
    "Persönliche und emotionale freie Trauungen in der Toskana — auf Weingütern, in Villen und unter toskanischer Sonne. Individuell und unvergesslich.",
  url: "https://trauworte.com/freie-trauung-toskana/",
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

const FreieTrauungToskana = () => {
  usePrerenderReady(true);

  const cms = usePageContent("freie-trauung-toskana");

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
        title={cms.seoTitle || "Freie Trauung Toskana – Traurednerin Stefanie Sick"}
        description={cms.seoDescription || "Eure freie Trauung in der Toskana: Traurednerin Stefanie Sick gestaltet persönliche Zeremonien auf Weingütern, in Villen und unter toskanischer Sonne."}
        canonical={cms.seoCanonical || "/freie-trauung-toskana"}
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Freie Trauung Toskana", url: "/freie-trauung-toskana/" },
        ]}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* ═══ HERO ═══ */}
      <section style={{ backgroundColor: "#FCECDF" }} className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] text-center">
          <Label>{hero?.label || "Destination Wedding"}</Label>
          <h1
            className="font-display"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              lineHeight: 1.15,
            }}
          >
            Freie Trauung in der Toskana –{" "}
            <Accent>Eure Traurednerin für Italien</Accent>
          </h1>
          <p className="font-body max-w-[600px] mx-auto mt-6" style={bodyStyle}>
            {hero?.subtitle || "Weinberge, Zypressen und goldenes Licht: Als eure Traurednerin gestalte ich freie Trauungen in der Toskana, die la dolce vita in jeder Silbe spüren lassen. Genuss, Kultur und eure Liebe — vereint in einer Zeremonie, die unvergesslich bleibt."}
          </p>
        </div>
      </section>

      <HeroImage src="/images/hero-toskana.webp" alt="Toskana — Zypressenallee in der italienischen Landschaft" credit="Achim Ruhnau" />

      {/* ═══ WARUM TOSKANA ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            Warum die Toskana der perfekte Ort für eure{" "}
            <Accent>freie Trauung</Accent> ist
          </SH2>

          <div className="space-y-6 font-body" style={bodyStyle}>
            <p>
              Die Toskana ist der Inbegriff von Romantik und Genuss. Sanfte Hügellandschaften,
              von Zypressen gesäumte Alleen, historische Villen und Weingüter, die im warmen
              Licht der Abendsonne erstrahlen: Heiraten in der Toskana ist ein Fest für alle Sinne.
              Kein Wunder, dass die Region zu den beliebtesten Zielen für freie Trauungen in
              ganz Europa gehört.
            </p>
            <p>
              Dazu kommt die toskanische Lebensart: Chianti und Brunello in den Weinbergen,
              frische Pasta unter Olivenbäumen und das Gefühl, dass die Zeit langsamer läuft.
              Eure Hochzeit in der Toskana wird nicht nur eine Zeremonie — sie wird ein Erlebnis,
              das alle Sinne anspricht. Als eure Traurednerin für die Toskana fange ich diese
              besondere Atmosphäre in Worten ein.
            </p>
            <p>
              Die Toskana ist gut erreichbar: Über die Flughäfen Florenz und Pisa seid ihr in
              unter zwei Stunden aus Deutschland da. Auch mit dem Auto lässt sich die freie Trauung
              in Italien wunderbar mit einem Road Trip verbinden. Perfekte Bedingungen für ein
              Destination Wedding, das eure Gäste nie vergessen werden.
            </p>
          </div>

          <GoldLine />

          {/* ═══ TRAUREDNERIN TOSKANA ═══ */}
          <SH2>
            Eure Traurednerin für die Toskana –{" "}
            <Accent>persönlich und von Herzen</Accent>
          </SH2>

          <div className="space-y-6 font-body" style={bodyStyle}>
            <p>
              Als eure Traurednerin für die Toskana verbinde ich persönliche Worte mit
              italienischem Flair. Ich lerne eure Liebesgeschichte kennen, höre zu und verwandle
              eure gemeinsamen Erlebnisse in eine Traurede, die tief berührt — eingerahmt
              von der atemberaubenden Kulisse der toskanischen Landschaft.
            </p>
            <p>
              Wenn internationale Gäste dabei sind, sorge ich dafür, dass sie sich einbezogen
              fühlen — durch universelle Gesten, Rituale und auf Wunsch ein gedrucktes
              Programm in anderen Sprachen. Die Vorbereitung läuft unkompliziert
              per Videocall — ich bin von Anfang an persönlich für euch da, auch über die Distanz.
            </p>
          </div>

          <GoldLine />

          {/* ═══ PLANUNGSPROZESS ═══ */}
          <SH2>
            So planen wir eure Hochzeit{" "}
            <Accent>in der Toskana</Accent>
          </SH2>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Erstkontakt und Kennenlernen per Videocall",
                text: "Wir lernen uns in einem entspannten Videocall kennen. Ihr erzählt mir von eurer Traum-Location in der Toskana, eurem Wunschtermin und euren ersten Ideen für die freie Trauung.",
              },
              {
                step: "02",
                title: "Eure Liebesgeschichte — das Fundament eurer Rede",
                text: "Im ausführlichen Paargespräch tauche ich tief in eure Geschichte ein. Wie habt ihr euch kennengelernt? Was macht eure Liebe besonders? Aus diesen Details entsteht eine Traurede, die wirklich eure ist.",
              },
              {
                step: "03",
                title: "Ablauf, Rituale und persönliche Details",
                text: "Ich schreibe eure individuelle Traurede und stimme mit euch Rituale, Musik und den Ablauf eurer Hochzeit in der Toskana ab. Ihr bekommt den Entwurf vorab und könnt Wünsche äußern.",
              },
              {
                step: "04",
                title: "Anreise und Vorbereitung vor Ort",
                text: "Ich reise ein bis zwei Tage vor eurer Hochzeit in die Toskana. Vor Ort besichtige ich eure Location, koordiniere mich mit Fotograf, Florist und Caterer und stimme die letzten Details ab.",
              },
              {
                step: "05",
                title: "Euer Hochzeitstag in der Toskana",
                text: "Am Tag eurer freien Trauung in der Toskana führe ich euch und eure Gäste mit Herz und Leidenschaft durch eine Zeremonie, die so berührt wie die Landschaft selbst. Euer Moment — unter toskanischer Sonne.",
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

      {/* ═══ LOCATIONS ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            Die schönsten Hochzeitslocations{" "}
            <Accent>in der Toskana</Accent>
          </SH2>

          <div className="space-y-10">
            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Weingüter im Chianti
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Die Weinberge des Chianti-Gebiets sind der Inbegriff der Toskana. Zwischen Rebstöcken
                und Olivenhainen feiert ihr eure freie Trauung auf einem Weingut, das Tradition und
                Romantik vereint. Nach der Zeremonie stoßt ihr mit einem Chianti Classico an —
                frisch aus dem Keller eurer Hochzeitslocation.
              </p>
            </div>

            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Historische Villen und Landgüter
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Die Toskana ist reich an Renaissance-Villen und historischen Landgütern, die wie
                geschaffen sind für eine Hochzeit. In der Region um Florenz, Siena und Cortona
                findet ihr prachtvolle Anwesen mit Panoramablick auf die Hügellandschaft. Als eure
                Traurednerin lasse ich die Geschichte dieser Orte in eure Zeremonie einfließen.
              </p>
            </div>

            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Zypressen-Alleen und Olivenhaine
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Das Val d'Orcia, UNESCO-Welterbe, bietet die ikonischsten Landschaften der Toskana.
                Endlose Zypressen-Alleen, goldene Weizenfelder und malerische Borghi — eine
                Kulisse, die jedes Hochzeitsfoto zum Kunstwerk macht. Eure freie Trauung zwischen
                den Hügeln des Val d'Orcia wird ein Moment reiner Magie.
              </p>
            </div>

            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Küstenhochzeiten in der Maremma
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Die südliche Toskana überrascht mit einer wilden, unberührten Küstenlandschaft.
                Die Maremma vereint Strand, Pinienwälder und toskanische Gemütlichkeit. Für Paare,
                die Meer und Toskana verbinden möchten, ist die Maremma eine bezaubernde Wahl für
                die freie Trauung in Italien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RITUALE ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            Rituale für eure freie Trauung{" "}
            <Accent>unter toskanischer Sonne</Accent>
          </SH2>

          <p className="font-body mb-8" style={bodyStyle}>
            In der Toskana lassen sich viele Rituale mit einem besonderen regionalen Bezug gestalten:
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                name: "Wein-Zeremonie mit Chianti",
                text: "Gießt zwei toskanische Weine in ein gemeinsames Glas und trinkt daraus — ein Sinnbild für die Vereinigung eurer Leben, mit echtem Toskana-Flair.",
              },
              {
                name: "Olivenbaum pflanzen",
                text: "Gemeinsam pflanzt ihr einen Olivenbaum — das Symbol der Toskana und des Friedens. Er wächst mit eurer Liebe und verbindet euch für immer mit diesem besonderen Ort.",
              },
              {
                name: "Brief an die Zukunft",
                text: "Versiegelt persönliche Briefe zusammen mit einer Flasche Brunello in einer Holzkiste. Öffnet sie an eurem fünften Hochzeitstag — ein Ritual voller Vorfreude.",
              },
              {
                name: "Hand-Fasting unter freiem Himmel",
                text: "Eure Hände werden mit einem Band verbunden, während die toskanische Sonne durch die Olivenbäume scheint. Ein uraltes Ritual mit besonderer Kraft unter italienischem Himmel.",
              },
            ].map((r) => (
              <div
                key={r.name}
                style={{
                  background: "rgba(255, 255, 255, 0.45)",
                  borderLeft: "3px solid #B8956A",
                  borderRadius: "0 16px 16px 0",
                  padding: "28px 32px",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.03)",
                }}
              >
                <h3 className="font-display mb-2" style={{ fontSize: "1.1rem", fontWeight: 400, color: "#1a1a1a" }}>
                  {r.name}
                </h3>
                <p className="font-body leading-[1.85]" style={{ fontSize: "14px", fontWeight: 300, color: "#5C4A3A" }}>
                  {r.text}
                </p>
              </div>
            ))}
          </div>

          <p className="font-body mt-8" style={{ fontSize: "14px", fontWeight: 300, color: "#5C4A3A" }}>
            Mehr Ideen für Traurituale findet ihr auf meiner{" "}
            <Link
              to="/#rituale"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Übersicht aller Rituale für freie Trauungen
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[1000px] relative z-10">
          <SH2 center>
            Häufige Fragen zur{" "}
            <Accent>freien Trauung in der Toskana</Accent>
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

      {/* ═══ TESTIMONIAL PLACEHOLDER ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2 center>
            Stimmen von Paaren, die in der{" "}
            <Accent>Toskana geheiratet haben</Accent>
          </SH2>

          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-body text-xs tracking-[0.15em] uppercase mb-6" style={{ color: "#B8956A" }}>
              Villa im Chianti &middot; Toskana
            </h3>
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#B8956A">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <blockquote
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#1a1a1a",
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                lineHeight: 1.7,
              }}
            >
              Unsere freie Trauung auf einem Weingut im Chianti war dank Stefanie der emotionalste
              Moment unserer Hochzeit. Zwischen Weinbergen und Olivenbäumen hat sie unsere
              Geschichte so wunderschön erzählt, dass wir und unsere Gäste zu Tränen gerührt waren.
            </blockquote>
            {/* <!-- Echtes Testimonial hier einfügen --> */}
            <div style={{ width: "40px", height: "1px", background: "#B8956A", margin: "20px auto" }} />
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(26, 26, 26, 0.45)",
              }}
            >
              Sarah & Michael
            </p>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[600px] text-center relative z-10">
          <SH2 center>
            {cta?.title || "Eure Traumhochzeit in der Toskana"}{" "}
            <Accent>{cta?.titleAccent || "beginnt hier"}</Accent>
          </SH2>
          <p className="font-body mb-8" style={bodyStyle}>
            {cta?.text || "Sichert euch euren Wunschtermin — die beliebten Monate Mai bis Oktober sind schnell vergeben! Schreibt mir unverbindlich und erzählt von euren Träumen. Ich freue mich darauf, eure Hochzeit in der Toskana zu einem unvergesslichen Erlebnis zu machen."}
          </p>
          <Link to={cta?.buttonLink || "/freie-trauung-kontakt"} className="btn-gold inline-block">
            {cta?.buttonText || "Jetzt Toskana-Termin anfragen"}
          </Link>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="/"
              className="font-body text-sm"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Mehr über mich als Traurednerin
            </Link>
            <Link
              to="/traurednerin-muenchen"
              className="font-body text-sm"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Auch in München und Bayern
            </Link>
            <Link
              to="/freie-trauung-mallorca"
              className="font-body text-sm"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Trauungen auf Mallorca
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FreieTrauungToskana;
