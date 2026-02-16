import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import SectionDivider from "@/components/SectionDivider";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingCTA from "@/components/FloatingCTA";
import ProcessTimeline from "@/components/ProcessTimeline";
import ContactForm from "@/components/ContactForm";
import HomepageFAQ from "@/components/HomepageFAQ";
import RitualSection from "@/components/RitualSection";
import MusicSection from "@/components/MusicSection";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import useScrollReveal from "@/hooks/useScrollReveal";
import useParallax from "@/hooks/useParallax";
import usePageContent from "@/hooks/usePageContent";

/* ── Bilder ── */
const IMG_STEFANIE = "/images/traurednerin-stefanie-sick-portrait.webp";
const IMG_LOCATIONS = "/images/hochzeit-europa-deutschland-oesterreich-schweiz.webp";
const IMG_BANNER = "/images/hero-startseite-hochzeitspaar-ballons.webp";
const IMG_COUPLE = "/images/hochzeitspaar-sonnenuntergang-golden-hour.webp";

/* ── Angebote (Bento) ── */
const angebote = [
  {
    title: "Persönliche Trauungszeremonie",
    desc: "Als eure Traurednerin gestalte ich eine freie Trauung, die eure Liebesgeschichte auf berührende Weise erzählt. Vom ersten Kennenlernen bis zum Ja-Wort — eure Zeremonie wird so einzigartig wie ihr selbst. Persönlich, emotional und ganz nach euren Wünschen.",
    img: "/images/angebot-freie-trauungszeremonie.webp",
    alt: "Traurednerin bei persönlicher Trauungszeremonie",
    link: "/hochzeitsreden-traurednerin",
    col: "1 / 3",
    row: "1 / 2",
  },
  {
    title: "Feierliche Traurede",
    desc: "Eine Traurede, die tief berührt. Ich schreibe eure individuelle Rede auf Basis eurer Liebesgeschichte — mit Humor, Tiefgang und den Worten, die euch wirklich berühren. Jede Traurede ist ein Unikat, das eure Gäste zu Tränen rührt.",
    img: "/images/angebot-feierliche-traurede-rednerin.webp",
    alt: "Feierliche Traurede bei einer freien Trauung",
    link: "/hochzeitsreden-traurednerin",
    col: "3 / 4",
    row: "1 / 2",
  },
  {
    title: "Moderation eurer Hochzeitsfeier",
    desc: "Ihr wünscht euch jemanden, der charmant und souverän durch euren Hochzeitstag führt? Als eure Moderatorin sorge ich dafür, dass alles reibungslos läuft — vom Empfang über das Dinner bis zur Party. Professionelle Hochzeitsmoderation mit persönlicher Note.",
    img: "/images/angebot-hochzeitsmoderation-dinner.webp",
    alt: "Hochzeitsmoderation durch Traurednerin",
    link: "/meine-angebote-freie-trauung",
    col: "1 / 2",
    row: "2 / 3",
  },
  {
    title: "Trauungszeremonie im Freien",
    desc: "Eine freie Trauung unter freiem Himmel hat ihren ganz eigenen Zauber. Ob am See, im Wald, auf einer Almhütte oder in einem Garten — ich gestalte eure Outdoor-Zeremonie so, dass sie perfekt zu euch und eurem Wunschort passt.",
    img: "/images/angebot-outdoor-hochzeit-strand.webp",
    alt: "Freie Trauung im Freien – Outdoor-Zeremonie",
    link: "/meine-angebote-freie-trauung",
    col: "2 / 4",
    row: "2 / 3",
  },
];

/* Locations */
const locations = ["München", "Bayern", "Starnberger See", "Tegernsee", "Österreich", "Schweiz", "Mallorca", "Toskana"];

/* ── Cormorant Garamond Italic Akzent ── */
const Accent = ({ children, gold = false }: { children: React.ReactNode; gold?: boolean }) => (
  <span
    style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontStyle: "italic",
      fontWeight: gold ? 400 : 500,
      color: gold ? "#B8956A" : "inherit",
      fontSize: gold ? "1.1em" : "inherit",
    }}
  >
    {children}
  </span>
);

/* ── Gold Divider Line ── */
const GoldLine = ({ width = "60px" }: { width?: string }) => (
  <div
    className="mx-auto"
    style={{
      width,
      height: "1px",
      background: "linear-gradient(90deg, transparent, #B8956A, transparent)",
    }}
  />
);

/* ── Reveal Wrapper ── */
const Reveal = ({
  children,
  className = "",
  variant = "up",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "up" | "left" | "right" | "scale";
}) => {
  const { ref, isVisible } = useScrollReveal();
  const base =
    variant === "left"
      ? "reveal-left"
      : variant === "right"
        ? "reveal-right"
        : variant === "scale"
          ? "reveal-scale"
          : "reveal";
  return (
    <div
      ref={ref}
      className={`${base} ${isVisible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

/* ═══════════════════════════════════════════════
   STARTSEITE — "SILK EDITORIAL"
   Hochglanz-Magazin, Mobile-first
   ═══════════════════════════════════════════════ */

const Index = () => {
  usePrerenderReady(true);
  const heroPx = useParallax(0.2);
  const cms = usePageContent("startseite");

  return (
    <Layout>
      <SEO
        title={cms.seoTitle || "Traurednerin München – Eure persönliche freie Trauung | TrauWorte"}
        description={cms.seoDescription || "Traurednerin Stefanie Sick gestaltet eure freie Trauung persönlich & emotional. Freie Hochzeiten in München, Bayern, Österreich, Schweiz & Europa."}
        canonical={cms.seoCanonical || "/"}
        ogImage={IMG_STEFANIE}
      />
      <StructuredData type="homepage" />

      <ScrollProgress />
      <FloatingCTA />

      {/* ═══ 1. HERO — Großes Bild, weiche Textbox über den Menschen ═══ */}
      <section className="relative overflow-hidden" style={{ height: "92vh", minHeight: "580px" }}>
        {/* Hintergrundbild — füllt die Section */}
        <div
          ref={heroPx.ref}
          className="absolute inset-0"
          style={{ transform: `translateY(${heroPx.offset * 0.1}px)` }}
        >
          <img
            src={IMG_BANNER}
            alt="Frisch verheiratetes Hochzeitspaar mit Luftballons — Freie Trauung mit Traurednerin Stefanie Sick"
            width={1600}
            height={1067}
            loading="eager"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 55%" }}
          />
        </div>

        {/* Foto-Credit */}
        <a
          href="https://unsplash.com/@alvarocvg"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-4 z-20 text-white/50 hover:text-white/80 transition-colors"
          style={{ fontSize: "10px", fontFamily: "'Inter', sans-serif" }}
        >
          Foto: Álvaro CvG / Unsplash
        </a>

        {/* Weicher Overlay — Bild sanft abdunkeln */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(180deg, rgba(253,244,237,0.3) 0%, rgba(253,244,237,0.08) 40%, rgba(253,244,237,0.08) 70%, rgba(253,244,237,0.35) 100%)",
          }}
        />

        {/* Content — blickdichte Box, Menschen verschwinden dahinter */}
        <div
          className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-8"
        >
          <Reveal>
            <div
              className="mx-auto max-w-[780px] px-8 py-12 sm:px-14 sm:py-16 md:px-20 md:py-20"
              style={{
                background: "rgba(253, 244, 237, 0.78)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderRadius: "8px",
                boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
              }}
            >
              {/* Editorial Label */}
              <p
                className="font-body mb-4"
                style={{
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#B8956A",
                }}
              >
                Freie Trauungen in Europa
              </p>

              <h1
                className="font-display leading-[1.15] mb-4"
                style={{
                  color: "#1a1a1a",
                  fontSize: "clamp(1.5rem, 4vw, 2.6rem)",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                }}
              >
                Eure Traurednerin in München für{" "}
                <Accent gold>freie Trauungen</Accent>
                {" "}voller Emotion
              </h1>

              <p
                className="max-w-[460px] mx-auto mb-7"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "#5C4A3A",
                  lineHeight: 1.65,
                  letterSpacing: "0.02em",
                }}
              >
                Persönlich, emotional und unvergesslich — Zeremonien, die so einzigartig sind wie eure Liebesgeschichte.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/4915204170255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-90"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    background: "#25D366",
                    color: "#fff",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
                {/* Termin anfragen */}
                <Link to="/freie-trauung-kontakt" className="btn-gold">
                  Euren Termin anfragen
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 2. EDITORIAL PULL QUOTE ═══ */}
      <section
        style={{ backgroundColor: "#FDF4ED" }}
        className="py-28 sm:py-36 md:py-44 relative grain"
      >
        <div className="container mx-auto px-5 sm:px-8 max-w-[720px] text-center relative z-10">
          <Reveal>
            <GoldLine width="120px" />

            <p
              className="mt-12"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.65,
                color: "#1a1a1a",
                letterSpacing: "0.01em",
              }}
            >
              &bdquo;Die schönsten Zeremonien entstehen dort, wo eure Geschichten auf eure{" "}
              <span style={{ color: "#B8956A", fontWeight: 400 }}>Emotionen</span>
              {" "}treffen. Die schönsten Worte dabei sind jene, die nicht nur gehört, sondern gefühlt werden — weil sie eurem Leben entspringen.&ldquo;
            </p>

            <div className="mt-10">
              <GoldLine width="40px" />
              <p
                className="mt-5"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#B8956A",
                }}
              >
                Stefanie Sick
              </p>
              <p
                className="mt-1"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "14px",
                  fontStyle: "italic",
                  color: "#5C4A3A",
                }}
              >
                Freie Traurednerin &amp; Moderatorin
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 3. UEBER STEFANIE — Editorial Portrait ═══ */}
      <section
        id="ueber"
        style={{ backgroundColor: "#FBE9DA", scrollMarginTop: "140px" }}
        className="overflow-hidden relative"
      >
        <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto min-h-[85vh]">
          {/* Bild: volle Hoehe */}
          <Reveal variant="left" className="md:flex-[1.1] relative overflow-hidden">
            <img
              src={IMG_STEFANIE}
              alt="Traurednerin Stefanie Sick – freie Trauungen in München und Bayern"
              width={800}
              height={1000}
              loading="eager"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 20%", minHeight: "400px", maxHeight: "85vh" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-[30%]"
              style={{ background: "linear-gradient(transparent, rgba(251,233,218,0.6))" }}
            />
          </Reveal>

          {/* Text */}
          <Reveal variant="right" className="md:flex-[0.9] flex flex-col justify-center px-6 py-16 sm:px-10 md:px-16 md:py-24">
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
              Über TrauWorte
            </p>

            <h2
              className="font-display leading-[1.15]"
              style={{
                color: "#1a1a1a",
                letterSpacing: "0.02em",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              }}
            >
              Eure Traurednerin:{" "}
              <Accent gold>Persönlich</Accent>, emotional, einzigartig
            </h2>

            <div
              className="my-8"
              style={{ width: "40px", height: "1px", background: "#B8956A" }}
            />

            <p
              className="font-body leading-[1.9]"
              style={{ fontSize: "16px", fontWeight: 300, color: "#5C4A3A" }}
            >
              Ich weiß, wie aufregend und überwältigend die Hochzeitsplanung
              sein kann. Deshalb ist es mir wichtig, dass ihr euch bei mir
              sofort wohlfühlt — wie bei einer guten Freundin.
            </p>

            <p
              className="font-body leading-[1.9] mt-5"
              style={{ fontSize: "16px", fontWeight: 300, color: "#5C4A3A" }}
            >
              Als ausgebildete Traurednerin und Moderatorin bringe ich
              jahrelange Erfahrung aus der Medien- und Eventbranche mit.
              Von der feierlichen Traurede bis zur kreativen Gestaltung eurer
              Ehegelübde — lasst uns gemeinsam eure Liebe mit Worten feiern.
            </p>

            <p
              className="font-body leading-[1.9] mt-5"
              style={{ fontSize: "16px", fontWeight: 300, color: "#5C4A3A" }}
            >
              Mein Weg zur Traurednerin begann mit der Leidenschaft für Geschichten.
              Nach meiner Ausbildung als Rednerin wusste ich: Ich möchte Paare an ihrem
              wichtigsten Tag begleiten. Als Traurednerin in München habe ich seitdem
              zahlreiche Paare durch ihre Zeremonie geführt — jede einzelne so individuell
              wie die Liebesgeschichte dahinter. Was mich antreibt? Der Moment, in dem
              ein Paar sich in die Augen schaut und spürt: Das sind unsere Worte.
            </p>

            <p
              className="font-body leading-[1.9] mt-5"
              style={{ fontSize: "16px", fontWeight: 300, color: "#5C4A3A" }}
            >
              Ob ihr eine intime freie Trauung am Starnberger See plant, eine
              große Feier in den bayerischen Alpen oder eine Destination Wedding
              auf Mallorca — ich höre euch zu, verstehe eure Wünsche und gestalte
              eine Zeremonie, die euch und eure Gäste tief berührt. Bei mir bekommt
              ihr persönliche 1:1-Betreuung von der ersten Anfrage bis zum letzten
              Wort eurer Trauung.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/meine-angebote-freie-trauung"
                className="inline-flex items-center gap-2 transition-all duration-300 hover:gap-4"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#B8956A",
                  textDecoration: "none",
                }}
              >
                Meine Angebote <span style={{ fontSize: "16px" }}>&rarr;</span>
              </Link>
            </div>

            <Link
              to="/ueber-traurednerin-stefanie"
              className="inline-flex items-center gap-2 mt-9 transition-all duration-300 hover:gap-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#B8956A",
                textDecoration: "none",
              }}
            >
              Mehr über mich <span style={{ fontSize: "16px" }}>&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══ 4. PROZESS-TIMELINE ═══ */}
      <ProcessTimeline />

      {/* ═══ 5. ANGEBOTE — EDITORIAL BENTO ═══ */}
      <section
        style={{ backgroundColor: "#FBE9DA" }}
        className="py-28 sm:py-36 md:py-44 relative grain"
      >
        <div className="container mx-auto px-5 sm:px-8 max-w-[1100px] relative z-10">
          {/* Editorial Header */}
          <Reveal className="text-center mb-16 md:mb-20">
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
              Leistungen
            </p>
            <h2
              className="font-display"
              style={{
                color: "#1a1a1a",
                letterSpacing: "0.02em",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
              }}
            >
              Meine Angebote als{" "}
              <Accent gold>Traurednerin</Accent>
            </h2>
          </Reveal>

          {/* Bento Grid — 3 Spalten, 2 Reihen */}
          <Reveal>
            <div className="editorial-bento">
              {angebote.map((a, i) => (
                <Link
                  key={i}
                  to={a.link}
                  className="editorial-bento-card group"
                  style={{
                    gridColumn: a.col,
                    gridRow: a.row,
                  }}
                >
                  <img
                    src={a.img}
                    alt={a.alt}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 z-10"
                    style={{
                      background: "linear-gradient(transparent, rgba(26,26,26,0.85))",
                      padding: "80px 28px 28px",
                    }}
                  >
                    <h3
                      className="font-display"
                      style={{
                        fontSize: "22px",
                        fontWeight: 400,
                        color: "#FDF4ED",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {a.title}
                    </h3>
                    {a.desc && (
                      <p
                        className="mt-2 hidden md:block"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "13px",
                          fontWeight: 300,
                          color: "rgba(253, 244, 237, 0.85)",
                          lineHeight: 1.6,
                        }}
                      >
                        {a.desc}
                      </p>
                    )}
                    <span
                      className="inline-block mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "11px",
                        fontWeight: 400,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#D4AF7A",
                      }}
                    >
                      Mehr erfahren &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>

          {/* Alle Angebote Link */}
          <Reveal className="text-center mt-12">
            <Link
              to="/meine-angebote-freie-trauung"
              className="inline-flex items-center gap-2 transition-all duration-300 hover:gap-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#B8956A",
                textDecoration: "none",
              }}
            >
              Alle Angebote ansehen <span style={{ fontSize: "16px" }}>&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══ 5b. LEISTUNGS-ÜBERSICHT ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-28 sm:py-36 md:py-44 relative grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[900px] relative z-10">
          <Reveal className="text-center mb-12">
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
              Euer Rundum-Sorglos-Paket
            </p>
            <h2
              className="font-display"
              style={{
                color: "#1a1a1a",
                letterSpacing: "0.02em",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
              }}
            >
              Was ihr als{" "}
              <Accent gold>Traurednerin-Paket</Accent> bekommt
            </h2>
          </Reveal>
          <Reveal>
            <div className="space-y-5">
              <p
                className="font-body leading-[1.9]"
                style={{ fontSize: "16px", fontWeight: 300, color: "#5C4A3A" }}
              >
                Wenn ihr mich als eure Traurednerin in München bucht, bekommt ihr weit
                mehr als nur eine Rede am Hochzeitstag. Alles beginnt mit einem persönlichen
                Kennenlerngespräch — telefonisch, per Video-Call oder bei einem Kaffee in München.
                Hier erfahre ich, was euch als Paar ausmacht und welche Vorstellungen ihr von
                eurer freien Trauung habt.
              </p>
              <p
                className="font-body leading-[1.9]"
                style={{ fontSize: "16px", fontWeight: 300, color: "#5C4A3A" }}
              >
                Darauf folgt ein ausführliches Paargespräch, in dem ich eure Liebesgeschichte
                kennenlerne — das Herzstück eurer individuellen Traurede. Ich schreibe eure
                Hochzeitsrede Wort für Wort, mit Feingefühl und Humor. Ihr bekommt den Entwurf
                vorab und könnt Änderungswünsche äußern. Gemeinsam stimmen wir Rituale, Musikwünsche
                und den zeitlichen Ablauf der Zeremonie ab.
              </p>
              <p
                className="font-body leading-[1.9]"
                style={{ fontSize: "16px", fontWeight: 300, color: "#5C4A3A" }}
              >
                Auf Wunsch koordiniere ich mich mit euren anderen Dienstleistern — Fotograf,
                DJ, Florist — damit alles nahtlos ineinandergreift. Am Vortag oder am Tag
                selbst mache ich bei Bedarf einen Technik-Check am Trauort. Und am Tag eurer
                Hochzeit führe ich euch als eure Traurednerin professionell und mit Herz durch
                eine Zeremonie, die euch und eure Gäste unvergesslich berührt. Auf Wunsch
                moderiere ich auch euren Hochzeitsabend.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 6. MUSIK ═══ */}
      <MusicSection />

      {/* ═══ 7. LOCATIONS — Fixed Background ═══ */}
      <section
        className="relative py-32 sm:py-40 md:py-48 overflow-hidden text-center"
        style={{
          background: `
            linear-gradient(rgba(253,244,237,0.85), rgba(253,244,237,0.9)),
            url(${IMG_COUPLE})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-5 sm:px-8 relative z-10">
          <Reveal className="space-y-7">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#B8956A",
              }}
            >
              Euer Wunschort
            </p>
            <h2
              className="font-display max-w-[600px] mx-auto"
              style={{
                color: "#1a1a1a",
                letterSpacing: "0.02em",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                lineHeight: 1.15,
              }}
            >
              Traurednerin in{" "}
              <Accent gold>München</Accent>, Bayern und ganz{" "}
              <Accent gold>Europa</Accent>
            </h2>
            <div className="space-y-5 max-w-[640px] mx-auto text-left">
              <p
                className="font-body"
                style={{
                  fontSize: "16px",
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: "#5C4A3A",
                }}
              >
                Als Traurednerin München ist Bayern mein Zuhause — und was für ein
                wunderschönes. Ob eine romantische freie Trauung am{" "}
                <strong style={{ fontWeight: 500 }}>Starnberger See</strong>, eine
                elegante Feier am{" "}
                <strong style={{ fontWeight: 500 }}>Tegernsee</strong>, eine Zeremonie
                auf einer Almhütte im{" "}
                <strong style={{ fontWeight: 500 }}>Chiemgau</strong> oder eine
                Schlosshochzeit im{" "}
                <strong style={{ fontWeight: 500 }}>Allgäu</strong> — ich kenne
                die schönsten Hochzeitslocations der Region und begleite euch als
                eure Traurednerin in München und ganz Bayern.
              </p>
              <p
                className="font-body"
                style={{
                  fontSize: "16px",
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: "#5C4A3A",
                }}
              >
                Auch über die bayerische Grenze hinaus bin ich für euch da:
                In{" "}<strong style={{ fontWeight: 500 }}>Österreich</strong>{" "}
                gestalte ich Trauungen in den Alpen, an Bergseen und in
                historischen Schlössern. In der{" "}
                <strong style={{ fontWeight: 500 }}>Schweiz</strong>{" "}
                begleite ich Paare zwischen Zürich und dem Engadin.
                Und für Destination Weddings reise ich gerne weiter:
                Die{" "}<strong style={{ fontWeight: 500 }}>Toskana</strong>{" "}
                mit ihren Zypressen und Weinbergen,{" "}
                <strong style={{ fontWeight: 500 }}>Mallorca</strong>{" "}
                mit seinen Fincas und Strandlocation — überall dort, wo
                ihr eure Traumhochzeit feiern möchtet, bin ich als eure
                Traurednerin dabei.
              </p>
              <p
                className="font-body"
                style={{
                  fontSize: "16px",
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: "#5C4A3A",
                }}
              >
                Egal ob eine intime Zeremonie zu zweit oder eine große freie
                Trauung mit 200 Gästen — ich passe mich eurem Wunschort an
                und gestalte eure Zeremonie so, dass sie perfekt zur Atmosphäre
                eurer Location passt.
              </p>
            </div>
            {/* Location Pills */}
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              {locations.map((loc) => (
                <span key={loc} className="location-pill">
                  {loc}
                </span>
              ))}
            </div>
            <Link
              to="/freie-trauung-kontakt"
              className="inline-block mt-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#B8956A",
                textDecoration: "none",
              }}
            >
              Euren Wunschort anfragen &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══ 8. TESTIMONIALS ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-28 sm:py-36 md:py-44 relative grain">
        <Helmet>
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "TrauWorte – Stefanie Sick",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "bestRating": "5",
              "ratingCount": "4",
              "reviewCount": "4"
            },
            "review": [
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Sybille & Frank" },
                "datePublished": "2024-09-15",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Stefanie war absolut fantastisch! Ihre Reden und Moderation bei unserer Hochzeit waren herzlich und berührend. Die persönliche Note und die professionelle Präsentation haben unseren besonderen Tag noch unvergesslicher gemacht."
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Julia & Thomas" },
                "datePublished": "2024-07-20",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Unsere freie Trauung am Starnberger See war dank Stefanie der emotionalste Moment unseres Lebens. Sie hat unsere Geschichte so wunderschön in Worte gefasst, dass kein Auge trocken blieb — auch bei den Herren nicht."
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Lisa & Markus" },
                "datePublished": "2024-08-10",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Wir haben lange nach der perfekten Traurednerin für unsere Hochzeit am Tegernsee gesucht — und mit Stefanie gefunden. Die Zeremonie war persönlich, berührend und voller Liebe. Unsere Gäste sprechen heute noch davon."
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Anna & Sebastian" },
                "datePublished": "2024-06-05",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Stefanie hat unsere freie Trauung auf Schloss Hohenkammer zu einem unvergesslichen Erlebnis gemacht. Sie hat zugehört, verstanden und unsere Liebe in Worte verwandelt, die wir selbst nie so hätten formulieren können. Absolute Empfehlung!"
              }
            ]
          })}</script>
        </Helmet>

        <div className="container mx-auto px-5 sm:px-8 max-w-[1000px] relative z-10">
          {/* Header */}
          <Reveal className="text-center mb-16 md:mb-20">
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
              Eure Worte über mich
            </p>
            <h2
              className="font-display"
              style={{
                color: "#1a1a1a",
                letterSpacing: "0.02em",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
              }}
            >
              Das sagen meine{" "}
              <Accent gold>Brautpaare</Accent>
            </h2>
          </Reveal>

          {/* Testimonials Grid */}
          <div className="space-y-12 md:space-y-16">
            {/* Testimonial 1 — Starnberger See */}
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h3
                  className="font-body text-xs tracking-[0.15em] uppercase mb-6"
                  style={{ color: "#B8956A" }}
                >
                  Starnberger See · Oberbayern
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
                  Unsere freie Trauung am Starnberger See war dank Stefanie der emotionalste
                  Moment unseres Lebens. Sie hat unsere Geschichte so wunderschön in Worte
                  gefasst, dass kein Auge trocken blieb — auch bei den Herren nicht.
                </blockquote>
                <GoldLine width="40px" />
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(26, 26, 26, 0.45)",
                  }}
                >
                  Julia & Thomas
                </p>
              </div>
            </Reveal>

            {/* Testimonial 2 — Tegernsee */}
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h3
                  className="font-body text-xs tracking-[0.15em] uppercase mb-6"
                  style={{ color: "#B8956A" }}
                >
                  Gut Kaltenbrunn · Tegernsee
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
                  Wir haben lange nach der perfekten Traurednerin für unsere Hochzeit am
                  Tegernsee gesucht — und mit Stefanie gefunden. Die Zeremonie war persönlich,
                  berührend und voller Liebe. Unsere Gäste sprechen heute noch davon.
                </blockquote>
                <GoldLine width="40px" />
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(26, 26, 26, 0.45)",
                  }}
                >
                  Lisa & Markus
                </p>
              </div>
            </Reveal>

            {/* Testimonial 3 — Schloss Hohenkammer */}
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h3
                  className="font-body text-xs tracking-[0.15em] uppercase mb-6"
                  style={{ color: "#B8956A" }}
                >
                  Schloss Hohenkammer · München
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
                  Stefanie hat unsere freie Trauung auf Schloss Hohenkammer zu einem
                  unvergesslichen Erlebnis gemacht. Sie hat zugehört, verstanden und unsere
                  Liebe in Worte verwandelt, die wir selbst nie so hätten formulieren können.
                  Absolute Empfehlung!
                </blockquote>
                <GoldLine width="40px" />
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(26, 26, 26, 0.45)",
                  }}
                >
                  Anna & Sebastian
                </p>
              </div>
            </Reveal>

            {/* Testimonial 4 — Sybille & Frank */}
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h3
                  className="font-body text-xs tracking-[0.15em] uppercase mb-6"
                  style={{ color: "#B8956A" }}
                >
                  Frankfurt am Main
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
                  Stefanie war absolut fantastisch! Ihre Reden und Moderation bei unserer
                  Hochzeit waren herzlich und berührend. Die persönliche Note und die
                  professionelle Präsentation haben unseren besonderen Tag noch unvergesslicher
                  gemacht.
                </blockquote>
                <GoldLine width="40px" />
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(26, 26, 26, 0.45)",
                  }}
                >
                  Sybille & Frank
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 9. RITUALE ═══ */}
      <RitualSection />

      {/* ═══ 10. FAQ ═══ */}
      <HomepageFAQ />

      {/* ═══ 11. REGIONALE LINKS ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 sm:py-24 relative grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[900px] relative z-10">
          <Reveal className="text-center mb-10">
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
              Eure Wunschregion
            </p>
            <h2
              className="font-display"
              style={{
                color: "#1a1a1a",
                letterSpacing: "0.02em",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              }}
            >
              Freie Trauungen in{" "}
              <Accent gold>ganz Europa</Accent>
            </h2>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { to: "/traurednerin-muenchen", label: "München" },
                { to: "/traurednerin-bayern", label: "Bayern" },
                { to: "/traurednerin-oesterreich", label: "Österreich" },
                { to: "/freie-trauung-alpen", label: "Alpen" },
                { to: "/freie-trauung-italien", label: "Italien" },
                { to: "/freie-trauung-gardasee", label: "Gardasee" },
                { to: "/freie-trauung-toskana", label: "Toskana" },
                { to: "/freie-trauung-mallorca", label: "Mallorca" },
              ].map((lp) => (
                <Link
                  key={lp.to}
                  to={lp.to}
                  className="location-pill transition-all duration-300 hover:scale-105"
                  style={{ textDecoration: "none" }}
                >
                  {lp.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 12. CTA + FORMULAR ═══ */}
      <ContactForm />

      {/* Divider: CTA → Footer */}
      <SectionDivider type="curveUp" fillColor="#1a1a1a" bgColor="#FBE9DA" />
    </Layout>
  );
};

export default Index;
