import React from 'react'
import image from "../assets/images/video-bg.jpg"

const Section3 = () => {
  return (
    <section className="dtr-section dtr-pt-100">
          <div className="container">
            {/* heading starts */}
            <div className="dtr-section-intro text-left dtr-mb-50">
              <div className="dtr-intro-subheading-wrapper">
                <p className="dtr-intro-subheading">The Results</p>
              </div>
              <h2 className="dtr-intro-heading">Numbers &amp; Satisfaction</h2>
              <p className="dtr-intro-content">
                There are many variations of passages of lorem ipsum available
                <br />
                but the majority have suffered alteration in some form by
                <br />
                injected humour or randomised words.
              </p>
            </div>
            {/* heading ends */}
            {/*== row starts ==*/}
            <div className="row">
              {/* column 1 starts */}
              <div className="col-12 col-md-4 dtr-py-50">
                {/* counter starts */}
                <div className="dtr-counter">
                  {" "}
                  <i className="icon-cursor-fill color-blue" />
                  <div>
                    {" "}
                    <span
                      className="dtr-counter-number counting-number color-blue"
                      data-from={1}
                      data-to={20}
                      data-speed={1600}
                    >
                      90
                    </span>{" "}
                    <span className="dtr-counter-suffix color-light-purple">
                      %
                    </span>
                    <p className="dtr-count-text">Clickthrough Rate</p>
                  </div>
                </div>
                {/* counter ends */}
              </div>
              {/* column 1 ends */}
              {/* column 2 starts */}
              <div className="col-12 col-md-4 dtr-py-50 dtr-border-left dtr-border-right">
                {/* counter starts */}
                <div className="dtr-counter">
                  {" "}
                  <i className="icon-cloud-arrow-down-fill color-blue" />
                  <div>
                    {" "}
                    <span
                      className="dtr-counter-number counting-number color-blue"
                      data-from={1}
                      data-to={236}
                      data-speed={1600}
                    >
                      236
                    </span>{" "}
                    <span className="dtr-counter-suffix color-light-purple">
                      +
                    </span>
                    <p className="dtr-count-text">Downloads</p>
                  </div>
                </div>
                {/* counter ends */}
              </div>
              {/* column 2 ends */}
              {/* column 3 starts */}
              <div className="col-12 col-md-4 dtr-py-50">
                {/* counter starts */}
                <div className="dtr-counter">
                  {" "}
                  <i className="icon-user-circle-gear-fill color-blue" />
                  <div>
                    <span
                      className="dtr-counter-number counting-number color-blue"
                      data-from={1}
                      data-to={82}
                      data-speed={1600}
                    >
                      82
                    </span>{" "}
                    <span className="dtr-counter-suffix color-light-purple">
                      %
                    </span>
                    <p className="dtr-count-text">Active Users</p>
                  </div>
                </div>
                {/* counter ends */}
              </div>
              {/* column 3 ends */}
            </div>
            {/*== row ends ==*/}
            {/*== video starts ==*/}
            <div className="dtr-video-box dtr-rounded overflow-hidden dtr-mt-100">
              {/* overlay */}
              <div className="dtr-overlay" />
              {/* image */}
              <img src={image} alt="image" />
              {/* pulsating button starts */}
              <div className="dtr-video-pulse-wrapper dtr-overlay-content">
                <div className="dtr-video-pulse pulse-blue">
                  <div className="pulse pulse-1" />
                  <div className="pulse pulse-2" />
                  <div className="pulse pulse-3" />
                  {/* video link */}
                  <a
                    className="dtr-video-popup dtr-video-button vbox-item"
                    data-autoplay="true"
                    data-vbtype="video"
                    href="https://www.youtube.com/watch?v=kuceVNBTJio"
                  />{" "}
                </div>
              </div>
              {/* pulsating button ends */}
            </div>
            {/*== video ends ==*/}
          </div>
        </section>
  )
}

export default Section3
