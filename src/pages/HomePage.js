import React, { Component } from 'react';
import SpeakerList from '../components/SpeakerList';
import MainContent from '../components/MainContent';
import Scripts from '../components/Scripts';

class HomePage extends Component {
  render() {
    const speakers = this.props.speakers;
    const artwork = this.props.artwork;
    return (
      <>
        <SpeakerList speakers={speakers} />
        <MainContent artwork={artwork} />
        <Scripts />
      </>
    );
  }
}

/*

*/
export default HomePage;
