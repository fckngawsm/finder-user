import { GitHubUser, LocalGithubUser } from "../types/user";

export const extractUser = (user: GitHubUser): LocalGithubUser => ({
  repos: user.public_repos, //c
  login: user.login, // c
  avatar: user.avatar_url, //c
  name: user.name, //c
  company: user.company, //c
  blog: user.blog, //c
  location: user.location, //c
  bio: user.bio, //c
  twitter: user.twitter_username, //c
  followers: user.followers, //c
  following: user.following, //c
  created: user.created_at, //c
});
