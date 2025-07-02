"use client";

import { motion } from "framer-motion";
import { Code, Palette, Rocket, Users, Award, Coffee } from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5/CSS3"],
    icon: Code,
  },
  {
    category: "Backend & CMS",
    technologies: ["WordPress", "Node.js", "Python", "WooCommerce", "Elementor", "PHP"],
    icon: Rocket,
  },
  {
    category: "SEO & Performance",
    technologies: ["Lighthouse Optimization", "Core Web Vitals", "Ahrefs", "Local SEO", "Technical SEO", "Analytics"],
    icon: Award,
  },
  {
    category: "E-commerce & Business",
    technologies: ["WooCommerce", "Stripe Integration", "Inventory Management", "Lead Generation", "Conversion Optimization", "A/B Testing"],
    icon: Palette,
  },
];

const experiences = [
  {
    title: "Freelance Full-Stack Developer",
    company: "Independent Contractor",
    period: "2022 - Present",
    description: "Delivering high-performance web applications with 95+ Lighthouse scores. Specialized in Next.js, WordPress, and SEO optimization for e-commerce and business websites.",
  },
  {
    title: "SEO & Performance Specialist",
    company: "NexGen Pro Services",
    period: "2023 - Present",
    description: "Helping Naples, FL businesses achieve first-page Google rankings within 30 days through technical SEO, local optimization, and performance enhancement strategies.",
  },
  {
    title: "E-commerce Developer",
    company: "Various Clients",
    period: "2021 - Present",
    description: "Built custom e-commerce solutions using WooCommerce and Python automation. Created inventory management systems and payment integrations for cannabis and retail industries.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Passionate full-stack developer specializing in high-performance web applications, 
              SEO optimization, and e-commerce solutions that deliver measurable business results.
            </p>
          </motion.div>
        </section>

        {/* Personal Story */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-semibold mb-6">My Journey</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  My journey into web development started with a fascination for creating digital experiences 
                  that solve real-world problems. What began as exploring HTML and CSS evolved into a 
                  specialized focus on building high-performance, SEO-optimized web applications.
                </p>
                <p>
                  I&apos;ve had the privilege of helping businesses achieve remarkable results: from delivering 
                  95+ Lighthouse performance scores to helping local Naples businesses reach Google&apos;s first 
                  page within one month. My approach combines technical expertise with business strategy, 
                  ensuring every project delivers measurable value.
                </p>
                <p>
                  Beyond coding, I&apos;m passionate about remote work, travel, and martial arts. Whether 
                  I&apos;m exploring Japan, dog-sitting in Philadelphia, or optimizing e-commerce platforms, 
                  I bring the same dedication to excellence and continuous learning to everything I do.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Coffee className="w-5 h-5 text-primary" />
                Quick Facts
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>🚀 95+ Lighthouse performance scores achieved</li>
                <li>⚡ Sub-3-second load times guaranteed</li>
                <li>🎯 100% accessibility compliance standards</li>
                <li>📈 First-page Google rankings in 30 days</li>
                <li>🛒 E-commerce expert with WooCommerce & custom solutions</li>
                <li>🌐 Remote work specialist and digital nomad</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-center mb-12"
          >
            Technical Expertise
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/50 text-sm rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-center mb-12"
          >
            Professional Experience
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-2 top-6 bottom-0 w-px bg-border" />
                )}
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                
                <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-12 max-w-4xl mx-auto"
          >
            <Users className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-semibold mb-6">My Development Philosophy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe great software is built with empathy for the end user, attention to detail, 
              and a commitment to clean, maintainable code. Every line of code I write is guided by 
              the principle that technology should solve real problems and enhance human experiences.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}