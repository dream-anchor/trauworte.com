import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import SectionDivider from "@/components/SectionDivider";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollProgress from "@/components/ScrollProgress";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import useScrollReveal from "@/hooks/useScrollReveal";
import useParallax from "@/hooks/useParallax";
import useCountUp from "@/hooks/useCountUp";

/* ── Bilder ── */
const IMG_STEFANIE = "/images/traurednerin-stefanie-sick-portrait.webp";
const IMG_ABOUT = "/images/traumhochzeit-brautpaar-zeremonie.webp";
const IMG_LOCATIONS = "/images/hochzeit-europa-deutschland-oesterreich-schweiz.webp";
const IMG_BANNER = "/images/freie-trauung-hochzeitstanz-romantisch.webp";
const IMG_TESTIMONIAL = "/images/testimonial-kundin-sybille-hochzeit.webp";

/* ── Angebote ── */
const angebote = [
  {
    title: "Persönliche Trauungszeremonie",
    img: "/images/angebot-freie-trauungszeremonie.webp",
    alt: "Eure Trauungszeremonie nach euren Wünschen",
    link: "/hochzeitsreden-traurednerin",
  },
  {
    title: "Moderation eures Hochzeitsdinners oder eurer Hochzeitsfeier von A-Z",
    img: "/images/angebot-hochzeitsmoderation-dinner.webp",
    alt: "Hochzeitsrede während einer freien Trauung",
    link: "/meine-angebote-freie-trauung",
  },
  {
    title: "Feierliche Traurede",
    img: "/images/angebot-feierliche-traurede-rednerin.webp",
    alt: "Stefanie Sicks feierliche Traurede während einer Vermählung",
    link: "/hochzeitsreden-traurednerin",
  },
  {
    title: "Beratung zur Hochzeitsplanung",
    img: "/images/angebot-hochzeitsberatung-planung.webp",
    alt: "Hochzeitsplanung einer freien Trauung",
    link: "/hochzeitsplanerin-fotograf",
  },
  {
    title: "Kreative Ehegelübde",
    img: "/images/angebot-individuelle-ehegeluebde.webp",
    alt: "Ehegelübde während einer freien Hochzeit",
    objectPosition: "0% 50%",
    link: "/hochzeitsreden-traurednerin",
  },
  {
    title: "Trauungszeremonie im Freien",
    img: "/images/angebot-outdoor-hochzeit-strand.webp",
    alt: "Freie Hochzeit und Trauungszeremonie am Strand",
    link: "/meine-angebote-freie-trauung",
  },
];

/* ── Statistiken ── */
const stats = [
  { value: 100, suffix: "+", label: "Trauungen" },
  { value: 5, suffix: "", label: "Länder" },
  { value: 10, suffix: "+", label: "Jahre Erfahrung" },
];

/* ── Script-Font Akzent ── */
const Accent = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 500 }}>
    {children}
  </span>
);

/* ── Reveal ── */
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
    variant === "left" ? "reveal-left"
      : variant === "right" ? "reveal-right"
        : variant === "scale" ? "reveal-scale"
          : "reveal";
  return (
    <div ref={ref} className={`${base} ${isVisible ? "reveal-visible" : ""} ${className}`}>
      {children}
    </div>
  );
};

const StaggerGrid = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`stagger-children ${isVisible ? "reveal-visible" : ""} ${className}`}>
      {children}
    </div>
  );
};

/* ── Counter ── */
const StatCounter = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { ref, isVisible } = useScrollReveal();
  const count = useCountUp(value, 2000, isVisible);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl md:text-6xl font-bold" style={{ color: "#111827" }}>
        {count}{suffix}
      </div>
      <p className="font-body text-sm tracking-widest uppercase mt-3" style={{ color: "rgba(17, 24, 39, 0.6)" }}>
        {label}
      </p>
    </div>
  );
};

const IndexV2 = () => {
  usePrerenderReady(true);

  const heroPx = useParallax(0.2);
  const bannerPx = useParallax(0.15);

  return (
    <Layout>
      <SEO
        title="Unvergessliche Hochzeitszeremonien - Einzigartige Traurede"
        description="Erlebt magische Momente mit individuell gestalteten Zeremonien und Reden von TrauWorte. Eure Traumhochzeit wird emotional, persönlich und unvergesslich gestaltet."
        canonical="/v2"
        ogImage={IMG_STEFANIE}
      />
      <StructuredData type="main" />
      <StructuredData type="breadcrumb" breadcrumbs={[{ name: "Startseite", url: "/" }]} />

      <ScrollProgress />
      <FloatingCTA />

      {/* ═══ 1. CINEMATIC HERO ═══ */}
      <section className="relative h-screen min-h-[600px] max-h-[1000px] overflow-hidden flex items-center justify-center">
        {/* Parallax Hintergrundbild */}
        <div
          ref={heroPx.ref}
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url(${IMG_BANNER})`,
            transform: `translateY(${heroPx.offset}px) scale(1.1)`,
          }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(251,233,218,0.75) 0%, rgba(251,233,218,0.55) 50%, rgba(251,233,218,0.85) 100%)" }}
        />
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <Reveal>
            <div className="separator mx-auto mb-8" />
            <h1
              className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-6"
              style={{ color: "#111827" }}
            >
              Magische und<br /><Accent>unvergessliche</Accent> Momente
            </h1>
            <p
              className="font-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
              style={{ color: "rgba(17, 24, 39, 0.75)" }}
            >
              Eure Traumhochzeit wird emotional, persönlich und einzigartig —
              mit Worten, die von Herzen kommen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/freie-trauung-kontakt" className="btn-primary">
                Unverbindlich anfragen
              </Link>
              <Link to="/meine-angebote-freie-trauung" className="btn-outline">
                Meine Angebote
              </Link>
            </div>
          </Reveal>
        </div>
        {/* Scroll-Hinweis */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 flex justify-center pt-2" style={{ borderColor: "rgba(17,24,39,0.3)" }}>
            <div className="w-1.5 h-3 rounded-full" style={{ backgroundColor: "rgba(17,24,39,0.4)" }} />
          </div>
        </div>
      </section>

      {/* ═══ 2. Herzlich Willkommen — Asymmetrisch ═══ */}
      <section style={{ backgroundColor: "#FCECDF" }} className="py-24 md:py-36 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            {/* Bild: 7 Spalten, leicht nach oben versetzt */}
            <Reveal variant="left" className="md:col-span-7 md:-mt-12">
              <div className="img-hover shadow-2xl" style={{ borderRadius: "20px" }}>
                <img
                  src={IMG_STEFANIE}
                  alt="Traurednerin während einer freien Hochzeit Stefanie Sick"
                  width={960}
                  height={540}
                  loading="eager"
                  className="w-full object-cover"
                  style={{ aspectRatio: "16/9", objectPosition: "50% 35%", borderRadius: "20px" }}
                />
              </div>
            </Reveal>
            {/* Text: 5 Spalten */}
            <Reveal variant="right" className="md:col-span-5 space-y-6">
              <div className="separator" />
              <h2 className="font-display text-4xl md:text-5xl leading-tight" style={{ color: "#111827" }}>
                Herzlich <Accent>Willkommen</Accent>
              </h2>
              <p className="font-body text-lg leading-relaxed" style={{ color: "#111827" }}>
                Ich bin Stefanie Sick, ausgebildete Hochzeitsrednerin und Moderatorin.
              </p>
              <p className="font-body leading-relaxed" style={{ color: "rgba(17, 24, 39, 0.8)" }}>
                Seit meinem Kommunikations-Studium führt mich meine berufliche Reise durch verschiedene
                Stationen und Moderationen in der Medien- und Eventbranche.
              </p>
              <p className="font-body leading-relaxed" style={{ color: "rgba(17, 24, 39, 0.8)" }}>
                Mit viel Freude und Herz gestalte ich eure freie Trauung. In einer einzigartigen und
                individuellen Zeremonie werde ich eure Liebesgeschichte mit viel Gefühl und Hingabe
                erzählen, um euren besonderen Tag <Accent>unvergesslich</Accent> zu machen.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 3. Social Proof — Animierte Zahlen ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. Ich berate euch gerne ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="pb-24 md:pb-32">
        <Reveal className="container mx-auto px-4 max-w-3xl text-center space-y-8">
          <div className="separator mx-auto" />
          <h2 className="font-display text-3xl md:text-5xl leading-tight" style={{ color: "#111827" }}>
            Ich berate euch <Accent>gerne</Accent>
          </h2>
          <p className="font-body text-lg md:text-xl leading-relaxed" style={{ color: "rgba(17, 24, 39, 0.8)" }}>
            Mit meiner emotionalen und individuell gestalteten Hochzeitsrede wird eure Trauzeremonie
            zu einem unvergesslichen Erlebnis.
          </p>
          <div className="pt-4">
            <Link to="/freie-trauung-kontakt" className="btn-outline">
              Jetzt unverbindlich beraten lassen
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ═══ 5. Über TrauWorte — Asymmetrisch (gespiegelt) ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-24 md:py-36 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            {/* Text: 5 Spalten */}
            <Reveal variant="left" className="md:col-span-5 space-y-6 md:order-1">
              <div className="separator" />
              <h2 className="font-display text-4xl md:text-5xl leading-tight" style={{ color: "#111827" }}>
                Über <Accent>TrauWorte</Accent>
              </h2>
              <p className="font-body text-lg leading-relaxed" style={{ color: "rgba(17, 24, 39, 0.8)" }}>
                Ich freue mich darauf, eure Traumhochzeit mit den schönsten Worten zu untermalen.
                Emotional, persönlich und einzigartig - so gestalte ich eure Zeremonie.
              </p>
              <p className="font-body leading-relaxed" style={{ color: "rgba(17, 24, 39, 0.8)" }}>
                Von der feierlichen Traurede bis zur kreativen Gestaltung eurer Ehegelübde biete ich
                eine Vielzahl von Dienstleistungen an, um eure Hochzeit <Accent>unvergesslich</Accent> zu machen.
                Lasst uns gemeinsam eure Liebe mit Worten feiern.
              </p>
            </Reveal>
            {/* Bild: 7 Spalten */}
            <Reveal variant="right" className="md:col-span-7 md:order-2 md:mt-12">
              <div className="img-hover shadow-2xl" style={{ borderRadius: "20px" }}>
                <img
                  src={IMG_ABOUT}
                  alt="Traumhochzeit mit persönlicher Traurede und Ehegelübde"
                  width={960}
                  height={540}
                  loading="lazy"
                  className="w-full object-cover"
                  style={{ aspectRatio: "16/9", objectPosition: "center center", borderRadius: "20px" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 6. Standorte — Parallax ═══ */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(253, 244, 237, 0.88)", backdropFilter: "blur(4px)" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <Reveal variant="left" className="md:col-span-5 space-y-6">
              <div className="separator" />
              <h2 className="font-display text-4xl md:text-5xl leading-tight" style={{ color: "#111827" }}>
                Ich bin überall für <Accent>euch</Accent> da
              </h2>
              <p className="font-body text-lg leading-relaxed" style={{ color: "rgba(17, 24, 39, 0.8)" }}>
                Ich stehe euch als Hochzeitsrednerin für eure Traurede gerne zur Verfügung, egal ob
                ihr in <strong>Deutschland</strong>, <strong>Österreich</strong> oder in der{" "}
                <strong>Schweiz</strong> heiratet. Auch für Destinationen wie beispielsweise{" "}
                <strong>Mallorca</strong> oder die <strong>Toskana</strong> bin ich gerne für euch da.
              </p>
            </Reveal>
            <Reveal variant="right" className="md:col-span-7">
              <div className="img-hover shadow-2xl" style={{ borderRadius: "20px" }}>
                <img
                  src={IMG_LOCATIONS}
                  alt="Hochzeitsrednerin in Deutschland, Österreich, Schweiz und ganz Europa"
                  width={960}
                  height={540}
                  loading="lazy"
                  className="w-full object-cover"
                  style={{ aspectRatio: "16/9", objectPosition: "45% 20%", borderRadius: "20px" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <SectionDivider type="swoopLeft" fillColor="#FBE9DA" />
        </div>
      </section>

      {/* ═══ 7. Statement — Parallax-Banner ═══ */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div
          ref={bannerPx.ref}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${IMG_BANNER})`,
            transform: `translateY(${bannerPx.offset}px) scale(1.15)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(251,233,218,0.7) 0%, rgba(251,233,218,0.5) 50%, rgba(251,233,218,0.8) 100%)" }}
        />
        <Reveal className="container mx-auto px-4 relative z-10 max-w-3xl text-center">
          <div className="separator mx-auto mb-8" />
          <div
            className="font-body text-lg md:text-xl leading-relaxed"
            style={{ color: "rgba(17, 24, 39, 0.85)", lineHeight: "1.9" }}
          >
            <p className="mb-6">
              Euer besonderer Tag bekommt eine <Accent>liebevolle Atmosphäre</Accent> — mit ganz persönlichen,
              nur auf euch abgestimmten Worten für eure Trauung.
            </p>
            <p>
              Meine Mission ist es, eure Traumhochzeit mit den schönsten und herzlichsten Worten zu bereichern.
              Ich gestalte jeden Moment eurer Feier persönlich, emotional und <Accent>unvergesslich</Accent>.
            </p>
          </div>
        </Reveal>
        <div className="absolute bottom-0 left-0 w-full">
          <SectionDivider type="curveUp" fillColor="#FBE9DA" />
        </div>
      </section>

      {/* ═══ 8. Meine Angebote ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-24 md:py-36">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <div className="separator mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl" style={{ color: "#111827" }}>
              Meine <Accent>Angebote</Accent>
            </h2>
          </Reveal>
          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {angebote.map((a, i) => (
              <Link key={i} to={a.link} className="card-premium group flex flex-col">
                <div className="overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.alt}
                    width={540}
                    height={540}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{
                      aspectRatio: "1/1",
                      objectPosition: a.objectPosition || "center center",
                    }}
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="font-body font-medium mb-4 flex-1" style={{ color: "#111827" }}>
                    {a.title}
                  </p>
                  <span className="btn-primary text-center text-sm">Mehr Infos</span>
                </div>
              </Link>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Divider: Angebote → Testimonial */}
      <SectionDivider type="slantLeft" fillColor="#FDF4ED" bgColor="#FBE9DA" />

      {/* ═══ 9. Testimonial ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-24 md:py-36">
        <Reveal className="container mx-auto px-4 max-w-4xl text-center">
          <div className="relative inline-block">
            <img
              src={IMG_TESTIMONIAL}
              alt="Kundin Sybille M. aus Frankfurt"
              width={96}
              height={96}
              loading="lazy"
              className="w-24 h-24 rounded-full object-cover mx-auto shadow-md"
              style={{ border: "3px solid rgba(184, 149, 106, 0.3)" }}
            />
          </div>
          <div className="relative mt-10 mb-8">
            <span className="quote-mark select-none" aria-hidden="true">"</span>
            <h3
              className="font-display text-xl md:text-2xl lg:text-3xl leading-relaxed relative z-10"
              style={{ color: "#111827" }}
            >
              Stefanie war absolut <Accent>fantastisch</Accent>! Ihre Reden und Moderation bei unserer Hochzeit waren
              herzlich und berührend. Die persönliche Note und die professionelle Präsentation haben
              unseren besonderen Tag noch unvergesslicher gemacht.
            </h3>
          </div>
          <div className="separator mx-auto mb-4" />
          <p className="font-body text-base tracking-wide" style={{ color: "rgba(17, 24, 39, 0.7)" }}>
            Sybille M. aus Frankfurt
          </p>
        </Reveal>
      </section>

      {/* ═══ 10. CTA ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-24 md:py-32">
        <Reveal className="container mx-auto px-4 max-w-3xl text-center space-y-8">
          <div className="separator mx-auto" />
          <h2 className="font-display text-3xl md:text-5xl leading-tight" style={{ color: "#111827" }}>
            Nehmt <Accent>Kontakt</Accent> mit mir auf
          </h2>
          <p className="font-body text-lg leading-relaxed" style={{ color: "rgba(17, 24, 39, 0.8)" }}>
            Lasst uns eure Traumhochzeit unvergesslich machen und nehmt jetzt unverbindlich Kontakt
            mit mir auf.
          </p>
          <div className="pt-4">
            <Link to="/freie-trauung-kontakt" className="btn-primary">
              Jetzt Kontakt aufnehmen
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Divider: CTA → Footer */}
      <SectionDivider type="curveUp" fillColor="#FBE9DA" bgColor="#FDF4ED" />
    </Layout>
  );
};

export default IndexV2;
