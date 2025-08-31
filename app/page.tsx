"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [showContactGlow, setShowContactGlow] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('from') === 'start-project') {
      setShowContactGlow(true);
      // Remove the parameter from URL without reload
      const url = new URL(window.location.href);
      url.searchParams.delete('from');
      window.history.replaceState({}, '', url);
      // Remove glow after animation completes
      setTimeout(() => setShowContactGlow(false), 3000);
    }
  }, []);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('joshfarhi12@gmail.com');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };
  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Hero Section */}
        <section className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight"
            >
              Joshua Farhi
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 sm:mb-8"
            >
              Senior Web Engineer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0"
            >
              3+ years of experience designing and implementing robust, responsive, and performance-optimized web interfaces using React, Next.js, and TypeScript. 
              Known for delivering scalable UI/UX systems backed by clean architecture, A/B testing, and search-focused component optimization. 
              Passionate about building interfaces that are safe, discoverable, and intuitive at scale.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-6 justify-center items-center"
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Link
                  href="/work"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transition-colors flex items-center gap-2 group text-sm sm:text-base w-full sm:w-auto justify-center"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/about"
                  className="border border-border hover:bg-accent text-foreground px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transition-colors text-sm sm:text-base w-full sm:w-auto text-center"
                >
                  About Me
                </Link>
              </div>
              
              {/* Social Media Buttons */}
              <div className="flex gap-4 justify-center">
                <button
                  onClick={copyEmailToClipboard}
                  className={`bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 group ${
                    showContactGlow 
                      ? 'animate-pulse ring-4 ring-primary/50 shadow-lg shadow-primary/25 bg-primary/20' 
                      : ''
                  }`}
                  aria-label="Copy Email"
                >
                  <Mail className="w-4 h-4" />
                  <span className="hidden sm:inline">Email</span>
                </button>
                <a
                  href="https://github.com/joshfarhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border hover:bg-accent text-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-colors flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
                  aria-label="GitHub Profile"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="hidden sm:inline">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/joshua-farhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border hover:bg-accent text-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-colors flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
                                 <a
                   href="https://leetcode.com/u/joshfarhi"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="border border-border hover:bg-accent text-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-colors flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
                   aria-label="LeetCode Profile"
                 >
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.904l-3.975 5.483a1.35 1.35 0 0 0-.12.804 1.34 1.34 0 0 0 .54.84l3.6 2.483a1.34 1.34 0 0 0 .84.54 1.35 1.35 0 0 0 .804-.12l5.483-3.975 6.466-4.406a1.374 1.374 0 0 0 .438-.961 1.374 1.374 0 0 0-1.374-1.374z"/>
                   </svg>
                   <span className="hidden sm:inline">LeetCode</span>
                 </a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Technologies */}
        <section className="mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Core Technologies & Architecture</h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Specialized in building scalable UI/UX systems with cross-functional collaboration expertise
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 max-w-5xl mx-auto"
          >
            {[
              { name: "React.js", icon: "react", gradient: "from-blue-400 to-cyan-400" },
              { name: "Vite", icon: "vite", gradient: "from-purple-400 to-pink-500" },
              { name: "Next.js", icon: "nextjs", gradient: "from-gray-700 to-gray-900" },
              { name: "TypeScript", icon: "typescript", gradient: "from-blue-600 to-indigo-600" },
              { name: "Tailwind CSS", icon: "tailwind", gradient: "from-cyan-400 to-blue-500" },
              { name: "GraphQL", icon: "graphql", gradient: "from-pink-500 to-rose-500" },
              { name: "Supabase", icon: "supabase", gradient: "from-green-400 to-emerald-500" },
              { name: "Jest", icon: "jest", gradient: "from-red-500 to-orange-500" },
              { name: "Lighthouse", icon: "lighthouse", gradient: "from-yellow-400 to-orange-500" },
              { name: "GitHub Actions", icon: "github-actions", gradient: "from-gray-800 to-black" },
              { name: "Vercel", icon: "vercel", gradient: "from-black to-gray-800" },
              { name: ".NET Core", icon: "dotnet", gradient: "from-purple-500 to-indigo-600" },
              { name: "Figma", icon: "figma", gradient: "from-purple-400 to-pink-400" }
            ].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.1, 
                    delay: 0.7 + index * 0.08
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                    z: 50,
                    transition: { duration: 0.2 }
                  }}
                  className="tech-card glass-effect relative bg-card/30 backdrop-blur-xl border border-border/50 rounded-xl p-5 text-center cursor-pointer group overflow-hidden"
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`} />
                  
                  {/* Animated border glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 rounded-xl -z-10`} />
                  
                  {/* Shimmer effect - entrance + hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ 
                      duration: 1.5, 
                      delay: 0.9 + index * 0.08,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 ease-in-out" />
                  
                  
                  {/* Icon with enhanced animation */}
                  <motion.div
                    className="relative z-10"
                    whileHover={{ 
                      rotateY: 360,
                      transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                  >
                                         {tech.icon === "vite" ? (
                       <img 
                         src="/vite.svg" 
                         alt="Vite" 
                         className="w-6 h-6 mx-auto mb-3 group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-300"
                       />
                     ) : tech.icon === "react" ? (
                       <img 
                         src="/react.svg" 
                         alt="React.js" 
                         className="w-6 h-6 mx-auto mb-3 group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-300"
                       />
                     ) : tech.icon === "nextjs" ? (
                       <img 
                         src="/nextjs.svg" 
                         alt="Next.js" 
                         className="w-6 h-6 mx-auto mb-3 group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-300"
                       />
                     ) : tech.icon === "typescript" ? (
                       <img 
                         src="/typescript.svg" 
                         alt="TypeScript" 
                         className="w-6 h-6 mx-auto mb-3 group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-300"
                       />
                     ) : tech.icon === "tailwind" ? (
                       <img 
                         src="/tailwind.svg" 
                         alt="Tailwind CSS" 
                         className="w-6 h-6 mx-auto mb-3 group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-300"
                       />
                     ) : tech.icon === "graphql" ? (
                       <img 
                         src="/graphql.svg" 
                         alt="GraphQL" 
                         className="w-6 h-6 mx-auto mb-3 group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-300"
                       />
                     ) : tech.icon === "supabase" ? (
                       <img 
                         src="/supabase.svg" 
                         alt="Supabase" 
                         className="w-6 h-6 mx-auto mb-3 group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-300"
                       />
                     ) : tech.icon === "jest" ? (
                       <img 
                         src="/jest.svg" 
                         alt="Jest" 
                         className="w-6 h-6 mx-auto mb-3 group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-300"
                       />
                     ) : tech.icon === "lighthouse" ? (
                       <img 
                         src="/lighthouse.svg" 
                         alt="Lighthouse" 
                         className="w-6 h-6 mx-auto mb-3 group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-300"
                       />
                     ) : tech.icon === "github-actions" ? (
                       <img 
                         src="/github-actions.svg" 
                         alt="GitHub Actions" 
                         className="w-6 h-6 mx-auto mb-3 group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-300"
                       />
                     ) : tech.icon === "vercel" ? (
                       <img 
                         src="/vercel.svg" 
                         alt="Vercel" 
                         className="w-6 h-6 mx-auto mb-3 group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-300"
                       />
                     ) : tech.icon === "dotnet" ? (
                       <img 
                         src="/dotnet.svg" 
                         alt=".NET Core" 
                         className="w-6 h-6 mx-auto mb-3 group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-300"
                       />
                     ) : tech.icon === "figma" ? (
                       <img 
                         src="/figma.svg" 
                         alt="Figma" 
                         className="w-6 h-6 mx-auto mb-3 group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-300"
                       />
                     ) : (
                       <Icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-300" />
                     )}
                  </motion.div>
                  
                  {/* Text with glow effect */}
                  <motion.span 
                    className="relative z-10 text-sm font-semibold group-hover:text-primary transition-colors duration-300 group-hover:drop-shadow-sm"
                    whileHover={{ 
                      textShadow: "0 0 8px rgba(66, 133, 244, 0.5)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {tech.name}
                  </motion.span>
                  
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${tech.gradient} w-0 group-hover:w-full transition-all duration-500 ease-out`} />
                </motion.div>
              );
            })}
          </motion.div>
        </section>


        {/* Contact CTA */}
        <section className="text-center px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 md:p-12 max-w-2xl mx-auto"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Currently seeking new full-time opportunities!</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
              Please feel free to contact me if you are a technical recruiter or associated with a company hiring for a developer role.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={copyEmailToClipboard}
                className={`bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  showContactGlow 
                    ? 'animate-pulse ring-4 ring-primary/50 shadow-lg shadow-primary/25 scale-105' 
                    : ''
                }`}
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </button>
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
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.904l-3.975 5.483a1.35 1.35 0 0 0-.12.804 1.34 1.34 0 0 0 .54.84l3.6 2.483a1.34 1.34 0 0 0 .84.54 1.35 1.35 0 0 0 .804-.12l5.483-3.975 6.466-4.406a1.374 1.374 0 0 0 .438-.961 1.374 1.374 0 0 0-1.374-1.374z"/>
                   </svg>
                 </a>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
      
      {/* Toast Notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50"
        >
          <Mail className="w-4 h-4" />
          <span>Email copied to clipboard!</span>
        </motion.div>
      )}
    </div>
  );
}
