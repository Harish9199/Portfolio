import { GitHubStats, GitHubRepo } from "@/types";
import { GITHUB_USERNAME } from "./constants";

const GITHUB_API = "https://api.github.com";

export async function fetchGitHubStats(): Promise<GitHubStats> {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`, {
        next: { revalidate: 3600 },
      }),
      fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, {
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      throw new Error("GitHub API request failed");
    }

    const user = await userRes.json();
    const repos = await reposRes.json();

    const languageCounts: Record<string, number> = {};
    let totalStars = 0;

    repos.forEach((repo: Record<string, unknown>) => {
      if (repo.language) {
        languageCounts[repo.language as string] = (languageCounts[repo.language as string] || 0) + 1;
      }
      totalStars += (repo.stargazers_count as number) || 0;
    });

    const totalLangRepos = Object.values(languageCounts).reduce((a, b) => a + b, 0);
    const topLanguages = Object.entries(languageCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([name, count]) => ({
        name,
        percentage: Math.round((count / totalLangRepos) * 100),
      }));

    return {
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      topLanguages,
      totalStars,
    };
  } catch {
    return {
      publicRepos: 10,
      followers: 5,
      following: 10,
      topLanguages: [
        { name: "Python", percentage: 45 },
        { name: "JavaScript", percentage: 25 },
        { name: "TypeScript", percentage: 15 },
        { name: "Go", percentage: 10 },
        { name: "Other", percentage: 5 },
      ],
      totalStars: 5,
    };
  }
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?per_page=10&sort=updated`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) throw new Error("Failed to fetch repos");

    const repos = await res.json();
    return repos.map((repo: Record<string, unknown>) => ({
      name: repo.name,
      description: repo.description || "No description",
      language: repo.language || "Unknown",
      stars: repo.stargazers_count || 0,
      forks: repo.forks_count || 0,
      url: repo.html_url,
    }));
  } catch {
    return [];
  }
}
