import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StructuredData from "@/components/StructuredData";
import { site, siteUrl } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const title = "Wilky Productions | Video, Photography & Design";
const description =
  "Wilky Productions is a Southern California based company specializing in videography, photography, graphic design, logo design, and website design. Based in Menifee, CA.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "videography",
    "photography",
    "website design",
    "graphic design",
    "logo design",
    "Menifee CA",
    "Southern California videographer",
    "Southern California photographer",
  ],
  authors: [{ name: site.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <StructuredData />
        <SiteChrome>{children}</SiteChrome>
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
