"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, User, Briefcase } from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Work", href: "/work", icon: Briefcase },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-xs sm:max-w-md px-4 sm:px-0 sm:w-auto">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-card/80 backdrop-blur-md border border-border rounded-full px-4 sm:px-6 py-3 sm:py-3 mx-auto"
      >
        <ul className="flex items-center justify-center gap-3 sm:gap-6">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`relative flex items-center gap-2 px-3 sm:px-3 py-2 sm:py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-primary/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon className="w-4 h-4" />
                  <span className="relative z-10 hidden sm:inline">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </nav>
  );
}