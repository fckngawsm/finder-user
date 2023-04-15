import { GitHubUser } from "../types/user";

export const isGitHubUser = (user: any): user is GitHubUser => "login" in user;
