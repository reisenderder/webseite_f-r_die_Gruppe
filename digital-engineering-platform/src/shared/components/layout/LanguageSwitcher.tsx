/**
 * @file LanguageSwitcher.tsx
 * @description Language selection dropdown component utilizing URL path rewrites for route-level translations.
 */

"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter, useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";
import { cn } from "@/shared/lib/cn";

interface Language {
  code: string;
  label: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", label: "English", flag: "EN" },
  { code: "ru", label: "Русский", flag: "RU" },
  { code: "de", label: "Deutsch", flag: "DE" },
  { code: "fr", label: "Français", flag: "FR" },
  { code: "ar", label: "العربية", flag: "AR" },
];

/**
 * Dropdown selector for changing the app language via path redirection.
 */
export const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const containerRef = useRef<HTMLDivElement>(null);

  // Get active locale from route params
  const activeLocale = (params?.locale as string) || "en";
  const currentLanguage = languages.find((lang) => lang.code === activeLocale) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (localeCode: string) => {
    if (!pathname) return;
    
    const segments = pathname.split("/");
    // segments[0] is empty (string starts with slash)
    // segments[1] is the locale code (e.g. "en")
    segments[1] = localeCode;
    
    const newPath = segments.join("/");
    setIsOpen(false);
    router.push(newPath);
  };

  return (
    <div className="relative" ref={containerRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-foreground/80 hover:text-white hover:bg-white/10 transition-all text-xs font-semibold uppercase cursor-pointer"
        aria-expanded={isOpen}
        aria-label="Select Language"
      >
        <Globe className="h-3.5 w-3.5 text-accent" />
        <span>{currentLanguage.flag}</span>
        <ChevronDown className={cn("h-3 w-3 opacity-60 transition-transform", isOpen && "rotate-180")} />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-1.5 w-40 rounded-xl bg-navy-dark/95 border border-white/10 p-1.5 shadow-2xl backdrop-blur-lg z-50"
          >
            <div className="flex flex-col gap-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={cn(
                    "flex items-center justify-between w-full px-3 py-2 text-xs font-medium rounded-lg text-foreground/75 hover:text-white hover:bg-white/5 transition-colors cursor-pointer text-left",
                    lang.code === activeLocale && "text-white bg-white/10"
                  )}
                >
                  <span>{lang.label}</span>
                  <span className="opacity-50 text-[10px] uppercase font-bold">{lang.code}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
