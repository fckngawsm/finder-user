export type LocalGitHubUser = {
  repos: number;
  login: string;
  id: number;
  avatar: string;
  url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  bio: string;
  twitter: string;
  followers: number;
  following: number;
  created: string;
};

export type GitHubUser = {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  bio: string;
  twitter_username: string;
  followers: number;
  following: number;
  created_at: string;
};

export type GitHubUserError = {
  message: string;
  documentation_url: string;
};
