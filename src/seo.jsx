import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  url = 'https://volumesalonranchi.app', 
  image = 'https://volumesalonranchi.app/assets/hero_bg.jpg',
  schema 
}) => {
  const defaultTitle = "Volume Salon | Best Hair & Beauty Salon in Ranchi, Jharkhand";
  const defaultDescription = "Indulge in premium beauty treatments at Volume Salon in Ranchi, Jharkhand. Offering expert bridal makeup, advanced hair styling, nail extensions, spa therapies, and skincare treatments. 5.0★ rated with 31+ reviews.";
  const defaultKeywords = "Best Beauty Parlor in Ranchi, Best Salon in Ranchi, Ladies Salon in Ranchi, Bridal Makeup Artist Ranchi, Hair Salon Ranchi, Nail Art Salon Ranchi, Beauty Parlour Ranchi, Sarna Toli Hatma Ranchi Salon";

  const currentTitle = title ? `${title} | Volume Salon` : defaultTitle;
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
