import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import OpenMarkdown from '../OpenMarkdown/OpenMarkdown'
import OpenTex from '../OpenTex/OpenTex'
import './Welcome.css'
import New from './New';
import Launch from './Open'
import Help from './Help';
import Github from './Github';
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