import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import SectionDivider from "@/components/SectionDivider";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import useScrollReveal from "@/hooks/useScrollReveal";

/* ── Lokale Bilder (WebP, SEO-optimiert) ── */
const IMG_STEFANIE = "/images/traurednerin-stefanie-sick-portrait.webp";
const IMG_ABOUT = "/images/traumhochzeit-brautpaar-zeremonie.webp";
const IMG_LOCATIONS = "/images/hochzeit-europa-deutschland-oesterreich-schweiz.webp";
const IMG_BANNER = "/images/freie-trauung-hochzeitstanz-romantisch.webp";
const IMG_TESTIMONIAL = "/images/testimonial-kundin-sybille-hochzeit.webp";

/* ── Angebote-Daten ── */
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
    alt: "Hochzeitsplanung einer freien Trauung - Hochzeitsplanerin",
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

/* ── Reveal-Wrapper ── */
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

const Index = () => {
  usePrerenderReady(true);

  return (
    <Layout>
      <SEO
        title="Unvergessliche Hochzeitszeremonien - Einzigartige Traurede"
        description="Erlebt magische Momente mit individuell gestalteten Zeremonien und Reden von TrauWorte. Eure Traumhochzeit wird emotional, persönlich und unvergesslich gestaltet."
        canonical="/"
        ogImage={IMG_STEFANIE}
      />
      <StructuredData type="main" />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[{ name: "Startseite", url: "/" }]}
      />

      {/* ═══ 1. Herzlich Willkommen ═══ */}
      <section style={{ backgroundColor: "#FCECDF" }} className="py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center max-w-6xl mx-auto">
            <Reveal variant="left" className="flex-1 space-y-6">
              <div className="separator" />
              <h2
                className="font-display text-4xl md:text-5xl leading-tight"
                style={{ color: "#111827" }}
              >
                Herzlich Willkommen
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
                erzählen, um euren besonderen Tag unvergesslich zu machen.
              </p>
            </Reveal>
            <Reveal variant="right" className="flex-1">
              <div className="img-hover shadow-lg">
                <img
                  src={IMG_STEFANIE}
                  alt="Traurednerin während einer freien Hochzeit Stefanie Sick"
                  title="Traurednerin während einer freien Hochzeit Stefanie Sick"
                  width={960}
                  height={540}
                  loading="eager"
                  className="w-full object-cover"
                  style={{ aspectRatio: "16/9", objectPosition: "50% 35%" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 2. Ich berate euch gerne ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28">
        <Reveal className="container mx-auto px-4 max-w-3xl text-center space-y-8">
          <div className="separator mx-auto" />
          <h2
            className="font-display text-3xl md:text-5xl leading-tight"
            style={{ color: "#111827" }}
          >
            Ich berate euch gerne
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

      {/* ═══ 3. Über TrauWorte ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-20 items-center max-w-6xl mx-auto">
            <Reveal variant="right" className="flex-1 space-y-6">
              <div className="separator" />
              <h2
                className="font-display text-4xl md:text-5xl leading-tight"
                style={{ color: "#111827" }}
              >
                Über TrauWorte
              </h2>
              <p className="font-body text-lg leading-relaxed" style={{ color: "rgba(17, 24, 39, 0.8)" }}>
                Ich freue mich darauf, eure Traumhochzeit mit den schönsten Worten zu untermalen.
                Emotional, persönlich und einzigartig - so gestalte ich eure Zeremonie.
              </p>
              <p className="font-body leading-relaxed" style={{ color: "rgba(17, 24, 39, 0.8)" }}>
                Von der feierlichen Traurede bis zur kreativen Gestaltung eurer Ehegelübde biete ich
                eine Vielzahl von Dienstleistungen an, um eure Hochzeit unvergesslich zu machen.
                Lasst uns gemeinsam eure Liebe mit Worten feiern.
              </p>
            </Reveal>
            <Reveal variant="left" className="flex-1">
              <div className="img-hover shadow-lg">
                <img
                  src={IMG_ABOUT}
                  alt="Traumhochzeit mit persönlicher Traurede und Ehegelübde"
                  title="Traumhochzeit mit persönlicher Traurede und Ehegelübde"
                  width={960}
                  height={540}
                  loading="lazy"
                  className="w-full object-cover"
                  style={{ aspectRatio: "16/9", objectPosition: "center center" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 4. Ich bin überall für euch da ═══ */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(253, 244, 237, 0.88)", backdropFilter: "blur(4px)" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center max-w-6xl mx-auto">
            <Reveal variant="left" className="flex-1 space-y-6">
              <div className="separator" />
              <h2
                className="font-display text-4xl md:text-5xl leading-tight"
                style={{ color: "#111827" }}
              >
                Ich bin überall für euch da
              </h2>
              <p className="font-body text-lg leading-relaxed" style={{ color: "rgba(17, 24, 39, 0.8)" }}>
                Ich stehe euch als Hochzeitsrednerin für eure Traurede gerne zur Verfügung, egal ob
                ihr in <strong>Deutschland</strong>, <strong>Österreich</strong> oder in der{" "}
                <strong>Schweiz</strong> heiratet. Auch für Destinationen wie beispielsweise{" "}
                <strong>Mallorca</strong> oder die <strong>Toskana</strong> bin ich gerne für euch da.
                Ich gestalte eure Hochzeit individuell und persönlich, überall dort, wo ihr eure Liebe
                feiern möchtet.
              </p>
            </Reveal>
            <Reveal variant="right" className="flex-1">
              <div className="img-hover shadow-lg">
                <img
                  src={IMG_LOCATIONS}
                  alt="Hochzeitsrednerin in Deutschland, Österreich, Schweiz und ganz Europa"
                  width={960}
                  height={540}
                  loading="lazy"
                  className="w-full object-cover"
                  style={{ aspectRatio: "16/9", objectPosition: "45% 20%" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <SectionDivider type="swoopLeft" fillColor="#FBE9DA" />
        </div>
      </section>

      {/* ═══ 5. Magische und unvergessliche Momente ═══ */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${IMG_BANNER})` }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(251, 233, 218, 0.66)", backdropFilter: "blur(4px)" }}
        />
        <Reveal className="container mx-auto px-4 relative z-10 max-w-3xl">
          <div className="separator mb-8" />
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold mb-10 leading-tight"
            style={{ color: "#111827" }}
          >
            Magische und unvergessliche Momente
          </h1>
          <div
            className="font-body leading-relaxed whitespace-pre-wrap"
            style={{ color: "rgba(17, 24, 39, 0.85)", fontSize: "18px", lineHeight: "30px" }}
          >
{`Euer besonderer Tag bekommt eine liebevolle Atmosphäre - mit ganz persönlichen, nur auf euch abgestimmten, Worten für eure Trauung.

Meine Mission ist es, eure Traumhochzeit mit den schönsten und herzlichsten Worten zu bereichern. Ich gestalte jeden Moment eurer Feier persönlich, emotional und unvergesslich – von der individuellen Trauungszeremonie bis hin zur feierlichen Traurede. Mit kreativer Leidenschaft und umfassender Beratung begleite ich euch auf dem Weg zu und an eurem großen Tag, um jede Erwartung zu übertreffen und bleibende Erinnerungen zu schaffen.`}
          </div>
        </Reveal>
        <div className="absolute bottom-0 left-0 w-full">
          <SectionDivider type="curveUp" fillColor="#FBE9DA" />
        </div>
      </section>

      {/* ═══ 6. Meine Angebote ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <div className="separator mx-auto mb-6" />
            <h2
              className="font-display text-4xl md:text-5xl"
              style={{ color: "#111827" }}
            >
              Meine Angebote
            </h2>
          </Reveal>
          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {angebote.map((a, i) => (
              <Link
                key={i}
                to={a.link}
                className="card-premium group flex flex-col"
              >
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
                  <p
                    className="font-body font-medium mb-4 flex-1"
                    style={{ color: "#111827" }}
                  >
                    {a.title}
                  </p>
                  <span className="btn-primary text-center text-sm">
                    Mehr Infos
                  </span>
                </div>
              </Link>
            ))}
          </StaggerGrid>
        </div>
        <SectionDivider type="slantLeft" fillColor="#FDF4ED" />
      </section>

      {/* ═══ 7. Testimonial ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-32">
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
              Stefanie war absolut fantastisch! Ihre Reden und Moderation bei unserer Hochzeit waren
              herzlich und berührend. Die persönliche Note und die professionelle Präsentation haben
              unseren besonderen Tag noch unvergesslicher gemacht. Vielen Dank, Stefanie!
            </h3>
          </div>
          <div className="separator mx-auto mb-4" />
          <p className="font-body text-base tracking-wide" style={{ color: "rgba(17, 24, 39, 0.7)" }}>
            Sybille M. aus Frankfurt
          </p>
        </Reveal>
      </section>

      {/* ═══ 8. Nehmt Kontakt mit mir auf ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 relative">
        <Reveal className="container mx-auto px-4 max-w-3xl text-center space-y-8">
          <div className="separator mx-auto" />
          <h2
            className="font-display text-3xl md:text-5xl leading-tight"
            style={{ color: "#111827" }}
          >
            Nehmt Kontakt mit mir auf
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
        <SectionDivider type="curveUp" fillColor="#FBE9DA" />
      </section>
    </Layout>
  );
};

export default Index;
