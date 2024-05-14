import { Container } from "react-bootstrap";
import FilmesCarrosel from "../components/FilmesCarrosel";

const Filme = ()=>{
    return(
        <>
        <div className="bg-dark">
        <Container className="d-flex justify-content-center">
            <FilmesCarrosel />
        </Container>
        </div>
        </>
    );
}
export default Filme;