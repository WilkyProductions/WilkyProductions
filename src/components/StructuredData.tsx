import { services, site, siteUrl } from "@/lib/site";

export default function StructuredData() {
  const sameAs = [site.social.facebook, site.social.instagram, site.social.youtube].filter(
    (url) => url && url !== "#",
  );

  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    image: `${siteUrl}/brand/wilky-logo.png`,
    url: siteUrl,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Menifee",
      addressRegion: "CA",
      postalCode: "92584",
      addressCountry: "US",
    },
    areaServed: "Southern California",
    sameAs,
    description:
      "Southern California based design company specializing in videography, photography, graphic design, and website design.",
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.blurb,
        url: `${siteUrl}${s.href}`,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
