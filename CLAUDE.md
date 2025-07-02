# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (Next.js 15+)
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Project Architecture

This is a Next.js 15 portfolio website for Joshua Farhi (Full-Stack Developer) built with:

### Core Technologies
- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS 4** for styling with custom dark theme
- **Framer Motion** for animations and transitions
- **Aceternity UI** components for modern UI elements
- **Lucide React** for icons

### Project Structure
```
app/
├── components/
│   └── navigation.tsx          # Fixed navigation with active states
├── about/page.tsx             # About page with experience timeline
├── work/page.tsx              # Portfolio showcase with project grid
├── blog/page.tsx              # Blog listing with featured articles
├── layout.tsx                 # Root layout with SEO metadata
├── page.tsx                   # Homepage with hero and CTA sections
└── globals.css                # Dark theme CSS variables and styles
```

### Design System
- **Dark Theme**: Consistent dark color scheme using CSS custom properties
- **Typography**: Geist Sans and Geist Mono fonts
- **Layout**: Responsive design with container-based layouts
- **Animations**: Framer Motion for smooth page transitions and scroll effects

### Key Features
- SEO-optimized pages with proper metadata
- Responsive navigation with active state indicators
- Animated hero sections and content reveals
- Project showcase with live links and GitHub repositories
- Blog system with featured articles and categories
- Contact forms and social media integration

### Content Structure
- **Home**: Hero (performance-focused messaging), real tech stack, lighthouse/performance stats, contact CTA with social links
- **About**: Digital nomad journey, real achievements (95+ Lighthouse scores, 30-day SEO success), updated skills focused on WordPress/Next.js/SEO, actual experience timeline
- **Work**: Real projects (Springfield Painting, Joyful Expression, Zoots Cannabis Co., NexGen Pro Services) with performance metrics and business results
- **Blog**: Personal posts about Japan travel, Philadelphia experiences, performance optimization guides, and SEO case studies

### Real Contact Information
- **Email**: joshfarhi12@gmail.com
- **GitHub**: https://github.com/joshfarhi
- **LinkedIn**: https://linkedin.com/in/joshua-farhi
- **LeetCode**: https://leetcode.com/u/joshfarhi

### Styling Conventions
- Use Tailwind CSS utility classes
- Custom CSS variables for consistent theming
- Glass morphism effects with backdrop-blur
- Consistent border radius and spacing scale
- Hover states and transitions on interactive elements

### SEO Optimization
- Structured metadata for each page
- Semantic HTML with proper heading hierarchy
- Open Graph and Twitter card support
- Optimized for web performance and Core Web Vitals

When making changes:
1. Maintain the dark theme consistency
2. Ensure responsive design across all screen sizes
3. Keep animations smooth and purposeful
4. Update SEO metadata when adding new pages
5. Follow existing component patterns and naming conventions