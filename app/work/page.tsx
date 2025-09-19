"use client";

import { motion } from "framer-motion";
import { ExternalLink, Calendar, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Smoke Tokens - Cannabis Dispensary Loyalty Platform",
    description: "Comprehensive loyalty program software specifically designed for cannabis dispensaries and smoke shops. Built with Next.js, Supabase, Clerk, and TypeScript featuring simple kiosk-based signup, automatic point tracking, customizable rewards, and comprehensive analytics dashboard. Includes 14-day free trial and transparent pricing at $49/month.",
    image: "/SmokeTokensBanner.webp",
    tags: ["Next.js", "Supabase", "Clerk", "TypeScript", "Kiosk UI", "Analytics"],
    liveUrl: "https://smoketokens.com",
    featured: true,
    year: "2025",
    category: "Enterprise Software"
  },
  {
    title: "Hundoja - Premium Streetwear E-Commerce",
    description: "Modern e-commerce platform for premium streetwear brand featuring exclusive collections, seamless shopping experience, and urban-inspired design. Built with React, TypeScript, and Tailwind CSS. Includes product catalog, shopping cart functionality, user authentication, and responsive design optimized for mobile and desktop experiences.",
    image: "/hundoja-work.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "E-Commerce", "Responsive Design", "User Authentication"],
    liveUrl: "https://hundoja.vercel.app/",
    featured: true,
    year: "2023",
    category: "E-Commerce"
  },
  {
    title: "NexGen Auto - Mobile Auto Detailing Services",
    description: "Professional website for mobile auto detailing services in Southwest Florida. Built with Next.js, Aceternity UI, and Tailwind CSS featuring service packages, transparent pricing, customer testimonials, and booking system. Includes SEO optimization, responsive design, and modern UI components for enhanced user experience.",
    image: "/nexgen-work.png",
    tags: ["Next.js", "Aceternity UI", "Tailwind CSS", "SEO", "Responsive Design", "Booking System"],
    liveUrl: "https://nexgen-website-taupe.vercel.app/",
    featured: true,
    year: "2025",
    category: "Website Development"
  },
  {
    title: "Inventory Tracking System",
    description: "Created a full-stack system for managing product stock levels, locations, and user roles across multiple teams. Built with a modern React frontend and .NET Core microservices on the backend. Features real-time updates, automated alerts, and comprehensive reporting.",
    image: "/85appBanner.webp",
    tags: ["React", ".NET Core", "Microservices", "Real-time", "Multi-user", "Dashboard"],
    liveUrl: "https://inventory-85.vercel.app/",
    featured: true,
    year: "2025",
    category: "Enterprise Software"
  },
  {
    title: "Family Recovery Support Center",
    description: "Solo-developed comprehensive website for a family recovery support organization helping loved ones navigate substance abuse and mental health challenges. Built from scratch using Next.js, TypeScript, Aceternity UI, ShadCN, and Tailwind CSS. Conducted extensive SEO research using Google Search Console and AI tools to optimize content strategy, wrote targeted resource materials, and provided strategic blog content recommendations to enhance organic reach and community engagement.",
    image: "/FSRC-landingpage.png",
    tags: ["Next.js", "TypeScript", "Aceternity UI", "ShadCN", "Tailwind CSS", "SEO", "Content Strategy"],
    liveUrl: "https://familyrecoverysupportcenter.com",
    featured: true,
    year: "2025",
    category: "Website Development and SEO Analytics"
  },
  {
    title: "Zoot's Cannabis - E-Commerce Delivery",
    description: "React-based e-commerce delivery platform for cannabis products with a streamlined browsing-to-checkout flow and mobile-first UX.",
    image: "/zoots-poster.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "E-Commerce", "Delivery", "Responsive Design"],
    liveUrl: "https://zootscannabis.co",
    featured: false,
    year: "2025",
    category: "E-Commerce"
  },
  {
    title: "Intelligent Chat-bot",
    description: "Developed for websites that handles customer questions and booking requests, integrating natural language processing with booking systems to streamline customer interactions. Features automated responses, booking integration, and conversation analytics.",
    image: "/placeholder-project-4.jpg",
    tags: ["NLP", "Chat-bot", "Booking Integration", "AI", "Customer Service", "Analytics"],
    liveUrl: "https://igc-alpha.vercel.app/",
    featured: false,
    year: "2025",
    category: "Enterprise Software"
  }
];


export default function Work() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Joshua Farhi",
    "jobTitle": "Full-Stack Developer & SEO Expert",
    "url": "https://joshuafarhi.com",
    "sameAs": [
      "https://github.com/joshfarhi",
      "https://linkedin.com/in/joshua-farhi"
    ],
    "workExample": [
      {
        "@type": "CreativeWork",
        "name": "Smoke Tokens - Cannabis Dispensary Loyalty Platform",
        "description": "Comprehensive loyalty program software for cannabis dispensaries built with Next.js and TypeScript",
        "url": "https://smoketokens.com",
        "dateCreated": "2025",
        "programmingLanguage": ["Next.js", "TypeScript", "Supabase"]
      },
      {
        "@type": "CreativeWork", 
        "name": "Hundoja - Premium Streetwear E-Commerce",
        "description": "Modern e-commerce platform for premium streetwear built with React and TypeScript",
        "url": "https://hundoja.vercel.app/",
        "dateCreated": "2023",
        "programmingLanguage": ["React", "TypeScript", "Tailwind CSS"]
      },
      {
        "@type": "CreativeWork", 
        "name": "NexGen Auto - Mobile Auto Detailing Services",
        "description": "Professional website for mobile auto detailing services built with Next.js and Aceternity UI",
        "url": "https://nexgen-website-taupe.vercel.app/",
        "dateCreated": "2025",
        "programmingLanguage": ["Next.js", "Aceternity UI", "Tailwind CSS"]
      },
      {
        "@type": "CreativeWork", 
        "name": "Family Recovery Support Center",
        "description": "Healthcare website with SEO optimization built with Next.js and modern UI frameworks",
        "url": "https://familyrecoverysupportcenter.com",
        "dateCreated": "2025",
        "programmingLanguage": ["Next.js", "TypeScript", "Aceternity UI", "ShadCN"]
      },
      {
        "@type": "CreativeWork",
        "name": "Zoot's Cannabis - E-Commerce Delivery",
        "description": "React app e-commerce delivery store",
        "url": "https://zootscannabis.co",
        "dateCreated": "2025",
        "programmingLanguage": ["React", "TypeScript", "Tailwind CSS"]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Hero Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">My Work</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Enterprise-grade applications built with modern technologies. Specializing in customer loyalty systems, 
              healthcare & recovery platforms, inventory management solutions, and AI-powered applications using Next.js, React, .NET Core, WordPress, and cloud technologies.
            </p>
          </motion.div>
        </section>

        {/* Featured Projects */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold mb-12"
          >
            Featured Projects
          </motion.h2>
          <div className="grid lg:grid-cols-1 gap-8 lg:gap-12">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {project.year}
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Technologies</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-secondary/50 text-sm rounded-full border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-medium transition-colors flex items-center gap-2"
                        aria-label={`View live site for ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Site
                      </a>
                    </div>
                  </div>
                  
                  <div className="lg:order-first">
                    <div className="aspect-[16/9] overflow-hidden">
                      {project.image.includes('placeholder') ? (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-muted/20 border border-border rounded-xl p-8">
                          {project.title === "Family Recovery Support Center" ? (
                            <>
                              <h3 className="text-2xl font-bold text-foreground mb-2">Recovery Support Platform</h3>
                              <p className="text-muted-foreground text-center">Community Resources & Family Support</p>
                            </>
                          ) : project.title === "Intelligent Chat-bot" ? (
                            <>
                              <h3 className="text-2xl font-bold text-foreground mb-2">AI Chat Assistant</h3>
                              <p className="text-muted-foreground text-center">Natural Language Processing & Booking Integration</p>
                            </>
                          ) : (
                            <span className="text-muted-foreground">Project Screenshot</span>
                          )}
                        </div>
                      ) : (
                        <Image
                          src={project.image}
                          alt={`${project.title} - ${project.category} project showcasing ${project.tags.slice(0, 3).join(', ')}`}
                          width={1200}
                          height={628}
                          className="w-full h-full object-cover"
                          style={{ borderRadius: '18px' }}
                          priority={index === 0}
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* All Projects Grid */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold mb-12"
          >
            All Projects
          </motion.h2>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-card/30 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:bg-card/50 transition-colors group"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  {project.image.includes('placeholder') ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-muted/20 border-b border-border p-6">
                      {project.title === "Family Recovery Support Center" ? (
                        <>
                          <h4 className="text-lg font-bold text-foreground mb-2 text-center">Recovery Support Platform</h4>
                          <p className="text-muted-foreground text-xs text-center">Community Resources & Family Support</p>
                        </>
                      ) : project.title === "Intelligent Chat-bot" ? (
                        <>
                          <h4 className="text-lg font-bold text-foreground mb-2 text-center">AI Chat Assistant</h4>
                          <p className="text-muted-foreground text-xs text-center">Natural Language Processing & Booking Integration</p>
                        </>
                      ) : (
                        <span className="text-muted-foreground text-sm">Project Screenshot</span>
                      )}
                    </div>
                  ) : (
                    <Image
                      src={project.image}
                      alt={`${project.title} - ${project.category} project showcasing ${project.tags.slice(0, 3).join(', ')}`}
                      width={1200}
                      height={628}
                      className="w-full h-full object-cover"
                      style={{ borderRadius: '18px' }}
                      loading="lazy"
                    />
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary/50 text-xs rounded border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs text-muted-foreground">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm"
                      aria-label={`View live site for ${project.title}`}
                    >
                      <ExternalLink className="w-3 h-3" />
                      Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-12 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-semibold mb-4">Like What You See?</h3>
            <p className="text-muted-foreground mb-8">
              I&apos;m always excited to work on new projects and bring innovative ideas to life. 
              Let&apos;s discuss how we can collaborate on your next venture.
            </p>
            <Link
              href="/?from=start-project"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium transition-colors inline-block"
            >
              Start a Project
            </Link>
          </motion.div>
        </section>
        </div>
      </div>
    </>
  );
}