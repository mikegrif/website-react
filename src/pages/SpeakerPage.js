import React, { Component } from 'react';

const serverUrl = 'http://localhost:9040/api';

class SpeakerPage extends Component {
  constructor(props) {
    super(props);
    this.state = { speaker: null, artwork: [] };
  }

  componentDidMount() {
    if (this.props.match.params) {
      let name = this.props.match.params.name;
      fetch(`${serverUrl}/speakers/${name}`)
        .then((result) => result.json())
        .then((body) => this.setState({ speaker: body.speaker, artwork: body.artwork }));
    }
  }

  render() {
    const speaker = this.state.speaker;
    const artwork = this.state.artwork;

    if (artwork.length === 0) {
      return null;
    }
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <article className="speakerslist maincontent">
              <h1 className="speakerslist-title">{speaker.title}</h1>
              <div className="speakerslist-name">
                with <a href={`/speakers/${speaker.shortname}`}>{speaker.name}</a>
              </div>
              <p className="speakerslist-info mt-2">
                <a href={`/speakers/${speaker.shortname}`}></a>
                <img
                  className="speakerslist-img img-fluid"
                  src={`/images/speakers/${speaker.shortname}.jpg`}
                  alt={speaker.name}
                />
              </p>
              {speaker.description}
              <p></p>
            </article>
          </div>
          <aside className="col-md-4">
            <article className="sidebar">
              <h1 className="sidebar-title">Artwork on display</h1>
              <p className="sidebar-body">
                While you attend the conference, head over to our gallery where you can
                check out some of the work from our speakers.
              </p>
              <div className="pixgrid clearfix">
                {artwork.map((art, index) => (
                  <img src={`/images/artwork/${art}`} alt={`Artwork ${index}`} />
                ))}
              </div>
            </article>
          </aside>
        </div>
      </div>
    );
  }
}

export default SpeakerPage;
