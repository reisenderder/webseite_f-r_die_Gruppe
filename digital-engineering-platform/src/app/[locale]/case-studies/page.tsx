/**
 * @file page.tsx (Case Studies Catalog)
 * @description Localized catalog index page listing engineering case studies and performance outcomes.
 */

import type { Metadata } from "next";
import { getDictionary } from "@/shared/lib/dictionaries";
import { Container } from "@/shared/components/ui/Container";
import { Typography } from "@/shared/components/ui/Typography";
import { Section } from "@/shared/components/ui/Section";

export const metadata: Metadata = {
  title: "Case Studies & Delivery Proofs",
  description: "Browse real-world engineering project case studies across industrial automation and enterprise web infrastructure.",
};

interface CaseStudiesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function CaseStudiesPage({ params }: CaseStudiesPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const casesDict = dict.caseStudiesPage || {
    subtitle: "",
    projects: []
  };

  return (
    <Section background="gradient" showGrid>
      <Container>
        <div className="max-w-5xl mx-auto space-y-12 animate-slide-up">
          <div className="space-y-4 max-w-3xl">
            <Typography variant="caption" className="text-accent uppercase tracking-widest font-semibold">
              {dict.nav.caseStudies}
            </Typography>
            <Typography variant="h1">
              {dict.nav.caseStudies}
            </Typography>
            <Typography variant="body-large" className="text-foreground/90">
              {casesDict.subtitle}
            </Typography>
          </div>

          <div className="h-px bg-white/10" />

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {casesDict.projects.map((proj: any, idx: number) => (
              <div 
                key={idx}
                className="flex flex-col justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-white/[0.07] transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                      {proj.client}
                    </span>
                    <span className="text-xs font-mono text-white/55">
                      {proj.metric}
                    </span>
                  </div>
                  <Typography variant="h3" className="text-white font-bold group-hover:text-accent transition-colors">
                    {proj.title}
                  </Typography>
                  <Typography variant="body-small" className="text-foreground/60 leading-relaxed">
                    {proj.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
