"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Code } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
            >
              Joshua Farhi
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8"
            >
              Full-Stack Developer & Digital Architect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Building scalable, high-performance web applications focused on intuitive user experiences. 
              Specializing in Next.js, WordPress, and performance optimization with proven results including 95+ Lighthouse scores and sub-3-second load times.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/work"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2 group"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="border border-border hover:bg-accent text-foreground px-8 py-3 rounded-full font-medium transition-colors"
              >
                About Me
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Technologies */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-semibold mb-4">Technologies I Excel With</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leveraging modern frameworks and tools to build robust, scalable applications
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto"
          >
            {[
              "Next.js", "React", "WordPress", "Python", "Node.js", "Tailwind CSS",
              "WooCommerce", "Elementor", "SEO", "Performance", "Vercel", "Ahrefs"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 text-center hover:bg-card/80 transition-colors"
              >
                <span className="text-sm font-medium">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Quick Stats */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8">
              <div className="text-3xl font-bold text-primary mb-2">95+</div>
              <div className="text-muted-foreground">Lighthouse Score</div>
            </div>
            <div className="text-center bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8">
              <div className="text-3xl font-bold text-primary mb-2">&lt;3s</div>
              <div className="text-muted-foreground">Load Times</div>
            </div>
            <div className="text-center bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Accessibility</div>
            </div>
          </motion.div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-12 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-semibold mb-4">Let&apos;s Build Something Amazing</h3>
            <p className="text-muted-foreground mb-8">
              Ready to bring your ideas to life? I&apos;m always excited to work on new projects and collaborate with innovative teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:joshfarhi12@gmail.com"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://github.com/joshfarhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border hover:bg-accent text-foreground p-3 rounded-full transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/joshua-farhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border hover:bg-accent text-foreground p-3 rounded-full transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://leetcode.com/u/joshfarhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border hover:bg-accent text-foreground p-3 rounded-full transition-colors"
                  aria-label="LeetCode Profile"
                >
                  <Code className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
