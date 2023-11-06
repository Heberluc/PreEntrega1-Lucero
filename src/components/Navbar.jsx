import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from './CartWidget';
const NavBar = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
        <img src="/img/Logo.png" alt="" style={{width: "150px"}}/>
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Servicios</Nav.Link>
            <Nav.Link href="#link">Productos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>

    </Navbar>
    </>
  )
}

export default NavBar
