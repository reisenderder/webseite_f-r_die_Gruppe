/**
 * @file Solution.tsx
 * @description Solution description section detailing how DEP unifies software, automation, and AI.
 */

import React from "react";
import { Link2, Shield, Zap } from "lucide-react";
import { Container } from "@/shared/components/ui/Container";
import { Typography } from "@/shared/components/ui/Typography";
import { Card, CardHeader, CardTitle, CardContent } from "@/shared/components/ui/Card";
import { Section } from "@/shared/components/ui/Section";

interface SolutionProps {
  dict: {
    badge: string;
    title: string;
    subtitle: string;
    solutions: Array<{
      title: string;
      description: string;
    }>;
  };
}

const icons = [Link2, Zap, Shield];

/**
 * Section highlighting the platform's core solutions.
 */
export const Solution: React.FC<SolutionProps> = ({ dict }) => {
  return (
    <Section background="gradient" showGrid id="solutions">
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
          {dict.solutions.map((solution, index) => {
            const Icon = icons[index] || Link2;
            return (
              <Card key={index} hoverLift className="flex flex-col h-full bg-navy-dark/40 border-accent/10">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-2">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <Typography variant="body-small" className="text-foreground/75">
                    {solution.description}
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

Solution.displayName = "Solution";
