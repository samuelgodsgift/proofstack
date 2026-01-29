import { NextResponse } from "next/server";
import { analyzeRepository } from "@proofstack/github-analyzer";

type AnalyzeRequest = {
  repoUrl?: string;
};

export async function POST(request: Request) {
  try {
    const body: AnalyzeRequest = await request.json();

    if (!body.repoUrl) {
      return NextResponse.json(
        { error: "repoUrl is required" },
        { status: 400 }
      );
    }

    const result = await analyzeRepository(body.repoUrl);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Analyze API error:", error);
    return NextResponse.json(
      { error: "Failed to analyze repository" },
      { status: 500 }
    );
  }
}
