import React, { Component } from 'react';
import './MdTex.css'
import Navigation from '../Navigation/Navigation';
import Editor from '../Markdown/Editor';
import {Container, Grid} from '@material-ui/core'
class MdTex extends Component {
    render() {
        return (
        <div className="container">
            <Navigation />
			<Editor markdown={this.props.markdown}/>
		</div>
                
        );
    }
}

export default MdTex;