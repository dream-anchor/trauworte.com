import { useState, useEffect, useCallback } from "react";

/**
 * E-Mail-Obfuscation: Adresse wird erst per JavaScript zusammengebaut,
 * ist im statischen/prerenderten HTML nicht sichtbar für Bots.
 *
 * State-of-the-Art Spam-Schutz:
 * - Char-Code-Array statt Klartext im Quellcode
 * - SSR/Prerender zeigt Platzhalter
 * - mailto: wird erst on-click assembliert
 */

// "info" als Char-Codes
const _u = [105, 110, 102, 111];
// "stefaniesick.com" als Char-Codes
const _d = [115, 116, 101, 102, 97, 110, 105, 101, 115, 105, 99, 107, 46, 99, 111, 109];

const assemble = () => {
  const user = String.fromCharCode(..._u);
  const domain = String.fromCharCode(..._d);
  return `${user}@${domain}`;
};

interface Props {
  className?: string;
  style?: React.CSSProperties;
  /** Falls gesetzt, wird dieser Text statt der E-Mail angezeigt */
  children?: React.ReactNode;
  /** Zusätzliche mailto-Parameter, z.B. "?subject=Anfrage" */
  mailtoParams?: string;
}

const ObfuscatedEmail = ({ className, style, children, mailtoParams = "" }: Props) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Nur client-side: E-Mail entschlüsseln
    setEmail(assemble());
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      const addr = assemble();
      window.location.href = `mailto:${addr}${mailtoParams}`;
    },
    [mailtoParams]
  );

  // SSR/Prerender: kein mailto, kein Klartext
  if (!email) {
    return (
      <span className={className} style={style} aria-label="E-Mail-Adresse">
        {children || "E-Mail laden\u2026"}
      </span>
    );
  }

  return (
    <a
      href="#kontakt"
      onClick={handleClick}
      className={className}
      style={{ ...style, cursor: "pointer" }}
      aria-label="E-Mail senden"
    >
      {children || email}
    </a>
  );
};

export default ObfuscatedEmail;

/**
 * Utility-Funktion für programmatischen Zugriff (z.B. in ContactForm)
 */
export const getEmailAddress = () => assemble();
