import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Projects - Joshua Farhi | Full-Stack Developer & SEO Expert",
  description: "Explore Joshua Farhi's enterprise software portfolio: Smoke Tokens loyalty platform, Family Recovery Support Center with SEO optimization, inventory management systems, and AI-powered solutions. Built with Next.js, TypeScript, and modern technologies.",
  keywords: "Joshua Farhi portfolio, full-stack developer, Next.js developer, TypeScript, enterprise software, customer loyalty platform, SEO optimization, cannabis dispensary software, inventory management, AI chatbot",
  openGraph: {
    title: "Portfolio & Projects - Joshua Farhi | Full-Stack Developer & SEO Expert",
    description: "Enterprise software portfolio featuring loyalty platforms, healthcare websites, and AI solutions built with Next.js, TypeScript, and modern technologies.",
    url: "https://joshuafarhi.com/work",
    type: "website",
    images: [
      {
        url: "/SmokeTokensBanner.webp",
        width: 1200,
        height: 630,
        alt: "Joshua Farhi's Portfolio - Enterprise Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Projects - Joshua Farhi | Full-Stack Developer & SEO Expert",
    description: "Enterprise software portfolio featuring loyalty platforms, healthcare websites, and AI solutions built with Next.js, TypeScript, and modern technologies.",
    images: ["/SmokeTokensBanner.webp"],
  },
  alternates: {
    canonical: "https://joshuafarhi.com/work",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}