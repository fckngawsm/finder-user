import { Container } from "./Container";
import { Header } from "./Header";
import { Search } from "./Search";

function App() {
  return (
    <Container>
      <Header />
      <Search hasError onSubmit={() => {}} />
    </Container>
  );
}

export default App;
