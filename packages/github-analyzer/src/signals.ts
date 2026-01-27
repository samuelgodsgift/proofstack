/**
 * Engineering signals extracted from a GitHub repository.
 * These are descriptive indicators, not judgments.
 */

export type StructureSignals = {
  hasSrcDirectory: boolean;
  hasDocsDirectory: boolean;
  rootFileCount: number;
};

export type LanguageSignals = {
  primaryLanguage: string | null;
  usesTypeScript: boolean;
};

export type ActivitySignals = {
  commitCount: number;
  hasRecentActivity: boolean;
};

export type DocumentationSignals = {
  hasReadme: boolean;
  readmeLength: number;
};

export type EngineeringSignals = {
  structure: StructureSignals;
  language: LanguageSignals;
  activity: ActivitySignals;
  documentation: DocumentationSignals;
};
