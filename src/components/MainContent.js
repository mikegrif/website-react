import React, { Component } from 'react';
import AsideContent from './AsideContent';

class MainContent extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <article className="article maincontent">
              <h1>Who are we?</h1>
              <p>
                The Roux Academy gets thousands of submissions every year for artists
                interesting in participating in the CAC exhibits, and selects
                approximately 200 distinct pieces of contemporary art for display in their
                collective exhibit. In addition, 12 individuals are honored as Featured
                Artists - each being granted his or her own exhibit hall to display entire
                collections or themed pieces.
              </p>
              <p>
                Each Featured Artist has an opportunity to speak at one of our meetups and
                share his or her vision, perspective, and techniques with attendees on a
                more personal level than at our large conference. It is truly an honor to
                be a CAC Featured Artist and many past students artists who were featured
                at CAC have gone on to brilliant careers in art.
              </p>
            </article>
            <article className="article maincontent">
              <h2 className="article-title">Get Busy!</h2>
              <p>
                If you want to keep up with what&apos;s going on with the group,{' '}
                <a href="http://www.meetup.com/rouxmeet">join our meetup group</a>,
                <a href="http://www.twitter.com/rouxmeet">follow us on twitter</a>. If
                you&apos;re in FaceBook, you can also{' '}
                <a href="http://www.facebook.com/rouxmeet">join our FaceBook group</a>.
              </p>
            </article>
          </div>
          <AsideContent artwork={this.props.artwork} />
        </div>
      </div>
    );
  }
}

export default MainContent;
