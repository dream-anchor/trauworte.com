interface SectionDividerProps {
  type: "swoopLeft" | "curveUp" | "slantLeft";
  fillColor?: string;
}

const paths: Record<SectionDividerProps["type"], string> = {
  swoopLeft:
    "M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z",
  curveUp:
    "M0,120 Q720,0 1440,120 L1440,120 L0,120 Z",
  slantLeft:
    "M0,0 L1440,120 L1440,120 L0,120 Z",
};

const SectionDivider = ({ type, fillColor = "currentColor" }: SectionDividerProps) => (
  <div className="relative w-full overflow-hidden leading-none -mb-px" style={{ height: "60px" }}>
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="absolute bottom-0 w-full h-full"
    >
      <path d={paths[type]} fill={fillColor} />
    </svg>
  </div>
);

export default SectionDivider;
