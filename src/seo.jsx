import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  url = 'https://eliteaura.com', 
  image = 'https://eliteaura.com/assets/hero_bg.jpg',
  schema 
}) => {
  const defaultTitle = "L'Élite Aura | Modern Premium Beauty Salon & Spa, Bandra Mumbai";
  const defaultDescription = "Indulge in absolute luxury at L'Élite Aura. Experience premium bridal makeup, high-end hair design, custom nail art, and organic skin treatments in Bandra West, Mumbai.";
  const defaultKeywords = "Best Beauty Parlor in Mumbai, Best Salon in Bandra, Bridal Makeup Artist in Mumbai, Hair Salon Bandra, Beauty Parlour Near Me, Facial Services Mumbai, Nail Art Salon Bandra, Bridal Makeup Mumbai";

  const currentTitle = title ? `${title} | L'Élite Aura` : defaultTitle;
  const currentDescription = description || defaultDescription;
  const currentKeywords = keywords || defaultKeywords;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{currentTitle}</title>
      <meta name="description" content={currentDescription} />
      <meta name="keywords" content={currentKeywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:description" content={currentDescription} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Schema Markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
