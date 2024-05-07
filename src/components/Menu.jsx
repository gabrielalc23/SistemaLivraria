import { Nav, Navbar } from "react-bootstrap";

const Menu = () => {
    return (
        <>
            <Navbar className="navbar navbar-dark bg-dark">
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