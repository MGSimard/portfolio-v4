import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ClassValue } from "clsx";

export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs));
}

export function getThumbnailUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    urlObj.pathname = urlObj.pathname.replace(/\.webp$/i, "_thumb.webp");
    return urlObj.toString();
  } catch {
    // Fallback for relative URLs
    return url.replace(/\.webp(\?|#|$)/i, "_thumb.webp$1");
  }
}
