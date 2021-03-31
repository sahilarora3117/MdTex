import React from 'react';
import './Navigation.css'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
const exportPdf = () => {
  console.log("clicked")
  window.ipcRenderer.send("printPDF", document.getElementById("capture").innerHTML);
}


const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Link to='/'><Navbar.Brand>MdTex</Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link>Help</Nav.Link>
        <NavDropdown title="Download" id="collasible-nav-dropdown">
          <NavDropdown.Item >File</NavDropdown.Item>
          <NavDropdown.Item onClick={() =>exportPdf()}>pdf</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>help</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link>Github</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  );
}

export default Navigation;



