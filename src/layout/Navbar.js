import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo1.png';

function CustomNavbar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="shadow">
      <Container>
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" width={50} className="me-2" />
          <span className="font-weight-bold">F2F Developers</span>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" className="btn btn-outline-light mx-2">Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className="btn btn-outline-light mx-2">About Us</Nav.Link>
            <Nav.Link as={Link} to="/addusers" className="btn btn-outline-light mx-2">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/services" className="btn btn-outline-light mx-2">Our Services</Nav.Link>
            <Nav.Link as={Link} to="/feedback" className="btn btn-outline-light mx-2">Feedback</Nav.Link>
            <Nav.Link as={Link} to="/learn" className="btn btn-outline-light mx-2">Know More about Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
