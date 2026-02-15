interface HeroImageProps {
  src: string;
  alt: string;
  credit: string;
}

const HeroImage = ({ src, alt, credit }: HeroImageProps) => (
  <section className="relative w-full overflow-hidden" style={{ maxHeight: "480px" }}>
    <img
      src={src}
      alt={alt}
      className="w-full object-cover"
      style={{ height: "480px" }}
      loading="eager"
    />
    <p
      className="absolute bottom-3 right-4 font-body"
      style={{
        fontSize: "10px",
        color: "rgba(255,255,255,0.6)",
        textShadow: "0 1px 3px rgba(0,0,0,0.4)",
      }}
    >
      Foto: {credit} / Unsplash
    </p>
  </section>
);

export default HeroImage;
