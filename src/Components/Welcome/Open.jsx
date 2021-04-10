import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Launch} from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ReactFileReader from 'react-file-reader';
import './Welcome.css';
import { useHistory } from "react-router-dom";
import './Labels.css';
export default function SimpleMenu(props) {
  let history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMd = files => {
    var data = files.base64.split(',');
    var codata =  atob(data[1]);
    console.log(codata);
    history.push({
      pathname: '/openmd',
      state: { detail: codata }
    });
  }
  const handleTex = files => {
    var data = files.base64.split(',');
    var codata =  atob(data[1]);
    console.log(codata);
    history.push({
      pathname: '/opentex',
      state: { detail: codata }
    });
  }
  return (
    <Container style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

        <Button 
        style={{color:'white', display:'block'}}
        onClick={handleClick}
        size='large'
        >
          <Launch style={{ fontSize: 55, display:'block'}}/>
          <Typography style={{ fontSize: 24, display:'block' }}>
            Open
          </Typography>
        
      </Button>
      
     
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        inverted
      >
        <ReactFileReader fileTypes={[".md"]} base64={true} handleFiles={ handleMd}>
          <MenuItem>Markdown</MenuItem>
        </ReactFileReader>
        <ReactFileReader fileTypes={[".tex"]} base64={true} handleFiles={handleTex}>
          <MenuItem>Latex</MenuItem>
        </ReactFileReader>
      </Menu>
    </Container>
  );
}