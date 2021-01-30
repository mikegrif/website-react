import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../css/style.css';

class Header extends Component {
  render() {
    return (
      <>
        <header>
          <div className="jumbotron d-none d-sm-block" />
          <Navbar className="navbar navbar-expand-md navbar-dark bg-dark">
            <Nav className="container">
              <LinkContainer to="/">
                <Nav.Link>Roux Meetups</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/speakers">
                <Nav.Link>Speakers</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/feedback">
                <Nav.Link>Feedback</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar>
        </header>
      </>
    );
  }
}

export default Header;
