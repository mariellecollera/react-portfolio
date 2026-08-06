import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function NavbarSection() {
  return (
    <Navbar expand="md" className="sticky-top py-1" bg="transparent">
      <Container>
        <Navbar.Brand href="#hero">
          My<span>Portfolio</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navMenu" />
        <Navbar.Collapse id="navMenu" className="justify-content-end">
          <Nav>
            <Nav.Link href="#hero">Home</Nav.Link>
            <Nav.Link href="#portfolio">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSection;
