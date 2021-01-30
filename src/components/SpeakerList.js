import React, { Component } from 'react';

const imgPath = '/images/speakers/';

class SpeakerList extends Component {
  render() {
    const speakers = this.props.speakers;
    return (
      <article className="speakerslist jumbotron d-none d-sm-block">
        <div className="container">
          <div className="row">
            {speakers.map((speaker) => (
              <div className="col-md text-center">
                <h4 className="speakerslist-title">{speaker.title}</h4>
                <div className="speakerslist-name">
                  With <a href={`/speakers/${speaker.shortname}`}>{speaker.name}</a>
                </div>
                <div className="speakerslist-info mt-2">
                  <a href={`/speakers/${speaker.shortname}`}>
                    <img
                      className="speakerslist-img rounded-circle"
                      src={`${imgPath}${speaker.shortname}_tn.jpg`}
                      alt={speaker.name}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    );
  }
}

export default SpeakerList;
