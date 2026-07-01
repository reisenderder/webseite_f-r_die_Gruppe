/**
 * @file page.tsx (Contact Directory)
 * @description Localized page for client inquiries and platform demo requests.
 */

import type { Metadata } from "next";
import { getDictionary } from "@/shared/lib/dictionaries";
import { Container } from "@/shared/components/ui/Container";
import { Typography } from "@/shared/components/ui/Typography";
import { Section } from "@/shared/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact Engineering Sales",
  description: "Get in touch with our engineering team to request a platform demo or coordinate a systems assessment.",
};

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <Section background="gradient" showGrid>
      <Container>
        <div className="max-w-3xl space-y-6 animate-slide-up">
          <Typography variant="caption" className="text-accent uppercase tracking-widest font-semibold">
            {dict.nav.contact}
          </Typography>
          <Typography variant="h1">
            {dict.nav.contact}
          </Typography>
          <Typography variant="body-large">
            Discuss system integrations, project scope assessments, and tailored licensing options for the platform.
          </Typography>
          <div className="h-px bg-white/10 my-8" />
          <Typography variant="body" className="text-foreground/60">
            [Secure contact form module, regional office data, and encryption keys will be integrated here]
          </Typography>
        </div>
      </Container>
    </Section>
  );
}
