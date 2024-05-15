import { Nav, Navbar } from "react-bootstrap";

const Menu = () => {
    return (
        <>
<<<<<<< HEAD
            <Navbar className="navbar navbar-dark bg-transparent  fixed-top">
=======
        
            <Navbar className="navbar navbar-dark bg-transparent">
>>>>>>> 3112abfc9e745cb6865eb2cec7b6be7f2f482826
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/Livros">Livros</Nav.Link>
                    <Nav.Link href="/Filmes">Filmes</Nav.Link>
                </Nav>
            </Navbar>

        </>
    );
}
export default Menu;