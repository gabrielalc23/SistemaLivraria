import { Container } from "react-bootstrap";
import FilmesCarrosel from "./components/FilmesCarrosel";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/Menu";

const App = ()=>{
  return (
    <>
    <Menu />
    <Container>
      <FilmesCarrosel/>
    </Container>
    </>
  
  );
}

export default App;
