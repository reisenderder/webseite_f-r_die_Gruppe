/**
 * @file Industries.tsx
 * @description Industries overview section, mapping platform solutions to target vertical markets.
 */

import React from "react";
import Link from "next/link";
import { ArrowRight, Car, Activity, Radio, Coins } from "lucide-react";
import { Container } from "@/shared/components/ui/Container";
import { Typography } from "@/shared/components/ui/Typography";
import { Card, CardHeader, CardTitle, CardContent } from "@/shared/components/ui/Card";
import { Section } from "@/shared/components/ui/Section";
import { Button } from "@/shared/components/ui/Button";

interface IndustriesProps {
  dict: {
    badge: string;
    title: string;
    subtitle: string;
    button: string;
    sectors: Array<{
      title: string;
      description: string;
    }>;
  };
  locale: string;
}

const icons = [Car, Activity, Radio, Coins];

/**
 * Section visualizing sector adaptations of the platform.
 */
export const Industries: React.FC<IndustriesProps> = ({ dict, locale }) => {
  const getLocalizedHref = (href: string) => {
    if (href === "/") return `/${locale}`;
    return `/${locale}${href}`;
  };

  return (
    <Section background="slate" id="industries">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
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
          <Link href={getLocalizedHref("/industries")} className="mt-4 md:mt-0">
            <Button variant="outline" className="gap-2">
              {dict.button}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {dict.sectors.map((ind, index) => {
            const Icon = icons[index] || Car;
            return (
              <Card key={index} hoverLift className="flex flex-col h-full bg-navy-dark/30 border-white/5 p-5">
                <CardHeader className="p-0 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base font-semibold leading-snug">{ind.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <Typography variant="body-small" className="text-foreground/60 text-xs leading-relaxed">
                    {ind.description}
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

Industries.displayName = "Industries";
