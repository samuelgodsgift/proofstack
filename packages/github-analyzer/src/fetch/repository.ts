import { GitHubClient } from "./githubClient";

export type GitHubRepository = {
  name: string;
  full_name: string;
  language: string | null;
  default_branch: string;
};

export async function fetchRepository(
  client: GitHubClient,
  owner: string,
  repo: string
): Promise<GitHubRepository> {
  return client.get<GitHubRepository>(`/repos/${owner}/${repo}`);
}
