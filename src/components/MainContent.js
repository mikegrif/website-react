import React, { Component } from 'react';
import AsideContent from './AsideContent';
import MainText from '../partials/MainText';

class MainContent extends Component {
    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8">
                        <MainText />
                    </div>
                    <AsideContent />
                </div>
            </div>
        );
    }
}

export default MainContent;
