import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/header.css'

function Header() {
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
      <Container>
      <Navbar.Brand id='logo' href="/">
            <img
              alt="website-logo"
              src="/OtakuNomad.png"
              width="138"
              height="29"
              className="d-inline-block align-top"
            />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" id='auto'>
            <Nav.Link href="/anime">Anime</Nav.Link>
            <Nav.Link href="/manga">Manga</Nav.Link>
            <Nav.Link href="/recommendations">Recommendations</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown" menuVariant='dark'>
              <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="/privacy">
                Privacy Policy
              </NavDropdown.Item>
              <NavDropdown.Item href="/terms&conditions">Terms&Conditions</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;