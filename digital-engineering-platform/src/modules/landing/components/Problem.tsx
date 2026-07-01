/**
 * @file Problem.tsx
 * @description Problem statement section highlighting core industry pain points: fragmentation, silos, and scalability.
 */

import React from "react";
import { AlertCircle, Lock, TrendingDown } from "lucide-react";
import { Container } from "@/shared/components/ui/Container";
import { Typography } from "@/shared/components/ui/Typography";
import { Card, CardHeader, CardTitle, CardContent } from "@/shared/components/ui/Card";
import { Section } from "@/shared/components/ui/Section";

interface ProblemProps {
  dict: {
    badge: string;
    title: string;
    subtitle: string;
    challenges: Array<{
      title: string;
      description: string;
    }>;
  };
}

const icons = [Lock, AlertCircle, TrendingDown];

/**
 * Section highlighting the core challenges enterprises face today.
 */
export const Problem: React.FC<ProblemProps> = ({ dict }) => {
  return (
    <Section background="slate" id="challenges">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.challenges.map((challenge, index) => {
            const Icon = icons[index] || Lock;
            return (
              <Card key={index} hoverLift className="flex flex-col h-full bg-navy-dark/30 border-white/5">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-2">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{challenge.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <Typography variant="body-small" className="text-foreground/60">
                    {challenge.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

Problem.displayName = "Problem";
