import useScrollReveal from "@/hooks/useScrollReveal";

/* Statisches Grid — spaeter durch Instagram API ersetzbar */
const images = [
  { src: "/images/angebot-freie-trauungszeremonie.webp", alt: "Freie Trauungszeremonie" },
  { src: "/images/angebot-hochzeitsmoderation-dinner.webp", alt: "Hochzeitsmoderation" },
  { src: "/images/angebot-feierliche-traurede-rednerin.webp", alt: "Feierliche Traurede" },
  { src: "/images/angebot-outdoor-hochzeit-strand.webp", alt: "Outdoor-Hochzeit" },
];

const InstagramFeed = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section style={{ backgroundColor: "#FDF4ED" }} className="py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div
          ref={ref}
          className={`reveal ${isVisible ? "reveal-visible" : ""} text-center mb-12`}
        >
          <div
            className="font-body text-xs tracking-[0.2em] uppercase mb-4"
            style={{ color: "#B8956A" }}
          >
            Folgt mir auf Instagram
          </div>
          <h2
            className="font-display text-3xl md:text-4xl"
            style={{ color: "#1a1a1a", letterSpacing: "0.02em" }}
          >
            Einblicke in{" "}
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              eure
            </span>{" "}
            schoensten Momente
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <a
              key={i}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-card"
            >
              <img
                src={img.src}
                alt={img.alt}
                width={400}
                height={400}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="insta-overlay">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Link */}
        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm tracking-wide inline-flex items-center gap-2 transition-colors"
            style={{ color: "#B8956A" }}
          >
            Mehr auf Instagram
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
