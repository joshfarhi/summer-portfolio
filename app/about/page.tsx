"use client";

import { motion } from "framer-motion";
import { Code, Palette, Rocket, Users, Award, Coffee, Zap, Database, TestTube, Settings, Globe, Layers, Figma } from "lucide-react";

const skills = [
  {
    category: "UI/UX Engineering",
    technologies: ["React.js", "Next.js (App Router, SSR/SSG)", "Tailwind CSS", "Radix UI"],
    icon: Layers,
  },
  {
    category: "Languages",
    technologies: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
    icon: Code,
  },
  {
    category: "Data Layer",
    technologies: ["GraphQL", "REST APIs", "Supabase", "Clerk"],
    icon: Database,
  },
  {
    category: "Testing & Performance",
    technologies: ["Jest", "Lighthouse", "A/B Testing", "Lazy-loading", "Bundle Optimization"],
    icon: TestTube,
  },
  {
    category: "DevOps & CI/CD",
    technologies: ["GitHub Actions", "Vercel", "CI/CD", "Serverless APIs (Edge Functions)"],
    icon: Settings,
  },
  {
    category: "Backend Development",
    technologies: [".NET Core", "RESTful APIs", "API consumption with TypeScript/React"],
    icon: Rocket,
  },
  {
    category: "Collaboration",
    technologies: ["Agile teams", "Wireframe-to-UI builds (Figma)", "Resilient deployments", "Mentorship"],
    icon: Users,
  },
  {
    category: "Bonus Exposure",
    technologies: ["Search architecture", "CMS systems", "Component design", "SEO-first structure", "Frontend reliability"],
    icon: Globe,
  },
];

const experiences = [
  {
    title: "Senior Web Engineer",
    company: "Independent Contractor",
    period: "2021 - Present",
    description: "Design and implement robust, responsive web interfaces using React, Next.js, and TypeScript. Lead cross-functional collaboration with design and product teams to deliver scalable UI/UX systems backed by clean architecture and A/B testing frameworks.",
  },
  {
    title: "Frontend Systems Architect",
    company: "Various Organizations",
    period: "2022 - Present",
    description: "Specialized in search-focused component optimization and performance-driven interface design. Built scalable systems that prioritize safety, discoverability, and intuitive user experiences at enterprise scale.",
  },
  {
    title: "UI/UX Engineer",
    company: "Freelance Projects",
    period: "2021 - 2022",
    description: "Developed responsive, performance-optimized web applications with focus on clean architecture. Collaborated with backend teams to create seamless integrations and component libraries for scalable development.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Hero Section */}
        <section className="mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">About Me</h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              Senior Web Engineer with 3+ years of experience designing and implementing robust, responsive, 
              and performance-optimized web interfaces. Specialized in building scalable UI/UX systems that 
              prioritize safety, discoverability, and intuitive user experiences at scale.
            </p>
          </motion.div>
        </section>

        {/* Personal Story */}
        <section className="mb-16 sm:mb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Engineering Excellence</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  As a Senior Web Engineer, I specialize in architecting robust, scalable web interfaces 
                  using React, Next.js, and TypeScript. My expertise spans from component-level optimization 
                  to full-scale UI/UX system design, with a focus on clean architecture and performance.
                </p>
                <p>
                  I excel in cross-functional collaboration with design, product, and backend teams, 
                  delivering search-focused component optimization and A/B testing frameworks. My approach 
                  emphasizes building interfaces that are not only technically sound but also safe, 
                  discoverable, and intuitive for users at scale.
                </p>
                <p>
                  With proven experience in delivering 95+ Lighthouse scores and sub-3-second load times, 
                  I bring a deep understanding of modern web standards and performance optimization 
                  techniques that drive both user satisfaction and business results.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8">
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
                <Coffee className="w-5 h-5 text-primary" />
                Quick Facts
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                <li>🚀 3+ years senior web engineering experience</li>
                <li>⚡ Expert in React, Next.js & TypeScript architecture</li>
                <li>🎯 Scalable UI/UX systems design & implementation</li>
                <li>📊 A/B testing & search-focused optimization</li>
                <li>🤝 Cross-functional team collaboration expertise</li>
                <li>🔍 Performance-optimized, discoverable interfaces</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12"
          >
            Technical Expertise
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6">
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-secondary/50 text-xs sm:text-sm rounded-full border border-border"
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
        <section className="mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12"
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
                className="relative pl-6 sm:pl-8 pb-8 sm:pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-2 top-6 bottom-0 w-px bg-border" />
                )}
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                
                <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold">{exp.title}</h3>
                    <span className="text-xs sm:text-sm text-primary font-medium">{exp.period}</span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground font-medium mb-2 sm:mb-3">{exp.company}</p>
                  <p className="text-sm sm:text-base text-muted-foreground">{exp.description}</p>
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
            <h2 className="text-3xl font-semibold mb-6">Engineering Philosophy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe exceptional web interfaces are built through the intersection of clean architecture, 
              user-centered design, and performance optimization. My approach emphasizes building systems that 
              are safe, discoverable, and intuitive at scale—creating digital experiences that foster 
              community and belonging through thoughtful engineering and cross-functional collaboration.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}