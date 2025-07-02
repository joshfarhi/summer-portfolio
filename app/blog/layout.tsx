import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Joshua Farhi | Remote Work, Travel & Performance Optimization Insights",
  description: "Personal insights from a digital nomad developer on remote work, travel experiences, achieving 95+ Lighthouse scores, and local SEO success stories. Real experiences from Japan, Philadelphia, and Naples FL.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}