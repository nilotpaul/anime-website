import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/header.css'
import { CButton, CDropdown, CDropdownDivider, CDropdownItem, CDropdownMenu, CDropdownToggle, CFormInput, CInputGroup, CNavLink } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

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
              className="logoimg"
            />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" id='auto'>
          <CNavLink id='mcat' href="/" active>
                Home
              </CNavLink>
          
  <CDropdown variant='nav-item' dark component="li" id='collasible-nav-dropdown' popper={false}>
  <CDropdownToggle color="secondary" href='/anime'>Anime</CDropdownToggle>
  <CDropdownMenu className='drop'>
                <CDropdownItem href="/animeblog" id='items' >Anime Blog</CDropdownItem>
                <CDropdownItem href="/animereview" id='items'>Anime Review</CDropdownItem>
                <CDropdownItem href="animerecommendations" id='items'>Anime Recommendations</CDropdownItem>   
              </CDropdownMenu>

  </CDropdown>
              <CDropdown variant='nav-item' dark component="li" id='collasible-nav-dropdown' popper={false}>
  <CDropdownToggle id='collasible-nav-dropdown'>Manga</CDropdownToggle>
  <CDropdownMenu className='drop'>
                <CDropdownItem href="/mangablog" id='items' >Manga Blog</CDropdownItem>
                <CDropdownItem href="/mangareview" id='items'>Manga Review</CDropdownItem>
                <CDropdownItem href="/mangarecommendations" id='items'>Manga Recommendations</CDropdownItem>
              </CDropdownMenu>

  </CDropdown>
  <CNavLink href="/lightnovel" id='cat' active>
                Light Novel
              </CNavLink>
              <CNavLink id='caty' href="/contact" active>
                Contact Us
              </CNavLink>            

            <CDropdown variant='nav-item' dark component="li" class='dropdown' id='mcat' popper={false}>
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