import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import Editor from '../Latex/Editor';
import {Container, Grid} from '@material-ui/core'
class MdTex extends Component {
    render() {
        return (
        <div className="container">
            <Navigation />
			<Editor />
		</div>
                
        );
    }
}

export default MdTex;