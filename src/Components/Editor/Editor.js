import React, { Component } from 'react'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/markdown/markdown'
import { Grid } from '@material-ui/core'
import Markdown from 'markdown-to-jsx'

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};  
        localStorage.setItem('Current', "");

    }

   render() {

       return(
        
<Grid
container
direction="row"
justify="flex-start"
alignItems="flex-start"
>
  <Grid item xs={6}>
  <CodeMirror
  style={{height:"100% !important"}}
      value={this.state.value}
      options={{
        mode: 'markdown',
        theme: 'material',
        lineNumbers: true,
      }}
      onBeforeChange={(editor, data, value) => {
        this.setState({value:value})
        localStorage.setItem('Current', value);

      }}
      onChange={(editor, data, value) => {
      }}
    />
  </Grid>

 <Grid item xs={6}>
 <Markdown>{this.state.value}</Markdown>

 </Grid>

</Grid>




        
        
       )
        
    }

}

export default Editor;