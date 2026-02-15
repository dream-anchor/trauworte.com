import { useState, FormEvent } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const ContactForm = () => {
  const { ref, isVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Formular-Daten an mailto oder Formspree/Netlify weiterleiten
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const date = data.get("date") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Trauung-Anfrage von ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\nWunschdatum: ${date}\n\nNachricht:\n${message}`
    );
    window.location.href = `mailto:info@stefaniesick.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section style={{ backgroundColor: "#FBE9DA" }} className="py-24 md:py-36 relative grain">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div
          ref={ref}
          className={`reveal ${isVisible ? "reveal-visible" : ""} grid md:grid-cols-2 gap-12 md:gap-16 items-center`}
        >
          {/* Links: Text + Social Proof */}
          <div className="space-y-8">
            <div
              className="font-body text-xs tracking-[0.2em] uppercase"
              style={{ color: "#B8956A" }}
            >
              Der naechste Schritt
            </div>
            <h2
              className="font-display text-4xl md:text-5xl leading-tight"
              style={{ color: "#1a1a1a", letterSpacing: "0.02em" }}
            >
              Bereit fuer{" "}
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 500,
                }}
              >
                eure
              </span>{" "}
              Traumhochzeit?
            </h2>
            <p
              className="font-body text-lg leading-relaxed"
              style={{ color: "rgba(26, 26, 26, 0.75)" }}
            >
              Lasst uns unverbindlich kennenlernen. Erzaehlt mir von euren Wuenschen
              und ich melde mich innerhalb von 24 Stunden bei euch zurueck.
            </p>

            {/* Trust-Element neben CTA */}
            <div
              className="flex items-start gap-4 p-5 rounded-2xl"
              style={{ background: "rgba(255, 255, 255, 0.4)" }}
            >
              <div
                className="text-3xl leading-none mt-1"
                style={{
                  fontFamily: "'Boska', serif",
                  color: "rgba(184, 149, 106, 0.4)",
                }}
              >
                &ldquo;
              </div>
              <div>
                <p
                  className="font-body text-sm leading-relaxed mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "1.05rem",
                    color: "rgba(26, 26, 26, 0.7)",
                  }}
                >
                  Stefanie war absolut fantastisch! Ihre Reden und Moderation bei unserer Hochzeit
                  waren herzlich und beruehrend.
                </p>
                <p className="font-body text-xs" style={{ color: "rgba(26, 26, 26, 0.45)" }}>
                  — Sybille M. aus Frankfurt
                </p>
              </div>
            </div>
          </div>

          {/* Rechts: Formular */}
          <div
            className="p-8 md:p-10 rounded-3xl"
            style={{
              background: "rgba(255, 255, 255, 0.45)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(184, 149, 106, 0.15)",
            }}
          >
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="text-4xl mb-4">&#10084;&#65039;</div>
                <h3
                  className="font-display text-2xl"
                  style={{ color: "#1a1a1a" }}
                >
                  Vielen Dank!
                </h3>
                <p className="font-body" style={{ color: "rgba(26, 26, 26, 0.7)" }}>
                  Euer E-Mail-Programm oeffnet sich jetzt. Ich melde mich schnellstmoeglich bei euch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="v3-name"
                    className="font-body text-sm mb-2 block"
                    style={{ color: "rgba(26, 26, 26, 0.6)" }}
                  >
                    Euer Name
                  </label>
                  <input
                    id="v3-name"
                    name="name"
                    type="text"
                    required
                    className="form-input"
                    placeholder="Anna & Max"
                  />
                </div>
                <div>
                  <label
                    htmlFor="v3-email"
                    className="font-body text-sm mb-2 block"
                    style={{ color: "rgba(26, 26, 26, 0.6)" }}
                  >
                    E-Mail-Adresse
                  </label>
                  <input
                    id="v3-email"
                    name="email"
                    type="email"
                    required
                    className="form-input"
                    placeholder="hallo@beispiel.de"
                  />
                </div>
                <div>
                  <label
                    htmlFor="v3-date"
                    className="font-body text-sm mb-2 block"
                    style={{ color: "rgba(26, 26, 26, 0.6)" }}
                  >
                    Wunschdatum
                  </label>
                  <input
                    id="v3-date"
                    name="date"
                    type="date"
                    className="form-input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="v3-message"
                    className="font-body text-sm mb-2 block"
                    style={{ color: "rgba(26, 26, 26, 0.6)" }}
                  >
                    Nachricht (optional)
                  </label>
                  <textarea
                    id="v3-message"
                    name="message"
                    rows={3}
                    className="form-input resize-none"
                    placeholder="Erzaehlt mir von eurer Hochzeit..."
                  />
                </div>
                <button type="submit" className="btn-gold w-full mt-2">
                  Verfuegbarkeit pruefen
                </button>
                <p
                  className="font-body text-xs text-center mt-3"
                  style={{ color: "rgba(26, 26, 26, 0.4)" }}
                >
                  Unverbindlich &middot; Antwort innerhalb 24h
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
