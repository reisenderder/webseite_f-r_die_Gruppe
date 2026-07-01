/**
 * @file Container.tsx
 * @description Standard layout container component providing consistent horizontal padding and max-width layout.
 */

import React from "react";
import { cn } from "@/shared/lib/cn";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The HTML element to render the container as.
   * @default "div"
   */
  as?: "div" | "section" | "main" | "header" | "footer";
  children: React.ReactNode;
}

/**
 * Container component that centers content and sets a standard responsive max-width.
 */
export const Container: React.FC<ContainerProps> = ({
  as: Component = "div",
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

Container.displayName = "Container";
