import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {NavDropdown} from 'react-bootstrap';
import { wait } from '@testing-library/dom';


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
    const element = document.createElement("a");
    const file = new Blob([localStorage.getItem("filetoshow")], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
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