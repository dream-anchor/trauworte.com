import { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import usePrerenderReady from "@/hooks/usePrerenderReady";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Bitte gebt euren Namen ein").max(100),
  email: z.string().trim().email("Bitte gebt eine gültige E-Mail-Adresse ein").max(255),
  phone: z.string().trim().max(30).optional(),
  date: z.string().optional(),
  message: z.string().trim().min(1, "Bitte schreibt eine Nachricht").max(5000),
});

const Kontakt = () => {
  usePrerenderReady(true);
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const firstError = result.error.errors[0];
      toast({ title: "Fehler", description: firstError.message, variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      // TODO: Edge Function integration for email sending
      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank für eure Anfrage. Ich melde mich schnellstmöglich bei euch.",
      });
      setFormData({ name: "", email: "", phone: "", date: "", message: "" });
    } catch {
      toast({
        title: "Fehler",
        description: "Die Nachricht konnte leider nicht gesendet werden. Bitte versucht es erneut.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Kontakt – Trauungszeremonie anfragen | TrauWorte"
        description="Kontaktiere Stefanie Sick für deine persönliche Trauungszeremonie. Fülle das Formular aus oder schreibe eine E-Mail."
        canonical="/kontakt"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          mainEntity: {
            "@type": "ProfessionalService",
            name: "TrauWorte – Stefanie Sick",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Service",
              email: "info@stefaniesick.com",
            },
          },
        }}
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Startseite", url: "/" },
          { name: "Kontakt", url: "/kontakt/" },
        ]}
      />

      <section className="py-20 bg-peach">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-foreground">Kontakt</h1>
          <p className="font-body text-muted-foreground mt-4">Ich freue mich auf eure Nachricht</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <h2 className="font-display text-3xl text-foreground">Schreibt mir</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Ihr habt Fragen oder möchtet ein unverbindliches Kennenlerngespräch vereinbaren?
                Füllt einfach das Formular aus oder kontaktiert mich direkt.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-accent" size={20} />
                  <span className="font-body text-muted-foreground">info@stefaniesick.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-accent" size={20} />
                  <span className="font-body text-muted-foreground">Deutschland, Österreich, Schweiz & Europa</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-body">Name *</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Euer Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-body">E-Mail *</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="eure@email.de" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-body">Telefon</Label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Optional" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date" className="font-body">Wunschtermin</Label>
                <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="font-body">Nachricht *</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Erzählt mir von euch und euren Wünschen..." rows={5} required />
              </div>
              <Button type="submit" disabled={loading} className="w-full font-body tracking-wide" size="lg">
                {loading ? "Wird gesendet..." : "Nachricht senden"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
