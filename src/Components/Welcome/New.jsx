import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Add, Block, DonutLarge} from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import './Welcome.css';
export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <Button 
        style={{color:'white', display:'block'}}
        onClick={handleClick}
        size='large'
        >
          <Add style={{ fontSize: 55, display:'block'}}/>
          <Typography style={{ fontSize: 24, display:'block' }}>
            New
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
        <Link to="/newmd" className="linkers" style={{textDecoration:'none', textDecorationColor:'white' }}><MenuItem>Markdown</MenuItem></Link>
        <Link to="/newtex" className="linkers" style={{textDecoration:'none', textDecorationColor:'white' }}><MenuItem>Latex</MenuItem></Link>
      </Menu>
    </div>
  );
}