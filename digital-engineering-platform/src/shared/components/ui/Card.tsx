/**
 * @file Card.tsx
 * @description Design system Card component featuring glassmorphism options and hover lift styles.
 */

import React from "react";
import { cn } from "@/shared/lib/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Enables glassmorphism background style.
   * @default true
   */
  glass?: boolean;
  /**
   * Adds interactive elevation animation on hover.
   * @default false
   */
  hoverLift?: boolean;
}

/**
 * Standard Card UI shell component for containing dashboard, lists, and form modules.
 */
export const Card: React.FC<CardProps> = ({
  glass = true,
  hoverLift = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/5 bg-navy-dark/40 p-6 text-foreground transition-all duration-300",
        glass && "glass",
        hoverLift && "hover:-translate-y-1 hover:border-white/15 hover:shadow-xl hover:shadow-primary/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const CardHeader: React.FC<CardHeaderProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn("mb-4 flex flex-col space-y-1.5", className)} {...props}>
      {children}
    </div>
  );
};

type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export const CardTitle: React.FC<CardTitleProps> = ({ className, children, ...props }) => {
  return (
    <h3
      className={cn("text-xl font-semibold leading-none tracking-tight text-foreground", className)}
      {...props}
    >
      {children}
    </h3>
  );
};

type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export const CardDescription: React.FC<CardDescriptionProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <p className={cn("text-sm text-foreground/60", className)} {...props}>
      {children}
    </p>
  );
};

type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

export const CardContent: React.FC<CardContentProps> = ({ className, children, ...props }) => {
  return <div className={cn("", className)} {...props}>{children}</div>;
};

type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

export const CardFooter: React.FC<CardFooterProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn("mt-6 flex items-center pt-0", className)} {...props}>
      {children}
    </div>
  );
};

Card.displayName = "Card";
CardHeader.displayName = "CardHeader";
CardTitle.displayName = "CardTitle";
CardDescription.displayName = "CardDescription";
CardContent.displayName = "CardContent";
CardFooter.displayName = "CardFooter";
