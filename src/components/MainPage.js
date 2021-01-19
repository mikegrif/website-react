import React, { Component } from 'react';
import Header from './Header';
import SpeakerList from './SpeakerList';
import MainContent from './MainContent';
import Scripts from './Scripts';

class MainPage extends Component {
    render() {
        return (
            <>
                <Header />
                <SpeakerList />
                <MainContent />
                <Scripts />
            </>
        );
    }
}

/*

*/
export default MainPage;
