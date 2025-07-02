import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Projects - Joshua Farhi | High-Performance Websites & SEO Success Stories",
  description: "Explore Joshua Farhi's portfolio featuring 95+ Lighthouse score websites, first-page Google rankings achieved in 30 days, and e-commerce solutions. Real case studies from Springfield Painting, Joyful Expression, and Zoots Cannabis Co.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}