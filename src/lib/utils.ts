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

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
