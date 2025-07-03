# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (Next.js 15+)
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Development Workflow

When making changes to this portfolio:
1. Always run `npm run lint` before committing to ensure code quality
2. Test responsive design on mobile, tablet, and desktop viewports
3. Verify animations are smooth and not causing performance issues
4. Check that new content follows the established dark theme color scheme

## Project Architecture

This is a Next.js 15 portfolio website for Joshua Farhi (Senior Web Engineer) built with:

### Core Technologies
- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS 4** for styling with custom dark theme
- **Framer Motion** for animations and transitions
- **Three.js** with React Three Fiber for 3D graphics and floating objects
- **Aceternity UI** components for modern UI elements
- **Lucide React** for icons
- **clsx** and **tailwind-merge** for conditional styling

### Project Structure
```
app/
├── components/
│   ├── navigation.tsx          # Fixed navigation with active states
│   └── floating-objects.tsx    # 3D floating objects scene with Three.js
├── about/page.tsx             # About page with experience timeline
├── work/page.tsx              # Portfolio showcase with project grid
├── blog/page.tsx              # Blog listing with featured articles
├── layout.tsx                 # Root layout with SEO metadata and 3D background
├── page.tsx                   # Homepage with hero and CTA sections
└── globals.css                # Dark theme CSS variables and styles
```

### Design System
- **Dark Theme**: Consistent dark color scheme using CSS custom properties in `:root` and `@theme inline`
- **Typography**: Geist Sans and Geist Mono fonts loaded via next/font/google
- **Layout**: Responsive design with container-based layouts and fixed navigation
- **Animations**: Framer Motion for smooth page transitions, scroll effects, and interactive states
- **Color System**: GitHub-inspired dark theme with blue primary (#4285f4) and carefully chosen grays

### Key Features
- SEO-optimized pages with proper metadata
- Responsive navigation with active state indicators
- 3D floating objects creating an immersive space-like atmosphere
- Animated hero sections and content reveals
- Project showcase with live links and GitHub repositories
- Blog system with featured articles and categories
- Contact forms and social media integration

### Content Structure
- **Home**: Hero (performance-focused messaging), real tech stack, lighthouse/performance stats, contact CTA with social links
- **About**: Digital nomad journey, real achievements (95+ Lighthouse scores, 30-day SEO success), updated skills focused on WordPress/Next.js/SEO, actual experience timeline
- **Work**: Enterprise applications (Restaurant Inventory Management System, Customer Loyalty & Rewards Kiosk System) built with Next.js, Clerk, and Supabase
- **Blog**: Personal posts about 5-month Asia travel journey: Japan (January 2024), South Korea (February 2024), Vietnam (March 2024), Thailand (April-May 2024), and Laos (May 2024)

### Real Contact Information
- **Email**: joshfarhi12@gmail.com
- **GitHub**: https://github.com/joshfarhi
- **LinkedIn**: https://linkedin.com/in/joshua-farhi
- **LeetCode**: https://leetcode.com/u/joshfarhi

### Styling Conventions
- Use Tailwind CSS utility classes exclusively (no custom CSS outside globals.css)
- Custom CSS variables defined in globals.css for consistent theming
- Glass morphism effects with `backdrop-blur-md` and transparency (`/80`, `/30`)
- Consistent border radius (`rounded-full`, `rounded-xl`, `rounded-2xl`) and spacing scale
- Hover states and transitions on interactive elements using Tailwind utilities
- Component patterns: cards use `bg-card/30 backdrop-blur-sm border border-border`

### SEO Optimization
- Structured metadata for each page
- Semantic HTML with proper heading hierarchy
- Open Graph and Twitter card support
- Optimized for web performance and Core Web Vitals

### Component Architecture
- All components use `"use client"` directive for interactivity
- Framer Motion components use consistent animation patterns:
  - `initial={{ opacity: 0, y: 20/40 }}` for fade-in-up effects
  - Staggered delays for sequential animations (0.1s, 0.2s, etc.)
  - `layoutId` for smooth transitions (e.g., navigation active state)
- Three.js components are wrapped in Suspense for better loading experience
- 3D objects use optimized geometries and materials for performance
- Navigation uses `usePathname()` for active state detection
- Icon components from Lucide React are used consistently

### File Organization
- Each route has its own `page.tsx` and optional `layout.tsx`
- Shared components live in `app/components/`
- Global styles and theme variables in `app/globals.css`
- TypeScript configuration allows `@/*` path aliases

### 3D Graphics Implementation
- FloatingObjects component creates immersive galaxy atmosphere with simplified geometric shapes
- Basic shapes include: spheres, cubes, and particles with blue/purple gradient colors
- Mouse-reactive movement: objects follow cursor with varying sensitivity levels
- Simplified star field with twinkling effects and 150 stars for performance
- Performance optimizations: aggressive performance scaling, limited pixel ratio, Suspense loading
- Fallback handling with graceful degradation for low-end devices

When making changes:
1. Maintain the dark theme consistency using existing CSS variables
2. Ensure responsive design across all screen sizes (mobile-first approach)
3. Keep animations smooth and purposeful (test on lower-end devices)
4. Update SEO metadata when adding new pages (follow existing metadata patterns)
5. Follow existing component patterns and naming conventions
6. Use consistent Framer Motion animation patterns and timings
7. Test 3D performance on various devices and provide fallbacks if needed