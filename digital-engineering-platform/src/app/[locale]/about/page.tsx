/**
 * @file page.tsx (About Us Directory)
 * @description Localized page outlining company vision and values.
 */

import type { Metadata } from "next";
import { getDictionary } from "@/shared/lib/dictionaries";
import { Container } from "@/shared/components/ui/Container";
import { Typography } from "@/shared/components/ui/Typography";
import { Section } from "@/shared/components/ui/Section";

export const metadata: Metadata = {
  title: "About DEP",
  description: "Learn about the mission, engineering philosophy, and values of the Digital Engineering Platform.",
};

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <Section background="gradient" showGrid>
      <Container>
        <div className="max-w-3xl space-y-6 animate-slide-up">
          <Typography variant="caption" className="text-accent uppercase tracking-widest font-semibold">
            {dict.nav.about}
          </Typography>
          <Typography variant="h1">
            {dict.nav.about}
          </Typography>
          <Typography variant="body-large">
            We build digital foundations that connect software-defined agility with physical-world engineering scale.
          </Typography>
          <div className="h-px bg-white/10 my-8" />
          <Typography variant="body" className="text-foreground/60">
            [Our values, corporate history, core team, and technical compliance standards will be integrated here]
          </Typography>
        </div>
      </Container>
    </Section>
  );
}
