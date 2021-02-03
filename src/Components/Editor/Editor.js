import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

class Editor extends Component {
    render() {
        return (
            <div>
                <TextField
          id="outlined-multiline-static"
          label="Editor"
          multiline
          style={{width:"100%"}}
          rows={40}
          defaultValue="Default Value"
          variant="outlined"
        />

            </div>
        );
    }
}

export default Editor;