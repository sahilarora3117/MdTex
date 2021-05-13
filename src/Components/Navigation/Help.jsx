import React, {useState} from 'react';
import Container from '@material-ui/core/Container'

import {Modal, Nav} from 'react-bootstrap';
import MdHelp from  '../Welcome/MdHelp';

export default function SimpleMenu() {

  const [show, setShow] = useState(false);

  return (
    <>
    <Nav.Link onClick={() => setShow(true)}>Help</Nav.Link>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Syntax Help
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MdHelp/>
        </Modal.Body>
      </Modal>
  </>
  );
}