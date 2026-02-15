import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#1a1a1a" }} className="py-16 md:py-20 text-center">
      <div className="container mx-auto px-5 sm:px-8">
        <p
          style={{
            fontFamily: "'Boska', serif",
            fontSize: "28px",
            fontWeight: 400,
            color: "#FDF4ED",
            letterSpacing: "0.05em",
          }}
        >
          TrauWorte
        </p>

        {/* Gold Divider */}
        <div
          className="mx-auto mt-5"
          style={{
            width: "40px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #B8956A, transparent)",
          }}
        />

        <p
          className="mt-5"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "16px",
            fontStyle: "italic",
            color: "#B8956A",
          }}
        >
          Freie Trauungen voller Emotion
        </p>

        {/* Links */}
        <div className="flex gap-7 justify-center mt-8">
          <Link
            to="/impressum"
            className="transition-colors duration-300 hover:text-[#B8956A]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              fontWeight: 300,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(253,244,237,0.4)",
              textDecoration: "none",
            }}
          >
            Impressum
          </Link>
          <Link
            to="/datenschutzerklaerung"
            className="transition-colors duration-300 hover:text-[#B8956A]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              fontWeight: 300,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(253,244,237,0.4)",
              textDecoration: "none",
            }}
          >
            Datenschutz
          </Link>
        </div>

        {/* Ausgebildet von */}
        <div className="mt-6">
          <a
            href="https://www.martinredet.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-colors duration-300 hover:text-[#FDF4ED]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              fontWeight: 300,
              letterSpacing: "0.08em",
              color: "rgba(253,244,237,0.3)",
              textDecoration: "none",
            }}
          >
            Ausgebildet von martinredet.de
          </a>
        </div>

        <p
          className="mt-10"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            fontWeight: 300,
            color: "rgba(253,244,237,0.2)",
          }}
        >
          &copy; 2026 TrauWorte &middot; Stefanie Sick
        </p>
      </div>
    </footer>
  );
};

export default Footer;
