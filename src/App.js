import React, { Component } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import FeedbackPage from './pages/FeedbackPage';
import AllSpeakersPage from './pages/AllSpeakersPage';
import SpeakerPage from './pages/SpeakerPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/style.css';

const serverUrl = 'http://localhost:9040/api';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { speakerList: [], artworkList: [] };
  }

  componentDidMount() {
    fetch(serverUrl)
      .then((result) => result.json())
      .then((body) =>
        this.setState({ speakerList: body.speakers, artworkList: body.artwork })
      );
  }

  //return
  render() {
    let props = {
      speakerList: this.state.speakerList,
      artworkList: this.state.artworkList,
    };

    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage {...props} />
          </Route>
          <Route exact path="/speakers">
            <AllSpeakersPage {...props} />
          </Route>
          <Route exact path="/speakers/:name" component={SpeakerPage} />
          <Route exact path="/feedback" component={FeedbackPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
