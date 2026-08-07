import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function NavbarSection() {
  return (
    <Navbar expand="md" className="sticky-top py-1">
      <Container>
        <Navbar.Brand href="#hero">
          <img src="/portfolio_icon.svg" alt="Portfolio Icon" className="icon me-2" />
          My<span className="italic-text">Portfolio</span>
        </Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler" aria-controls="navMenu" />
        <Navbar.Collapse id="navMenu" className="justify-content-end">
          <Nav>
            <Nav.Link href="#hero"><span className="italic-text">[01]</span>Home</Nav.Link>
            <Nav.Link href="#projects"><span className="italic-text">[02]</span>Projects</Nav.Link>
            <Nav.Link href="#contact"><span className="italic-text">[03]</span>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSection;
