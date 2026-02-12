import { Link } from "react-router-dom";

const LOGO_URL = "https://cdn.durable.co/blocks/dQ3cBEXFTRESpwpPWP8YwCVR4XygOvrXgd09r9CKfF1GjjyEyoTRMOhJwlYgrlo1.png";

const Footer = () => {
  return (
    <div className="relative mt-16">
      {/* Curved top edge */}
      <div className="absolute -top-16 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z" className="fill-warm-dark" />
        </svg>
      </div>
    <footer className="bg-warm-dark text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Info */}
          <div className="space-y-4">
            <img src={LOGO_URL} alt="TrauWorte Logo" className="h-10 brightness-0 invert opacity-90" />
            <p className="font-body text-sm opacity-70 leading-relaxed">
              Eure freie Rednerin für einzigartige Trauungszeremonien mit Herz und den richtigen Worten.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-display text-lg">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">Startseite</Link>
              <Link to="/ueber-mich" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">Über mich</Link>
              <Link to="/angebote" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">Meine Angebote</Link>
              <Link to="/kontakt" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">Kontakt</Link>
            </nav>
          </div>

          {/* Kontakt */}
          <div className="space-y-4">
            <h4 className="font-display text-lg">Kontakt</h4>
            <div className="space-y-2">
              <a href="mailto:info@stefaniesick.com" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity block">
                info@stefaniesick.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-50 font-body">
            © {new Date().getFullYear()} TrauWorte – Stefanie Sick
          </p>
          <div className="flex gap-6 text-xs opacity-50 font-body">
            <Link to="/impressum" className="hover:opacity-100 transition-opacity">Impressum</Link>
            <Link to="/datenschutz" className="hover:opacity-100 transition-opacity">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
