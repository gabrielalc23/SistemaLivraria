import { Container } from "react-bootstrap";
import FilmesCarrosel from "../components/FilmesCarrosel";

const Filme = () => {
    return (
        <div className="bg-dark">
            <Container className="d-flex justify-content-center align-items-center col-sm-8 col-md-8 col-lg-8 mx-auto text-center">
                <FilmesCarrosel />
            </Container>
        
        </div>
    );
}
export default Filme;
