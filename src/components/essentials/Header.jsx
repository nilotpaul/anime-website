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
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Anime" className='menu' id="collasible-nav-dropdown"  menuVariant='dark' bg='black'>
              <NavDropdown.Item id='item' href="/">Anime Blog</NavDropdown.Item>
              <NavDropdown.Item id='item' href="/">Anime Review</NavDropdown.Item>
              <NavDropdown.Item id='item' href="/">Anime Recommendations</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Manga" className='menu' id="collasible-nav-dropdown"  menuVariant='dark' bg='black'>
              <NavDropdown.Item id='item' href="/">Manga Blog</NavDropdown.Item>
              <NavDropdown.Item id='item' href="/">Manga Review</NavDropdown.Item>
              <NavDropdown.Item id='item' href="/">Manga Recommendations</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id='cat' href="/lightnovel">Light Novel</Nav.Link>
            <Nav.Link id='cat' href="/contact">Contact Us</Nav.Link>
            <NavDropdown title="More" className='menu' id="collasible-nav-dropdown"  menuVariant='dark' bg='black'>
              <NavDropdown.Item id='items' href="/about">About</NavDropdown.Item>
              <NavDropdown.Item id='items' href="/privacy">Privacy Policy</NavDropdown.Item>
              <NavDropdown.Item id='items' href="/terms&conditions">Terms&Conditions</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;