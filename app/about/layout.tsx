import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Joshua Farhi - SEO Expert & Performance Developer | Remote Work Specialist",
  description: "Discover Joshua Farhi's journey from digital nomad to performance expert. Delivering 95+ Lighthouse scores, first-page Google rankings in 30 days, and specializing in Next.js & WordPress development.",
  alternates: {
    canonical: "https://joshuafarhi.com/about",
  },
  openGraph: {
    title: "About Joshua Farhi - Web Engineer & SEO Expert",
    description: "About page detailing experience in Next.js, performance, and SEO.",
    url: "https://joshuafarhi.com/about",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "About Joshua Farhi - Web Engineer & SEO Expert",
    description: "About page detailing experience in Next.js, performance, and SEO.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}