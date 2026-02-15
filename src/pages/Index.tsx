import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import SectionDivider from "@/components/SectionDivider";
import usePrerenderReady from "@/hooks/usePrerenderReady";

/* ── Bilder ── */
const IMG_STEFANIE =
  "https://cdn.durable.co/blocks/fD5L1qAV0Jq1mm6juDiJouPrpzDiaAxwG2jUhpHMKJ59qZwRZaEDDQdsXR8pmXeR.png";
const IMG_ABOUT =
  "https://cdn.durable.co/shutterstock/32KzhE001knAG9Tdks4KwoABZhoKOfvP33Zkox667naeeMPtK7hf7ita1Nv1jB7B.jpeg";
const IMG_LOCATIONS =
  "https://cdn.durable.co/shutterstock/19UsepJJI79iMphdecQBVR3YoAjQFl2UiP3xRb2avIimQZ9cLaahvfyulik4yxSC.jpeg";
const IMG_BANNER =
  "https://cdn.durable.co/shutterstock/14rl8pNeIZJXkEJIWMIE9UEVNt0JbbYPBg7g17WYPAovBa5amUSd5KJ0Y3zVosjT.jpeg";
const IMG_TESTIMONIAL =
  "https://cdn.durable.co/shutterstock/2bcDWS6MQREb8GLqc24h5eW57yNxwWHyPxG4rvX9N8GDfb8dKXtwt2PanXvCgKJR.jpeg";

/* ── Angebote-Daten ── */
const angebote = [
  {
    title: "Persönliche Trauungszeremonie",
    img: "https://cdn.durable.co/shutterstock/1bmUV28L4mWx0qNACJaUsJ6ZFiZzMTE0RUCWxikO4Yyuom54fZITzEf9FG3UcZL5.jpeg",
    alt: "Eure Trauungszeremonie nach euren Wünschen",
  },
  {
    title: "Moderation eures Hochzeitsdinners oder eurer Hochzeitsfeier von A-Z",
    img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwzfHxXZWRkaW5nJTIwRGlubmVyfGVufDB8fHx8MTcxNTcyMDczOXww&ixlib=rb-4.0.3&q=80&w=1080",
    alt: "Hochzeitsrede während einer freien Trauung",
  },
  {
    title: "Feierliche Traurede",
    img: "https://cdn.durable.co/blocks/1d9jKiHP9rOLaAegmtxI20pDUpwojNN70eHDkvLZk6FfUNyBrgGnXMFsMKpRGss5.png",
    alt: "Stefanie Sicks feierliche Traurede während einer Vermählung",
  },
  {
    title: "Beratung zur Hochzeitsplanung",
    img: "https://cdn.durable.co/shutterstock/1eo1c1LaWskyy8BSovyzuu00BxWtR7UYbBJG9gP6SWI3vZCUePYVy3iGE4ROioWS.jpeg",
    alt: "Hochzeitsplanung einer freien Trauung - Hochzeitsplanerin",
  },
  {
    title: "Kreative Ehegelübde",
    img: "https://cdn.durable.co/shutterstock/3KlhuJuXWpqtSLY2SI2z4b45VGP0Uehyo1X8xiOBgAkvyvQ48O1knC9qn69hBjNq.jpeg",
    alt: "Ehegelübde während einer freien Hochzeit",
    objectPosition: "0% 50%",
  },
  {
    title: "Trauungszeremonie im Freien",
    img: "https://images.unsplash.com/photo-1515232389446-a17ce9ca7434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyNXx8V2VkZGluZyUyMG91dGRvb3J8ZW58MHx8fHwxNzE1NzIwNzcwfDA&ixlib=rb-4.0.3&q=80&w=1080",
    alt: "Freie Hochzeit und Trauungszeremonie am Strand",
  },
];

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
      <section style={{ backgroundColor: "#FCECDF" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center max-w-6xl mx-auto">
            {/* Text */}
            <div className="flex-1 space-y-5">
              <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
                Herzlich Willkommen
              </h2>
              <p className="font-body leading-relaxed" style={{ color: "rgb(17, 24, 39)" }}>
                Ich bin Stefanie Sick, ausgebildete Hochzeitsrednerin und Moderatorin.
              </p>
              <p className="font-body leading-relaxed" style={{ color: "rgb(17, 24, 39)" }}>
                Seit meinem Kommunikations-Studium führt mich meine berufliche Reise durch verschiedene
                Stationen und Moderationen in der Medien- und Eventbranche.
              </p>
              <p className="font-body leading-relaxed" style={{ color: "rgb(17, 24, 39)" }}>
                Mit viel Freude und Herz gestalte ich eure freie Trauung. In einer einzigartigen und
                individuellen Zeremonie werde ich eure Liebesgeschichte mit viel Gefühl und Hingabe
                erzählen, um euren besonderen Tag unvergesslich zu machen.
              </p>
            </div>
            {/* Bild */}
            <div className="flex-1">
              <img
                src={IMG_STEFANIE}
                alt="Traurednerin während einer freien Hochzeit Stefanie Sick"
                title="Traurednerin während einer freien Hochzeit Stefanie Sick"
                width={960}
                height={540}
                loading="eager"
                className="w-full rounded-sm object-cover"
                style={{ aspectRatio: "16/9", objectPosition: "50% 35%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. Ich berate euch gerne ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
            Ich berate euch gerne
          </h2>
          <p className="font-body text-lg leading-relaxed" style={{ color: "rgb(17, 24, 39)" }}>
            Mit meiner emotionalen und individuell gestalteten Hochzeitsrede wird eure Trauzeremonie
            zu einem unvergesslichen Erlebnis.
          </p>
          <div className="pt-2">
            <Link
              to="/freie-trauung-kontakt"
              className="inline-block font-body text-sm px-6 py-3 rounded-lg border transition-colors hover:bg-gray-100"
              style={{ borderColor: "#111827", color: "#111827" }}
            >
              Jetzt unverbindlich beraten lassen
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 3. Über TrauWorte ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-20 items-center max-w-6xl mx-auto">
            {/* Text (rechts im Desktop) */}
            <div className="flex-1 space-y-5">
              <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
                Über TrauWorte
              </h2>
              <p className="font-body leading-relaxed" style={{ color: "rgb(17, 24, 39)" }}>
                Ich freue mich darauf, eure Traumhochzeit mit den schönsten Worten zu untermalen.
                Emotional, persönlich und einzigartig - so gestalte ich eure Zeremonie.
              </p>
              <p className="font-body leading-relaxed" style={{ color: "rgb(17, 24, 39)" }}>
                Von der feierlichen Traurede bis zur kreativen Gestaltung eurer Ehegelübde biete ich
                eine Vielzahl von Dienstleistungen an, um eure Hochzeit unvergesslich zu machen.
                Lasst uns gemeinsam eure Liebe mit Worten feiern.
              </p>
            </div>
            {/* Bild (links im Desktop) */}
            <div className="flex-1">
              <img
                src={IMG_ABOUT}
                alt="Traumhochzeit mit persönlicher Traurede und Ehegelübde"
                title="Traumhochzeit mit persönlicher Traurede und Ehegelübde"
                width={960}
                height={540}
                loading="lazy"
                className="w-full rounded-sm object-cover"
                style={{ aspectRatio: "16/9", objectPosition: "center center" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. Ich bin überall für euch da ═══ */}
      <section className="relative py-16 md:py-24">
        {/* Hintergrund-Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(253, 244, 237, 0.88)", backdropFilter: "blur(4px)" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center max-w-6xl mx-auto">
            {/* Text */}
            <div className="flex-1 space-y-5">
              <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
                Ich bin überall für euch da
              </h2>
              <p className="font-body leading-relaxed" style={{ color: "rgb(17, 24, 39)" }}>
                Ich stehe euch als Hochzeitsrednerin für eure Traurede gerne zur Verfügung, egal ob
                ihr in <strong>Deutschland</strong>, <strong>Österreich</strong> oder in der{" "}
                <strong>Schweiz</strong> heiratet. Auch für Destinationen wie beispielsweise{" "}
                <strong>Mallorca</strong> oder die <strong>Toskana</strong> bin ich gerne für euch da.
                Ich gestalte eure Hochzeit individuell und persönlich, überall dort, wo ihr eure Liebe
                feiern möchtet.
              </p>
            </div>
            {/* Bild */}
            <div className="flex-1">
              <img
                src={IMG_LOCATIONS}
                alt="Hochzeitsrednerin in Deutschland, Österreich, Schweiz und ganz Europa, wie zum Beispiel Mallorca in Spanien oder Toskana in Italien"
                width={960}
                height={540}
                loading="lazy"
                className="w-full rounded-sm object-cover"
                style={{ aspectRatio: "16/9", objectPosition: "45% 20%" }}
              />
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <SectionDivider type="swoopLeft" fillColor="#FBE9DA" />
        </div>
      </section>

      {/* ═══ 5. Magische und unvergessliche Momente ═══ */}
      <section className="relative py-20 md:py-32">
        {/* Hintergrundbild */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG_BANNER})` }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(251, 233, 218, 0.66)", backdropFilter: "blur(4px)" }}
        />
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8"
            style={{ color: "#111827" }}
          >
            Magische und unvergessliche Momente
          </h1>
          <div className="font-body leading-relaxed whitespace-pre-wrap" style={{ color: "rgb(17, 24, 39)", fontSize: "18px", lineHeight: "26px" }}>
{`Euer besonderer Tag bekommt eine liebevolle Atmosphäre - mit ganz persönlichen, nur auf euch abgestimmten, Worten für eure Trauung.

Meine Mission ist es, eure Traumhochzeit mit den schönsten und herzlichsten Worten zu bereichern. Ich gestalte jeden Moment eurer Feier persönlich, emotional und unvergesslich – von der individuellen Trauungszeremonie bis hin zur feierlichen Traurede. Mit kreativer Leidenschaft und umfassender Beratung begleite ich euch auf dem Weg zu und an eurem großen Tag, um jede Erwartung zu übertreffen und bleibende Erinnerungen zu schaffen.`}
          </div>
        </div>
        {/* Divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <SectionDivider type="curveUp" fillColor="#FBE9DA" />
        </div>
      </section>

      {/* ═══ 6. Meine Angebote ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2
            className="font-display text-3xl md:text-4xl text-center mb-12"
            style={{ color: "#111827" }}
          >
            Meine Angebote
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {angebote.map((a, i) => (
              <div key={i} className="flex flex-col">
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={a.img}
                    alt={a.alt}
                    width={540}
                    height={540}
                    loading="lazy"
                    className="w-full object-cover"
                    style={{
                      aspectRatio: "1/1",
                      objectPosition: a.objectPosition || "center center",
                    }}
                  />
                </div>
                <p
                  className="font-body mt-4 mb-4"
                  style={{ color: "rgb(17, 24, 39)" }}
                >
                  {a.title}
                </p>
                <Link
                  to="/meine-angebote-freie-trauung/hochzeitsreden-traurednerin"
                  className="inline-block font-body text-sm px-5 py-2.5 text-white transition-opacity hover:opacity-80"
                  style={{ backgroundColor: "#333333", borderRadius: "0px" }}
                >
                  Mehr Infos
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* Divider */}
        <SectionDivider type="slantLeft" fillColor="#FDF4ED" />
      </section>

      {/* ═══ 7. Testimonial ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <img
            src={IMG_TESTIMONIAL}
            alt="- Sybille M. aus Frankfurt"
            width={96}
            height={96}
            loading="lazy"
            className="w-24 h-24 rounded-full object-cover mx-auto"
          />
          <h3
            className="font-display text-xl md:text-2xl leading-relaxed"
            style={{ color: "#111827" }}
          >
            Stefanie war absolut fantastisch! Ihre Reden und Moderation bei unserer Hochzeit waren
            herzlich und berührend. Die persönliche Note und die professionelle Präsentation haben
            unseren besonderen Tag noch unvergesslicher gemacht. Vielen Dank, Stefanie!
          </h3>
          <p className="font-body text-lg" style={{ color: "rgb(17, 24, 39)" }}>
            - Sybille M. aus Frankfurt
          </p>
        </div>
      </section>

      {/* ═══ 8. Nehmt Kontakt mit mir auf ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: "#111827" }}>
            Nehmt Kontakt mit mir auf
          </h2>
          <p className="font-body leading-relaxed" style={{ color: "rgb(17, 24, 39)" }}>
            Lasst uns eure Traumhochzeit unvergesslich machen und nehmt jetzt unverbindlich Kontakt
            mit mir auf.
          </p>
          <div className="pt-2">
            <Link
              to="/freie-trauung-kontakt"
              className="inline-block font-body text-sm px-6 py-3 rounded-lg border transition-colors hover:bg-gray-100"
              style={{ borderColor: "#111827", color: "#111827" }}
            >
              Jetzt Kontakt aufnehmen
            </Link>
          </div>
        </div>
        {/* Divider */}
        <div className="mt-16">
          <SectionDivider type="curveUp" fillColor="#FBE9DA" />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
