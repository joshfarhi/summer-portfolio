"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    title: "Tokyo in 3 Days: The Ultimate Urban Winter Adventure",
    excerpt: "Discover the best of Tokyo in winter - from Shibuya's neon lights cutting through the cold to traditional temples dusted with snow. Complete Tokyo travel guide with insider tips for navigating Japan's capital in January.",
    slug: "tokyo-3-days-winter-adventure",
    publishDate: "2024-01-28",
    readTime: "12 min read",
    category: "Asia Travel",
    featured: true,
    tags: ["Tokyo", "Japan", "Winter", "Shibuya", "Urban Adventure"]
  },
  {
    title: "Seoul Decoded: A Modern Korean City Break in February",
    excerpt: "Uncover Seoul's perfect blend of tradition and modernity during the coldest month. From heated Korean BBQ in Gangnam to exploring Myeongdong's winter markets, experience Seoul when the culture runs hot despite the freezing temperatures.",
    slug: "seoul-decoded-february-city-break",
    publishDate: "2024-02-25",
    readTime: "14 min read",
    category: "Asia Travel",
    featured: true,
    tags: ["Seoul", "South Korea", "Winter", "Korean Culture", "City Break"]
  },
  {
    title: "Hanoi Unveiled: Vietnam's Cultural Tapestry in Spring",
    excerpt: "Dive deep into Hanoi's rich culture as spring awakens the city. From ancient traditions in the Old Quarter to modern life along the Red River Delta, discover Vietnam's captivating capital emerging from winter.",
    slug: "hanoi-unveiled-spring-cultural-tapestry",
    publishDate: "2024-03-30",
    readTime: "16 min read",
    category: "Asia Travel",
    featured: true,
    tags: ["Hanoi", "Vietnam", "Spring", "Culture", "Old Quarter"]
  },
  {
    title: "Bangkok's Urban Jungle: Street Photography & Hot Season Culture",
    excerpt: "Master Bangkok street photography while exploring the city's vibrant culture during the hot season. From Sukhumvit's bustling streets to hidden temples, capture the essence of urban Thailand in April's heat.",
    slug: "bangkok-urban-jungle-hot-season",
    publishDate: "2024-04-20",
    readTime: "13 min read",
    category: "Asia Travel",
    featured: true,
    tags: ["Bangkok", "Thailand", "Hot Season", "Street Photography", "Urban Culture"]
  },
  {
    title: "Southern Thailand Sunsets: Chasing Golden Hour in Paradise",
    excerpt: "Capture stunning sunsets along Thailand's southern coast during the perfect weather season. Best locations, timing, and photography tips for magical golden hour moments along the Gulf of Thailand.",
    slug: "southern-thailand-sunsets-golden-hour",
    publishDate: "2024-05-10",
    readTime: "11 min read",
    category: "Asia Travel",
    featured: false,
    tags: ["Southern Thailand", "Beaches", "Photography", "Sunset", "Gulf of Thailand"]
  },
  {
    title: "Vientiane Secrets: Laos' Hidden Capital Gem Along the Mekong",
    excerpt: "Discover Vientiane's charm along the Mekong River during the perfect travel season. Why Laos' capital should be on every Southeast Asia itinerary - from riverside scenes to urban night markets.",
    slug: "vientiane-secrets-mekong-capital",
    publishDate: "2024-05-20",
    readTime: "10 min read",
    category: "Asia Travel",
    featured: false,
    tags: ["Vientiane", "Laos", "Mekong River", "Hidden Gems", "Southeast Asia"]
  },
  {
    title: "The Ultimate 5-Month Asia Circuit: Country-Hopping Through Seasons",
    excerpt: "Epic 5-month journey across Japan, Korea, Thailand, Vietnam & Laos through different seasons. Complete logistics, costs, and insider tips for navigating winter temples to hot season beaches.",
    slug: "ultimate-5-month-asia-circuit",
    publishDate: "2024-05-25",
    readTime: "18 min read",
    category: "Asia Travel",
    featured: false,
    tags: ["Asia Circuit", "Multi-Country", "Seasons", "Travel Guide", "Digital Nomad"]
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