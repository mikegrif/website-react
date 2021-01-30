import React, { Component } from 'react';
import AsideContent from '../components/AsideContent';
import Scripts from '../components/Scripts';

class Speaker extends Component {
  constructor(props) {
    super(props);
    this.state = { speakers: [] };
  }

  componentDidMount() {
    this.setState({ speakers: this.props.speakers });
  }

  render() {
    const imgPath = '/images/speakers/';
    const speakers = this.state.speakers;

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
                      with <a href={`/speakers/${speaker.shortname}`}>{speaker.name}</a>
                    </div>
                    <div className="row speakerslist-info mt-2">
                      <div className="col-sm-3">
                        <a href={`/speakers/${speaker.shortname}`}>
                          <img
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
            <AsideContent artwork={this.props.artwork} />
          </div>
        </div>
        <Scripts />
      </>
    );
  }
}

export default Speaker;
