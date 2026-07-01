/**
 * @file Hero.tsx
 * @description Hero landing section featuring platform title, value proposition, CTA buttons, and entry animations.
 */

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Cpu } from "lucide-react";
import { Container } from "@/shared/components/ui/Container";
import { Typography } from "@/shared/components/ui/Typography";
import { Button } from "@/shared/components/ui/Button";

interface HeroProps {
  dict: {
    release: string;
    title: string;
    subtitle: string;
    explore: string;
  };
  navDict: {
    requestDemo: string;
  };
  locale: string;
}

/**
 * Interactive Hero section.
 */
export const Hero: React.FC<HeroProps> = ({ dict, navDict, locale }) => {
  const getLocalizedHref = (href: string) => {
    if (href === "/") return `/${locale}`;
    return `/${locale}${href}`;
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic tech grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />
      
      {/* Background ambient light gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-20 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-20 pointer-events-none" />

      <Container className="relative z-10 py-16 md:py-24 text-center">
        {/* Animated tag */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <Cpu className="h-4 w-4 text-accent animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
            {dict.release}
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-6"
        >
          <Typography
            as="h1"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-foreground/90 to-white/40 bg-clip-text text-transparent leading-none"
          >
            {dict.title}
          </Typography>
        </motion.div>

        {/* Sub-headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <Typography variant="body-large" className="text-foreground/60">
            {dict.subtitle}
          </Typography>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href={getLocalizedHref("/contact")}>
            <Button variant="accent" size="lg" className="gap-2 animate-pulse">
              {navDict.requestDemo}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link href={getLocalizedHref("/services")}>
            <Button variant="secondary" size="lg" className="gap-2 bg-navy-dark/60 hover:bg-white/5">
              <Terminal className="h-5 w-5 text-accent" />
              {dict.explore}
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

Hero.displayName = "Hero";
