import React from 'react';
import './Navigation.css'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Link to='/'><Navbar.Brand>MdTex</Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">Help</Nav.Link>
        <NavDropdown title="Download" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">File</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">pdf</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">help</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">Github</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  );
}

export default Navigation;



