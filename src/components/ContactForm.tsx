import { useState, FormEvent } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { getEmailAddress } from "@/components/ObfuscatedEmail";

const ContactForm = () => {
  const { ref, isVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    window.location.href = `mailto:${getEmailAddress()}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section style={{ backgroundColor: "#FBE9DA" }} className="py-28 sm:py-36 md:py-44 relative grain">
      <div className="container mx-auto px-5 sm:px-8 max-w-[1000px] relative z-10">
        <div
          ref={ref}
          className={`reveal ${isVisible ? "reveal-visible" : ""} flex flex-col md:flex-row gap-16 md:gap-20 items-center`}
        >
          {/* Links: Text */}
          <div className="flex-1 space-y-6">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#B8956A",
              }}
            >
              Der nächste Schritt
            </p>
            <h2
              className="font-display leading-[1.15]"
              style={{
                color: "#1a1a1a",
                letterSpacing: "0.02em",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Freie Trauung{" "}
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "#B8956A",
                }}
              >
                anfragen
              </span>
            </h2>

            <div
              style={{ width: "40px", height: "1px", background: "#B8956A" }}
            />

            <p
              className="font-body leading-[1.9]"
              style={{ fontSize: "16px", fontWeight: 300, color: "#5C4A3A" }}
            >
              Lasst uns unverbindlich kennenlernen. Erzählt mir von euren Wünschen
              und ich melde mich innerhalb von 24 Stunden bei euch zurück.
            </p>

            {/* Decorative Quote */}
            <div
              className="mt-10 pl-6"
              style={{ borderLeft: "2px solid rgba(184,149,106,0.3)" }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "18px",
                  fontStyle: "italic",
                  color: "#5C4A3A",
                  lineHeight: 1.7,
                }}
              >
                &raquo;Jede Liebesgeschichte verdient es, mit den richtigen Worten erzählt zu werden.&laquo;
              </p>
              <p
                className="mt-3"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#B8956A",
                }}
              >
                — Stefanie
              </p>
            </div>
          </div>

          {/* Rechts: Formular */}
          <div className="flex-1 w-full" style={{ background: "#FDF4ED", padding: "48px 36px" }}>
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="text-4xl mb-4">&#10084;&#65039;</div>
                <h3
                  className="font-display text-2xl"
                  style={{ color: "#1a1a1a" }}
                >
                  Vielen Dank!
                </h3>
                <p className="font-body" style={{ color: "#5C4A3A" }}>
                  Euer E-Mail-Programm öffnet sich jetzt. Ich melde mich schnellstmöglich bei euch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {[
                  { label: "Euer Name", type: "text", name: "name", required: true },
                  { label: "E-Mail-Adresse", type: "email", name: "email", required: true },
                  { label: "Wunschdatum", type: "date", name: "date", required: false },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={`form-${field.name}`}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "11px",
                        fontWeight: 500,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#B8956A",
                        display: "block",
                        marginBottom: "8px",
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={`form-${field.name}`}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      className="form-input-editorial"
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="form-message"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#B8956A",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    Nachricht{" "}
                    <span style={{ fontWeight: 300, textTransform: "none", letterSpacing: "0" }}>
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={3}
                    className="form-input-editorial resize-none"
                  />
                </div>

                <button type="submit" className="btn-gold w-full mt-3">
                  Verfügbarkeit prüfen
                </button>

                <p
                  className="text-center"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 300,
                    color: "rgba(92,74,58,0.5)",
                  }}
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
