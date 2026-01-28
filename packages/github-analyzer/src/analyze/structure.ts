import { GitHubClient } from "../fetch/githubClient";
import { StructureSignals } from "../signals";

type GitHubContentItem = {
  name: string;
  type: "file" | "dir";
};

export async function analyzeRepositoryStructure(
  client: GitHubClient,
  owner: string,
  repo: string
): Promise<StructureSignals> {
  const contents = await client.get<GitHubContentItem[]>(
    `/repos/${owner}/${repo}/contents`
  );

  const hasSrcDirectory = contents.some(
    (item) => item.type === "dir" && item.name === "src"
  );

  const hasDocsDirectory = contents.some(
    (item) => item.type === "dir" && item.name === "docs"
  );

  const rootFileCount = contents.filter(
    (item) => item.type === "file"
  ).length;

  return {
    hasSrcDirectory,
    hasDocsDirectory,
    rootFileCount,
  };
}
