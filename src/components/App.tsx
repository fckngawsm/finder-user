import { Container } from "./Container";
import { Header } from "./Header";
import { Search } from "./Search";
import { UserCard } from "./UserCard";
import { defaultUser } from "../mock";
import { useState } from "react";
import { GitHubUser, GitHubUserError, LocalGithubUser } from "../types/user";
import { BASE_URL } from "../utlis/api";
import { isGitHubUser } from "../utlis/typeGuard";
import { extractUser } from "../utlis/ExtractUser";
function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);
  console.log(user)
  const handleFetchUser = async(username:string) => {
    const url = BASE_URL + username;
    const response = await fetch(url);
    const user = await response.json() as GitHubUser | GitHubUserError;

    if(isGitHubUser(user)){
      setUser(extractUser(user))
    }else {
      setUser(null)
    }
  }
   return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={handleFetchUser} />
      {user && (
        <UserCard {...user} />
      )}

    </Container>
  );
}

export default App;
