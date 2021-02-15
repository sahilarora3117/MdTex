import React, { Component } from 'react';
import './MdTex.css'
import Navigation from '../Navigation/Navigation';
import Editor from '../Editor/Editor';
import {Container, Grid} from '@material-ui/core'
class MdTex extends Component {
    render() {
        return (
            <div className="main">

                    <Editor className="editor"></Editor>
                <Navigation className="Navigator"/>

            </div>
        );
    }
}

export default MdTex;