import type { Metadata } from "next";
import { getDictionary } from "@/shared/lib/dictionaries";
import { Container } from "@/shared/components/ui/Container";
import { Typography } from "@/shared/components/ui/Typography";
import { Section } from "@/shared/components/ui/Section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Services",
  description: "Explore our range of digital engineering capabilities: web engineering, system automation, and AI integration.",
};

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const servicePaths = [
    `/${locale}/services/web-engineering`,
    `/${locale}/services/automation`,
    `/${locale}/services/ai-integration`
  ];

  return (
    <Section background="gradient" showGrid>
      <Container>
        <div className="max-w-5xl mx-auto space-y-12 animate-slide-up">
          <div className="space-y-4 max-w-3xl">
            <Typography variant="caption" className="text-accent uppercase tracking-widest font-semibold">
              {dict.services.badge}
            </Typography>
            <Typography variant="h1">
              {dict.services.title}
            </Typography>
            <Typography variant="body-large" className="text-foreground/90">
              {dict.services.subtitle}
            </Typography>
          </div>

          <div className="h-px bg-white/10" />

          {/* Service Streams Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dict.services.streams.map((stream: any, idx: number) => (
              <Link 
                key={idx}
                href={servicePaths[idx]}
                className="flex flex-col justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-white/[0.07] transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    {stream.badge}
                  </span>
                  <Typography variant="h3" className="text-white font-bold group-hover:text-accent transition-colors">
                    {stream.title}
                  </Typography>
                  <Typography variant="body-small" className="text-foreground/60 leading-relaxed">
                    {stream.description}
                  </Typography>
                </div>
                <div className="flex items-center gap-2 mt-6 text-accent font-semibold text-xs group-hover:text-white transition-colors">
                  <span>{dict.services.explore || "Explore Specs"}</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
