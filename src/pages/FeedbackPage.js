import React, { Component } from 'react';

class FeedbackPage extends Component {
  render() {
    return (
      <>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-4">
              <div className="maincontent">
                <h1>Send us feedback</h1>
                <div className="feedback-status"></div>
                <form className="feedback-form" method="POST" action="/feedback">
                  <div className="form-group">
                    <label for="feedback-form-name">Name</label>
                    <input
                      id="feedback-form-name"
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="feedback-form-email">Email</label>
                    <input
                      id="feedback-form-email"
                      className="form-control"
                      type="text"
                      name="email"
                      placeholder="Enter your email address"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="feedback-form-title">Title</label>
                    <input
                      id="feedback-form-title"
                      className="form-control"
                      type="text"
                      name="title"
                      placeholder="Title of your feedback"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="feedback-form-message">Message</label>
                    <textarea
                      id="feedback-form-message"
                      className="form-control"
                      type="text"
                      name="message"
                      placeholder="Enter your message, then click the submit button"
                    ></textarea>
                  </div>
                  <button className="btn btn-secondary float-right" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <aside className="col-md-8">
              <div className="maincontent feedback">
                <h1>Recent Feedback</h1>
                <div className="feedback-items">
                  <div className="feedback-item item-list media-list">
                    <div className="feedback-item media">
                      <div className="feedback-info media-body">
                        <div className="feedback-head">
                          <div className="feedback-title">Best Meetup Ever</div>
                          <small>by Frank</small>
                        </div>
                        <div className="feedback-message">
                          I really love this meetup. Please don't let it end.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="feedback-item item-list media-list">
                    <div className="feedback-item media">
                      <div className="feedback-info media-body">
                        <div className="feedback-head">
                          <div className="feedback-title">Meeting Time</div>
                          <small>by Jane</small>
                        </div>
                        <div className="feedback-message">
                          Would you consider moving meeting to a different time.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="feedback-item item-list media-list">
                    <div className="feedback-item media">
                      <div className="feedback-info media-body">
                        <div className="feedback-head">
                          <div className="feedback-title">Great Speaker</div>
                          <small>by Roy</small>
                        </div>
                        <div className="feedback-message">
                          I really love the speaker this month. I can't wait to hear next
                          month's speaker.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </>
    );
  }
}

export default FeedbackPage;
