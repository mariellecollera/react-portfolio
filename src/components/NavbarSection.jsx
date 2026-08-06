import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function NavbarSection() {
  return (
    <Navbar expand="md" className="sticky-top py-1">
      <Container>
        <Navbar.Brand href="#hero">
          <div className="folder-tab me-2" aria-hidden="true"></div>
          My<span>Portfolio</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navMenu" />
        <Navbar.Collapse id="navMenu" className="justify-content-end">
          <Nav>
            <Nav.Link href="#hero">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSection;
