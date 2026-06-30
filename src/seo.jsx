import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  url = 'https://barca10salon.com', 
  image = 'https://barca10salon.com/assets/hero_bg.jpg',
  schema 
}) => {
  const defaultTitle = "Barça 10 Salon | Spa, Nails & Makeup Studio Samastipur, Bihar";
  const defaultDescription = "Indulge in premium beauty treatments at Barça 10 Salon in Samastipur. Established in 2004. Offering expert bridal makeup, advanced hair design, nail extensions, spa therapies, and custom Viking Tattoos. 4.8★ rated with 2,185+ reviews.";
  const defaultKeywords = "Best Beauty Parlor in Samastipur, Best Salon in Samastipur, Ladies Salon in Samastipur, Bridal Makeup Artist Samastipur, Hair Salon Samastipur, Viking Tattoos Samastipur, Nail Art Salon Samastipur, Beauty Parlour Samastipur, Gudari Bazar Salon";

  const currentTitle = title ? `${title} | Barça 10 Salon` : defaultTitle;
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
