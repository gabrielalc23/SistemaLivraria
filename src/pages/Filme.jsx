import { Container } from "react-bootstrap";
import FilmesCarrosel from "../components/FilmesCarrosel";

<<<<<<< HEAD
const Filme = () => {
    return (
        <div className="bg-dark">
            <Container className="d-flex justify-content-center align-items-center col-sm-8 col-md-8 col-lg-8 mx-auto text-center">
                <FilmesCarrosel />
            </Container>
        
        </div>
=======
const Filme = ()=>{
    return(
        <>
        <div className="bg-dark">
        <Container className="d-flex justify-content-center">
            <FilmesCarrosel />
        </Container>
        </div>
        </>
>>>>>>> 3112abfc9e745cb6865eb2cec7b6be7f2f482826
    );
}
export default Filme;
