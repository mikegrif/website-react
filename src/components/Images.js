import React, { Component } from 'react';

class Images extends Component {
  render() {
    const artwork = this.props.artwork;
    const imgPath = '/images/artwork/';
    return (
      <>
        <div className="pixgrid clearfix">
          {artwork.map((art, index) => (
            <img key={index} src={`${imgPath}${art}`} alt={`Artwork ${index}`} />
          ))}
        </div>
      </>
    );
  }
}

export default Images;
