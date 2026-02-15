import useScrollReveal from "@/hooks/useScrollReveal";
import useCountUp from "@/hooks/useCountUp";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon?: string;
}

const items: StatItem[] = [
  { value: 100, suffix: "+", label: "Trauungen", icon: "heart" },
  { value: 5, suffix: "", label: "Laender", icon: "globe" },
  { value: 10, suffix: "+", label: "Jahre Erfahrung", icon: "star" },
];

const StatCell = ({ value, suffix, label }: StatItem) => {
  const { ref, isVisible } = useScrollReveal();
  const count = useCountUp(value, 2200, isVisible);

  return (
    <div ref={ref} className="text-center px-6 py-4">
      <div
        className="font-display text-4xl md:text-5xl lg:text-6xl"
        style={{ color: "#1a1a1a", letterSpacing: "0.02em" }}
      >
        {count}
        {suffix}
      </div>
      <p
        className="font-body text-xs md:text-sm tracking-[0.2em] uppercase mt-2"
        style={{ color: "rgba(26, 26, 26, 0.5)" }}
      >
        {label}
      </p>
    </div>
  );
};

const SocialProofBar = () => {
  return (
    <section style={{ backgroundColor: "#FBE9DA" }} className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-center divide-x" style={{ borderColor: "rgba(184, 149, 106, 0.3)" }}>
          {items.map((item, i) => (
            <div key={i} className="flex-1" style={{ borderColor: "rgba(184, 149, 106, 0.3)" }}>
              <StatCell {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
