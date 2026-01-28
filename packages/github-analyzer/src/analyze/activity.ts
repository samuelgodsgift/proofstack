import { GitHubClient } from "../fetch/githubClient";
import { ActivitySignals } from "../signals";

type GitHubCommit = {
  commit: {
    author: {
      date: string;
    };
  };
};

export async function analyzeRepositoryActivity(
  client: GitHubClient,
  owner: string,
  repo: string
): Promise<ActivitySignals> {
  const commits = await client.get<GitHubCommit[]>(
    `/repos/${owner}/${repo}/commits?per_page=100`
  );

  const commitCount = commits.length;

  const hasRecentActivity =
    commitCount > 0 &&
    Date.now() -
      new Date(commits[0].commit.author.date).getTime() <
      1000 * 60 * 60 * 24 * 90; // last 90 days

  return {
    commitCount,
    hasRecentActivity,
  };
}
