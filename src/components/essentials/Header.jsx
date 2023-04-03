import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/header.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CNavLink } from '@coreui/react';


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
          <CNavLink id='mcat' href="/" active>
                Home
              </CNavLink>
          
  <CDropdown variant='nav-item' dark component="li" id='collasible-nav-dropdown' popper={false}>
  <CDropdownToggle id='collasible-nav-dropdown'>Anime</CDropdownToggle>
  <CDropdownMenu className='drop'>
                <CDropdownItem href="#" id='items' >Anime Blog</CDropdownItem>
                <CDropdownItem href="#" id='items'>Anime Review</CDropdownItem>
                <CDropdownItem href="#" id='items'>Anime Recommendations</CDropdownItem>   
              </CDropdownMenu>

  </CDropdown>
              <CDropdown variant='nav-item' dark component="li" id='collasible-nav-dropdown' popper={false}>
  <CDropdownToggle id='collasible-nav-dropdown'>Manga</CDropdownToggle>
  <CDropdownMenu className='drop'>
                <CDropdownItem href="#" id='items' >Manga Blog</CDropdownItem>
                <CDropdownItem href="#" id='items'>Manga Review</CDropdownItem>
                <CDropdownItem href="#" id='items'>Manga Recommendations</CDropdownItem>
              </CDropdownMenu>

  </CDropdown>
  <CNavLink href="/lightnovel" id='cat' active>
                Light Novel
              </CNavLink>
              <CNavLink id='cat' href="/contact" active>
                Contact Us
              </CNavLink>            

            <CDropdown variant='nav-item' dark component="li" id='collasible-nav-dropdown' popper={false}>
  <CDropdownToggle id='collasible-nav-dropdown'>More</CDropdownToggle>
  <CDropdownMenu className='drop'>
                <CDropdownItem href="/about" id='items' >About</CDropdownItem>
                <CDropdownItem href="privacy" id='items'>Privacy Policy</CDropdownItem>
                <CDropdownItem href="terms&conditions" id='items'>Terms&Conditions</CDropdownItem>

    
              </CDropdownMenu>

  </CDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;