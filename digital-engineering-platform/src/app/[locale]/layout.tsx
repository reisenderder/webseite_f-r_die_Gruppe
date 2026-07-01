/**
 * @file layout.tsx
 * @description Localized Root Layout file establishing HTML lang and dir tags (RTL/LTR).
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Header } from "@/shared/components/layout/Header";
import { Footer } from "@/shared/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Digital Engineering Platform | Industrial Digitalization",
    template: "%s | Digital Engineering Platform",
  },
  description: "Enterprise-grade platform accelerating industrial digitalization, software-defined automation, and artificial intelligence integration.",
  metadataBase: new URL("https://dep.engineering"),
  openGraph: {
    title: "Digital Engineering Platform",
    description: "Industrial scaling through software-defined automation and AI integration.",
    url: "https://dep.engineering",
    siteName: "Digital Engineering Platform",
    locale: "en_US",
    type: "website",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  const isRtl = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-navy-deep text-foreground">
        <Header />
        <main className="flex-grow pt-24 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
