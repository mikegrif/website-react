import React, { Component } from 'react';
import AsideContent from '../components/AsideContent';
import Scripts from '../components/Scripts';

class Speaker extends Component {
  constructor(props) {
    super(props);
    this.state = { speakers: props.speakerList, artwork: props.artworkList };
  }

  /*
  componentDidMount() {
    this.setState({ speakers: this.props.speakerList, artwork: this.props.artworList });
  }
*/

  render() {
    const imgPath = '/images/speakers/';
    const speakers = this.state.speakers;
    const artwork = this.state.artwork;
    const handleClick = this.props.handleClick;
    return (
      <>
        <div className="container mt-4">
          <div className="row">
            <div className="col-sm-8">
              <article className="speakersList maincontent">
                {speakers.map((speaker) => (
                  <div className="mb-4">
                    <h4 className="speakerslist-title">{speaker.title}</h4>
                    <div className="speakerslist-name">
                      with
                      <a
                        id={speaker.shortname}
                        onClick={handleClick}
                        href={`/speakers/${speaker.shortname}`}
                      >
                        {speaker.name}
                      </a>
                    </div>
                    <div className="row speakerslist-info mt-2">
                      <div className="col-sm-3">
                        <a onClick={handleClick} href={`/speakers/${speaker.shortname}`}>
                          <img
                            id={speaker.shortname}
                            className="speakerslist-img rounded-circle"
                            src={`${imgPath}${speaker.shortname}_tn.jpg`}
                            alt={speaker.name}
                          />
                        </a>
                      </div>
                      <div className="col-sm-9">{speaker.summary}</div>
                    </div>
                  </div>
                ))}
              </article>
            </div>
            <AsideContent artwork={artwork} />
          </div>
        </div>
        <Scripts />
      </>
    );
  }
}

export default Speaker;
