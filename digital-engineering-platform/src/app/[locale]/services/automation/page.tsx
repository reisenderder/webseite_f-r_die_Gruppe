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
  const servicesPageDict = dict.servicesPage || {
    automationSpecsTitle: "Automation Runtime Specs",
    automationSpecs: []
  };

  return (
    <Section background="gradient" showGrid>
      <Container>
        <div className="max-w-4xl mx-auto space-y-10 animate-slide-up">
          <div className="space-y-4 max-w-3xl">
            <Typography variant="caption" className="text-accent uppercase tracking-widest font-semibold">
              {dict.services.streams[1].badge}
            </Typography>
            <Typography variant="h1">
              {dict.services.streams[1].title}
            </Typography>
            <Typography variant="body-large" className="text-foreground/90">
              {dict.services.streams[1].description}
            </Typography>
          </div>

          <div className="h-px bg-white/10" />

          {/* Specs List */}
          <div className="space-y-6 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <Typography variant="h3" className="text-white font-semibold">
              {servicesPageDict.automationSpecsTitle}
            </Typography>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servicesPageDict.automationSpecs.map((spec: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
