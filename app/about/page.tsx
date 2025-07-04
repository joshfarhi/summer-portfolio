"use client";

import { motion } from "framer-motion";
import { Code, Users, Award, Coffee, Zap, Database, TestTube, Settings, Globe, Layers, Figma, ExternalLink } from "lucide-react";

const skills = [
  {
    category: "React.js",
    technologies: ["JSX", "Hooks", "Context API", "Redux"],
    icon: Code,
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    category: "Next.js",
    technologies: ["App Router", "SSR/SSG", "API Routes", "Middleware"],
    icon: Zap,
    gradient: "from-gray-700 to-gray-900",
  },
  {
    category: "TypeScript",
    technologies: ["Type Safety", "Generics", "Interfaces", "Decorators"],
    icon: Code,
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    category: "Tailwind CSS",
    technologies: ["Utility-first", "Responsive", "Dark Mode", "Custom Themes"],
    icon: Layers,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    category: "GraphQL",
    technologies: ["Queries", "Mutations", "Subscriptions", "Apollo Client"],
    icon: Database,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    category: "Supabase",
    technologies: ["Auth", "Database", "Storage", "Edge Functions"],
    icon: Database,
    gradient: "from-green-400 to-emerald-500",
  },
  {
    category: "Jest Testing",
    technologies: ["Unit Tests", "Integration", "Mocking", "Coverage"],
    icon: TestTube,
    gradient: "from-red-500 to-orange-500",
  },
  {
    category: "Lighthouse",
    technologies: ["Performance", "SEO", "Accessibility", "PWA"],
    icon: Zap,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    category: "GitHub Actions",
    technologies: ["CI/CD", "Workflows", "Automation", "Deployment"],
    icon: Settings,
    gradient: "from-gray-800 to-black",
  },
  {
    category: "Vercel",
    technologies: ["Deployment", "Analytics", "Edge Functions", "Domains"],
    icon: Settings,
    gradient: "from-black to-gray-800",
  },
  {
    category: ".NET Core",
    technologies: ["C#", "Web APIs", "Entity Framework", "MVC"],
    icon: Code,
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    category: "Figma",
    technologies: ["Design Systems", "Prototyping", "Collaboration", "Handoff"],
    icon: Figma,
    gradient: "from-purple-400 to-pink-400",
  },
  {
    category: "REST APIs",
    technologies: ["HTTP Methods", "JSON", "Authentication", "Documentation"],
    icon: Globe,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    category: "A/B Testing",
    technologies: ["Experimentation", "Analytics", "Conversion", "Optimization"],
    icon: TestTube,
    gradient: "from-orange-500 to-red-500",
  },
  {
    category: "Agile",
    technologies: ["Scrum", "Kanban", "Retrospectives", "Sprint Planning"],
    icon: Users,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    category: "SEO",
    technologies: ["Meta Tags", "Structured Data", "Core Web Vitals", "Search Console"],
    icon: Globe,
    gradient: "from-green-500 to-blue-500",
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Independent Developer",
    period: "2022 - Present",
    description: "Created a full-stack inventory tracking system for managing product stock levels, locations, and user roles across multiple teams. Built with a modern React frontend and .NET Core microservices on the backend. Collaborated with designers and product managers to develop and refine search filtering experiences across business applications.",
  },
  {
    title: "Frontend Developer & SEO Analyst (Contract)",
    company: "GrandCommunications Network (Grandcom)",
    period: "2024",
    description: "Engineered custom search filters, product catalogs, and interactive UI elements using React and CMS-backed data. Delivered scalable component libraries in sync with evolving marketing/product needs. Improved site discoverability and responsiveness through structured data, Lighthouse optimization, and semantic component design.",
  },
  {
    title: "Website Designer & Marketing Strategist",
    company: "PageHub",
    period: "2023",
    description: "Built small-business platforms with responsive design, SEO-first structure, and frontend reliability across browsers. Built and consumed APIs (REST/GraphQL), integrating backend services with dynamic routing and component reusability. Delivered scalable, resilient frontends with automated testing (Jest) and CI/CD pipelines (GitHub Actions, Vercel).",
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
              Full-Stack Developer with 3+ years of professional experience designing and implementing robust, responsive, 
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
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">A little about myself..</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  As a Full-Stack Web Developer, I specialize in architecting robust, scalable web interfaces 
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
                  With proven experience in delivering SEO and website growth, 
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
            
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
                <Coffee className="w-5 h-5 text-primary" />
                Quick Facts
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                <li>🚀 3+ years full-stack web developer experience</li>
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Technical Expertise</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Full-stack technologies and frameworks with focus on performance and scalability
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.1, 
                    delay: 0.3 + index * 0.08
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                    z: 50,
                    transition: { duration: 0.2 }
                  }}
                  className="tech-card glass-effect relative bg-card/30 backdrop-blur-xl border border-border/50 rounded-xl p-4 sm:p-5 text-center cursor-pointer group overflow-hidden"
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`} />
                  
                  {/* Animated border glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 rounded-xl -z-10`} />
                  
                  {/* Shimmer effect - entrance + hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ 
                      duration: 1.5, 
                      delay: 0.5 + index * 0.08,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 ease-in-out" />
                  
                  
                  {/* Icon with enhanced animation */}
                  <motion.div
                    className="relative z-10 mb-3"
                    whileHover={{ 
                      rotateY: 360,
                      transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                  >
                    <Icon className="w-6 h-6 text-primary mx-auto group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-300" />
                  </motion.div>
                  
                  {/* Category title with glow effect */}
                  <motion.h3 
                    className="relative z-10 text-sm sm:text-base font-semibold mb-3 group-hover:text-primary transition-colors duration-300 group-hover:drop-shadow-sm"
                    whileHover={{ 
                      textShadow: "0 0 8px rgba(66, 133, 244, 0.5)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {skill.category}
                  </motion.h3>
                  
                  {/* Technologies list */}
                  <div className="relative z-10 flex flex-wrap gap-1 justify-center">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary/50 text-xs rounded-full border border-border group-hover:bg-secondary/70 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${skill.gradient} w-0 group-hover:w-full transition-all duration-500 ease-out`} />
                </motion.div>
              );
            })}
          </motion.div>
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
          
          {/* Freelance Section */}
          <div className="mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Independent Development
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Full-stack solutions and architectural leadership
                </p>
                <div className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        UNCC Full-Stack Bootcamp Certified
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                {/* Enhanced glow effect with evolution animation */}
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"
                  animate={{
                    opacity: [0.75, 1, 0.75],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 3,
                    delay: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 8
                  }}
                />
                
                {/* Evolution Burst Effect */}
                <motion.div
                  className="absolute -inset-8 w-16 h-16 pointer-events-none"
                  style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 2, 0],
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 2,
                    delay: 3,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatDelay: 8
                  }}
                >
                  {/* Gradient explosion effect */}
                  <div className="absolute inset-0 bg-gradient-conic from-blue-400 via-purple-600 to-cyan-400 rounded-full blur-xl opacity-80" />
                  <div className="absolute inset-2 bg-gradient-radial from-white/40 to-transparent rounded-full blur-lg" />
                  <div className="absolute inset-4 bg-gradient-conic from-cyan-300 via-blue-500 to-purple-400 rounded-full blur-md opacity-60" />
                </motion.div>
                
                {/* Gradient Wave Burst */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-8 h-8 pointer-events-none"
                    style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 0.8, 0],
                      scale: [0, 3 + i * 0.5, 0],
                      rotate: [0, 180 + i * 45, 360]
                    }}
                    transition={{
                      duration: 2,
                      delay: 3.2 + i * 0.1,
                      ease: "easeOut",
                      repeat: Infinity,
                      repeatDelay: 8
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-conic from-blue-400/20 via-purple-600/40 to-transparent rounded-full blur-lg" />
                  </motion.div>
                ))}
                
                
                <div className="relative bg-card/40 backdrop-blur-lg border border-border/50 rounded-2xl p-6 sm:p-8 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div className="flex items-center gap-3 mb-2 sm:mb-0">
                      {/* Enhanced pulsing dot that responds to evolution */}
                      <motion.div 
                        className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse relative"
                        animate={{
                          scale: [1, 1.5, 1],
                          boxShadow: [
                            "0 0 10px rgba(59, 130, 246, 0.5)",
                            "0 0 30px rgba(147, 51, 234, 0.8)",
                            "0 0 10px rgba(59, 130, 246, 0.5)"
                          ]
                        }}
                        transition={{
                          duration: 2,
                          delay: 4,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 8
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-sm opacity-50" />
                      </motion.div>
                      <h4 className="text-xl sm:text-2xl font-bold">{experiences[0].title}</h4>
                    </div>
                    <span className="text-sm sm:text-base text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                      {experiences[0].period}
                    </span>
                  </div>
                  <p className="text-base sm:text-lg text-blue-400 font-medium mb-4">{experiences[0].company}</p>
                  <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                    {/* Main Projects with Special Bullet Points */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <p>
                              <span className="font-semibold text-foreground">Kiosk Rewards Points System:</span> Designed using Next.js, Supabase, Clerk, TypeScript, and modern web technologies 
                              to deliver seamless customer loyalty experiences.
                            </p>
                            <a
                              href="#" // Replace with actual link
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 border border-blue-500/20 px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 flex-shrink-0 mt-1"
                            >
                              <span>Demo</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <p>
                              <span className="font-semibold text-foreground">Inventory Tracking System:</span> Created a full-stack system for managing product stock levels, locations, 
                              and user roles across multiple teams. Built with a modern React frontend and .NET Core 
                              microservices on the backend.
                            </p>
                            <a
                              href="#" // Replace with actual link
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 bg-green-500/10 hover:bg-green-500/20 text-green-500 border border-green-500/20 px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 flex-shrink-0 mt-1"
                            >
                              <span>Demo</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <p>
                              <span className="font-semibold text-foreground">Intelligent Chat-bot:</span> Developed for websites that handles customer questions and booking requests, 
                              integrating natural language processing with booking systems to streamline customer interactions.
                            </p>
                            <a
                              href="#" // Replace with actual link
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 bg-purple-500/10 hover:bg-purple-500/20 text-purple-500 border border-purple-500/20 px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 flex-shrink-0 mt-1"
                            >
                              <span>Demo</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Regular Bullet Points */}
                    <div className="pt-2">
                      <h5 className="text-sm font-semibold text-foreground mb-3">Key Achievements & Responsibilities:</h5>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Collaborated with designers and product managers to develop and refine search and 
                          filtering experiences across business applications.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Improved site discoverability and responsiveness through structured data, 
                          Lighthouse optimization, and semantic component design.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Built and consumed APIs (REST/GraphQL), integrating backend services with 
                          dynamic routing and component reusability.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Delivered scalable, resilient frontends with automated testing (Jest) and 
                          CI/CD pipelines (GitHub Actions, Vercel).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Maintained live ops support and performance monitoring for production systems.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Contract Work Section */}
          <div className="max-w-3xl mx-auto relative">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                Contract & Consulting
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Specialized frontend development and optimization
              </p>
            </div>
            
            
            {experiences.slice(1).map((exp, index) => (
              <motion.div
                key={index + 1}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                className="relative pl-6 sm:pl-8 pb-8 sm:pb-12 last:pb-0"
              >
                {/* Static Timeline dot */}
                <div className="absolute left-0 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10" />
                
                <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 hover:bg-card/40 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg sm:text-xl font-semibold">{exp.title}</h4>
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