import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }

  callAPI() {
    fetch('http://localhost:9000/')
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => err);
  }

  // proxy used to call backend - see package.json
  getSpeakers() {
    fetch('/api/speakers/')
      .then((result) => result.json())
      .then(console.log(result));
  }

  componentDidMount() {
    //this.callAPI();
    this.getSpeakers();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
