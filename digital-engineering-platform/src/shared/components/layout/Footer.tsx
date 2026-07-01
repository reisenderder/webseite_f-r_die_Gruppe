/**
 * @file Footer.tsx
 * @description Global Footer component containing localized navigation directory, branding, and copyright info.
 */

"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Layers } from "lucide-react";
import { Container } from "@/shared/components/ui/Container";

// Import dictionaries for client-side translations
import en from "@/dictionaries/en.json";
import ru from "@/dictionaries/ru.json";
import de from "@/dictionaries/de.json";
import fr from "@/dictionaries/fr.json";
import ar from "@/dictionaries/ar.json";
import { type Dictionary } from "@/shared/lib/dictionaries";

const dictionaries: Record<string, Dictionary> = { en, ru, de, fr, ar };

/**
 * Standard Footer component containing complete platform navigation map.
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const dict = dictionaries[locale] || dictionaries.en;

  const getLocalizedHref = (href: string) => {
    if (href === "/") return `/${locale}`;
    return `/${locale}${href}`;
  };

  const navigationColumns = [
    {
      title: dict.footer.columns.platform,
      links: [
        { label: dict.nav.services, href: "/services" },
        { label: dict.nav.webEngineering, href: "/services/web-engineering" },
        { label: dict.nav.automation, href: "/services/automation" },
        { label: dict.nav.aiIntegration, href: "/services/ai-integration" },
      ],
    },
    {
      title: dict.footer.columns.solutions,
      links: [
        { label: dict.industries.sectors[0].title, href: "/industries" },
        { label: dict.industries.sectors[1].title, href: "/industries" },
        { label: dict.industries.sectors[2].title, href: "/industries" },
        { label: dict.industries.sectors[3].title, href: "/industries" },
      ],
    },
    {
      title: dict.footer.columns.resources,
      links: [
        { label: dict.nav.caseStudies, href: "/case-studies" },
        { label: "Documentation", href: "/about" },
        { label: "API Reference", href: "/about" },
        { label: "System Status", href: "/about" },
      ],
    },
    {
      title: dict.footer.columns.company,
      links: [
        { label: dict.nav.about, href: "/about" },
        { label: "Careers", href: "/about" },
        { label: "Newsroom", href: "/case-studies" },
        { label: dict.nav.contact, href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-navy-deep border-t border-white/5 py-12 md:py-20 w-full mt-auto">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Identity Column */}
          <div className="col-span-2 flex flex-col space-y-6">
            <Link href={getLocalizedHref("/")} className="flex items-center gap-2 group w-max">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white shadow-md shadow-primary/20">
                <Layers className="h-5 w-5" />
              </div>
              <span className="font-sans font-bold text-lg tracking-tight text-white group-hover:text-accent transition-colors">
                Digital Engineering Platform
              </span>
            </Link>
            <p className="text-sm text-foreground/60 leading-relaxed max-w-sm">
              {dict.footer.description}
            </p>
          </div>

          {/* Nav Directory Columns */}
          {navigationColumns.map((column) => (
            <div key={column.title} className="flex flex-col space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h4>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={getLocalizedHref(link.href)}
                      className="text-sm text-foreground/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/45">
            &copy; {currentYear} Digital Engineering Platform. {dict.footer.copyright}
          </p>
          <div className="flex items-center space-x-6 text-xs text-foreground/45">
            <Link href={getLocalizedHref("/about")} className="hover:text-white transition-colors">
              {dict.footer.privacy}
            </Link>
            <Link href={getLocalizedHref("/about")} className="hover:text-white transition-colors">
              {dict.footer.terms}
            </Link>
            <Link href={getLocalizedHref("/about")} className="hover:text-white transition-colors">
              {dict.footer.security}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
