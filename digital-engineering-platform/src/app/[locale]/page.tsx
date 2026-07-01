/**
 * @file page.tsx
 * @description Localized main entry point (Landing Page) for the Digital Engineering Platform.
 * Loads translation dictionaries dynamically and passes translated contents to landing sections.
 */

import React from "react";
import { getDictionary } from "@/shared/lib/dictionaries";
import { Hero } from "@/modules/landing/components/Hero";
import { Problem } from "@/modules/landing/components/Problem";
import { Solution } from "@/modules/landing/components/Solution";
import { Services } from "@/modules/landing/components/Services";
import { Process } from "@/modules/landing/components/Process";
import { Industries } from "@/modules/landing/components/Industries";
import { CTA } from "@/modules/landing/components/CTA";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

/**
 * Localized Home Page component.
 */
export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="flex flex-col w-full">
      {/* Hero section with dynamic translations, nav labels, and active locale */}
      <Hero dict={dict.hero} navDict={dict.nav} locale={locale} />
      
      {/* Problem section with dynamic translations */}
      <Problem dict={dict.problem} />
      
      {/* Solution section with dynamic translations */}
      <Solution dict={dict.solution} />
      
      {/* Services section with dynamic translations and active locale */}
      <Services dict={dict.services} locale={locale} />
      
      {/* Process section with dynamic translations */}
      <Process dict={dict.process} />
      
      {/* Industries section with dynamic translations and active locale */}
      <Industries dict={dict.industries} locale={locale} />
      
      {/* CTA section with dynamic translations and active locale */}
      <CTA dict={dict.cta} locale={locale} />
    </div>
  );
}
