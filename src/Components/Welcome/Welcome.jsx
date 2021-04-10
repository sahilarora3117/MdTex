import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import OpenMarkdown from '../OpenMarkdown/OpenMarkdown'
import OpenTex from '../OpenTex/OpenTex'
import './Welcome.css'
import New from './New';
import Launch from './Open'
import Help from './Help';
import Github from './Github';
import {Container, Grid, Typography} from '@material-ui/core'
class Welcome extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/newmd" component={Md} />
                    <Route path="/openmd" component={openMd} />
                    <Route path="/newtex" component={Tex} />
                    <Route path="/opentex" component={openTex} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>       

            
                
        );
    }
}


const Home = () => (
//     <Container className="something">
//     <Grid
//      container
//      direction="row"
//      justify="center"
//      alignItems="center"
//      spacing={3}
//      >
//          <Grid item xs={3}>
//             <New />
//          </Grid>
//          <Grid item xs={3}>
//             <Launch />
//          </Grid>
//          <Grid item xs={3}>
//              <Help />
//          </Grid>
//          <Grid item xs={3}>
//              <Github />
//          </Grid>
//      </Grid>
// </Container>
            <div className="menuformat">
                <New className="menuitem"/>
                <Launch className="menuitem"/>
                <Help className="menuitem"/>
                <Github className="menuitem"/>
            </div>
            

)


const Md = () => (
    <OpenMarkdown markdown="#this is markdown"></OpenMarkdown>
)

const Tex = () => (
    <OpenTex tex="tex imdeed"></OpenTex>
)

const openMd = (props) => (
    <OpenMarkdown markdown={props.location.state.detail}></OpenMarkdown>
)

const openTex = (props) => (
    <OpenTex tex={props.location.state.detail}></OpenTex>
)

export default Welcome;