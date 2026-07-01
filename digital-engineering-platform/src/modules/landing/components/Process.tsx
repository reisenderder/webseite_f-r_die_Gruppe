/**
 * @file Process.tsx
 * @description Delivery process section showcasing our integration methodology in structured steps.
 */

import React from "react";
import { Container } from "@/shared/components/ui/Container";
import { Typography } from "@/shared/components/ui/Typography";
import { Section } from "@/shared/components/ui/Section";

interface ProcessProps {
  dict: {
    badge: string;
    title: string;
    subtitle: string;
    steps: Array<{
      step: string;
      title: string;
      description: string;
    }>;
  };
}

/**
 * Section visualizing the engineering deployment pipeline.
 */
export const Process: React.FC<ProcessProps> = ({ dict }) => {
  return (
    <Section background="gradient" showGrid id="process">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Typography variant="caption" className="text-accent uppercase tracking-widest font-semibold">
            {dict.badge}
          </Typography>
          <Typography variant="h2" className="mt-2 mb-4">
            {dict.title}
          </Typography>
          <Typography variant="body-large" className="text-foreground/60">
            {dict.subtitle}
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector line for large screens */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-primary/10 via-accent/30 to-primary/10 -z-10" />
          
          {dict.steps.map((step, index) => (
            <div key={index} className="flex flex-col space-y-4 group">
              <div className="h-14 w-14 rounded-2xl bg-navy-dark border border-white/5 flex items-center justify-center text-accent text-xl font-bold group-hover:border-accent/40 group-hover:shadow-lg group-hover:shadow-accent/5 transition-all duration-300">
                {step.step}
              </div>
              <div className="space-y-2">
                <Typography variant="h3" className="text-lg font-semibold text-white">
                  {step.title}
                </Typography>
                <Typography variant="body-small" className="text-foreground/60 leading-relaxed">
                  {step.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

Process.displayName = "Process";
