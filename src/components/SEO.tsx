import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  type?: string;
  imageUrl?: string;
  schemas?: any[];
}

export function SEO({ 
  title, 
  description, 
  keywords = "feed planning, ration planning, feed cost hub, feed conversion, agricultural feed, rural utility cost", 
  url = "https://feed.ruralutilitycost.com", 
  type = "website",
  imageUrl = "https://feed.ruralutilitycost.com/og-image.jpg",
  schemas = []
}: SEOProps) {
  
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://feed.ruralutilitycost.com/" }
    ]
  };
  
  // Try to generate breadcrumb from URL if it's not home
  if (url !== "https://feed.ruralutilitycost.com" && url !== "https://feed.ruralutilitycost.com/") {
    if (url.includes('/tool/')) {
       breadcrumbSchema.itemListElement.push({ "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://feed.ruralutilitycost.com/" });
       breadcrumbSchema.itemListElement.push({ "@type": "ListItem", "position": 3, "name": title.split(' | ')[0], "item": url });
    } else {
       breadcrumbSchema.itemListElement.push({ "@type": "ListItem", "position": 2, "name": title.split(' | ')[0], "item": url });
    }
  }

  const allSchemas = [baseSchema, breadcrumbSchema, ...schemas];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Rural Utility Cost" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {allSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
