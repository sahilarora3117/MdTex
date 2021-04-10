import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import {HelpOutline} from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import './Welcome.css';
import './Labels.css';
export default function SimpleMenu() {

  const handleClick = (event) => {
  };


  return (
    <Container>

        <Button 
        style={{color:'white', display:'block'}}
        onClick={handleClick}
        size='large'
        >
          <HelpOutline style={{ fontSize: 55, display:'block'}}/>
          <Typography style={{ fontSize: 24, display:'block' }}>
            Help
          </Typography>
        
      </Button>
  
  </Container>

  );
}