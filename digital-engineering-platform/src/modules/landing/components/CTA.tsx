/**
 * @file CTA.tsx
 * @description Call-to-action landing section inviting prospective clients to initiate onboarding or system assessments.
 */

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Container } from "@/shared/components/ui/Container";
import { Typography } from "@/shared/components/ui/Typography";
import { Button } from "@/shared/components/ui/Button";
import { Section } from "@/shared/components/ui/Section";

interface CTAProps {
  dict: {
    badge: string;
    title: string;
    subtitle: string;
    buttonConnect: string;
    buttonSchedule: string;
  };
  locale: string;
}

/**
 * High-impact Call to Action section.
 */
export const CTA: React.FC<CTAProps> = ({ dict, locale }) => {
  const getLocalizedHref = (href: string) => {
    if (href === "/") return `/${locale}`;
    return `/${locale}${href}`;
  };

  return (
    <Section background="gradient" showGrid id="cta">
      <Container className="relative">
        {/* Decorative glow elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/20 rounded-full blur-[80px] -z-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center border border-white/5 rounded-3xl p-8 md:p-16 bg-navy-dark/40 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 -z-10" />
          
          <Typography variant="caption" className="text-accent uppercase tracking-widest font-semibold">
            {dict.badge}
          </Typography>
          <Typography variant="h2" className="mt-3 mb-6 max-w-2xl mx-auto border-none">
            {dict.title}
          </Typography>
          <Typography variant="body-large" className="text-foreground/75 mb-10 max-w-xl mx-auto">
            {dict.subtitle}
          </Typography>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={getLocalizedHref("/contact")} className="w-full sm:w-auto">
              <Button variant="accent" size="lg" className="w-full sm:w-auto gap-2">
                {dict.buttonConnect}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href={getLocalizedHref("/contact")} className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2 bg-white/5 border border-white/10 hover:bg-white/10">
                <MessageSquare className="h-5 w-5 text-accent" />
                {dict.buttonSchedule}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

CTA.displayName = "CTA";
