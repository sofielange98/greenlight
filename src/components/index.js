import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../greenlight-logo-2.svg'

function NavbarNav() {
  return (
    <Navbar collapseOnSelect expand="lg" style ={{backgroundColor:"#F7E7CE"}}>
      <Container>
        <Navbar.Brand href="/">
        <img
              alt=""
              src={Logo}
              width="50"
              height="50"
              className="d-inline-block"
            />{' '}
          Green Light Insurance</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <Nav.Link href="about">About Us</Nav.Link>
          <Nav.Link href="team">Meet the Team</Nav.Link>
            <Nav.Link href="blogs">Blogs</Nav.Link>
            <Nav.Link eventKey={2} href="contact-us">
              Reviews
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarNav;