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
  const aboutDict = dict.aboutPage || {
    subtitle: "",
    missionTitle: "",
    missionDesc: "",
    valuesTitle: "",
    values: []
  };

  return (
    <Section background="gradient" showGrid>
      <Container>
        <div className="max-w-4xl space-y-12 animate-slide-up">
          <div className="space-y-6">
            <Typography variant="caption" className="text-accent uppercase tracking-widest font-semibold">
              {dict.nav.about}
            </Typography>
            <Typography variant="h1">
              {dict.nav.about}
            </Typography>
            <Typography variant="body-large" className="text-foreground/90 max-w-3xl">
              {aboutDict.subtitle}
            </Typography>
          </div>

          <div className="h-px bg-white/10" />

          {/* Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Typography variant="h3" className="text-white font-bold">
                {aboutDict.missionTitle}
              </Typography>
            </div>
            <div className="md:col-span-2">
              <Typography variant="body-large" className="text-foreground/75 leading-relaxed">
                {aboutDict.missionDesc}
              </Typography>
            </div>
          </div>

          <div className="h-px bg-white/10" />

          {/* Values Section */}
          <div className="space-y-8">
            <Typography variant="h2" className="text-white font-bold">
              {aboutDict.valuesTitle}
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aboutDict.values.map((val: any, idx: number) => (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 transition-all duration-300 group"
                >
                  <Typography variant="h4" className="text-white font-semibold mb-3 group-hover:text-accent transition-colors">
                    {val.title}
                  </Typography>
                  <Typography variant="body-small" className="text-foreground/60 text-sm leading-relaxed">
                    {val.description}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
