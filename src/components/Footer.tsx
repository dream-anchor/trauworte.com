import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-warm-dark text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <p className="font-display text-2xl tracking-[0.3em]">TRAUWORTE</p>
          <p className="font-body text-sm opacity-80">
            Freie Rednerin für eure Trauung
          </p>
          <div className="flex items-center justify-center gap-1 text-sm opacity-70">
            <span>Mit</span>
            <Heart size={14} className="text-accent fill-accent" />
            <span>gestaltet</span>
          </div>
          <div className="flex justify-center gap-6 text-sm opacity-70">
            <Link to="/impressum" className="hover:opacity-100 transition-opacity">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:opacity-100 transition-opacity">
              Datenschutz
            </Link>
          </div>
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} TrauWorte – Stefanie Sick
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
