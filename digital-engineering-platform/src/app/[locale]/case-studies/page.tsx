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

  return (
    <Section background="gradient" showGrid>
      <Container>
        <div className="max-w-3xl space-y-6 animate-slide-up">
          <Typography variant="caption" className="text-accent uppercase tracking-widest font-semibold">
            {dict.nav.caseStudies}
          </Typography>
          <Typography variant="h1">
            {dict.nav.caseStudies}
          </Typography>
          <Typography variant="body-large">
            Real-world proof of delivery, showcasing how we scale performance and optimize complex systems for international enterprises.
          </Typography>
          <div className="h-px bg-white/10 my-8" />
          <Typography variant="body" className="text-foreground/60">
            [Case study filtering, performance metric grids, and client testimonials will be integrated here]
          </Typography>
        </div>
      </Container>
    </Section>
  );
}
