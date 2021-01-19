import React, { Component } from 'react';
//import '../css/NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="container">
                        <button
                            type="button"
                            className="navbar-toggler"
                            data-toggle="collapse"
                            data-target="#navbar-collapse"
                            aria-expanded="false"
                        >
                            {' '}
                            <span className="sr-only">Toggle navigation</span>
                            &#x2630;
                        </button>{' '}
                        <a href="/index.html" className="navbar-brand">
                            Roux Meetups
                        </a>
                        <div className="collapse navbar-collapse" id="navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    {' '}
                                    <a href="/index.html" className="nav-link">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        href="../pages/speakers.html"
                                        className="nav-link dropdown-toggle"
                                        id="navbarDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Speakers
                                    </a>
                                    <div
                                        className="dropdown-menu"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <a
                                            className="dropdown-item"
                                            href="../pages/speakers.html"
                                        >
                                            All Speakers
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">
                                            Lorenzo Garcia
                                        </a>
                                        <a
                                            className="dropdown-item"
                                            href="../pages/Hillary_Goldwynn.html"
                                        >
                                            Hilary Goldywynn Post
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Riley Rudolph Rewington
                                        </a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    {' '}
                                    <a href="../pages/feedback.html" className="nav-link">
                                        Feedback
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default NavBar;
