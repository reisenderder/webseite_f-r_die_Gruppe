/**
 * @file page.tsx (AI Integration Capability)
 * @description Localized capability detail page for cognitive agents and LLM pipelines.
 */

import type { Metadata } from "next";
import { getDictionary } from "@/shared/lib/dictionaries";
import { Container } from "@/shared/components/ui/Container";
import { Typography } from "@/shared/components/ui/Typography";
import { Section } from "@/shared/components/ui/Section";

export const metadata: Metadata = {
  title: "AI Integration",
  description: "Cognitive agent orchestration, machine learning pipelines, and predictive industrial analytics.",
};

interface AiIntegrationPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AiIntegrationPage({ params }: AiIntegrationPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <Section background="gradient" showGrid>
      <Container>
        <div className="max-w-3xl space-y-6 animate-slide-up">
          <Typography variant="caption" className="text-accent uppercase tracking-widest font-semibold">
            {dict.services.streams[2].badge}
          </Typography>
          <Typography variant="h1">
            {dict.services.streams[2].title}
          </Typography>
          <Typography variant="body-large">
            {dict.services.streams[2].description}
          </Typography>
          <div className="h-px bg-white/10 my-8" />
          <Typography variant="body" className="text-foreground/60">
            [Model runtime architectures, pipeline structures, and safety guidelines will be integrated here]
          </Typography>
        </div>
      </Container>
    </Section>
  );
}
