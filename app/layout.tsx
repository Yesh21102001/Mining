import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../components/LanguageContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";

export const metadata: Metadata = {
  title: "Lianyungang Huayin Mining Investment International Trade",
  description:
    "Professional mining and trading support between China and India, including mineral sourcing, equipment export, and cross-border supply chain services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
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