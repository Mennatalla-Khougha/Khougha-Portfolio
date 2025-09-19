import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BookShell } from "@/components/BookShell";
import { ChapterNav } from "@/components/ChapterNav";
import portfolioData from "@/content/portfolio.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolioData.meta.links.portfolio),
  title: {
    default: `${portfolioData.meta.name} — ${portfolioData.meta.title}`,
    template: `%s | ${portfolioData.meta.name}`,
  },
  description: portfolioData.about.summary,
  openGraph: {
    title: `${portfolioData.meta.name} — ${portfolioData.meta.title}`,
    description: portfolioData.about.summary,
    url: portfolioData.meta.links.portfolio,
    siteName: portfolioData.meta.name,
    images: [
      {
        url: `${portfolioData.meta.links.portfolio}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${portfolioData.meta.name} — ${portfolioData.meta.title}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.meta.name} — ${portfolioData.meta.title}`,
    description: portfolioData.about.summary,
    images: [`${portfolioData.meta.links.portfolio}/og-image.jpg`],
  },
  authors: [{ name: portfolioData.meta.name, url: portfolioData.meta.links.portfolio }],
  creator: portfolioData.meta.name,
  publisher: portfolioData.meta.name,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BookShell>
          <ChapterNav chapters={portfolioData.navigation} />
          {children}
        </BookShell>
      </body>
    </html>
  );
}
