import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import flag from '../../assets/images/flag.jpg';

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
            <img
              alt=""
              src={flag}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <span className="nav-text">Christmas in Maryland</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/xmasinmd">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/hour">
                Hours
              </Nav.Link>
              <Nav.Link as={Link} to="/stations">
                Stations
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
