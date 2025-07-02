import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joshua Farhi - Full-Stack Developer | 95+ Lighthouse Scores & SEO Expert",
  description: "Full-stack developer achieving 95+ Lighthouse scores and first-page Google rankings in 30 days. Specializing in Next.js, WordPress, WooCommerce, and high-performance web applications.",
  keywords: "Joshua Farhi, Full-Stack Developer, SEO Expert, Performance Optimization, Next.js, WordPress, WooCommerce, Lighthouse Scores, Naples FL, Remote Work, E-commerce Developer",
  authors: [{ name: "Joshua Farhi" }],
  creator: "Joshua Farhi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://joshuafarhi.com",
    title: "Joshua Farhi - Full-Stack Developer & SEO Expert",
    description: "Achieving 95+ Lighthouse scores and first-page Google rankings. Expert in Next.js, WordPress, and high-performance web applications.",
    siteName: "Joshua Farhi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Farhi - Full-Stack Developer & SEO Expert",
    description: "Achieving 95+ Lighthouse scores and first-page Google rankings. Expert in Next.js, WordPress, and high-performance web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="gradient-bg fixed inset-0 pointer-events-none" />
        <Navigation />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
