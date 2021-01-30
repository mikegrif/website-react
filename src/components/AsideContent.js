import React, { Component } from 'react';
import Images from './Images';

class AsideContent extends Component {
  render() {
    return (
      <aside className="col-md-4">
        <article className="sidebar">
          <h1 className="sidebar-title">Who should come?</h1>
          <ul className="sidebar-body">
            <li>Anybody interested in art and the creative industry</li>
            <li>Painters, sculptors, photographers and graphic artists</li>
            <li>
              Those interested in meeting and making a connection with others in the local
              art scene.
            </li>
          </ul>
        </article>
        <article className="sidebar">
          <h1 className="sidebar-title">Artwork on display</h1>
          <p className="sidebar-body">
            While you attend the conference, head over to our gallery where you can check
            out some of the work from our speakers.
          </p>
          <Images artwork={this.props.artwork} />
        </article>
      </aside>
    );
  }
}

export default AsideContent;
