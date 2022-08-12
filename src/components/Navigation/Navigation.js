import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <Navbar
        className="navbar"
        bg="success"
        variant="dark"
        expand="lg"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Christmas in Maryland
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/xmasinmd">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/xmasinmd/hour">
                Hours
              </Nav.Link>
              <Nav.Link as={Link} to="/xmasinmd/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/xmasinmd/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
