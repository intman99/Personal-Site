import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function NewNavbar() {
  return (
    <>
      <Navbar>
        <Container className="NavBar">
          <Navbar.Brand >David Zoike</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="NavLink" href='DavidZoikeCV.pdf'> Download CV</Nav.Link>
            <Nav.Link className="NavLink" href="#contactme">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NewNavbar;
