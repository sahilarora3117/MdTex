import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
class Output extends Component {
    render() {
        return (
            <div>
                <TextField
          id="outlined-multiline-static"
          label="Output"
          multiline
          style={{width:"100%"}}
          rows={40}
          defaultValue="Default Value"
          variant="outlined"
          color="secondary"
          inverted
        />

            </div>
        );
    }
}

export default Output;