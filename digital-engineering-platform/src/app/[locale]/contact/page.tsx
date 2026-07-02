import type { Metadata } from "next";
import { getDictionary } from "@/shared/lib/dictionaries";
import { Container } from "@/shared/components/ui/Container";
import { Typography } from "@/shared/components/ui/Typography";
import { Section } from "@/shared/components/ui/Section";
import { ContactForm } from "./ContactForm";

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
  const contactDict = dict.contactPage || {
    subtitle: "",
    title: "",
    formName: "",
    formEmail: "",
    formMessage: "",
    formSubmit: "",
    formSuccess: "",
    infoTitle: "",
    infoDesc: ""
  };

  return (
    <Section background="gradient" showGrid>
      <Container>
        <div className="max-w-5xl mx-auto space-y-10 animate-slide-up">
          <div className="space-y-4 max-w-3xl">
            <Typography variant="caption" className="text-accent uppercase tracking-widest font-semibold">
              {dict.nav.contact}
            </Typography>
            <Typography variant="h1">
              {contactDict.title || dict.nav.contact}
            </Typography>
            <Typography variant="body-large" className="text-foreground/90">
              {contactDict.subtitle}
            </Typography>
          </div>

          <div className="h-px bg-white/10" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* Form Section */}
            <div className="md:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <ContactForm formLabels={contactDict} />
            </div>

            {/* Sidebar Info Section */}
            <div className="md:col-span-5 space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <Typography variant="h3" className="text-white font-semibold mb-3">
                  {contactDict.infoTitle}
                </Typography>
                <Typography variant="body-small" className="text-foreground/60 leading-relaxed">
                  {contactDict.infoDesc}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
