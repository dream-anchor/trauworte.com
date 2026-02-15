import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import SectionDivider from "@/components/SectionDivider";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingCTA from "@/components/FloatingCTA";
import ProcessTimeline from "@/components/ProcessTimeline";
import ContactForm from "@/components/ContactForm";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import useScrollReveal from "@/hooks/useScrollReveal";
import useParallax from "@/hooks/useParallax";

/* ── Bilder ── */
const IMG_STEFANIE = "/images/traurednerin-stefanie-sick-portrait.webp";
const IMG_LOCATIONS = "/images/hochzeit-europa-deutschland-oesterreich-schweiz.webp";
const IMG_BANNER = "/images/freie-trauung-hochzeitstanz-romantisch.webp";
const IMG_TESTIMONIAL = "/images/testimonial-kundin-sybille-hochzeit.webp";

/* ── Angebote (Bento) ── */
const angebote = [
  {
    title: "Persoenliche Trauungszeremonie",
    img: "/images/angebot-freie-trauungszeremonie.webp",
    alt: "Eure Trauungszeremonie nach euren Wuenschen",
    link: "/hochzeitsreden-traurednerin",
    col: "1 / 3",
    row: "1 / 2",
  },
  {
    title: "Feierliche Traurede",
    img: "/images/angebot-feierliche-traurede-rednerin.webp",
    alt: "Feierliche Traurede waehrend einer Vermaehlung",
    link: "/hochzeitsreden-traurednerin",
    col: "3 / 4",
    row: "1 / 2",
  },
  {
    title: "Moderation eurer Hochzeitsfeier",
    img: "/images/angebot-hochzeitsmoderation-dinner.webp",
    alt: "Hochzeitsmoderation von A-Z",
    link: "/meine-angebote-freie-trauung",
    col: "1 / 2",
    row: "2 / 3",
  },
  {
    title: "Trauungszeremonie im Freien",
    img: "/images/angebot-outdoor-hochzeit-strand.webp",
    alt: "Freie Hochzeit und Trauungszeremonie am Strand",
    link: "/meine-angebote-freie-trauung",
    col: "2 / 4",
    row: "2 / 3",
  },
];

/* Impressionen-Galerie */
const galerie = [
  { img: "/images/angebot-freie-trauungszeremonie.webp", alt: "Freie Trauung", span: "row" },
  { img: "/images/angebot-hochzeitsmoderation-dinner.webp", alt: "Hochzeitsmoderation", span: "" },
  { img: "/images/angebot-outdoor-hochzeit-strand.webp", alt: "Outdoor Hochzeit", span: "" },
  { img: "/images/angebot-feierliche-traurede-rednerin.webp", alt: "Traurede", span: "wide" },
];

/* Locations */
const locations = ["Deutschland", "Oesterreich", "Schweiz", "Mallorca", "Toskana"];

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

  return (
    <Layout>
      <SEO
        title="TrauWorte — Freie Trauungen voller Emotion | Stefanie Sick"
        description="Erlebt eine Trauzeremonie, die eure Liebesgeschichte erzaehlt. Freie Rednerin Stefanie Sick gestaltet persoenliche, emotionale Hochzeiten in Deutschland, Oesterreich, Schweiz und Europa."
        canonical="/"
        ogImage={IMG_STEFANIE}
      />
      <StructuredData type="main" />

      <ScrollProgress />
      <FloatingCTA />

      {/* ═══ 1. CINEMATIC HERO ═══ */}
      <section className="relative min-h-[100svh] overflow-hidden flex flex-col items-center justify-center">
        {/* Parallax Background */}
        <div
          ref={heroPx.ref}
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: `url(${IMG_BANNER})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            transform: `translateY(${heroPx.offset}px) scale(1.1)`,
          }}
        />
        {/* Warm Editorial Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(253,244,237,0.15) 0%, rgba(251,233,218,0.4) 40%, rgba(253,244,237,0.88) 100%)",
          }}
        />

        {/* Decorative top line */}
        <div
          className="absolute top-28 left-1/2 -translate-x-1/2 w-px h-14"
          style={{
            background: "linear-gradient(180deg, transparent, #B8956A)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-5 sm:px-8 max-w-[900px]">
          <Reveal>
            {/* Editorial Label */}
            <p
              className="font-body mb-6"
              style={{
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#B8956A",
              }}
            >
              Freie Trauungen in Europa
            </p>

            <h1
              className="font-display leading-[1.05] mb-7"
              style={{
                color: "#1a1a1a",
                fontSize: "clamp(2.5rem, 10vw, 6.5rem)",
                fontWeight: 400,
                letterSpacing: "0.02em",
              }}
            >
              Worte, die eure{" "}
              <Accent gold>Liebe</Accent>
              {" "}erzaehlen
            </h1>

            <p
              className="max-w-[520px] mx-auto mb-12"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "#5C4A3A",
                lineHeight: 1.7,
                letterSpacing: "0.02em",
              }}
            >
              Eure Zeremonie wird so einzigartig wie eure Geschichte — persoenlich, emotional und unvergesslich.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/freie-trauung-kontakt" className="btn-gold">
                Euren Termin anfragen
              </Link>
              <a href="#ueber" className="btn-outline-editorial">
                Mehr erfahren
              </a>
            </div>
          </Reveal>
        </div>

        {/* Scroll-Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(184,149,106,0.5)",
            }}
          >
            Scroll
          </span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="animate-bounce">
            <path d="M8 4L8 18M8 18L3 13M8 18L13 13" stroke="#B8956A" strokeWidth="1" strokeLinecap="round" />
          </svg>
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
              &raquo;Ich bin Stefanie Sick, und ich glaube daran, dass die schoensten
              Zeremonien dort entstehen, wo echte Geschichten auf echte{" "}
              <span style={{ color: "#B8956A", fontWeight: 400 }}>Emotionen</span>
              {" "}treffen.&laquo;
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
        style={{ backgroundColor: "#FBE9DA" }}
        className="overflow-hidden relative"
      >
        <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto min-h-[85vh]">
          {/* Bild: volle Hoehe */}
          <Reveal variant="left" className="md:flex-[1.1] relative overflow-hidden">
            <img
              src={IMG_STEFANIE}
              alt="Traurednerin Stefanie Sick - persoenlich und emotional"
              width={800}
              height={1000}
              loading="eager"
              className="w-full h-full object-cover min-h-[500px]"
              style={{ objectPosition: "center 20%" }}
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
              Ueber TrauWorte
            </p>

            <h2
              className="font-display leading-[1.15]"
              style={{
                color: "#1a1a1a",
                letterSpacing: "0.02em",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              }}
            >
              Eure Geschichte,{" "}
              <Accent gold>eure</Accent> Zeremonie
            </h2>

            <div
              className="my-8"
              style={{ width: "40px", height: "1px", background: "#B8956A" }}
            />

            <p
              className="font-body leading-[1.9]"
              style={{ fontSize: "16px", fontWeight: 300, color: "#5C4A3A" }}
            >
              Ich weiss, wie aufregend und ueberwaeltigend die Hochzeitsplanung
              sein kann. Deshalb ist es mir wichtig, dass ihr euch bei mir
              sofort wohlfuehlt — wie bei einer guten Freundin.
            </p>

            <p
              className="font-body leading-[1.9] mt-5"
              style={{ fontSize: "16px", fontWeight: 300, color: "#5C4A3A" }}
            >
              Als ausgebildete Hochzeitsrednerin und Moderatorin bringe ich
              jahrelange Erfahrung aus der Medien- und Eventbranche mit.
              Von der feierlichen Traurede bis zur kreativen Gestaltung eurer
              Ehegeluebde — lasst uns gemeinsam eure Liebe mit Worten feiern.
            </p>

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
              Mehr ueber mich <span style={{ fontSize: "16px" }}>&rarr;</span>
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
              Meine <Accent gold>Angebote</Accent>
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
                      background: "linear-gradient(transparent, rgba(26,26,26,0.7))",
                      padding: "60px 28px 24px",
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
        </div>
      </section>

      {/* ═══ 6. LOCATIONS — Fixed Background ═══ */}
      <section
        className="relative py-32 sm:py-40 md:py-48 overflow-hidden text-center"
        style={{
          background: `
            linear-gradient(rgba(253,244,237,0.88), rgba(253,244,237,0.92)),
            url(${IMG_LOCATIONS})
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
              Von den <Accent gold>Alpen</Accent> bis ans{" "}
              <Accent gold>Mittelmeer</Accent>
            </h2>
            <p
              className="font-body max-w-[560px] mx-auto"
              style={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: 1.9,
                color: "#5C4A3A",
              }}
            >
              Ob in <strong style={{ fontWeight: 500 }}>Deutschland</strong>,{" "}
              <strong style={{ fontWeight: 500 }}>Oesterreich</strong>,
              der <strong style={{ fontWeight: 500 }}>Schweiz</strong> oder an
              Traumdestinationen wie <strong style={{ fontWeight: 500 }}>Mallorca</strong> und
              der <strong style={{ fontWeight: 500 }}>Toskana</strong> — ich bin ueberall fuer euch da.
            </p>
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

      {/* ═══ 7. IMPRESSIONEN GALERIE ═══ */}
      <section
        style={{ backgroundColor: "#FDF4ED" }}
        className="py-28 sm:py-36 md:py-44"
      >
        <Reveal className="text-center mb-14 md:mb-16 px-5">
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
            Impressionen
          </p>
          <h2
            className="font-display"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
            }}
          >
            Momente voller <Accent gold>Emotion</Accent>
          </h2>
        </Reveal>

        <Reveal>
          <div className="editorial-gallery max-w-[1200px] mx-auto px-5 sm:px-8">
            {galerie.map((g, i) => (
              <div
                key={i}
                className={`overflow-hidden ${g.span === "row" ? "gallery-tall" : g.span === "wide" ? "gallery-wide" : ""}`}
              >
                <img
                  src={g.img}
                  alt={g.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ═══ 8. TESTIMONIAL ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-28 sm:py-36 md:py-44 relative grain">
        <Reveal className="container mx-auto px-5 sm:px-8 max-w-3xl text-center relative z-10">
          {/* Avatar */}
          <img
            src={IMG_TESTIMONIAL}
            alt="Kundin Sybille M. aus Frankfurt"
            width={80}
            height={80}
            loading="lazy"
            className="w-20 h-20 rounded-full object-cover mx-auto shadow-md mb-3"
            style={{ border: "3px solid rgba(184, 149, 106, 0.25)" }}
          />
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-10">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg
                key={s}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#B8956A"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          {/* Quote */}
          <div className="relative">
            <span
              className="absolute -top-8 left-1/2 -translate-x-1/2 select-none"
              aria-hidden="true"
              style={{
                fontFamily: "'Boska', serif",
                fontSize: "100px",
                lineHeight: 1,
                color: "rgba(184, 149, 106, 0.15)",
              }}
            >
              &ldquo;
            </span>
            <blockquote
              className="relative z-10"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#1a1a1a",
                fontSize: "clamp(1.15rem, 3vw, 1.75rem)",
                lineHeight: 1.7,
              }}
            >
              Stefanie war absolut fantastisch! Ihre Reden und
              Moderation bei unserer Hochzeit waren herzlich und beruehrend. Die
              persoenliche Note und die professionelle Praesentation haben unseren
              besonderen Tag noch unvergesslicher gemacht.
            </blockquote>
          </div>
          <GoldLine width="40px" />
          <p
            className="mt-5"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(26, 26, 26, 0.45)",
            }}
          >
            Sybille M. aus Frankfurt
          </p>
        </Reveal>
      </section>

      {/* ═══ 9. CTA + FORMULAR ═══ */}
      <ContactForm />

      {/* Divider: CTA → Footer */}
      <SectionDivider type="curveUp" fillColor="#1a1a1a" bgColor="#FBE9DA" />
    </Layout>
  );
};

export default Index;
