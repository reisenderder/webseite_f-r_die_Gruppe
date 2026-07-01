/**
 * @file Button.tsx
 * @description Design system Button component with built-in Framer Motion micro-animations.
 */

"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/shared/lib/cn";

type ButtonVariant = "primary" | "secondary" | "accent" | "outline" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

// Omit standard button props that conflict with motion props
type CustomMotionButtonProps = Omit<HTMLMotionProps<"button">, "ref">;

interface ButtonProps extends CustomMotionButtonProps {
  /**
   * Visual variant style.
   * @default "primary"
   */
  variant?: ButtonVariant;
  /**
   * Sizing option.
   * @default "md"
   */
  size?: ButtonSize;
  /**
   * If true, shows a loading state.
   */
  isLoading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20",
  secondary: "bg-navy-dark border border-white/10 text-white hover:bg-white/5",
  accent: "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20",
  outline: "bg-transparent border border-white/20 text-foreground hover:bg-white/5 hover:border-white/40",
  ghost: "bg-transparent text-foreground/80 hover:bg-white/5 hover:text-foreground",
  link: "bg-transparent text-accent hover:underline p-0 underline-offset-4",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-xs rounded-md",
  md: "h-11 px-5 text-sm rounded-lg",
  lg: "h-13 px-7 text-base rounded-xl font-medium",
};

/**
 * Animated and highly interactive Button component for enterprise-grade UX.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center font-sans font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <svg
              className="h-4 w-4 animate-spin text-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Loading...</span>
          </div>
        ) : (
          children
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
