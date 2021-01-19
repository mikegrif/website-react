import React, { Component } from 'react';
import NavBar from './NavBar';
import '../css/style.css';

class Header extends Component {
    render() {
        console.log(NavBar);
        return (
            <header>
                <div className="jumbotron d-none d-sm-block" />
                <NavBar />
            </header>
        );
    }
}

export default Header;
