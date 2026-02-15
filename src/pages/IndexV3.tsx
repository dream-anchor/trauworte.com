import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import SectionDivider from "@/components/SectionDivider";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingCTA from "@/components/FloatingCTA";
import SocialProofBar from "@/components/SocialProofBar";
import ProcessTimeline from "@/components/ProcessTimeline";
import ContactForm from "@/components/ContactForm";
import InstagramFeed from "@/components/InstagramFeed";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import useScrollReveal from "@/hooks/useScrollReveal";
import useParallax from "@/hooks/useParallax";

/* ── Bilder ── */
const IMG_STEFANIE = "/images/traurednerin-stefanie-sick-portrait.webp";
const IMG_ABOUT = "/images/traumhochzeit-brautpaar-zeremonie.webp";
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
    size: "large" as const,
  },
  {
    title: "Moderation eurer Hochzeitsfeier",
    img: "/images/angebot-hochzeitsmoderation-dinner.webp",
    alt: "Hochzeitsmoderation von A-Z",
    link: "/meine-angebote-freie-trauung",
    size: "normal" as const,
  },
  {
    title: "Feierliche Traurede",
    img: "/images/angebot-feierliche-traurede-rednerin.webp",
    alt: "Feierliche Traurede waehrend einer Vermaehlung",
    link: "/hochzeitsreden-traurednerin",
    size: "normal" as const,
  },
  {
    title: "Beratung zur Hochzeitsplanung",
    img: "/images/angebot-hochzeitsberatung-planung.webp",
    alt: "Hochzeitsplanung einer freien Trauung",
    link: "/hochzeitsplanerin-fotograf",
    size: "normal" as const,
  },
  {
    title: "Trauungszeremonie im Freien",
    img: "/images/angebot-outdoor-hochzeit-strand.webp",
    alt: "Freie Hochzeit und Trauungszeremonie am Strand",
    link: "/meine-angebote-freie-trauung",
    size: "large" as const,
  },
  {
    title: "Kreative Ehegeluebde",
    img: "/images/angebot-individuelle-ehegeluebde.webp",
    alt: "Ehegeluebde waehrend einer freien Hochzeit",
    link: "/hochzeitsreden-traurednerin",
    size: "wide" as const,
  },
];

/* Locations */
const locations = ["Deutschland", "Oesterreich", "Schweiz", "Mallorca", "Toskana"];

/* ── Script-Font Akzent ── */
const Accent = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontStyle: "italic",
      fontWeight: 500,
    }}
  >
    {children}
  </span>
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
   INDEX V3 — "SILK EDITORIAL"
   ═══════════════════════════════════════════════ */

const IndexV3 = () => {
  usePrerenderReady(true);
  const heroPx = useParallax(0.2);

  return (
    <Layout>
      <SEO
        title="TrauWorte — Freie Trauungen voller Emotion | Stefanie Sick"
        description="Erlebt eine Trauzeremonie, die eure Liebesgeschichte erzaehlt. Freie Rednerin Stefanie Sick gestaltet persoenliche, emotionale Hochzeiten in Deutschland, Oesterreich, Schweiz und Europa."
        canonical="/v3"
        ogImage={IMG_STEFANIE}
      />
      <StructuredData type="main" />

      <ScrollProgress />
      <FloatingCTA />

      {/* ═══ 1. CINEMATIC HERO ═══ */}
      <section className="relative h-screen min-h-[600px] max-h-[1100px] overflow-hidden flex items-center justify-center">
        {/* Parallax Background */}
        <div
          ref={heroPx.ref}
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: `url(${IMG_BANNER})`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            transform: `translateY(${heroPx.offset}px) scale(1.1)`,
          }}
        />
        {/* Warm Gradient Overlay — staerker fuer Lesbarkeit */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(251,233,218,0.82) 0%, rgba(251,233,218,0.72) 40%, rgba(251,233,218,0.88) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <Reveal>
            <div
              className="font-body text-xs md:text-sm tracking-[0.25em] uppercase mb-8"
              style={{ color: "rgba(26, 26, 26, 0.7)" }}
            >
              Freie Trauungen in Europa
            </div>
            <h1
              className="font-display leading-[1.05] mb-8"
              style={{
                color: "#1a1a1a",
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                letterSpacing: "0.02em",
                textShadow: "0 1px 2px rgba(251,233,218,0.5)",
              }}
            >
              Worte, die eure
              <br />
              <Accent>Liebe</Accent> erzaehlen
            </h1>
            <p
              className="font-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
              style={{ color: "rgba(26, 26, 26, 0.8)" }}
            >
              Eure Trauzeremonie wird so einzigartig wie eure Geschichte —
              persoenlich, emotional und unvergesslich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/freie-trauung-kontakt" className="btn-gold">
                Euren Termin anfragen
              </Link>
              <a href="#ueber" className="btn-outline">
                Mehr erfahren
              </a>
            </div>
          </Reveal>
        </div>

        {/* Scroll-Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div
            className="w-6 h-10 rounded-full border-2 flex justify-center pt-2"
            style={{ borderColor: "rgba(26,26,26,0.25)" }}
          >
            <div
              className="w-1.5 h-3 rounded-full"
              style={{ backgroundColor: "rgba(26,26,26,0.35)" }}
            />
          </div>
        </div>
      </section>

      {/* ═══ 2. INTRO-STATEMENT ═══ */}
      <section
        style={{ backgroundColor: "#FDF4ED" }}
        className="py-24 md:py-36 relative grain"
      >
        <Reveal className="container mx-auto px-4 max-w-2xl text-center relative z-10 space-y-8">
          <div
            className="font-body text-xs tracking-[0.2em] uppercase"
            style={{ color: "#B8956A" }}
          >
            Herzlich Willkommen
          </div>
          <p
            className="font-body text-lg md:text-xl leading-[1.9]"
            style={{ color: "rgba(26, 26, 26, 0.8)" }}
          >
            Ich bin Stefanie Sick, ausgebildete Hochzeitsrednerin und
            Moderatorin. Seit meinem Kommunikations-Studium fuehrt mich meine
            berufliche Reise durch verschiedene Stationen und Moderationen in
            der Medien- und Eventbranche.
          </p>
          <p
            className="font-body text-lg md:text-xl leading-[1.9]"
            style={{ color: "rgba(26, 26, 26, 0.8)" }}
          >
            Mit viel Freude und Herz gestalte ich eure freie Trauung —
            in einer einzigartigen und individuellen Zeremonie werde ich eure
            Liebesgeschichte mit viel Gefuehl und Hingabe erzaehlen.
          </p>
          {/* Signatur */}
          <div
            className="pt-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1.6rem",
              color: "#B8956A",
            }}
          >
            Stefanie
          </div>
        </Reveal>
      </section>

      {/* ═══ 3. SOCIAL PROOF BAR ═══ */}
      <SocialProofBar />

      {/* ═══ 4. UEBER STEFANIE ═══ */}
      <section
        id="ueber"
        style={{ backgroundColor: "#FDF4ED" }}
        className="py-24 md:py-36 overflow-hidden relative grain"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-12 gap-8 md:gap-14 items-center max-w-6xl mx-auto">
            {/* Bild: 6 Spalten */}
            <Reveal variant="left" className="md:col-span-6">
              <div
                className="overflow-hidden shadow-2xl"
                style={{ borderRadius: "24px" }}
              >
                <img
                  src={IMG_STEFANIE}
                  alt="Traurednerin Stefanie Sick - persoenlich und emotional"
                  width={800}
                  height={1000}
                  loading="eager"
                  className="w-full object-cover"
                  style={{
                    aspectRatio: "4/5",
                    objectPosition: "50% 35%",
                  }}
                />
              </div>
            </Reveal>

            {/* Text: 6 Spalten */}
            <Reveal variant="right" className="md:col-span-6 space-y-6">
              <div
                className="font-body text-xs tracking-[0.2em] uppercase"
                style={{ color: "#B8956A" }}
              >
                Ueber TrauWorte
              </div>
              <h2
                className="font-display text-4xl md:text-5xl leading-tight"
                style={{ color: "#1a1a1a", letterSpacing: "0.02em" }}
              >
                Eure Geschichte,{" "}
                <Accent>eure</Accent> Zeremonie
              </h2>
              <p
                className="font-body text-lg leading-relaxed"
                style={{ color: "rgba(26, 26, 26, 0.75)" }}
              >
                Ich weiss, wie aufregend und ueberwältigend die Hochzeitsplanung
                sein kann. Deshalb ist es mir wichtig, dass ihr euch bei mir
                sofort wohlfuehlt — wie bei einer guten Freundin.
              </p>
              <p
                className="font-body leading-relaxed"
                style={{ color: "rgba(26, 26, 26, 0.7)" }}
              >
                Von der feierlichen Traurede bis zur kreativen Gestaltung eurer
                Ehegeluebde biete ich eine Vielzahl von Dienstleistungen an,
                um eure Hochzeit{" "}
                <Accent>unvergesslich</Accent> zu machen. Lasst uns gemeinsam
                eure Liebe mit Worten feiern.
              </p>

              {/* Inline Testimonial */}
              <div
                className="flex items-start gap-3 p-4 rounded-xl mt-4"
                style={{
                  background: "rgba(184, 149, 106, 0.08)",
                  borderLeft: "3px solid rgba(184, 149, 106, 0.4)",
                }}
              >
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "0.95rem",
                    color: "rgba(26, 26, 26, 0.65)",
                  }}
                >
                  &ldquo;Von Anfang an hatten wir das Gefuehl, in den besten Haenden zu sein.&rdquo;
                  <span
                    className="block mt-1 not-italic"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      color: "rgba(26, 26, 26, 0.4)",
                    }}
                  >
                    — Sybille M.
                  </span>
                </p>
              </div>

              <Link
                to="/ueber-traurednerin-stefanie"
                className="inline-flex items-center gap-2 font-body text-sm tracking-wide transition-colors mt-2"
                style={{ color: "#B8956A" }}
              >
                Mehr ueber mich
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 5. PROZESS-TIMELINE ═══ */}
      <ProcessTimeline />

      {/* ═══ 6. ANGEBOTE — BENTO GRID ═══ */}
      <section
        style={{ backgroundColor: "#FBE9DA" }}
        className="py-24 md:py-36 relative grain"
      >
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          {/* Header */}
          <Reveal className="text-center mb-14">
            <div
              className="font-body text-xs tracking-[0.2em] uppercase mb-4"
              style={{ color: "#B8956A" }}
            >
              Leistungen
            </div>
            <h2
              className="font-display text-4xl md:text-5xl"
              style={{ color: "#1a1a1a", letterSpacing: "0.02em" }}
            >
              Meine <Accent>Angebote</Accent>
            </h2>
          </Reveal>

          {/* Bento Grid */}
          <div className="bento-grid">
            {angebote.map((a, i) => (
              <Link
                key={i}
                to={a.link}
                className={`bento-card group ${
                  a.size === "large"
                    ? "bento-large"
                    : a.size === "wide"
                      ? "bento-wide"
                      : ""
                }`}
              >
                <img
                  src={a.img}
                  alt={a.alt}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="bento-overlay" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 z-10">
                  <h3
                    className="font-display text-xl md:text-2xl leading-tight mb-2"
                    style={{ color: "#fff", letterSpacing: "0.01em", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
                  >
                    {a.title}
                  </h3>
                  <span
                    className="font-body text-sm inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    Mehr erfahren <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divider: Angebote → Locations */}
      <SectionDivider type="slantLeft" fillColor="#FDF4ED" bgColor="#FBE9DA" />

      {/* ═══ 7. LOCATIONS ═══ */}
      <section
        className="relative py-24 md:py-36 overflow-hidden"
        style={{ backgroundColor: "#FDF4ED" }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-12 gap-8 md:gap-14 items-center max-w-6xl mx-auto">
            <Reveal variant="left" className="md:col-span-5 space-y-8">
              <div
                className="font-body text-xs tracking-[0.2em] uppercase"
                style={{ color: "#B8956A" }}
              >
                Euer Wunschort
              </div>
              <h2
                className="font-display text-4xl md:text-5xl leading-tight"
                style={{ color: "#1a1a1a", letterSpacing: "0.02em" }}
              >
                Von den <Accent>Alpen</Accent> bis ans{" "}
                <Accent>Mittelmeer</Accent>
              </h2>
              <p
                className="font-body text-lg leading-relaxed"
                style={{ color: "rgba(26, 26, 26, 0.75)" }}
              >
                Ich stehe euch als Hochzeitsrednerin gerne zur Verfuegung,
                egal ob ihr in{" "}
                <strong>Deutschland</strong>, <strong>Oesterreich</strong> oder
                in der <strong>Schweiz</strong> heiratet. Auch fuer
                Destinationen wie <strong>Mallorca</strong> oder die{" "}
                <strong>Toskana</strong> bin ich gerne fuer euch da.
              </p>
              {/* Location Pills */}
              <div className="flex flex-wrap gap-3">
                {locations.map((loc) => (
                  <span key={loc} className="location-pill">
                    {loc}
                  </span>
                ))}
              </div>
              <Link to="/freie-trauung-kontakt" className="btn-gold inline-flex">
                Euren Wunschort anfragen
              </Link>
            </Reveal>
            <Reveal variant="right" className="md:col-span-7">
              <div
                className="overflow-hidden shadow-2xl"
                style={{ borderRadius: "24px" }}
              >
                <img
                  src={IMG_LOCATIONS}
                  alt="Hochzeitsrednerin in Deutschland, Oesterreich, Schweiz und Europa"
                  width={960}
                  height={640}
                  loading="lazy"
                  className="w-full object-cover"
                  style={{
                    aspectRatio: "3/2",
                    objectPosition: "45% 20%",
                  }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Divider: Locations → Testimonial */}
      <SectionDivider type="curveUp" fillColor="#FBE9DA" bgColor="#FDF4ED" />

      {/* ═══ 8. TESTIMONIAL ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-24 md:py-36 relative grain">
        <Reveal className="container mx-auto px-4 max-w-3xl text-center relative z-10">
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
              className="relative z-10 font-display text-xl md:text-2xl lg:text-3xl leading-relaxed"
              style={{ color: "#1a1a1a" }}
            >
              Stefanie war absolut <Accent>fantastisch</Accent>! Ihre Reden und
              Moderation bei unserer Hochzeit waren herzlich und beruehrend. Die
              persoenliche Note und die professionelle Praesentation haben unseren
              besonderen Tag noch unvergesslicher gemacht.
            </blockquote>
          </div>
          <div className="separator mx-auto mt-8 mb-4" />
          <p
            className="font-body text-sm tracking-wide"
            style={{ color: "rgba(26, 26, 26, 0.55)" }}
          >
            Sybille M. aus Frankfurt
          </p>
        </Reveal>
      </section>

      {/* ═══ 9. INSTAGRAM FEED ═══ */}
      <InstagramFeed />

      {/* ═══ 10. CTA + FORMULAR ═══ */}
      <ContactForm />

      {/* Divider: CTA → Footer */}
      <SectionDivider type="curveUp" fillColor="#FBE9DA" bgColor="#FBE9DA" />
    </Layout>
  );
};

export default IndexV3;
