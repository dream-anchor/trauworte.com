import { Link } from "react-router-dom";

const FOOTER_LOGO = "/images/trauworte-logo-footer.webp";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#FBE9DA" }} className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-5xl mx-auto">
          {/* Logo */}
          <Link to="/" className="transition-opacity duration-300 hover:opacity-80">
            <img
              src={FOOTER_LOGO}
              alt="TrauWorte"
              className="h-[100px] md:h-[120px]"
            />
          </Link>

          {/* Links + Button */}
          <div className="space-y-5 text-center md:text-right">
            <div className="flex gap-8 justify-center md:justify-end">
              <Link
                to="/impressum"
                className="font-body text-sm tracking-wide transition-all duration-300 hover:opacity-70"
                style={{ color: "#111827" }}
              >
                Impressum
              </Link>
              <Link
                to="/datenschutzerklaerung"
                className="font-body text-sm tracking-wide transition-all duration-300 hover:opacity-70"
                style={{ color: "#111827" }}
              >
                Datenschutzerklärung
              </Link>
            </div>
            <div>
              <a
                href="https://www.martinredet.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-body text-sm px-5 py-2.5 text-white rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: "#333333" }}
              >
                Ausgebildet von martinredet.de
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
