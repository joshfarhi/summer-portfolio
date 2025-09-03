"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "Digital Nomad: Japan | My Experience",
    excerpt: "Placeholder content for an upcoming post about traveling in Japan.",
    slug: "japan-travel-notes",
    publishDate: "2024-01-01",
    readTime: "5 min read",
    category: "Japan",
    featured: true,
    tags: ["Placeholder", "Travel", "Japan"]
  },
  {
    title: "Digital Nomad: South Korea | My Experience",
    excerpt: "Placeholder content for an upcoming post about traveling in South Korea.",
    slug: "south-korea-travel-notes",
    publishDate: "2024-02-01",
    readTime: "5 min read",
    category: "South Korea",
    featured: true,
    tags: ["Placeholder", "Travel", "South Korea"]
  },
  {
    title: "Digital Nomad: Vietnam | My Experience",
    excerpt: "Placeholder content for an upcoming post about traveling in Vietnam.",
    slug: "vietnam-travel-notes",
    publishDate: "2024-03-01",
    readTime: "5 min read",
    category: "Vietnam",
    featured: false,
    tags: ["Placeholder", "Travel", "Vietnam"]
  },
  {
    title: "Digital Nomad: Thailand | My Experience",
    excerpt: "Placeholder content for an upcoming post about traveling in Thailand.",
    slug: "thailand-travel-notes",
    publishDate: "2024-04-01",
    readTime: "5 min read",
    category: "Thailand",
    featured: false,
    tags: ["Placeholder", "Travel", "Thailand"]
  }
];


function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function Blog() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Personal stories and experiences from a 5-month journey across Asia. 
              From Tokyo&apos;s winter neon to Thailand&apos;s hot season beaches, plus hidden gems in Laos - discover the seasonal magic of Asia.
            </p>
          </motion.div>
        </section>

        {/* Featured Posts */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold mb-12"
          >
            Featured Articles
          </motion.h2>
          <div className="space-y-8">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 opacity-75 relative"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  aria-label={`Read article: ${post.title}`}
                  className="absolute inset-0 rounded-2xl"
                />
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.publishDate)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-muted-foreground">
                      {post.title}
                    </h3>
                    <div className="inline-block bg-orange-500/20 text-orange-500 px-3 py-1 rounded-full text-sm font-medium mt-2">
                      In progress writing.
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-secondary/50 text-sm rounded-full border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1 flex lg:flex-col justify-between items-start">
                    <div className="bg-muted/20 border border-border rounded-xl aspect-square w-full max-w-[200px] lg:max-w-none flex items-center justify-center mb-4">
                      <span className="text-muted-foreground text-sm">Article Image</span>
                    </div>
                    
                    <div className="bg-primary/10 text-primary px-6 py-2 rounded-full font-medium flex items-center gap-2">
                      Read Article
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* All Posts Grid */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold mb-12"
          >
            All Articles
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-card/30 backdrop-blur-sm border border-border rounded-xl overflow-hidden opacity-75 relative"
              >
                <div className="bg-muted/20 border-b border-border aspect-[16/9] flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Article Image</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(post.publishDate)}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-muted-foreground line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="inline-block bg-orange-500/20 text-orange-500 px-2 py-1 rounded-full text-xs font-medium mb-3">
                    In progress writing.
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                    
                    <div className="text-muted-foreground text-sm font-medium flex items-center gap-1 cursor-not-allowed">
                      Coming Soon
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}