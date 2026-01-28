import { GitHubClient } from "../fetch/githubClient";
import { EngineeringSignals } from "../signals";
import { analyzeRepositoryStructure } from "./structure";
import { analyzeRepositoryLanguage } from "./language";
import { analyzeRepositoryActivity } from "./activity";
import { analyzeRepositoryDocumentation } from "./documentation";

export async function analyzeRepository(
  client: GitHubClient,
  owner: string,
  repo: string
): Promise<EngineeringSignals> {
  const [structure, language, activity, documentation] = await Promise.all([
    analyzeRepositoryStructure(client, owner, repo),
    analyzeRepositoryLanguage(client, owner, repo),
    analyzeRepositoryActivity(client, owner, repo),
    analyzeRepositoryDocumentation(client, owner, repo),
  ]);

  return {
    structure,
    language,
    activity,
    documentation,
  };
}
