/**
 * @file page.tsx (Services Directory)
 * @description Localized entry point for the Services catalog.
 */

import type { Metadata } from "next";
import { getDictionary } from "@/shared/lib/dictionaries";
import { Container } from "@/shared/components/ui/Container";
import { Typography } from "@/shared/components/ui/Typography";
import { Section } from "@/shared/components/ui/Section";

export const metadata: Metadata = {
  title: "Engineering Services",
  description: "Explore our range of digital engineering capabilities: web engineering, system automation, and AI integration.",
};

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <Section background="gradient" showGrid>
      <Container>
        <div className="max-w-3xl space-y-6 animate-slide-up">
          <Typography variant="caption" className="text-accent uppercase tracking-widest font-semibold">
            {dict.services.badge}
          </Typography>
          <Typography variant="h1">
            {dict.services.title}
          </Typography>
          <Typography variant="body-large">
            {dict.services.subtitle}
          </Typography>
          <div className="h-px bg-white/10 my-8" />
          <Typography variant="body" className="text-foreground/60">
            [Service directory modules and capability matrices will be integrated here]
          </Typography>
        </div>
      </Container>
    </Section>
  );
}
