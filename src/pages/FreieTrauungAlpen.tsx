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
    q: "Wie kommt man mit Hochzeitskleid auf den Berg?",
    a: "Viele Berglocations sind bequem per Gondel oder Auto erreichbar. Für abgelegenere Almen empfehle ich ein leichteres Kleid für den Aufstieg und ein Umziehen vor Ort. Viele Brautpaare kombinieren Wanderschuhe mit Brautkleid — ein wunderbares Fotomotiv! Ich berate euch gerne zu den Möglichkeiten eurer Wunschlocation.",
  },
  {
    q: "Was passiert bei schlechtem Wetter in den Bergen?",
    a: "Ein guter Plan B gehört zu jeder Berghochzeit dazu. Viele Almen haben einen überdachten Bereich oder eine gemütliche Stube als wetterfeste Alternative. Wir besprechen das Wetter-Szenario immer im Voraus und ich bereite beide Varianten vor — denn auch eine Trauung bei Nebel oder leichtem Regen hat in den Bergen einen ganz besonderen Zauber.",
  },
  {
    q: "Welche Jahreszeit ist ideal für eine Berghochzeit?",
    a: "Die Hauptsaison für Berghochzeiten ist Juni bis September, wenn die Almen grün und die Gipfel schneefrei sind. Aber auch der goldene Herbst mit Lärchenverfärbung und verschneite Winterhochzeiten haben ihren besonderen Reiz. Jede Jahreszeit bringt ihre eigene Magie in die Alpen — je nach eurer Vision finden wir den perfekten Zeitpunkt.",
  },
  {
    q: "Reist die Traurednerin auch auf Berggipfel?",
    a: "Ja! Ich bin bergfest und begleite euch überall hin — ob per Gondel, Wanderweg oder Jeep. Die Vorbereitung vor Ort plane ich so, dass ich rechtzeitig und entspannt da bin. Für Gipfel-Trauungen reise ich am Vortag an und mache mich mit der Location vertraut.",
  },
  {
    q: "Ist eine Winterhochzeit in den Alpen möglich?",
    a: "Absolut! Winterhochzeiten in den Alpen sind magisch — verschneite Gipfel, Kerzenlicht und Glühwein nach der Zeremonie. Viele Berghütten und Schlösser bieten winterliche Trauungen mit beheizten Räumen und Panoramafenstern. Eine Winterhochzeit in den Bergen ist für Paare, die das Besondere suchen, ein unvergessliches Erlebnis.",
  },
];

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
    { "@type": "Place", name: "Salzburger Land, Österreich" },
    { "@type": "Place", name: "Südtirol, Italien" },
  ],
  description: "Freie Trauungen in den Alpen — auf Bergspitzen, Almhütten und an Bergseen in Bayern, Tirol, Salzburg und Südtirol.",
  url: "https://trauworte.com/freie-trauung-alpen/",
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

const FreieTrauungAlpen = () => {
  usePrerenderReady(true);

  const cms = usePageContent("freie-trauung-alpen");

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
        title={cms.seoTitle || "Freie Trauung in den Alpen – Traurednerin Stefanie Sick"}
        description={cms.seoDescription || "Freie Trauung in den Alpen: Eure Traurednerin für Berghochzeiten in Bayern, Tirol und Salzburg. Auf Almen, Gipfeln und vor Bergpanorama."}
        canonical={cms.seoCanonical || "/freie-trauung-alpen"}
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

      {/* ═══ HERO ═══ */}
      <section style={{ backgroundColor: "#FCECDF" }} className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] text-center">
          <Label>{hero?.label || "Berghochzeit"}</Label>
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
            <Accent>Eure Traurednerin für Berghochzeiten</Accent>
          </h1>
          <p className="font-body max-w-[600px] mx-auto mt-6" style={bodyStyle}>
            {hero?.subtitle || "Gipfelglück und Liebesversprechen: Als eure Traurednerin gestalte ich freie Trauungen in den Alpen — auf Bergspitzen, Almwiesen und an kristallklaren Bergseen. Wo die Weite der Berge euch den Atem raubt und eure Worte in der Stille widerhallen."}
          </p>
        </div>
      </section>

      <HeroImage src="/images/hero-alpen.webp" alt="Alpenpanorama — Berghochzeit in den Alpen" credit="Rey Emsen" />

      {/* ═══ WARUM ALPEN ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            Warum die Alpen der perfekte Ort für eure{" "}
            <Accent>freie Trauung</Accent>{" "}
            sind
          </SH2>

          <div className="space-y-6 font-body" style={bodyStyle}>
            <p>
              Eine freie Trauung in den Alpen ist mehr als eine Hochzeit — es ist ein Abenteuer.
              Bergpanorama, klare Luft, eine Weite, die den Blick und das Herz öffnet: Wer sich
              in den Bergen das Ja-Wort gibt, erlebt einen Moment von erhabener Schönheit. Die
              Stille auf einem Gipfel, das leise Rauschen eines Bergbachs, das warme Licht der
              Abendsonne auf den Felswänden — die Alpen schaffen eine Atmosphäre, die keine
              Location der Welt nachbauen kann.
            </p>
            <p>
              Im Kontrast zum Alltag fühlt sich eine Berghochzeit an wie ein gemeinsames Abenteuer.
              Ihr steigt auf — im wahrsten Sinne des Wortes — und erreicht zusammen einen Ort, der
              euch beide über den Dingen stehen lässt. Ob eine intime Zeremonie zu zweit auf einem
              Gipfel oder eine große Feier auf einer urigen Almhütte: Die Alpen bieten für jeden
              Hochzeitsstil die richtige Kulisse.
            </p>
            <p>
              Von München aus seid ihr in einer bis zwei Stunden in den Bayerischen Alpen, in
              zwei Stunden in Tirol und in anderthalb Stunden in Salzburg. Die Erreichbarkeit
              macht eine Hochzeit in den Alpen nicht nur romantisch, sondern auch unkompliziert
              in der Planung — für euch und eure Gäste.
            </p>
          </div>

          <GoldLine />

          {/* ═══ TRAUREDNERIN ALPEN ═══ */}
          <SH2>
            Eure Traurednerin für die Alpen –{" "}
            <Accent>persönlich und erfahren</Accent>
          </SH2>

          <div className="space-y-6 font-body" style={bodyStyle}>
            <p>
              Als eure Traurednerin für Berghochzeiten bringe ich nicht nur Worte mit auf den
              Berg, sondern auch Erfahrung mit Outdoor-Trauungen und den besonderen
              Herausforderungen einer Zeremonie in der Natur. Ich plane flexibel: mit
              Wetter-Plan B, perfektem Timing für Bergbahn oder Wanderung der Gäste und einem
              Ablauf, der sich der Natur anpasst — nicht umgekehrt.
            </p>
            <p>
              Wenn internationale Gäste dabei sind, sorge ich dafür, dass sie sich einbezogen
              fühlen — durch universelle Gesten, Rituale und auf Wunsch ein gedrucktes
              Programm in anderen Sprachen. Und keine Sorge:
              Ich bin bergfest, wettererprobt und immer rechtzeitig auf dem Gipfel.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ PLANUNGSPROZESS ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            So planen wir eure{" "}
            <Accent>Berghochzeit</Accent>
          </SH2>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Kennenlernen und Wunsch-Location besprechen",
                text: "Im ersten Videocall erzählt ihr mir von eurer Traumlocation in den Bergen. Ob Alm, Gipfel oder Bergsee — ich berate euch zu den Möglichkeiten und Besonderheiten eurer Wunschlocation.",
              },
              {
                step: "02",
                title: "Eure Liebesgeschichte",
                text: "Im ausführlichen Paargespräch tauche ich tief in eure Geschichte ein. Was verbindet euch mit den Bergen? Welche gemeinsamen Abenteuer habt ihr erlebt? Aus diesen Details entsteht eine Traurede, die so einzigartig ist wie euer Weg hierher.",
              },
              {
                step: "03",
                title: "Ablauf, Rituale und Wetter-Plan B",
                text: "Ich schreibe eure individuelle Traurede und plane mit euch Rituale, Musik und den gesamten Ablauf. Bei Berghochzeiten ist die Logistik entscheidend: Zugang für Gäste, Technik auf dem Berg, Timing mit Gondelbahn oder Wanderung. Und natürlich: einen stimmungsvollen Plan B für den Fall, dass die Berge anders entscheiden.",
              },
              {
                step: "04",
                title: "Vor-Ort-Vorbereitung und Generalprobe",
                text: "Am Vortag reise ich an und besichtige eure Location — ob Almhütte, Berggipfel oder Seeufer. Ich prüfe die Akustik, koordiniere mich mit euren Dienstleistern und bereite alles vor, damit am nächsten Tag alles perfekt läuft.",
              },
              {
                step: "05",
                title: "Euer großer Tag in den Bergen",
                text: "Am Tag eurer freien Trauung in den Alpen führe ich euch und eure Gäste mit Herz und Leidenschaft durch eine Zeremonie, die so tief berührt wie der Anblick der Berge. Euer Ja-Wort hallt zwischen den Gipfeln wider — ein Moment für die Ewigkeit.",
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
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            Die schönsten Orte für eine{" "}
            <Accent>Hochzeit in den Alpen</Accent>
          </SH2>

          <div className="space-y-10">
            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Almhochzeit in Bayern — rustikal und gemütlich
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Die bayerischen Alpen bieten unzählige Almen, die wie geschaffen sind für eine
                freie Trauung. Rund um <strong>Garmisch-Partenkirchen</strong> feiert ihr
                zwischen Wetterstein und Zugspitze. Am <strong>Tegernsee</strong> verbinden
                sich Almwiesen mit Seeblick. Und im <strong>Berchtesgadener Land</strong> thront
                der Watzmann über eurer Zeremonie. Rustikale Holzbalken, Kaminfeuer und
                bayerische Gastfreundschaft — eine Almhochzeit ist Heimat pur.
              </p>
            </div>

            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Bergseen — Zeremonie am Wasser mit Bergkulisse
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Die Bergseen der Alpen gehören zu den dramatischsten Kulissen für eine freie
                Trauung. Der <strong>Eibsee</strong> schimmert türkis vor der Zugspitze,
                der <strong>Achensee</strong> in Tirol spiegelt die umliegenden Gipfel wie ein
                riesiger Spiegel. Der <strong>Königssee</strong> verzaubert mit seiner stillen
                Erhabenheit, und der <strong>Spitzingsee</strong> bietet alpine Romantik unweit
                von München. Wasser und Berge — eine Kombination, die sprachlos macht.
              </p>
            </div>

            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Gipfelhochzeit — euer Ja-Wort über den Wolken
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Für Paare, die das Außergewöhnliche suchen: eine freie Trauung auf einem
                Berggipfel. Die <strong>Zugspitze</strong>, Deutschlands höchster Berg, bietet
                eine Plattform mit 360-Grad-Panorama. Der <strong>Wallberg</strong> am Tegernsee
                erreicht man bequem per Seilbahn. Das <strong>Brauneck</strong> bei Lenggries
                und der <strong>Pendling</strong> bei Kufstein vereinen Erreichbarkeit mit
                atemberaubender Aussicht. Euer Ja-Wort über den Wolken — unvergesslich.
              </p>
            </div>

            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Schlösser und Burgen vor Alpenpanorama
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Die Alpenregion ist reich an Schlössern und Burgen, die Romantik und Geschichte
                mit Bergkulisse vereinen. <strong>Schloss Elmau</strong> bei Garmisch verbindet
                Luxus mit alpiner Natur. <strong>Schloss Hohenschwangau</strong> liegt
                märchenhaft am Fuß der Allgäuer Alpen. Und die <strong>Festung Kufstein</strong>
                {" "}in Tirol thront majestätisch über dem Inntal — eine Kulisse wie aus einem
                Historienfilm.
              </p>
            </div>

            <div>
              <h3 className="font-display mb-3" style={{ fontSize: "1.2rem", fontWeight: 400, color: "#1a1a1a" }}>
                Tirol und Salzburger Land — alpine Eleganz jenseits der Grenze
              </h3>
              <p className="font-body leading-[1.85]" style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}>
                Jenseits der deutschen Grenze erwarten euch in Österreich Berghochzeiten auf
                höchstem Niveau. <strong>Innsbruck</strong> verbindet Stadt und Alpen auf
                einzigartige Weise. <strong>Kitzbühel</strong> besticht durch elegante Hotels und
                legendäres Bergflair. <strong>Salzburg</strong> verzaubert mit Barockarchitektur
                und Alpenpanorama. Und <strong>Zell am See</strong> bietet See und Gletscher
                in einem Blick — alpine Eleganz, die keine Wünsche offen lässt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RITUALE ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] relative z-10">
          <SH2>
            Rituale für eure{" "}
            <Accent>Berghochzeit</Accent>
          </SH2>

          <p className="font-body mb-8" style={bodyStyle}>
            In den Alpen lassen sich Rituale gestalten, die die Kraft und Schönheit der Berge
            aufnehmen:
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                name: "Gipfelkreuz-Zeremonie",
                text: "Befestigt ein Band oder ein Schloss am Gipfelkreuz als Symbol eurer Verbindung — hoch oben, wo die Welt euch gehört. Ein Ritual, das nur in den Bergen seine volle Kraft entfaltet.",
              },
              {
                name: "Steinritual — euer Cairn",
                text: "Jeder Gast bringt einen Stein mit. Gemeinsam baut ihr ein Steinmännchen (Cairn) — ein Wegweiser, der eure Liebe symbolisiert und den Weg markiert, den ihr gemeinsam geht.",
              },
              {
                name: "Bergkräuter-Ritual",
                text: "Bindet gemeinsam einen Wildblumen-Strauß aus alpinen Kräutern und Blüten — Edelweiß, Enzian, Almrausch. Ein duftender Gruß der Berge, der eure Zeremonie mit der Natur verbindet.",
              },
              {
                name: "Feuerzeremonie auf der Alm",
                text: "Ein Lagerfeuer auf der Alm, umgeben von Bergen und Sternenhimmel. Entzündet gemeinsam eine Flamme als Symbol für die Wärme eurer Liebe — ein uraltes Ritual in seiner kraftvollsten Form.",
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
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[1000px] relative z-10">
          <SH2 center>
            Häufige Fragen zur{" "}
            <Accent>Berghochzeit in den Alpen</Accent>
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
            {cta?.title || "Eure Traumhochzeit in den Alpen"}{" "}
            <Accent>{cta?.titleAccent || "beginnt hier"}</Accent>
          </SH2>
          <p className="font-body mb-8" style={bodyStyle}>
            {cta?.text || "Ihr träumt von einer freien Trauung in den Bergen? Schreibt mir unverbindlich und erzählt von eurer Vision. Ob Almhütte, Berggipfel oder Bergsee — gemeinsam finden wir die perfekte Kulisse für euer Ja-Wort in den Alpen."}
          </p>
          <Link to={cta?.buttonLink || "/freie-trauung-kontakt"} className="btn-gold inline-block">
            {cta?.buttonText || "Jetzt Berghochzeit anfragen"}
          </Link>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="/traurednerin-bayern"
              className="font-body text-sm"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Auch Hochzeiten in München und Bayern
            </Link>
            <Link
              to="/freie-trauung-italien"
              className="font-body text-sm"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Alpen auf der Südseite: Südtirol und Gardasee
            </Link>
            <Link
              to="/traurednerin-oesterreich"
              className="font-body text-sm"
              style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Traurednerin in Österreich
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FreieTrauungAlpen;
