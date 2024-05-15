import { Container } from "react-bootstrap";
import LivrosCarrosel from "../components/LivrosCarrosel";
import LivrosCard from "../components/Livros";

<<<<<<< HEAD
const Livros = () => {
    return (
        <>
            <div className="bg-dark">
                <LivrosCarrosel />
                <LivrosCard />
            </div>
=======

const Livros = () => {
    return (
        <>
            <Container>
                <LivrosCarrosel />
            </Container>
>>>>>>> 3112abfc9e745cb6865eb2cec7b6be7f2f482826
        </>
    );
}
export default Livros;