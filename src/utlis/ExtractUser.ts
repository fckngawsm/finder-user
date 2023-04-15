import { GitHubUser, LocalGithubUser } from "../types/user";

export const extractUser = (user: GitHubUser): LocalGithubUser => ({
  repos: user.public_repos,
  login: user.login,
  avatar: user.avatar_url,
  name: user.name,
  company: user.company,
  blog: user.blog,
  location: user.location,
  bio: user.bio,
  twitter: user.twitter_username,
  followers: user.followers,
  following: user.following,
  created: user.created_at,
});
