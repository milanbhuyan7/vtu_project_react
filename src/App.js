import Header from "./Components/Header";
import Footer from "./Components/footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screen/HomeScreen";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
    <Header />
    <Container>
      <main>
            <Outlet />
      </main>
    </Container>
    <Footer />
    </>
  );
}

export default App;