import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo1.png'; // Adjust the path as necessary

function CustomNavbar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="shadow">
      <Container>
        <Link className="navbar-brand d-flex align-items-center" to="/f2fdev/">
          <img src={logo} alt="Logo" width={50} className="me-2" />
          <span className="font-weight-bold">F2F Developers</span>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/f2fdev/home" className="btn btn-outline-light mx-2">Home</Nav.Link>
            <Nav.Link as={Link} to="/f2fdev/aboutus" className="btn btn-outline-light mx-2">About Us</Nav.Link>
            <Nav.Link as={Link} to="/f2fdev/addusers" className="btn btn-outline-light mx-2">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/f2fdev/services" className="btn btn-outline-light mx-2">Our Services</Nav.Link>
            <Nav.Link as={Link} to="/f2fdev/feedback" className="btn btn-outline-light mx-2">Feedback</Nav.Link>
            {/* Uncomment this line to enable the login link */}
            {/* <Nav.Link as={Link} to="/f2fdev/login" className="btn btn-success mx-2">Login</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
