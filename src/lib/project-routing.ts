import type { Project } from "@/lib/types";
import { slugify } from "@/lib/utils";

export interface ProjectRouteSearch {
  project?: string;
}

export function validateProjectSearch(search: Record<string, unknown>): ProjectRouteSearch {
  return {
    project: typeof search.project === "string" && search.project.length > 0 ? search.project : undefined,
  };
}

export function getProjectSlug(project: Project): string {
  return slugify(project.title);
}
