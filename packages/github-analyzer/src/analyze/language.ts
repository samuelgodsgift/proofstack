import { GitHubClient } from "../fetch/githubClient";
import { LanguageSignals } from "../signals";

type GitHubLanguages = Record<string, number>;

export async function analyzeRepositoryLanguage(
  client: GitHubClient,
  owner: string,
  repo: string
): Promise<LanguageSignals> {
  const languages = await client.get<GitHubLanguages>(
    `/repos/${owner}/${repo}/languages`
  );

  const entries = Object.entries(languages);

  const primaryLanguage =
    entries.length > 0
      ? entries.sort((a, b) => b[1] - a[1])[0][0]
      : null;

  const usesTypeScript = "TypeScript" in languages;

  return {
    primaryLanguage,
    usesTypeScript,
  };
}
