import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../components/LanguageContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";

export const metadata: Metadata = {
  title: "China–India Mining Trade Company | Huayin International Trade",
  description:
    "Lianyungang Huayin Mining Investment International Trade Co., Ltd. specializes in mineral sourcing, bulk commodity trade, equipment export, and cross-border supply chain services between China and India.",

  keywords: [
    "China India trade",
    "mining export company",
    "mineral import export",
    "bauxite supplier",
    "quartz stone supplier",
    "industrial equipment export",
    "cross border supply chain",
    "China India import export",
  ],

  authors: [{ name: "Huayin International Trade" }],

  creator: "Huayin International Trade",

  metadataBase: new URL("https://huaintrade.com/"),

  openGraph: {
    title: "Huayin Mining Investment International Trade",
    description:
      "Trusted partner for mineral trade and industrial exports between China and India.",
    url: "https://huaintrade.com/",
    siteName: "Huayin Trade",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Huayin International Trade",
    description:
      "Cross-border mineral trade and industrial equipment export between China and India.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lianyungang Huayin Mining Investment International Trade Co., Ltd.",
    url: "https://huaintrade.com",
    description:
      "International trade company specializing in mineral investment, bulk commodities, and industrial equipment export between China and India.",
    areaServed: ["China", "India"],
  };

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body className="rootBody">
        <LanguageProvider>
          <div className="appShell">
            <Navbar />
            <main className="appMain">{children}</main>
            <Footer />
            <BottomNav />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}