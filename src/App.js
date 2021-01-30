import React, { Component } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import FeedbackPage from './pages/FeedbackPage';
import SpeakersPage from './pages/SpeakersPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/style.css';

const serverUrl = 'http://localhost:9040/api/';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { speakers: [], artwork: [] };
  }

  componentDidMount() {
    fetch(serverUrl)
      .then((result) => result.json())
      .then((body) => this.setState({ speakers: body.speakers, artwork: body.artwork }));
  }

  //return
  render() {
    let props = {
      speakers: this.state.speakers,
      artwork: this.state.artwork,
    };

    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage {...props} />
          </Route>
          <Route path="/speakers">
            <SpeakersPage {...props} />
          </Route>
          <Route path="/feedback" component={FeedbackPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
