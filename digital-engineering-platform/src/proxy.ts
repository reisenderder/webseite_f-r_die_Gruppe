/**
 * @file proxy.ts
 * @description Next.js Proxy routing handling browser locale detection and route redirection.
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["en", "ru", "de", "fr", "ar"];
const defaultLocale = "en";

/**
 * Gets the preferred locale from the request headers.
 */
function getLocale(request: NextRequest): string {
  // Convert request headers to a format negotiator expects
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  // Get languages preferred by the browser
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  try {
    return matchLocale(languages, locales, defaultLocale);
  } catch {
    return defaultLocale;
  }
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if pathname already starts with a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  // Return redirect response
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Matcher ignoring public files, favicon, API, and internal Next.js paths
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|next.svg|vercel.svg|.*\\.png|.*\\.jpg|.*\\.svg).*)",
  ],
};
