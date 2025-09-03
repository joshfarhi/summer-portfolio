import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "South Korea Travel Notes (Placeholder) | Blog",
  description: "Placeholder content for an upcoming post about traveling in South Korea.",
};

export default function Page() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="mb-8">
          <Link href="/blog" className="text-muted-foreground hover:text-foreground">
            &larr; Back to Blog
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4">South Korea Travel Notes (Placeholder)</h1>
        <div className="inline-block bg-orange-500/20 text-orange-500 px-3 py-1 rounded-full text-sm font-medium mb-6">
          Currently writing
        </div>

        <p className="text-muted-foreground leading-relaxed">
          This is placeholder content for the upcoming post about traveling in South Korea. Check back soon for insights on Seoul, Busan, food culture, and transit tips.
        </p>
      </div>
    </div>
  );
}


