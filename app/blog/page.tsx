"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    title: "My 10 Day Trip to Japan and Remote Work with Python",
    excerpt: "Discover how I balanced remote development work while exploring Japan for 10 days. Learn about maintaining productivity, cultural experiences, and the tools that made remote work seamless from Tokyo to Kyoto.",
    slug: "japan-remote-work-python",
    publishDate: "2024-03-15",
    readTime: "12 min read",
    category: "Travel & Tech",
    featured: true,
    tags: ["Remote Work", "Python", "Travel", "Japan", "Productivity"]
  },
  {
    title: "Remote Front-End Development, Traveling, Dog Sitting, and Martial Arts: My Two-Month Journey in Philadelphia",
    excerpt: "A comprehensive look at managing multiple responsibilities while maintaining high-quality development work. Explore how I balanced client projects, personal growth, and lifestyle choices during an extended stay in Philadelphia.",
    slug: "philadelphia-remote-work-journey",
    publishDate: "2024-02-10",
    readTime: "15 min read",
    category: "Lifestyle & Career",
    featured: true,
    tags: ["Remote Work", "Frontend", "Travel", "Martial Arts", "Work-Life Balance"]
  },
  {
    title: "Achieving 95+ Lighthouse Scores: Performance Optimization Strategies",
    excerpt: "Step-by-step guide to optimizing web applications for peak performance. Learn the techniques I use to consistently deliver sub-3-second load times and 95+ Lighthouse scores for client projects.",
    slug: "lighthouse-performance-optimization",
    publishDate: "2024-01-20",
    readTime: "10 min read",
    category: "Performance",
    featured: true,
    tags: ["Performance", "Lighthouse", "Optimization", "Core Web Vitals", "SEO"]
  },
  {
    title: "Local SEO Success: From Zero to First Page in 30 Days",
    excerpt: "Real case studies from Naples, FL businesses that achieved first-page Google rankings in under 30 days. Discover the exact local SEO strategies and technical optimizations that drive results.",
    slug: "local-seo-30-days",
    publishDate: "2023-12-05",
    readTime: "14 min read",
    category: "SEO",
    featured: false,
    tags: ["Local SEO", "Google Rankings", "Case Study", "Ahrefs", "Technical SEO"]
  },
  {
    title: "Building E-commerce Solutions with WooCommerce and Python Automation",
    excerpt: "Learn how to create powerful e-commerce platforms using WordPress, WooCommerce, and custom Python scripts for inventory management. Includes real examples from Joyful Expression project.",
    slug: "woocommerce-python-automation",
    publishDate: "2023-11-18",
    readTime: "16 min read",
    category: "E-commerce",
    featured: false,
    tags: ["WooCommerce", "Python", "E-commerce", "Automation", "WordPress"]
  },
  {
    title: "Next.js vs WordPress: Choosing the Right Tool for Business Websites",
    excerpt: "Comprehensive comparison of Next.js and WordPress for business websites. When to choose each platform, performance considerations, and real-world project examples.",
    slug: "nextjs-vs-wordpress-business",
    publishDate: "2023-10-22",
    readTime: "11 min read",
    category: "Web Development",
    featured: false,
    tags: ["Next.js", "WordPress", "Business Websites", "Performance", "SEO"]
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
              Personal insights on remote work, travel, web development, and achieving high-performance results. 
              Real experiences from a digital nomad developer&apos;s journey.
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
                className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 hover:bg-card/50 transition-colors group"
              >
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
                    
                    <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
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
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-medium transition-colors flex items-center gap-2 group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
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
                className="bg-card/30 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:bg-card/50 transition-colors group"
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
                  
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1 group"
                    >
                      Read
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-12 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-8">
              Get the latest articles and insights delivered straight to your inbox. 
              No spam, just valuable content about web development and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-input border border-border rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}