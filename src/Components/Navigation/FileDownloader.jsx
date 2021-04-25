import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {NavDropdown} from 'react-bootstrap';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [filename, setFilename] = React.useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const startDownload = () => {
    console.log(filename);
    var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(document.getElementsByName('js')));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
  }

  return (
    <div>
      <NavDropdown.Item onClick={handleClickOpen}>
            File
      </NavDropdown.Item>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Download File</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the name of the file to donwload. Add the approprtiate extension.md or .tex for markdown or katex file.
          </DialogContentText>
          <TextField
            autoFocus
            value={filename}
            onChange={e => setFilename(e.target.value)}
            margin="dense"
            id="name"
            label="File Name"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={startDownload} color="primary">
            Download
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}