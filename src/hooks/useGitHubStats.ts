"use client";

import { useState, useEffect } from "react";
import { GitHubStats } from "@/types";

export function useGitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch("/api/github");
        if (!response.ok) throw new Error("Failed to fetch GitHub stats");
        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch");
        // Fallback stats
        setStats({
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
        });
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return { stats, loading, error };
}
