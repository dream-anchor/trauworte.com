interface HeroImageProps {
  src: string;
  alt: string;
  credit: string;
  objectPosition?: string;
}

const HeroImage = ({ src, alt, credit, objectPosition }: HeroImageProps) => (
  <section className="relative w-full overflow-hidden" style={{ maxHeight: "480px" }}>
    <img
      src={src}
      alt={alt}
      width={1600}
      height={480}
      className="w-full object-cover"
      style={{ height: "480px", objectPosition }}
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
