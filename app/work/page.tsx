"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";

const projects = [
  {
    title: "Springfield Painting - High-Performance Business Website",
    description: "Lead generation website built with Next.js achieving 95+ Lighthouse performance score and sub-3-second load times. Features local SEO optimization, service showcases, customer testimonials, and mobile-responsive design that converts visitors into customers.",
    image: "/placeholder-project-1.jpg",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "Local SEO", "Performance"],
    liveUrl: "https://springfieldpainting.com",
    githubUrl: "https://github.com/joshfarhi/springfield-painting-placeholder",
    featured: true,
    year: "2024",
    category: "Business Website"
  },
  {
    title: "Joyful Expression - E-commerce Platform",
    description: "Custom WooCommerce e-commerce solution with automated inventory management using Python scripts. Features secure payment processing, product catalog, and optimized checkout flow for improved conversion rates.",
    image: "/placeholder-project-2.jpg",
    tags: ["WordPress", "WooCommerce", "Python", "Elementor", "Payment Gateway"],
    liveUrl: "https://joyfulexpression.com",
    githubUrl: "https://github.com/joshfarhi/joyful-expression-placeholder",
    featured: true,
    year: "2023",
    category: "E-commerce"
  },
  {
    title: "Zoots Cannabis Co. - Compliant E-commerce",
    description: "Industry-compliant cannabis e-commerce platform with age verification, inventory tracking, and secure checkout. Built with WordPress and WooCommerce, featuring product filtering, customer reviews, and admin dashboard for compliance management.",
    image: "/placeholder-project-3.jpg",
    tags: ["WordPress", "WooCommerce", "Elementor", "Compliance", "E-commerce"],
    liveUrl: "https://zootsco.com",
    githubUrl: "https://github.com/joshfarhi/zoots-cannabis-placeholder",
    featured: true,
    year: "2023",
    category: "E-commerce"
  },
  {
    title: "NexGen Pro Services - SEO Success Stories",
    description: "Local SEO optimization project helping Naples, FL businesses achieve first-page Google rankings within 30 days. Implemented technical SEO, local citations, and performance optimization strategies.",
    image: "/placeholder-project-4.jpg",
    tags: ["WordPress", "Ahrefs", "Local SEO", "Performance", "Analytics"],
    liveUrl: "https://nexgenpro-placeholder.com",
    githubUrl: "https://github.com/joshfarhi/nexgen-seo-placeholder",
    featured: false,
    year: "2023",
    category: "SEO Services"
  }
];


export default function Work() {
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">My Work</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A collection of high-performance web applications and SEO success stories. 
              From achieving 95+ Lighthouse scores to first-page Google rankings in 30 days.
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
          <div className="grid lg:grid-cols-1 gap-12">
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
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Site
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-border hover:bg-accent text-foreground px-6 py-2 rounded-full font-medium transition-colors flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                  </div>
                  
                  <div className="lg:order-first">
                    <div className="bg-muted/20 border border-border rounded-xl aspect-[4/3] flex items-center justify-center">
                      <span className="text-muted-foreground">Project Screenshot</span>
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-card/30 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:bg-card/50 transition-colors group"
              >
                <div className="bg-muted/20 border-b border-border aspect-[4/3] flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Project Screenshot</span>
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
                    >
                      <ExternalLink className="w-3 h-3" />
                      Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-border hover:bg-accent text-foreground py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      <Github className="w-3 h-3" />
                      Code
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
            <a
              href="mailto:joshfarhi12@gmail.com"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium transition-colors inline-block"
            >
              Start a Project
            </a>
          </motion.div>
        </section>
      </div>
    </div>
  );
}