import useScrollReveal from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Kennenlernen",
    description:
      "In einem unverbindlichen Gespraech lernen wir uns kennen und ich erfahre alles ueber eure Wuensche und Vorstellungen fuer den grossen Tag.",
  },
  {
    number: "02",
    title: "Eure Geschichte",
    description:
      "Ich tauche ein in eure Liebesgeschichte, sammle persoenliche Details und beginne, eure individuelle Zeremonie zu gestalten.",
  },
  {
    number: "03",
    title: "Die Zeremonie",
    description:
      "Gemeinsam feilen wir an jedem Detail eurer Trauung — von der Rede ueber die Rituale bis zur musikalischen Begleitung.",
  },
  {
    number: "04",
    title: "Euer grosser Tag",
    description:
      "Am Tag eurer Hochzeit fuehre ich euch mit Herz und Leidenschaft durch eine Zeremonie, die euch und eure Gaeste tief beruehrt.",
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
            So entsteht eure Zeremonie
          </div>
          <h2
            className="font-display text-4xl md:text-5xl"
            style={{ color: "#1a1a1a", letterSpacing: "0.02em" }}
          >
            Von der ersten{" "}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              Idee
            </span>{" "}
            zum unvergesslichen Ja-Wort
          </h2>
        </div>

        {/* Steps */}
        <div className="pl-2">
          {steps.map((step, i) => (
            <TimelineStep key={step.number} {...step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
