import { Link } from "react-router-dom";
import useScrollReveal from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Unverbindliche Anfrage",
    description:
      "Schreibt mir über das Kontaktformular oder per E-Mail. Erzählt mir von eurem Wunschtermin, eurem Traumort und euren ersten Ideen für die freie Trauung. Ich melde mich innerhalb von 24 Stunden bei euch — versprochen.",
  },
  {
    number: "02",
    title: "Kostenloses Kennenlerngespräch",
    description:
      "In einem entspannten Gespräch — per Telefon, Video-Call oder persönlich in München — lernen wir uns kennen. Ich erfahre alles über eure Wünsche und ihr bekommt ein Gefühl dafür, ob ich als eure Traurednerin die Richtige bin.",
  },
  {
    number: "03",
    title: "Eure Liebesgeschichte erzählen",
    description:
      "Das Herzstück: In einem ausführlichen Paargespräch tauche ich in eure Geschichte ein. Wie habt ihr euch kennengelernt? Was macht eure Liebe besonders? Aus diesen Details entsteht eine Traurede, die wirklich eure ist.",
  },
  {
    number: "04",
    title: "Die Rede entsteht",
    description:
      "Ich schreibe eure individuelle Traurede — Wort für Wort, mit Herzblut und Feingefühl. Ihr bekommt den Entwurf vorab zum Lesen und könnt Wünsche äußern. Gemeinsam stimmen wir Rituale, Musik und den Ablauf der Zeremonie ab.",
  },
  {
    number: "05",
    title: "Feinschliff & letzte Details",
    description:
      "Kurz vor eurem großen Tag klären wir die letzten Details: Technik, Zeitplan, Koordination mit Fotograf und DJ. Auf Wunsch mache ich eine Generalprobe am Trauort, damit am Hochzeitstag alles perfekt sitzt.",
  },
  {
    number: "06",
    title: "Euer großer Tag",
    description:
      "Am Tag eurer Hochzeit bin ich rechtzeitig vor Ort und führe euch mit Herz und Leidenschaft durch eine Zeremonie, die euch und eure Gäste tief berührt. Dieser Moment gehört ganz euch — und ich sorge dafür, dass er unvergesslich wird.",
  },
];

const TimelineStep = ({
  number,
  title,
  description,
  index,
}: {
  number: string;
  title: string;
  description: string;
  index: number;
}) => {
  const { ref, isVisible } = useScrollReveal({ rootMargin: "0px 0px -40px 0px" });

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "reveal-visible" : ""} flex gap-6 md:gap-8 relative`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Dot */}
      <div className="flex flex-col items-center">
        <div className="timeline-dot" />
        {index < steps.length - 1 && (
          <div
            className="w-0.5 flex-1 mt-2"
            style={{ background: "linear-gradient(180deg, #B8956A, rgba(184,149,106,0.2))" }}
          />
        )}
      </div>
      {/* Content */}
      <div className="pb-12 md:pb-16">
        <div
          className="font-body text-xs tracking-[0.2em] uppercase mb-2"
          style={{ color: "#B8956A" }}
        >
          Schritt {number}
        </div>
        <h3
          className="font-display text-2xl md:text-3xl mb-3"
          style={{ color: "#1a1a1a", letterSpacing: "0.02em" }}
        >
          {title}
        </h3>
        <p className="font-body leading-relaxed max-w-md" style={{ color: "rgba(26, 26, 26, 0.7)" }}>
          {description}
        </p>
      </div>
    </div>
  );
};

const ProcessTimeline = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section style={{ backgroundColor: "#FDF4ED" }} className="py-24 md:py-36 relative grain">
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`reveal ${isVisible ? "reveal-visible" : ""} text-center mb-16 md:mb-20`}
        >
          <div
            className="font-body text-xs tracking-[0.2em] uppercase mb-4"
            style={{ color: "#B8956A" }}
          >
            Euer Weg zur Zeremonie
          </div>
          <h2
            className="font-display text-4xl md:text-5xl"
            style={{ color: "#1a1a1a", letterSpacing: "0.02em" }}
          >
            So entsteht eure{" "}
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
        </div>

        {/* Steps */}
        <div className="pl-2">
          {steps.map((step, i) => (
            <TimelineStep key={step.number} {...step} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-4">
          <Link
            to="/freie-trauung-kontakt"
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
            Bereit für den ersten Schritt? <span style={{ fontSize: "16px" }}>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
