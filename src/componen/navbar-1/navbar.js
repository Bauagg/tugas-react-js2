import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./modul-nav.css"

function ColorSchemesExample() {
    return (
        <Navbar className="navbar-1" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <img src="https://thumbs.dreamstime.com/b/ic%C3%B4ne-rouge%C3%A2tre-de-profil-social-d-anonimos-pour-le-profie-du-r%C3%A9seau-au-dessus-fond-couleur-diff%C3%A9rents-usages-148257970.jpg" alt="baus" className="img-nav" />
                <NavDropdown title="Profile" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item>
                </NavDropdown>
            </Container>
        </Navbar>
    );
}

export default ColorSchemesExample;