import { Container } from "./Container";
import { Header } from "./Header";
import { Search } from "./Search";

function App() {
  return (
    <Container>
      <Header />
      <Search hasError={false} onSubmit={() => {}} />
    </Container>
  );
}

export default App;
