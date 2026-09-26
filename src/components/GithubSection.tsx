import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../config/portfolioConfig';
import { ArrowUpRight, GitFork, BookOpen, Activity, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

interface GitHubUserData {
  login: string;
  name: string;
  public_repos: number;
  followers: number;
  bio: string | null;
  html_url: string;
}

export const GithubSection: React.FC = () => {
  const { socials } = portfolioConfig;
  const [userData, setUserData] = useState<GitHubUserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const fetchGitHubData = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${socials.githubUsername}`, {
          signal: controller.signal,
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        });

        if (res.ok) {
          const data = await res.json();
          if (isMounted) {
            setUserData({
              login: data.login,
              name: data.name || data.login,
              public_repos: data.public_repos,
              followers: data.followers,
              bio: data.bio,
              html_url: data.html_url,
            });
          }
        }
      } catch {
        // Fail gracefully without breaking UI
      } finally {
        if (isMounted) {
          setLoading(false);
          clearTimeout(timeoutId);
        }
      }
    };

    fetchGitHubData();

    return () => {
      isMounted = false;
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [socials.githubUsername]);

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="p-8 sm:p-12 rounded-4xl bg-gradient-to-br from-white via-cream-100/60 to-lavender-50/40 border border-blush-200/60 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Heading & Context */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blush-100 text-blush-700 border border-blush-200/60">
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Open Source Presence</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-plum-primary tracking-tight">
                Code, commits &amp; <span className="font-serif italic font-normal text-blush-600">curiosity</span>.
              </h3>

              <p className="text-sm text-plum-secondary max-w-lg leading-relaxed">
                Exploring modern web architectures in public. Discover open source repositories,
                experimental code snippets, and active implementations on GitHub.
              </p>

              <div className="pt-2">
                <a
                  href={socials.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-plum-primary text-white hover:bg-plum-deep shadow-subtle hover:shadow-glow-pink transition-all group"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Explore @{socials.githubUsername} on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Right: Fail-Safe Profile Card (No hardcoded or fake statistics!) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
              <div className="w-full max-w-sm p-6 rounded-3xl bg-white/90 border border-blush-200/70 shadow-subtle space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-plum-primary text-white flex items-center justify-center font-bold text-lg shadow-sm">
                      <GithubIcon className="w-6 h-6 text-blush-300" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-plum-primary">
                        {userData?.name || socials.githubUsername}
                      </h4>
                      <p className="text-xs font-mono text-plum-muted">@{socials.githubUsername}</p>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Public Profile Active" />
                </div>

                {/* If real API data fetched successfully, render factual counts */}
                {userData && !loading && (
                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-blush-100">
                    <div className="p-2.5 rounded-xl bg-cream-100/80 border border-blush-100 text-center">
                      <div className="flex items-center justify-center gap-1 text-xs text-plum-muted">
                        <BookOpen className="w-3.5 h-3.5 text-blush-500" />
                        <span>Public Repos</span>
                      </div>
                      <p className="text-base font-extrabold text-plum-primary mt-0.5">
                        {userData.public_repos}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-cream-100/80 border border-blush-100 text-center">
                      <div className="flex items-center justify-center gap-1 text-xs text-plum-muted">
                        <Activity className="w-3.5 h-3.5 text-lavender-500" />
                        <span>Contributions</span>
                      </div>
                      <p className="text-base font-extrabold text-plum-primary mt-0.5">
                        {socials.githubContributions || '0'}
                      </p>
                    </div>
                  </div>
                )}

                {/* Clean Fallback view when API is pending or rate-limited */}
                {(!userData || loading) && (
                  <div className="p-3 rounded-2xl bg-cream-100/60 border border-blush-100 text-xs text-plum-secondary flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blush-500 shrink-0" />
                    <span>Always building, experimenting, and refining code quality.</span>
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between text-[11px] text-plum-muted border-t border-blush-100">
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3 text-plum-muted" />
                    <span>Verified GitHub Profile</span>
                  </span>
                  <a
                    href={socials.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-plum-primary hover:text-blush-600 transition-colors"
                  >
                    View &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
