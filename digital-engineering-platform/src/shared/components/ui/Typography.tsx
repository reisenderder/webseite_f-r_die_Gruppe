/**
 * @file Typography.tsx
 * @description Design system Typography component to enforce consistent text size, weight, leading, and colors.
 */

import React from "react";
import { cn } from "@/shared/lib/cn";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body-large"
  | "body"
  | "body-small"
  | "caption"
  | "code";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Style preset variant to use.
   */
  variant?: TypographyVariant;
  /**
   * The HTML tag to render. Defaults to an appropriate tag based on variant.
   */
  as?: React.ElementType;
  /**
   * Mutes text color using secondary design tokens.
   */
  muted?: boolean;
}

const variantStyles: Record<TypographyVariant, string> = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground",
  h2: "scroll-m-20 border-b border-white/10 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-foreground",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight text-foreground",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight text-foreground",
  "body-large": "text-lg md:text-xl text-foreground/90 font-normal leading-relaxed",
  body: "leading-7 text-foreground/80 [&:not(:first-child)]:mt-6",
  "body-small": "text-sm leading-6 text-foreground/75",
  caption: "text-xs font-medium leading-none text-foreground/60",
  code: "relative rounded bg-white/5 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-accent",
};

const defaultElementMap: Record<TypographyVariant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  "body-large": "p",
  body: "p",
  "body-small": "p",
  caption: "span",
  code: "code",
};

/**
 * Design system text wrapper component enforcing strict typographic tokens.
 */
export const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  as,
  muted = false,
  className,
  children,
  ...props
}) => {
  const Component = as || defaultElementMap[variant];
  
  return (
    <Component
      className={cn(
        variantStyles[variant],
        muted && "text-foreground/50",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

Typography.displayName = "Typography";
