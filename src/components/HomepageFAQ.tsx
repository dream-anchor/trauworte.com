import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useScrollReveal from "@/hooks/useScrollReveal";

const faqs = [
  {
    frage: "Was ist eine freie Trauung und wie unterscheidet sie sich?",
    antwort:
      "Eine freie Trauung ist eine nicht-konfessionelle Zeremonie, die völlig unabhängig von Kirche oder Standesamt gestaltet wird. Im Gegensatz zur kirchlichen Trauung seid ihr an keine religiösen Vorgaben gebunden, und anders als beim Standesamt gibt es keine festen Abläufe oder Formulierungen. Als eure Traurednerin gestalte ich die Zeremonie ganz nach euren Wünschen — mit eurer Liebesgeschichte, persönlichen Ritualen und den Worten, die euch wirklich berühren. Die standesamtliche Trauung für die rechtliche Gültigkeit findet separat statt.",
  },
  {
    frage: "Warum sollten wir eine Traurednerin für unsere Hochzeit buchen?",
    antwort:
      "Eine professionelle Traurednerin bringt Erfahrung, Empathie und Struktur in eure Zeremonie. Ich nehme mir die Zeit, eure Geschichte wirklich kennenzulernen und daraus eine Rede zu gestalten, die eure Gäste berührt und euch selbst zu Tränen rührt — vor Glück. Anders als bei einer standesamtlichen Trauung habt ihr mit einer Traurednerin die volle Freiheit bei Ort, Ablauf, Ritualen und Musik. Eure freie Trauung wird dadurch zu einem einzigartigen, emotionalen Erlebnis.",
  },
  {
    frage: "Wie läuft die Planung mit einer Traurednerin ab?",
    antwort:
      "Alles beginnt mit einem unverbindlichen Kennenlerngespräch, bei dem wir uns beschnuppern und ihr mir von euren Vorstellungen erzählt. Danach folgt ein ausführliches Paargespräch, in dem ich eure Liebesgeschichte erfahre — das Herzstück eurer Traurede. Auf dieser Basis schreibe ich eure individuelle Rede, die ihr vorab lesen und mit mir abstimmen könnt. Wir besprechen Rituale, Musik und den genauen Ablauf. Am Tag eurer Hochzeit bin ich rechtzeitig vor Ort und führe euch durch eure Zeremonie.",
  },
  {
    frage: "Was kostet eine freie Trauung mit Traurednerin?",
    antwort:
      "Die Kosten für eine freie Trauung variieren je nach Umfang, Anfahrt und individuellen Wünschen. In der Regel bewegen sich die Preise für eine professionelle Traurednerin zwischen 800 und 2.500 Euro. In meinem Paket sind alle Vorgespräche, die individuell geschriebene Traurede, die Abstimmung von Ritualen und Musik sowie die Zeremonie-Durchführung am Hochzeitstag enthalten. Für ein persönliches Angebot kontaktiert mich am besten direkt — jede Hochzeit ist einzigartig.",
    link: { text: "Jetzt Angebot anfragen", href: "/freie-trauung-kontakt" },
  },
  {
    frage: "Wo können freie Trauungen stattfinden?",
    antwort:
      "Überall dort, wo ihr euch wohlfühlt! Freie Trauungen können im Garten, am See, auf einer Almhütte, in einer Scheune, auf einer Burg, am Strand oder in einem eleganten Hotel stattfinden. Als Traurednerin in München und Bayern kenne ich viele wunderschöne Hochzeitslocations — vom Starnberger See über den Tegernsee bis zu den Schlössern im Allgäu. Auch Destination Weddings auf Mallorca, in der Toskana oder in den österreichischen Alpen begleite ich mit Leidenschaft.",
  },
  {
    frage: "Was ist, wenn internationale Gäste dabei sind?",
    antwort:
      "Ich gestalte eure Zeremonie auf Deutsch. Wenn internationale Gäste dabei sind, kann ich einzelne Passagen so gestalten, dass sie auch ohne perfekte Deutschkenntnisse emotional mitgenommen werden — etwa durch universelle Gesten, Rituale und ein kurzes gedrucktes Programm in anderen Sprachen.",
  },
  {
    frage: "Wie persönlich wird die freie Trauung?",
    antwort:
      "Sehr persönlich — das ist der größte Vorteil einer freien Trauung mit Traurednerin. Eure Zeremonie basiert auf eurer eigenen Liebesgeschichte: Wie habt ihr euch kennengelernt? Was macht eure Beziehung besonders? Welche gemeinsamen Erinnerungen sind euch wichtig? All das fließt in die Traurede ein. Dazu könnt ihr eigene Ehegelübde schreiben, persönliche Rituale einbauen und Familie oder Freunde aktiv einbinden. Keine Zeremonie gleicht der anderen.",
  },
  {
    frage: "Wie weit reist die Traurednerin für eine Hochzeit?",
    antwort:
      "Mein Hauptstandort ist München, und ich bin in ganz Bayern zu Hause — von Nürnberg bis Garmisch, vom Allgäu bis zum Chiemgau. Darüber hinaus begleite ich Hochzeiten in Österreich, der Schweiz und in ganz Deutschland. Für Destination Weddings reise ich auch gerne weiter: Mallorca, die Toskana, Südtirol oder die Côte d'Azur — überall dort, wo ihr euren großen Tag feiern möchtet, bin ich als eure Traurednerin dabei.",
  },
  {
    frage: "Was passiert, wenn die Traurednerin krank wird?",
    antwort:
      "Ein absoluter Ausnahmefall, der mir bisher noch nie passiert ist. Dennoch bin ich vorbereitet: Ich verfüge über ein Netzwerk erfahrener Kolleginnen und Kollegen, die im Notfall einspringen können. Eure Traurede und alle Details zur Zeremonie sind sorgfältig dokumentiert, sodass auch eine Vertretung eure persönliche Zeremonie einfühlsam gestalten kann. Euer besonderer Tag ist in jedem Fall in guten Händen.",
  },
  {
    frage: "Brauchen wir Technik oder ein Mikrofon für die freie Trauung?",
    antwort:
      "Bei einer Gästezahl ab etwa 50 Personen oder bei Outdoor-Trauungen mit Wind empfehle ich eine Tonanlage mit Mikrofon, damit alle Gäste die Zeremonie und die Traurede gut hören können. Ich berate euch gerne zur passenden Technik und kann euch erfahrene Dienstleister vermitteln. Bei kleineren Feiern in ruhiger Umgebung reicht meine Stimme in der Regel vollkommen aus — als ausgebildete Rednerin projiziere ich klar und deutlich.",
  },
  {
    frage: "Welche Rituale gibt es für eine freie Trauung?",
    antwort:
      "Es gibt wunderschöne Rituale, die eure freie Trauung noch persönlicher machen: das Sandritual, Hand-Fasting (Bandritual), Ringwärmen, Baumritual, Weinzeremonie, Kerzenritual oder einen Brief an die Zukunft. Jedes Ritual hat seine eigene Symbolik und Wirkung. Gerne berate ich euch als eure Traurednerin bei der Auswahl und Gestaltung.",
    link: { text: "Mehr über Rituale erfahren", href: "#rituale" },
  },
  {
    frage: "Wie weit im Voraus sollten wir buchen?",
    antwort:
      "Ich empfehle, mich 6 bis 12 Monate vor eurem Wunschtermin zu kontaktieren — besonders für beliebte Monate wie Mai bis September. Da ich pro Wochenende nur eine Hochzeit annehme, um jedem Paar meine volle Aufmerksamkeit zu schenken, sind die Termine begrenzt. Aber auch bei kürzeren Vorlaufzeiten lohnt sich eine Anfrage — manchmal sind noch Termine frei. Je früher ihr bucht, desto entspannter wird die Planung eurer freien Trauung.",
    link: { text: "Verfügbarkeit prüfen", href: "/freie-trauung-kontakt" },
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.frage,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.antwort,
    },
  })),
};

const FAQItem = ({
  frage,
  antwort,
  link,
  index,
}: {
  frage: string;
  antwort: string;
  link?: { text: string; href: string };
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
        className="w-full text-left flex items-center justify-between gap-4 py-7 px-5 sm:px-8 cursor-pointer"
        aria-expanded={open}
      >
        <h3
          className="font-display"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
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
        style={{
          maxHeight: open ? "600px" : "0",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="px-5 sm:px-8 pb-7">
          <p
            className="font-body leading-[1.9]"
            style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}
          >
            {antwort}
          </p>
          {link && (
            <Link
              to={link.href}
              className="inline-block mt-4 transition-all duration-300 hover:gap-4"
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
              {link.text} &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const HomepageFAQ = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section style={{ backgroundColor: "#FDF4ED" }} className="py-28 sm:py-36 md:py-44 relative grain">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="container mx-auto px-5 sm:px-8 max-w-[1000px] relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`reveal ${isVisible ? "reveal-visible" : ""} text-center mb-16 md:mb-20`}
        >
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
            Wissenswertes
          </p>
          <h2
            className="font-display"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
            }}
          >
            Häufige Fragen zur{" "}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 500,
                color: "#B8956A",
              }}
            >
              freien Trauung
            </span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageFAQ;
