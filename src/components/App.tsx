import { Container } from "./Container";
import { Header } from "./Header";
import { Search } from "./Search";
import { UserCard } from "./UserCard";
import { defaultUser } from "../mock";
function App() {
  return (
    <Container>
      <Header />
      <Search hasError={false} onSubmit={() => {}} />
      <UserCard {...defaultUser} />
    </Container>
  );
}

export default App;
