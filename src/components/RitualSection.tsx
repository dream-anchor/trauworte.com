import { Helmet } from "react-helmet-async";
import useScrollReveal from "@/hooks/useScrollReveal";

const rituale = [
  {
    name: "Sandritual",
    text: "Zwei Farben Sand fließen in ein gemeinsames Gefäß — ein sichtbares Symbol dafür, wie eure Leben sich verbinden. Das Sandritual macht greifbar, was Worte allein nicht ausdrücken können. Am Ende haltet ihr ein einzigartiges Kunstwerk in Händen, das euch ein Leben lang an eure freie Trauung erinnert.",
  },
  {
    name: "Hand-Fasting (Bandritual)",
    text: "Eure Hände werden mit einem Band oder Seil sanft miteinander verbunden — der Ursprung des Ausdrucks \u201Eden Bund fürs Leben schließen\u201C. Dieses uralte keltische Ritual symbolisiert Zusammenhalt und Verbundenheit. Als eure Traurednerin spreche ich dabei Worte, die eure Verbindung noch tiefer wirken lassen.",
  },
  {
    name: "Ringwärmen",
    text: "Eure Eheringe wandern still durch die Reihen eurer Gäste — jeder hält sie kurz in den Händen und sendet euch gute Gedanken und Wünsche. Wenn die Ringe zu euch zurückkehren, tragen sie die Wärme und die Liebe aller Anwesenden. Ein berührendes Ritual, das eure Gäste aktiv in die Zeremonie einbindet.",
  },
  {
    name: "Baumritual",
    text: "Gemeinsam pflanzt ihr einen Baum oder gießt eine Pflanze mit Erde und Wasser — ein lebendiges Symbol für eure wachsende Liebe. Mit den Jahren wird der Baum größer und stärker, genau wie eure Verbindung. Das Baumritual ist besonders für naturverbundene Paare ein wunderschöner Moment während der freien Trauung.",
  },
  {
    name: "Weinzeremonie",
    text: "Ihr gießt zwei verschiedene Weine in ein gemeinsames Glas und trinkt gemeinsam daraus — ein Sinnbild für die Vereinigung eurer Persönlichkeiten. Alternativ versiegelt ihr eine Flasche Wein zusammen mit persönlichen Briefen, die ihr erst an eurem ersten Hochzeitstag öffnet. Ein Ritual voller Vorfreude und Symbolik.",
  },
  {
    name: "Kerzenritual (Unity Candle)",
    text: "Jeder von euch hält eine brennende Kerze und entzündet damit gemeinsam eine große Kerze in der Mitte — euer gemeinsames Licht. Die Unity Candle steht für die Vereinigung zweier Leben zu einer Gemeinschaft. Besonders bei Abendzeremonien entfaltet dieses Ritual eine magische, romantische Atmosphäre.",
  },
  {
    name: "Brief an die Zukunft",
    text: "Ihr schreibt euch gegenseitig Briefe, die ihr in einer schönen Box versiegelt — zusammen mit einer Flasche Wein, Fotos oder persönlichen Erinnerungsstücken. An eurem fünften oder zehnten Hochzeitstag öffnet ihr die Zeitkapsel gemeinsam. Ein wunderschönes Ritual, das eure Liebe über die Jahre hinweg lebendig hält.",
  },
  {
    name: "Euer eigenes Ritual",
    text: "Die schönsten Rituale sind die, die eure Geschichte erzählen. Vielleicht habt ihr ein gemeinsames Hobby, einen Insider-Witz oder eine Tradition, die nur euch gehört? Als eure Traurednerin helfe ich euch, daraus ein einzigartiges Ritual zu gestalten, das perfekt zu euch passt. Denn bei einer freien Trauung gibt es keine Grenzen.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Rituale für eine freie Trauung",
  description:
    "Die beliebtesten Rituale für eine freie Trauung — von der Sandzeremonie über Hand-Fasting bis zum Kerzenritual. Eine Traurednerin erklärt die schönsten Hochzeitsrituale.",
  step: rituale.map((r) => ({
    "@type": "HowToStep",
    name: r.name,
    text: r.text,
  })),
};

const RitualCard = ({ name, text, index }: { name: string; text: string; index: number }) => {
  const { ref, isVisible } = useScrollReveal({ rootMargin: "0px 0px -40px 0px" });

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "reveal-visible" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        className="p-6 sm:p-8"
        style={{
          background: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(184, 149, 106, 0.15)",
        }}
      >
        <h3
          className="font-display mb-3"
          style={{
            fontSize: "clamp(1.15rem, 2vw, 1.4rem)",
            fontWeight: 400,
            color: "#1a1a1a",
            letterSpacing: "0.01em",
          }}
        >
          {name}
        </h3>
        <p
          className="font-body leading-[1.85]"
          style={{ fontSize: "15px", fontWeight: 300, color: "#5C4A3A" }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

const RitualSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="rituale" style={{ backgroundColor: "#FBE9DA" }} className="py-28 sm:py-36 md:py-44 relative grain">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
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
            Besondere Momente
          </p>
          <h2
            className="font-display"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.02em",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
            }}
          >
            Rituale für eure{" "}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 500,
                color: "#B8956A",
              }}
            >
              freie Trauung
            </span>
          </h2>
          <p
            className="font-body max-w-[640px] mx-auto mt-6"
            style={{
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: 1.9,
              color: "#5C4A3A",
            }}
          >
            Rituale machen eure freie Trauung noch persönlicher und unvergesslicher. Sie schaffen
            Momente, die eure Gäste berühren und euch als Paar verbinden. Als eure Traurednerin berate
            ich euch bei der Auswahl und gestalte jedes Ritual so, dass es perfekt in eure Zeremonie
            passt — authentisch, emotional und voller Bedeutung.
          </p>
        </div>

        {/* Ritual Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {rituale.map((ritual, i) => (
            <RitualCard key={ritual.name} {...ritual} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RitualSection;
