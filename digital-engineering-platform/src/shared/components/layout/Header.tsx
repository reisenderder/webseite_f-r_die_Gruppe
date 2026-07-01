/**
 * @file Header.tsx
 * @description Global Header component with localized dynamic desktop/mobile navigation and language selection.
 */

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Layers } from "lucide-react";
import { Container } from "@/shared/components/ui/Container";
import { Button } from "@/shared/components/ui/Button";
import { LanguageSwitcher } from "@/shared/components/layout/LanguageSwitcher";
import { cn } from "@/shared/lib/cn";

// Import dictionaries for client-side navigation translations
import en from "@/dictionaries/en.json";
import ru from "@/dictionaries/ru.json";
import de from "@/dictionaries/de.json";
import fr from "@/dictionaries/fr.json";
import ar from "@/dictionaries/ar.json";
import { type Dictionary } from "@/shared/lib/dictionaries";

const dictionaries: Record<string, Dictionary> = { en, ru, de, fr, ar };

interface NavItem {
  label: string;
  href: string;
  dropdown?: NavItem[];
}

/**
 * Responsive navigation header for the application.
 */
export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const params = useParams();
  const pathname = usePathname();
  const locale = (params?.locale as string) || "en";
  const dict = dictionaries[locale] || dictionaries.en;

  // Track path to close mobile menu
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLocalizedHref = (href: string) => {
    if (href === "/") return `/${locale}`;
    return `/${locale}${href}`;
  };

  const navItems: NavItem[] = [
    { label: dict.nav.home, href: "/" },
    {
      label: dict.nav.services,
      href: "/services",
      dropdown: [
        { label: dict.nav.webEngineering, href: "/services/web-engineering" },
        { label: dict.nav.automation, href: "/services/automation" },
        { label: dict.nav.aiIntegration, href: "/services/ai-integration" },
      ],
    },
    { label: dict.nav.industries, href: "/industries" },
    { label: dict.nav.caseStudies, href: "/case-studies" },
    { label: dict.nav.about, href: "/about" },
    { label: dict.nav.contact, href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled
          ? "py-3 bg-navy-deep/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-navy-deep/20"
          : "py-6 bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Brand Logo */}
        <Link href={getLocalizedHref("/")} className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
            <Layers className="h-5 w-5" />
          </div>
          <span className="font-sans font-bold text-lg tracking-tight text-white group-hover:text-accent transition-colors">
            DEP<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.dropdown ? (
                <>
                  <button
                    className={cn(
                      "text-sm font-medium text-foreground/80 hover:text-white cursor-pointer py-2 flex items-center gap-1 transition-colors",
                      pathname.startsWith(getLocalizedHref(item.href)) && "text-white"
                    )}
                  >
                    {item.label}
                    <svg className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-52 rounded-xl bg-navy-dark/95 border border-white/10 p-2 shadow-2xl backdrop-blur-lg opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                    <Link
                      href={getLocalizedHref(item.href)}
                      className={cn(
                        "block rounded-lg px-4 py-2.5 text-xs font-semibold text-foreground/60 hover:text-white hover:bg-white/5 transition-colors",
                        pathname === getLocalizedHref(item.href) && "text-white bg-white/5"
                      )}
                    >
                      {dict.nav.allServices}
                    </Link>
                    <div className="h-px bg-white/5 my-1" />
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        href={getLocalizedHref(sub.href)}
                        className={cn(
                          "block rounded-lg px-4 py-2.5 text-sm text-foreground/80 hover:text-white hover:bg-white/5 transition-colors",
                          pathname === getLocalizedHref(sub.href) && "text-white bg-white/5"
                        )}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={getLocalizedHref(item.href)}
                  className={cn(
                    "text-sm font-medium text-foreground/80 hover:text-white transition-colors relative py-2",
                    pathname === getLocalizedHref(item.href) && "text-white font-semibold"
                  )}
                >
                  {item.label}
                  {pathname === getLocalizedHref(item.href) && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Link href={getLocalizedHref("/contact")}>
            <Button variant="outline" size="sm">
              {dict.nav.console}
            </Button>
          </Link>
          <Link href={getLocalizedHref("/contact")}>
            <Button variant="accent" size="sm" className="gap-2">
              {dict.nav.requestDemo}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-foreground/80 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/5 bg-navy-deep/95 backdrop-blur-lg overflow-hidden"
          >
            <Container className="py-6 flex flex-col gap-4">
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <div key={item.label} className="flex flex-col gap-2">
                    <Link
                      href={getLocalizedHref(item.href)}
                      className={cn(
                        "text-base font-semibold py-1 hover:text-white transition-colors",
                        pathname === getLocalizedHref(item.href) ? "text-accent" : "text-foreground/80"
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <div className="pl-4 flex flex-col gap-2 border-l border-white/5">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            href={getLocalizedHref(sub.href)}
                            className={cn(
                              "text-sm py-1 hover:text-white transition-colors",
                              pathname === getLocalizedHref(sub.href) ? "text-accent" : "text-foreground/60"
                            )}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="h-px bg-white/5 my-2" />
              <div className="flex flex-col gap-3">
                <Link href={getLocalizedHref("/contact")} className="w-full">
                  <Button variant="outline" className="w-full" size="md">
                    {dict.nav.console}
                  </Button>
                </Link>
                <Link href={getLocalizedHref("/contact")} className="w-full">
                  <Button variant="accent" className="w-full gap-2" size="md">
                    {dict.nav.requestDemo}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
