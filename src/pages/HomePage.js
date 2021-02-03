import React, { Component } from 'react';
import SpeakerList from '../components/SpeakerList';
import MainContent from '../components/MainContent';
import Scripts from '../components/Scripts';

class HomePage extends Component {
  render() {
    const speakers = this.props.speakerList;
    const artwork = this.props.artworkList;
    //const handleClick = this.props.handleClick;
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
