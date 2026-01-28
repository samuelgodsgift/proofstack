const GITHUB_API_BASE_URL = "https://api.github.com";

export type GitHubClientConfig = {
  token?: string;
};

export class GitHubClient {
  private token?: string;

  constructor(config: GitHubClientConfig) {
    this.token = config.token;
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    return headers;
  }

  async get<T>(path: string): Promise<T> {
    const response = await fetch(`${GITHUB_API_BASE_URL}${path}`, {
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      throw new Error(
        `GitHub API error: ${response.status} ${response.statusText}`
      );
    }

    return response.json() as Promise<T>;
  }
}
