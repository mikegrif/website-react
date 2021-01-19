import React, { Component } from 'react';

// images
const imgLorenzo = '/images/speakers/Lorenzo_Garcia_tn.jpg';
const imgHillary = '/images/speakers/Hillary_Goldwynn_tn.jpg';
const imgRiley = '/images/speakers/Riley_Rewington_tn.jpg';

class SpeakerList extends Component {
    render() {
        return (
            <article className="speakerslist jumbotron d-none d-sm-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md text-center">
                            <h4 className="speakerslist-title">Art in Full Bloom</h4>
                            <div className="speakerslist-name">
                                with <a href="/speakers/Lorenzo_Garcia">Lorenzo Garcia</a>
                            </div>
                            <div className="speakerslist-info mt-2">
                                <a href="/speakers/Lorenzo_Garcia">
                                    <img
                                        className="speakerslist-img rounded-circle"
                                        src={imgLorenzo}
                                        alt={'Lorenzo Garcia'}
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md text-center">
                            <h4 className="speakerslist-title">Deep Sea Wonders</h4>
                            <div className="speakerslist-name">
                                with{' '}
                                <a href="/speakers/Hillary_Goldwynn">
                                    Hillary Goldwynn Post
                                </a>
                            </div>
                            <div className="speakerslist-info mt-2">
                                <a href="/speakers/Hillary_Goldwynn">
                                    <img
                                        className="speakerslist-img rounded-circle"
                                        src={imgHillary}
                                        alt={'Hillary_Goldwynn'}
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md text-center">
                            <h4 className="speakerslist-title">The Art of Abstract</h4>
                            <div className="speakerslist-name">
                                with{' '}
                                <a href="/speakers/Riley_Rewington">
                                    Riley Rudolph Rewington
                                </a>
                            </div>
                            <div className="speakerslist-info mt-2">
                                <a href="/speakers/Riley_Rewington">
                                    <img
                                        className="speakerslist-img rounded-circle"
                                        src={imgRiley}
                                        alt={'Riley Rewington'}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

export default SpeakerList;
