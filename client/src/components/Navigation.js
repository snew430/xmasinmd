import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <Navbar bg="success" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Christmas in Maryland
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              <NavDropdown title="Hours" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/hour">
                  Hour1
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/hour">
                  Hour2
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/hour">
                  Hour3
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/hour">
                  Hour4
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/hour">
                  Hour5
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/hour">
                  Hour6
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
