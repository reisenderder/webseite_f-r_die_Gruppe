/**
 * @file page.tsx (Automation Capability)
 * @description Localized capability detail page for software-defined automation.
 */

import type { Metadata } from "next";
import { getDictionary } from "@/shared/lib/dictionaries";
import { Container } from "@/shared/components/ui/Container";
import { Typography } from "@/shared/components/ui/Typography";
import { Section } from "@/shared/components/ui/Section";

export const metadata: Metadata = {
  title: "Systems Automation",
  description: "Software-defined automation architectures, industrial telemetry integration, and edge compute services.",
};

interface AutomationPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AutomationPage({ params }: AutomationPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <Section background="gradient" showGrid>
      <Container>
        <div className="max-w-3xl space-y-6 animate-slide-up">
          <Typography variant="caption" className="text-accent uppercase tracking-widest font-semibold">
            {dict.services.streams[1].badge}
          </Typography>
          <Typography variant="h1">
            {dict.services.streams[1].title}
          </Typography>
          <Typography variant="body-large">
            {dict.services.streams[1].description}
          </Typography>
          <div className="h-px bg-white/10 my-8" />
          <Typography variant="body" className="text-foreground/60">
            [Automation control loops, system specifications, and infrastructure paradigms will be integrated here]
          </Typography>
        </div>
      </Container>
    </Section>
  );
}
