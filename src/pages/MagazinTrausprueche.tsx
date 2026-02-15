import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import ContactForm from "@/components/ContactForm";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import useScrollReveal from "@/hooks/useScrollReveal";

/* ─── Inline-Komponenten ─── */
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

const SH2 = ({ children, center }: { children: React.ReactNode; center?: boolean }) => (
  <h2
    className={`font-display mb-8 ${center ? "text-center" : ""}`}
    style={{
      color: "#1a1a1a",
      letterSpacing: "0.02em",
      fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
    }}
  >
    {children}
  </h2>
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

const GoldLine = () => (
  <div style={{ width: "40px", height: "1px", background: "#B8956A", margin: "40px 0" }} />
);

const bodyStyle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: 300,
  lineHeight: 1.9,
  color: "#5C4A3A",
};

/* ─── Trauspruch-Komponente ─── */
const Trauspruch = ({
  text,
  author,
  context,
  exclusive,
}: {
  text: string;
  author: string;
  context: string;
  exclusive?: boolean;
}) => (
  <blockquote
    className="my-6 pl-6 py-4"
    style={{
      borderLeft: "2px solid #B8956A",
      background: "rgba(253, 244, 237, 0.4)",
      borderRadius: "0 8px 8px 0",
      padding: "16px 20px 16px 24px",
    }}
  >
    <p
      className="font-display"
      style={{
        fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
        fontWeight: 400,
        color: "#1a1a1a",
        lineHeight: 1.6,
        fontStyle: "italic",
      }}
    >
      „{text}"
    </p>
    <footer className="mt-3 flex items-center gap-2 flex-wrap">
      <cite
        className="font-body not-italic"
        style={{ fontSize: "13px", color: "#B8956A", fontWeight: 500 }}
      >
        — {author}
      </cite>
      {exclusive && (
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#B8956A",
            background: "rgba(184, 149, 106, 0.12)",
            padding: "2px 8px",
            borderRadius: "4px",
          }}
        >
          Exklusiv
        </span>
      )}
    </footer>
    <p className="font-body mt-2" style={{ fontSize: "14px", color: "#5C4A3A", lineHeight: 1.7 }}>
      {context}
    </p>
  </blockquote>
);

/* ─── FAQ-Schema ─── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wo werden Trausprüche in der freien Trauung verwendet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trausprüche können in verschiedenen Momenten der freien Trauung eingesetzt werden: als Teil der Traurede, als eigenständige Lesung durch Gäste oder Familie, als Einleitung zu den Ehegelübden, auf der Hochzeitseinladung oder auf Menükarten und Tischkärtchen.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich meinen eigenen Trauspruch schreiben?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, eigene Trausprüche sind oft am berührendsten. Tipps: Haltet den Spruch kurz (1-3 Sätze), seid ehrlich und authentisch, und lest ihn laut vor, bevor ihr euch entscheidet.",
      },
    },
    {
      "@type": "Question",
      name: "Wie viele Trausprüche gehören in eine freie Trauung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In der Regel wirken 1-2 Trausprüche am stärksten. Qualität vor Quantität. Eure Traurednerin bettet den Spruch in die Traurede ein, sodass er zum emotionalen Höhepunkt der Zeremonie wird.",
      },
    },
    {
      "@type": "Question",
      name: "Muss ein Trauspruch religiös sein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein. Bei einer freien Trauung gibt es keine Vorgaben. Weltliche, poetische, literarische oder ganz persönliche Trausprüche passen perfekt und spiegeln eure individuelle Zeremonie wider.",
      },
    },
    {
      "@type": "Question",
      name: "Dürfen Gäste einen Trauspruch vortragen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, das ist eine wunderschöne Möglichkeit, eure Gäste in die Zeremonie einzubinden. Als Lesung oder Fürsprache kann ein Trauspruch, vorgetragen von Freunden oder Familie, sehr berührend sein. Stimmt das Vorgehen am besten mit eurer Traurednerin ab.",
      },
    },
  ],
};

/* ─── Article-Schema ─── */
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Die schönsten Trausprüche für eure freie Trauung",
  description:
    "50+ persönliche Trausprüche für eure freie Trauung: romantisch, modern, lustig oder poetisch. Traurednerin Stefanie Sick zeigt euch die schönsten Worte.",
  author: {
    "@type": "Person",
    name: "Stefanie Sick",
    jobTitle: "Traurednerin",
    url: "https://trauworte.com/ueber-traurednerin-stefanie",
  },
  publisher: {
    "@id": "https://trauworte.com/#organization",
  },
  mainEntityOfPage: "https://trauworte.com/magazin/trausprueche-freie-trauung",
  inLanguage: "de-DE",
  about: ["Trausprüche", "Freie Trauung", "Hochzeit"],
};

/* ─── Reveal-Wrapper ─── */
const Reveal = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`reveal ${isVisible ? "reveal-visible" : ""} ${className}`}>
      {children}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   SEITE: /magazin/trausprueche-freie-trauung
   ═══════════════════════════════════════════════════════════════ */
const MagazinTrausprueche = () => {
  usePrerenderReady(true);

  return (
    <Layout>
      <SEO
        title="Die schönsten Trausprüche für eure freie Trauung | TrauWorte"
        description="50+ persönliche Trausprüche für eure freie Trauung: romantisch, modern, lustig oder poetisch. Traurednerin Stefanie Sick zeigt euch die schönsten Worte."
        canonical="/magazin/trausprueche-freie-trauung"
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Magazin", url: "/magazin" },
          { name: "Trausprüche", url: "/magazin/trausprueche-freie-trauung" },
        ]}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* ═══ HERO ═══ */}
      <section
        style={{ backgroundColor: "#FCECDF" }}
        className="pt-32 pb-20 md:pt-40 md:pb-28 relative"
      >
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] text-center">
          <Label>Inspiration</Label>
          <h1
            className="font-display"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
            }}
          >
            Die schönsten Trausprüche für eure{" "}
            <Accent>freie Trauung</Accent>
          </h1>
          <p className="font-body max-w-[600px] mx-auto mt-6" style={bodyStyle}>
            Ob romantisch, modern, poetisch oder mit einem Augenzwinkern — ein
            Trauspruch gibt eurer Zeremonie einen besonderen Rahmen. Als Traurednerin
            webe ich den passenden Spruch in eure Traurede ein — so wird er zum
            emotionalen Höhepunkt eures Tages.
          </p>
        </div>
      </section>

      {/* ═══ EINLEITUNG ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px]">
          <Reveal>
            <div className="space-y-5 font-body" style={bodyStyle}>
              <p>
                Ein <strong>Trauspruch</strong> ist nicht dasselbe wie eine Traurede. Die Traurede
                erzählt eure ganze Geschichte — der Trauspruch verdichtet ein Gefühl in
                wenige Worte. Er ist das Zitat, das hängenbleibt. Der Satz, den eure Gäste
                sich merken. Das Motto, das über eurer Liebe steht.
              </p>
              <p>
                Trausprüche könnt ihr vielfältig einsetzen: als Teil der{" "}
                <Link to="/hochzeitsreden-traurednerin" style={{ color: "#B8956A" }}>
                  Traurede
                </Link>
                , als Einleitung zu euren Ehegelübden, auf Hochzeitseinladungen, auf der
                Menükarte, als Lesung durch Freunde oder Familie — oder eingraviert in eure
                Ringe. In der freien Trauung gibt es keine Vorgaben: Ihr wählt, was zu
                euch passt.
              </p>
              <p>
                Ich habe für euch über 50 Trausprüche zusammengestellt — sortiert nach
                Stimmung und Anlass. Einige davon habe ich selbst geschrieben, exklusiv
                für TrauWorte. Los geht's.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ ROMANTISCHE TRAUSPRÜCHE ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px]">
          <Reveal>
            <SH2>
              Romantische Trausprüche für eure <Accent>freie Trauung</Accent>
            </SH2>
            <GoldLine />
            <p className="font-body mb-8" style={bodyStyle}>
              Diese Trausprüche sprechen von tiefer Verbundenheit — perfekt für Paare,
              die ihre Liebe mit klassischer Schönheit ausdrücken möchten.
            </p>
          </Reveal>

          <Reveal>
            <Trauspruch
              text="Denn eines weiß ich: Leben ist nicht genug. Sonnenschein, Freiheit und eine kleine Blume gehören auch dazu."
              author="Hans Christian Andersen"
              context="Ein wunderschöner Trauspruch für Paare, die das Glück in den kleinen Dingen finden — ideal für eine Outdoor-Trauung im Grünen."
            />
            <Trauspruch
              text="Man sieht nur mit dem Herzen gut. Das Wesentliche ist für die Augen unsichtbar."
              author="Antoine de Saint-Exupéry, Der kleine Prinz"
              context="Der Klassiker unter den Trausprüchen. Zeitlos, universell und bei einer freien Trauung immer passend — besonders wenn eure Liebe leise und tiefgründig ist."
            />
            <Trauspruch
              text="Wo du hingehst, da will ich auch hingehen; wo du bleibst, da bleibe ich auch."
              author="Ruth 1,16 (frei)"
              context="Einer der ältesten Trausprüche überhaupt — auch ohne religiösen Kontext berührt er, weil er das Versprechen der Treue so schlicht auf den Punkt bringt."
            />
            <Trauspruch
              text="Es ist nicht das Perfekte, das uns verbindet — es ist das Echte."
              author="Stefanie Sick"
              context="Für Paare, deren Weg nicht immer geradlinig war, aber gerade deshalb so kostbar ist. Ein Trauspruch, der Mut macht."
              exclusive
            />
            <Trauspruch
              text="Liebe ist nicht, den perfekten Menschen zu finden. Liebe ist, einen unperfekten Menschen perfekt zu lieben."
              author="Unbekannt (Sam Keen zugeschrieben)"
              context="Humorvoll und gleichzeitig tiefgründig — passt wunderbar in eine Traurede, die auch Augenzwinkern erlaubt."
            />
            <Trauspruch
              text="Du bist mein Heute und alle meine Morgen."
              author="Lee Christopher"
              context="Kurz, kraftvoll, unvergesslich. Ideal als Ehegelübde-Einleitung oder als Gravur im Ehering."
            />
            <Trauspruch
              text="Liebe misst man nicht in Momenten, sondern in dem Mut, sie immer wieder zu wählen."
              author="Stefanie Sick"
              context="Ein Trauspruch für Paare, die wissen: Liebe ist eine tägliche Entscheidung — und genau das macht sie so stark."
              exclusive
            />
            <Trauspruch
              text="Ich habe dich so lange gesucht und dabei nicht gewusst, dass du mich längst gefunden hattest."
              author="Stefanie Sick"
              context="Perfekt für Paare, deren Liebesgeschichte mit einer überraschenden Wendung begann — wenn das Schicksal schneller war als der Verstand."
              exclusive
            />
          </Reveal>
        </div>
      </section>

      {/* ═══ MODERNE TRAUSPRÜCHE ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px]">
          <Reveal>
            <SH2>
              Moderne und unkonventionelle <Accent>Trausprüche</Accent>
            </SH2>
            <GoldLine />
            <p className="font-body mb-8" style={bodyStyle}>
              Für Paare, die es nicht klassisch mögen — warmherzig, gleichberechtigt und
              mit einer Prise Humor. Moderne Trausprüche für eine freie Trauung, die zu
              euch passt.
            </p>
          </Reveal>

          <Reveal>
            <Trauspruch
              text="In einer Welt voller Swipes nach rechts bist du mein bewusster Doppeltap."
              author="Stefanie Sick"
              context="Ein Trauspruch mit Augenzwinkern für die digitale Generation — perfekt, wenn ihr euch online kennengelernt habt."
              exclusive
            />
            <Trauspruch
              text="Lass uns die sein, die ihre eigene Geschichte schreiben — ohne Vorlage, ohne Drehbuch."
              author="Stefanie Sick"
              context="Für Paare, die sich nicht in Schablonen pressen lassen. Ein moderner Trauspruch, der Freiheit und Partnerschaft vereint."
              exclusive
            />
            <Trauspruch
              text="Ich will nicht die Hälfte von dir. Ich will dich ganz — mit allem, was dazugehört."
              author="Unbekannt"
              context="Ein gleichberechtigter Trauspruch, der klar macht: Hier heiraten zwei ganze Menschen. Kein Ergänzungsmärchen, sondern echte Partnerschaft."
            />
            <Trauspruch
              text="Was ich an dir liebe: dass du immer der bist, der nachts aufsteht, wenn das Glas Wasser leer ist."
              author="Stefanie Sick"
              context="Die Liebe steckt in den kleinen Gesten. Ein Trauspruch, der zum Schmunzeln bringt und gleichzeitig das Herz berührt."
              exclusive
            />
            <Trauspruch
              text="Gemeinsam sind wir nicht perfekt, aber perfekt unperfekt."
              author="Unbekannt"
              context="Kurz, ehrlich, modern — ein Trauspruch für Paare, die sich selbst nicht zu ernst nehmen."
            />
            <Trauspruch
              text="Wir brauchen keinen Grund zu feiern. Wir brauchen nur uns."
              author="Unbekannt"
              context="Minimalistisch und auf den Punkt. Passt besonders gut zu einer intimen freien Trauung zu zweit oder im kleinen Kreis."
            />
          </Reveal>
        </div>
      </section>

      {/* ═══ KURZE TRAUSPRÜCHE ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px]">
          <Reveal>
            <SH2>
              Kurze Trausprüche — perfekt für <Accent>Einladungen und Ringe</Accent>
            </SH2>
            <GoldLine />
            <p className="font-body mb-8" style={bodyStyle}>
              Manchmal sagt ein einziger Satz mehr als tausend Worte. Diese kurzen
              Trausprüche eignen sich zum Eingravieren in Ringe, für
              Hochzeitseinladungen, Menükarten oder Tischkärtchen.
            </p>
          </Reveal>

          <Reveal>
            <Trauspruch
              text="Du. Immer du."
              author="Stefanie Sick"
              context="Drei Worte, unendliche Bedeutung. Der kürzeste Trauspruch in dieser Sammlung — und vielleicht der stärkste."
              exclusive
            />
            <Trauspruch
              text="Heim ist, wo du bist."
              author="Unbekannt"
              context="Ideal für Paare, die viel umgezogen sind oder eine Fernbeziehung hatten. Ein Trauspruch über Zugehörigkeit."
            />
            <Trauspruch
              text="Für immer beginnt heute."
              author="Unbekannt"
              context="Schön auf Hochzeitseinladungen — setzt den Ton für den großen Tag."
            />
            <Trauspruch
              text="Ich wähle dich. Und morgen wieder."
              author="Unbekannt"
              context="Eine wunderschöne Ring-Gravur. Kurz genug für den Innenseite eines Eherings."
            />
            <Trauspruch
              text="Du bist mein liebstes Abenteuer."
              author="Unbekannt"
              context="Perfekt für reiselustige Paare und Destination Weddings — ob auf Mallorca, in der Toskana oder in den Alpen."
            />
            <Trauspruch
              text="Wir. Einfach wir."
              author="Stefanie Sick"
              context="Drei Worte, die alles sagen. Für Menükarten, Einladungen oder als Leitmotiv eurer gesamten Hochzeit."
              exclusive
            />
          </Reveal>
        </div>
      </section>

      {/* ═══ POETISCHE TRAUSPRÜCHE ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px]">
          <Reveal>
            <SH2>
              Poetische Trausprüche — <Accent>Lyrik und Literatur</Accent>
            </SH2>
            <GoldLine />
            <p className="font-body mb-8" style={bodyStyle}>
              Große Dichter haben die Liebe in Worte gefasst, die uns bis heute
              berühren. Diese literarischen Trausprüche stammen von gemeinfreien Autoren
              und eignen sich besonders als Lesung während der freien Trauung.
            </p>
          </Reveal>

          <Reveal>
            <Trauspruch
              text="Einmal sollst du mir, nur mir gehören — mit deiner ganzen Lieblichkeit."
              author="Rainer Maria Rilke"
              context="Rilke schrieb über die Liebe wie kein anderer. Dieser Trauspruch eignet sich besonders für Paare, die Poesie und Tiefgang lieben."
            />
            <Trauspruch
              text="Liebet einander, aber macht die Liebe nicht zur Fessel. Lasst sie eher ein wogendes Meer sein zwischen den Ufern eurer Seelen."
              author="Khalil Gibran, Der Prophet"
              context="Khalil Gibrans berühmtes Kapitel ›Von der Ehe‹ ist ein zeitloser Text für freie Trauungen — dieser Trauspruch betont die Freiheit innerhalb der Liebe."
            />
            <Trauspruch
              text="Und doch, was das Berühren angeht, sind alle Mittel recht: ein Blick, ein Wort, die gute Nacht — und was die Seele weckt."
              author="Johann Wolfgang von Goethe (frei)"
              context="Goethe wusste: Liebe zeigt sich in den kleinen Gesten. Ein poetischer Trauspruch für Paare mit Sinn für Klassik."
            />
            <Trauspruch
              text="Ich liebe dich ohne zu wissen wie, oder wann, oder woher. Ich liebe dich schlicht, ohne Probleme oder Stolz."
              author="Pablo Neruda, Sonett XVII"
              context="Nerudas Liebessonette gehören zu den meistzitierten Hochzeitstexten weltweit. Ein Trauspruch voller Hingabe."
            />
            <Trauspruch
              text="Ein Tropfen Liebe ist mehr als ein Ozean Verstand."
              author="Blaise Pascal"
              context="Kurz und philosophisch — ein Trauspruch für Paare, die mit dem Herzen statt mit dem Kopf entscheiden."
            />
            <Trauspruch
              text="Wer lieben kann, ist glücklich. Über alles."
              author="Hermann Hesse"
              context="Einfach und wahr. Ein literarischer Trauspruch, der auch Menschen berührt, die sonst nicht viel mit Lyrik anfangen."
            />
          </Reveal>
        </div>
      </section>

      {/* ═══ BESONDERE ZEREMONIEN ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px]">
          <Reveal>
            <SH2>
              Trausprüche für <Accent>besondere Zeremonien</Accent>
            </SH2>
            <GoldLine />
          </Reveal>

          {/* Gleichgeschlechtliche Paare */}
          <Reveal>
            <h3
              className="font-display mt-10 mb-4"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", color: "#1a1a1a" }}
            >
              Trausprüche für gleichgeschlechtliche Paare
            </h3>
            <p className="font-body mb-6" style={bodyStyle}>
              Liebe kennt kein Geschlecht — und Trausprüche auch nicht. Diese Sprüche
              sind bewusst genderneutral formuliert und feiern die Liebe in all ihren Formen.
            </p>

            <Trauspruch
              text="Liebe fragt nicht nach Erlaubnis. Sie ist einfach da."
              author="Stefanie Sick"
              context="Ein kraftvoller Trauspruch, der die Selbstverständlichkeit eurer Liebe betont."
              exclusive
            />
            <Trauspruch
              text="Zwei Herzen. Ein Versprechen. Keine Fragen."
              author="Unbekannt"
              context="Kurz und klar — die Liebe steht im Mittelpunkt, sonst nichts."
            />
            <Trauspruch
              text="Wir sind nicht die Ausnahme. Wir sind die Regel der Liebe."
              author="Unbekannt"
              context="Ein selbstbewusster Trauspruch für Paare, die ihre Hochzeit als Zeichen der Normalität feiern."
            />

            <p className="font-body mt-4" style={{ fontSize: "14px", color: "#B8956A" }}>
              <Link
                to="/gleichgeschlechtliche-queer-und-diverse-trauung"
                style={{ color: "#B8956A", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Mehr über queere freie Trauungen erfahren →
              </Link>
            </p>
          </Reveal>

          {/* Erneuerung des Eheversprechens */}
          <Reveal>
            <h3
              className="font-display mt-14 mb-4"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", color: "#1a1a1a" }}
            >
              Trausprüche für die Erneuerung des Eheversprechens
            </h3>
            <p className="font-body mb-6" style={bodyStyle}>
              Ob nach 10, 25 oder 50 Jahren — eine Vow Renewal feiert die gemeinsame
              Geschichte. Diese Trausprüche betonen das, was geblieben ist.
            </p>

            <Trauspruch
              text="Wenn ich noch einmal die Wahl hätte — ich würde immer wieder dich wählen."
              author="Unbekannt"
              context="Der perfekte Trauspruch für ein Paar, das nach vielen gemeinsamen Jahren erneut Ja sagt."
            />
            <Trauspruch
              text="Wir haben nicht nur geheiratet. Wir haben ein Leben gebaut."
              author="Stefanie Sick"
              context="Für Paare, die auf Kinder, Krisen und Glücksmomente zurückblicken — und trotzdem zusammengeblieben sind."
              exclusive
            />
            <Trauspruch
              text="Liebe ist kein Anfang. Liebe ist ein Weitermachen."
              author="Unbekannt"
              context="Ehrlich und bodenständig — ein Trauspruch, der die Realität langer Beziehungen feiert."
            />
          </Reveal>

          {/* Trauungen mit Kindern */}
          <Reveal>
            <h3
              className="font-display mt-14 mb-4"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", color: "#1a1a1a" }}
            >
              Trausprüche für Trauungen mit Kindern
            </h3>
            <p className="font-body mb-6" style={bodyStyle}>
              Wenn Kinder Teil der Zeremonie sind — ob Patchwork-Familie oder gemeinsamer
              Nachwuchs — geben diese Trausprüche der ganzen Familie einen Rahmen.
            </p>

            <Trauspruch
              text="Wir heiraten nicht nur einander. Wir werden eine Familie."
              author="Unbekannt"
              context="Ein Trauspruch, der Kinder sichtbar in die Zeremonie einbindet. Perfekt als Einleitung zum Familienritual."
            />
            <Trauspruch
              text="Liebe wächst nicht kleiner, wenn man sie teilt. Sie wird nur größer."
              author="Unbekannt"
              context="Ideal für Patchwork-Familien — ein Trauspruch, der zeigt: Hier ist Platz für alle."
            />
            <Trauspruch
              text="Aus zwei Geschichten wird eine — und sie hat die besten Kapitel noch vor sich."
              author="Stefanie Sick"
              context="Zukunftsorientiert und optimistisch. Ein Trauspruch für Familien, die neu zusammenwachsen."
              exclusive
            />
          </Reveal>
        </div>
      </section>

      {/* ═══ TIPPS ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px]">
          <Reveal>
            <SH2>
              So findet ihr den perfekten Trauspruch für eure <Accent>Hochzeit</Accent>
            </SH2>
            <GoldLine />
            <div className="space-y-5 font-body" style={bodyStyle}>
              <p>
                Über 50 Trausprüche gelesen — und jetzt? Hier sind meine fünf Tipps als
                Traurednerin, damit ihr den einen Spruch findet, der wirklich zu euch
                passt:
              </p>

              <div className="space-y-6 mt-6">
                <div>
                  <h3
                    className="font-display mb-2"
                    style={{ fontSize: "1.1rem", color: "#1a1a1a" }}
                  >
                    1. Lest den Spruch laut vor
                  </h3>
                  <p>
                    Was sich beim Lesen schön anfühlt, kann gesprochen hölzern klingen.
                    Testet euren Trauspruch, indem ihr ihn laut aussprecht — idealerweise
                    voreinander.
                  </p>
                </div>

                <div>
                  <h3
                    className="font-display mb-2"
                    style={{ fontSize: "1.1rem", color: "#1a1a1a" }}
                  >
                    2. Passt der Spruch zu euch als Paar?
                  </h3>
                  <p>
                    Ein Rilke-Zitat bei einem Paar, das sich beim Paintball
                    kennengelernt hat? Euer Trauspruch darf zu eurer Persönlichkeit
                    passen — nicht zu einem Idealbild.
                  </p>
                </div>

                <div>
                  <h3
                    className="font-display mb-2"
                    style={{ fontSize: "1.1rem", color: "#1a1a1a" }}
                  >
                    3. Weniger ist mehr
                  </h3>
                  <p>
                    Ein perfekter Trauspruch wirkt stärker als fünf mittelmäßige.
                    Entscheidet euch für einen Hauptspruch und lasst ihn wirken.
                  </p>
                </div>

                <div>
                  <h3
                    className="font-display mb-2"
                    style={{ fontSize: "1.1rem", color: "#1a1a1a" }}
                  >
                    4. Fragt eure Traurednerin
                  </h3>
                  <p>
                    Eine erfahrene{" "}
                    <Link to="/hochzeitsreden-traurednerin" style={{ color: "#B8956A" }}>
                      Traurednerin
                    </Link>{" "}
                    kennt eure Geschichte und kann den Spruch in den Kontext der Rede
                    einbetten — so entfaltet er seine volle Wirkung.
                  </p>
                </div>

                <div>
                  <h3
                    className="font-display mb-2"
                    style={{ fontSize: "1.1rem", color: "#1a1a1a" }}
                  >
                    5. Trauspruch ≠ Traurede
                  </h3>
                  <p>
                    Der Trauspruch ist ein Highlight, ein emotionaler Anker. Die Traurede
                    erzählt eure ganze Geschichte. Beides zusammen ergibt eine Zeremonie,
                    die niemand vergisst.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section style={{ backgroundColor: "#FBE9DA" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px]">
          <Reveal>
            <SH2 center>
              Häufige Fragen zu <Accent>Trausprüchen</Accent>
            </SH2>
          </Reveal>

          <div>
            {faqSchema.mainEntity.map((faq, i) => (
              <FAQItem key={i} frage={faq.name} antwort={faq.acceptedAnswer.text} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ backgroundColor: "#FDF4ED" }} className="py-20 md:py-28 grain">
        <div className="container mx-auto px-5 sm:px-8 max-w-[800px] text-center">
          <Reveal>
            <Label>Euer nächster Schritt</Label>
            <h2
              className="font-display"
              style={{
                color: "#1a1a1a",
                letterSpacing: "0.02em",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              }}
            >
              Ihr sucht die perfekten Worte für eure <Accent>Zeremonie</Accent>?
            </h2>
            <p className="font-body max-w-[550px] mx-auto mt-6 mb-8" style={bodyStyle}>
              Als eure Traurednerin finde ich den Trauspruch, der eure Geschichte
              erzählt — und webe ihn in eine Zeremonie, die euch und eure Gäste tief
              berührt.
            </p>
            <Link
              to="/freie-trauung-kontakt"
              className="btn-gold inline-block"
            >
              Jetzt unverbindlich anfragen
            </Link>

            {/* Verwandte Beiträge */}
            <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(184, 149, 106, 0.2)" }}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#B8956A",
                  marginBottom: "12px",
                }}
              >
                Weiterlesen
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/eure-freie-trauung"
                  className="font-body text-sm transition-colors hover:text-[#B8956A]"
                  style={{ color: "#5C4A3A" }}
                >
                  Eure freie Trauung →
                </Link>
                <Link
                  to="/hochzeitsreden-traurednerin"
                  className="font-body text-sm transition-colors hover:text-[#B8956A]"
                  style={{ color: "#5C4A3A" }}
                >
                  Traurede & Preise →
                </Link>
                <Link
                  to="/gleichgeschlechtliche-queer-und-diverse-trauung"
                  className="font-body text-sm transition-colors hover:text-[#B8956A]"
                  style={{ color: "#5C4A3A" }}
                >
                  Queere Trauungen →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ KONTAKT ═══ */}
      <ContactForm />
    </Layout>
  );
};

/* ─── FAQ-Item (lokal) ─── */
const FAQItem = ({
  frage,
  antwort,
  index,
}: {
  frage: string;
  antwort: string;
  index: number;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid rgba(184, 149, 106, 0.2)",
        background: index % 2 === 0 ? "transparent" : "rgba(253, 244, 237, 0.4)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between gap-4 py-6 px-5 sm:px-8 cursor-pointer"
        aria-expanded={open}
      >
        <h3
          className="font-display"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            fontWeight: 400,
            color: "#1a1a1a",
            letterSpacing: "0.01em",
          }}
        >
          {frage}
        </h3>
        <span
          className="flex-shrink-0 transition-transform duration-300"
          style={{
            color: "#B8956A",
            fontSize: "24px",
            fontWeight: 300,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-500"
        style={{ maxHeight: open ? "400px" : "0", opacity: open ? 1 : 0 }}
      >
        <div className="px-5 sm:px-8 pb-6">
          <p
            className="font-body leading-[1.9]"
            style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}
          >
            {antwort}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MagazinTrausprueche;
