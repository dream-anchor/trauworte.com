import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Layout>
      <SEO
        title="Seite nicht gefunden | TrauWorte"
        description="Die angeforderte Seite wurde leider nicht gefunden."
        noIndex
      />
      <section className="py-32 bg-peach">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h1 className="font-display text-6xl text-foreground">404</h1>
          <p className="font-body text-xl text-muted-foreground">
            Diese Seite wurde leider nicht gefunden.
          </p>
          <Button asChild className="font-body tracking-wide">
            <Link to="/">Zurück zur Startseite</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
