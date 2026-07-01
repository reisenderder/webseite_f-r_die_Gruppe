/**
 * @file Section.tsx
 * @description Design system Section component providing standard vertical spacing and background options.
 */

import React from "react";
import { cn } from "@/shared/lib/cn";

type SectionBackground = "transparent" | "slate" | "deep" | "gradient";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Background theme variant.
   * @default "transparent"
   */
  background?: SectionBackground;
  /**
   * If true, adds a subtle grid overlay.
   */
  showGrid?: boolean;
}

const backgroundStyles: Record<SectionBackground, string> = {
  transparent: "bg-transparent",
  slate: "bg-navy-slate/50",
  deep: "bg-navy-deep",
  gradient: "bg-gradient-to-b from-navy-deep via-navy-slate/20 to-navy-deep",
};

/**
 * Standard content section wrapping block with layout-level padding constraints.
 */
export const Section: React.FC<SectionProps> = ({
  background = "transparent",
  showGrid = false,
  className,
  children,
  ...props
}) => {
  return (
    <section
      className={cn(
        "relative py-20 md:py-28 lg:py-36 overflow-hidden",
        backgroundStyles[background],
        className
      )}
      {...props}
    >
      {showGrid && (
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      )}
      {children}
    </section>
  );
};

Section.displayName = "Section";
