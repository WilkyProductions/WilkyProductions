import type { Metadata } from "next";
import { Anton, Kaushan_Script, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const script = Kaushan_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wilkyproductions.com"),
  title: {
    default: `${site.name} | Video, Photo & Design`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: `${site.name} | Video, Photo & Design`,
    description: site.tagline,
    url: "https://www.wilkyproductions.com",
    siteName: site.name,
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${script.variable} ${workSans.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
