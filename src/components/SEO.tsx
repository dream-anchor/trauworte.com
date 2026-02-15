import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  schema?: Record<string, unknown>;
}

const BASE_URL = "https://trauworte.com";
const DEFAULT_IMAGE = "/images/traurednerin-stefanie-sick-portrait.webp";

const ensureTrailingSlash = (p: string) =>
  p === "/" || p.endsWith("/") ? p : `${p}/`;

const SEO = ({ title, description, canonical, ogImage, ogType = "website", noIndex, schema }: SEOProps) => {
  const currentPath = ensureTrailingSlash(canonical || "/");
  const canonicalUrl = `${BASE_URL}${currentPath}`;
  // og:image muss immer absolute URL sein
  const rawImg = ogImage || DEFAULT_IMAGE;
  const absoluteImage = rawImg.startsWith("http") ? rawImg : `${BASE_URL}${rawImg}`;

  return (
    <Helmet>
      <html lang="de" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content="TrauWorte" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      {/* Geo Tags (Local SEO) */}
      <meta name="geo.region" content="DE" />
      <meta name="geo.placename" content="Deutschland" />

      {/* noindex wenn gewünscht */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
