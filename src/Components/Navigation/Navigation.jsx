import React, { Component } from 'react';
import './Navigation.css'
class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="bottom-navigation">
    <section className="bottom-navigation-destination" data-destination-color="#fbbc05">
        <i className="material-icons">dashboard</i>
        <span className="bottom-navigation-label">Dashboard</span>
    </section>
    <section className="bottom-navigation-destination active" data-destination-color="#ea4335">
        <i className="material-icons">home</i>
        <span className="bottom-navigation-label">Home</span>
    </section>
    <section className="bottom-navigation-destination" data-destination-color="#34a853">
        <i className="material-icons">explore</i>
        <span className="bottom-navigation-label">Explore</span>
    </section>
    <section className="bottom-navigation-destination" data-destination-color="#4285f4">
        <i className="material-icons">account_box</i>
        <span className="bottom-navigation-label">Account</span>
    </section>
</nav>
            </div>
        );
    }
}

export default Navigation;