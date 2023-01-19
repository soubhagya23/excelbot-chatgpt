import React from 'react'
import logoLight from "../assets/images/logo-light.png"

const Footer = () => {
  return (
    <footer id="dtr-footer">
        {/*== main footer row starts ==*/}
        <div className="dtr-main-footer">
          <div className="container">
            <div className="row">
              {/*== column 1 starts ==*/}
              <div className="col-12 col-md-6 col-lg-5">
                <a className="dtr-scroll-link" href="#home">
                  <img src={logoLight} alt="logo" />
                </a>
                <p className="dtr-mt-20 dtr-mb-40">
                  There are many variations of passages of
                  <br />
                  lorem ipsum available but the majority
                  <br />
                  have suffered alteration.
                </p>
                <p className="d-flex align-items-center">
                  <i className="icon-phone-call-fill dtr-mr-10 color-blue" />
                  1-800-234 567 89
                </p>
                <p className="d-flex align-items-center">
                  <i className="icon-envelope-simple-fill dtr-mr-10 color-blue" />
                  sales@example.com
                </p>
              </div>
              {/*== column 1 ends ==*/}
              {/*== column 2 starts ==*/}
              <div className="col-12 col-md-6 col-lg-2 small-device-space">
                <h6>Resources</h6>
                <ul className="dtr-list-line line-accent">
                  <li>
                    <p>
                      <a href="#">Documentation</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#">Articles</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#">Showcase</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#">Rebuilds</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#">Templates</a>
                    </p>
                  </li>
                </ul>
              </div>
              {/*== column 2 ends ==*/}
              {/*== column 3 starts ==*/}
              <div className="col-12 col-md-6 col-lg-2 small-device-space">
                <h6>Company</h6>
                <ul className="dtr-list-line line-accent">
                  <li>
                    <p>
                      <a href="#">About Us</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#">Our Team</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#">The Process</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#">Blog</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#">Contact</a>
                    </p>
                  </li>
                </ul>
              </div>
              {/*== column 3 ends ==*/}
              {/*== column 4 starts ==*/}
              <div className="col-12 col-md-6 col-lg-3">
                <h6>Subscribe</h6>
                <p>
                  Get all updates and notifications by subscribing to our
                  newsletter.
                </p>
                {/* form starts */}
                <div className="dtr-subscribe-form dtr-mt-20">
                  <input
                    type="email"
                    name="your-email"
                    placeholder="hello@example.com"
                  />
                  <button type="submit" className="dtr-subscribe-btn">
                    Submit
                  </button>
                </div>
                {/* form ends */}
              </div>
              {/*== column 4 ends ==*/}
            </div>
          </div>
        </div>
        {/*== main footer row ends ==*/}
        {/*== copyright row starts ==*/}
        <div className="dtr-copyright">
          <div className="container">
            <div className="row">
              {/*== column 1 starts ==*/}
              <div className="col-12 col-md-6">
                {/* social starts */}
                <ul className="dtr-social dtr-social-list">
                  <li>
                    <a
                      href="#"
                      className="dtr-twitter"
                      target="_blank"
                      title="twitter"
                    />
                  </li>
                  <li>
                    <a
                      href="#"
                      className="dtr-facebook"
                      target="_blank"
                      title="facebook"
                    />
                  </li>
                  <li>
                    <a
                      href="#"
                      className="dtr-linkedin"
                      target="_blank"
                      title="linkedin"
                    />
                  </li>
                </ul>
                {/* social ends */}
              </div>
              {/*== column 1 ends ==*/}
              {/*== column 2 starts ==*/}
              <div className="col-12 col-md-6 text-end small-device-space">
                <p>© 2021 XaaSvik. All rights reserved</p>
              </div>
              {/*== column 2 ends ==*/}
            </div>
          </div>
        </div>
        {/*== copyright row ends ==*/}
      </footer>
  )
}

export default Footer
