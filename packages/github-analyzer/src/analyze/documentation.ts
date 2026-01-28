import { GitHubClient } from "../fetch/githubClient";
import { DocumentationSignals } from "../signals";

type GitHubContentItem = {
  name: string;
  type: "file" | "dir";
  size?: number;
};

export async function analyzeRepositoryDocumentation(
  client: GitHubClient,
  owner: string,
  repo: string
): Promise<DocumentationSignals> {
  const contents = await client.get<GitHubContentItem[]>(
    `/repos/${owner}/${repo}/contents`
  );

  const readmeFile = contents.find(
    (item) => item.type === "file" && item.name.toLowerCase().startsWith("readme")
  );

  return {
    hasReadme: Boolean(readmeFile),
    readmeLength: readmeFile?.size ?? 0,
  };
}
