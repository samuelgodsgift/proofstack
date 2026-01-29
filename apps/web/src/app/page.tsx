"use client";

import { useState } from "react";

type ApiResponse = {
  signals?: unknown;
  error?: string;
};

export default function Home() {
  const [repoUrl, setRepoUrl] = useState("");
  const [result, setResult] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleAnalyze(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ repoUrl }),
      });

      const data = await response.json();
      setResult(data);
    } catch {
      setResult({ error: "Unexpected error occurred" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-2">ProofStack</h1>
        <p className="text-gray-600 mb-6">
          Analyze real GitHub repositories and extract verifiable engineering
          signals.
        </p>

        <form onSubmit={handleAnalyze} className="space-y-4">
          <input
            type="url"
            required
            placeholder="https://github.com/owner/repo"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Analyze Repository"}
          </button>
        </form>

        {result && (
          <pre className="mt-6 bg-gray-100 p-4 rounded text-sm overflow-auto">
            {JSON.stringify(result, null, 2)}
          </pre>
        )}
      </div>
    </main>
  );
}
