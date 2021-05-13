import React from 'react';
import './Navigation.css'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import './FileDownloader';
import FormDialog from './FileDownloader';
import Help from './Help';
const exportPdf = () => {
  console.log("clicked")
  window.ipcRenderer.send("printPDF", document.getElementById("capture").innerHTML);
}

const OpenGithub = () => {
  window.shell.openExternal(`https://github.com/sahilarora3117/MdTex/issues`);
}


const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Link to='/'><Navbar.Brand>MdTex</Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Help />
        <NavDropdown title="Download" id="collasible-nav-dropdown">
          <FormDialog />
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() =>exportPdf()}>Convert to PDF</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link onClick={() => OpenGithub()}>Github</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  );
}

export default Navigation;



