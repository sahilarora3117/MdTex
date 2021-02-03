import React, { Component } from 'react';
import './MdTex.css'
import Navigation from '../Navigation/Navigation';
import Editor from '../Editor/Editor';
import Output from '../Output/Output';
import {Container, Grid} from '@material-ui/core'
class MdTex extends Component {
    render() {
        return (
            <div className="main">
                    <Container>

                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="flex-start"
                        
                    >
                        <Grid item  xs={5}>
                            <Editor className="Editorial"/>
                        </Grid>
                        <Grid item xs={5}>
                            <Output className="Result"/>
                        </Grid>

                    </Grid>
                <Navigation className="Navigator"/>
                </Container>

            </div>
        );
    }
}

export default MdTex;