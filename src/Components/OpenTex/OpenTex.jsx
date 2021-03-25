import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import Editor from '../Latex/Editor';
import {Container, Grid} from '@material-ui/core'
class MdTex extends Component {
    render() {
        return (
        <>  
            <Navigation />
			<Editor tex={this.props.tex}/>
		</>
                
        );
    }
}

export default MdTex;