import LivrosCarrosel from "../components/LivrosCarrosel";
import LivrosCard from "../components/Livros";

const Livros = () => {
    return (
        <>
            <div className="bg-dark">
                <LivrosCarrosel />
                <LivrosCard />
            </div>
        </>
    );
}
export default Livros;