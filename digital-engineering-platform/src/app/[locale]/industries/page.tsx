/**
 * @file page.tsx (Industries Catalog)
 * @description Localized page describing our target industries.
 */

import type { Metadata } from "next";
import { getDictionary } from "@/shared/lib/dictionaries";
import { Container } from "@/shared/components/ui/Container";
import { Typography } from "@/shared/components/ui/Typography";
import { Section } from "@/shared/components/ui/Section";

export const metadata: Metadata = {
  title: "Target Industries",
  description: "Learn how we apply digital engineering to Automotive, Energy, Utilities, and Telecommunications sectors.",
};

interface IndustriesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function IndustriesPage({ params }: IndustriesPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <Section background="gradient" showGrid>
      <Container>
        <div className="max-w-3xl space-y-6 animate-slide-up">
          <Typography variant="caption" className="text-accent uppercase tracking-widest font-semibold">
            {dict.industries.badge}
          </Typography>
          <Typography variant="h1">
            {dict.industries.title}
          </Typography>
          <Typography variant="body-large">
            {dict.industries.subtitle}
          </Typography>
          <div className="h-px bg-white/10 my-8" />
          <Typography variant="body" className="text-foreground/60">
            [Detailed breakdowns of custom solution frameworks for Automotive, Energy, and Telecom will be integrated here]
          </Typography>
        </div>
      </Container>
    </Section>
  );
}
