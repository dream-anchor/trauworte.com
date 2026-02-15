import { Link } from "react-router-dom";

const FOOTER_LOGO =
  "https://cdn.durable.co/blocks/28WgJlNB0NjlXm864tNt8kzDRIBtK7oCzWwfB6iltWojwV4SMXVTRGjonFQWvGoj.png";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#FBE9DA" }} className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 max-w-5xl mx-auto">
          {/* Logo */}
          <div>
            <Link to="/">
              <img
                src={FOOTER_LOGO}
                alt="TrauWorte"
                className="h-[120px] md:h-[120px]"
                style={{ maxHeight: "120px" }}
              />
            </Link>
          </div>

          {/* Links + Button */}
          <div className="space-y-4 text-right">
            <div className="flex gap-6">
              <Link
                to="/impressum"
                className="font-body text-sm transition-opacity hover:opacity-70"
                style={{ color: "#111827" }}
              >
                Impressum
              </Link>
              <Link
                to="/datenschutzerklaerung"
                className="font-body text-sm transition-opacity hover:opacity-70"
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
                className="inline-block font-body text-sm px-5 py-2.5 text-white rounded-lg transition-opacity hover:opacity-80"
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
