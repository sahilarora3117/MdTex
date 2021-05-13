import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import {GitHub} from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import './Welcome.css';
import './Labels.css';
export default function SimpleMenu() {

  const OpenGithub = () => {
    window.shell.openExternal(`https://github.com/sahilarora3117/MdTex/issues`);
  }

  return (
    <Container>

        <Button 
        style={{color:'white', display:'block'}}
        onClick={OpenGithub}
        size='large'
        >
          <GitHub style={{ fontSize: 55, display:'block'}}/>
          <Typography style={{ fontSize: 24, display:'block' }}>
            Github
          </Typography>
        
      </Button>
  
  </Container>

  );
}