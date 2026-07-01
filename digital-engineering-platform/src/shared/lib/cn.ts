/**
 * @file cn.ts
 * @description Utility function to merge Tailwind CSS classes using clsx and tailwind-merge.
 * This is essential for building dynamic components with flexible class injections.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names dynamically, resolving conflicting Tailwind CSS utility classes.
 * 
 * @param inputs - List of class names or conditional class objects
 * @returns A single string of merged, clean class names
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
