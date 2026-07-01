/**
 * @file page.tsx (Web Engineering Capability)
 * @description Localized capability detail page for modern web engineering.
 */

import type { Metadata } from "next";
import { getDictionary } from "@/shared/lib/dictionaries";
import { Container } from "@/shared/components/ui/Container";
import { Typography } from "@/shared/components/ui/Typography";
import { Section } from "@/shared/components/ui/Section";

export const metadata: Metadata = {
  title: "Web Engineering",
  description: "High-performance distributed systems, reactive frontends, and micro-frontend architectures.",
};

interface WebEngineeringPageProps {
  params: Promise<{ locale: string }>;
}

export default async function WebEngineeringPage({ params }: WebEngineeringPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <Section background="gradient" showGrid>
      <Container>
        <div className="max-w-3xl space-y-6 animate-slide-up">
          <Typography variant="caption" className="text-accent uppercase tracking-widest font-semibold">
            {dict.services.streams[0].badge}
          </Typography>
          <Typography variant="h1">
            {dict.services.streams[0].title}
          </Typography>
          <Typography variant="body-large">
            {dict.services.streams[0].description}
          </Typography>
          <div className="h-px bg-white/10 my-8" />
          <Typography variant="body" className="text-foreground/60">
            [Technical specs, case studies, and architecture blueprints for Web Platforms will be integrated here]
          </Typography>
        </div>
      </Container>
    </Section>
  );
}
