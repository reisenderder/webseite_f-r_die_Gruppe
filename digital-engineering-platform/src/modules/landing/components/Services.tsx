/**
 * @file Services.tsx
 * @description Services showcase landing section, providing links to the deep-dive service pathways.
 */

import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, BrainCircuit } from "lucide-react";
import { Container } from "@/shared/components/ui/Container";
import { Typography } from "@/shared/components/ui/Typography";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/shared/components/ui/Card";
import { Section } from "@/shared/components/ui/Section";
import { Button } from "@/shared/components/ui/Button";

interface ServicesProps {
  dict: {
    badge: string;
    title: string;
    subtitle: string;
    button: string;
    explore: string;
    streams: Array<{
      title: string;
      description: string;
      badge: string;
    }>;
  };
  locale: string;
}

const icons = [Code2, Cpu, BrainCircuit];
const streamHrefs = [
  "/services/web-engineering",
  "/services/automation",
  "/services/ai-integration",
];

/**
 * Section highlighting the principal engineering capabilities of the platform.
 */
export const Services: React.FC<ServicesProps> = ({ dict, locale }) => {
  const getLocalizedHref = (href: string) => {
    if (href === "/") return `/${locale}`;
    return `/${locale}${href}`;
  };

  return (
    <Section background="slate" id="services">
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
          <Link href={getLocalizedHref("/services")} className="mt-4 md:mt-0">
            <Button variant="outline" className="gap-2">
              {dict.button}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.streams.map((stream, index) => {
            const Icon = icons[index] || Code2;
            const href = streamHrefs[index] || "/services";
            return (
              <Card key={index} hoverLift className="flex flex-col h-full bg-navy-dark/50 border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 h-24 w-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-foreground/40 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      {stream.badge}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-semibold">{stream.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <Typography variant="body-small" className="text-foreground/60 leading-relaxed">
                    {stream.description}
                  </Typography>
                </CardContent>
                
                <CardFooter>
                  <Link href={getLocalizedHref(href)} className="w-full">
                    <Button variant="ghost" className="w-full justify-between px-3 text-xs text-accent hover:text-white group-hover:bg-white/5">
                      <span>{dict.explore}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

Services.displayName = "Services";
