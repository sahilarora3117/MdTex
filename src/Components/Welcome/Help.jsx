import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import {HelpOutline} from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import {Modal, Table} from 'react-bootstrap';
import MdHelp from  './MdHelp';
import './Welcome.css';
import './Labels.css';
export default function SimpleMenu() {

  const [show, setShow] = useState(false);

  return (
    <>
    <Container>

        <Button 
        style={{color:'white', display:'block'}}
        onClick={() => setShow(true)}
        size='large'
        >
          <HelpOutline style={{ fontSize: 55, display:'block'}}/>
          <Typography style={{ fontSize: 24, display:'block' }}>
            Help
          </Typography>
        
      </Button>
      </Container>

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