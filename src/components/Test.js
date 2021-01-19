import React, { Component } from 'react';

//const image = require('../images/speakers/Hillary_Goldwynn_tn.jpg');
const image = '/images/speakers/Hillary_Goldwynn_tn.jpg';
console.log(image);

class Test extends Component {
    render() {
        return (
            <div className="container">
                <img className="rounded-circle" src={image} alt="" />
            </div>
        );
    }
}

export default Test;
