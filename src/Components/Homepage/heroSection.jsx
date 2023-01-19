import React from 'react'
import SectionImage from "../assets/images/section-img1.png"
import img1 from "../assets/images/client-1.png"
import img2 from "../assets/images/client-2.png"
import img3 from "../assets/images/client-3.png"
import img4 from "../assets/images/client-4.png"
import img5 from "../assets/images/client-5.png"
import img6 from "../assets/images/client-1.png"

const HeroSection = () => {
  return (
    <section id="home" className="dtr-section">
          <div className="dtr-section bg-white dtr-hero-section-top-padding">
            <div className="container dtr-pb-100">
              {/*== row starts ==*/}
              <div className="row">
                <div className="col-12 col-md-6">
                  {/* animated hedline starts */}
                  <p className=" dtr-animated-headline font-weight-medium text-left slide color-dark">
                    <span className="dtr-words-wrapper w-100">
                      {/*== text starts ==*/}
                      {/* first line */}
                      <b className="is-visible">
                        Beautiful design interface{" "}
                        <img
                          draggable="false"
                          role="img"
                          className="emoji"
                          alt="✨"
                          src="https://s.w.org/images/core/emoji/13.1.0/svg/2728.svg"
                          width={22}
                        />
                      </b>
                      {/* second line */}
                      <b className="is-hidden">
                        {" "}
                        Blazing fast technology{" "}
                        <img
                          draggable="false"
                          role="img"
                          className="emoji"
                          alt="⚡"
                          src="https://s.w.org/images/core/emoji/13.1.0/svg/26a1.svg"
                          width={22}
                        />{" "}
                      </b>
                      {/* third line */}
                      <b className="is-hidden">
                        {" "}
                        Cloud-focused delivery{" "}
                        <img
                          draggable="false"
                          role="img"
                          className="emoji"
                          alt="⭐"
                          src="https://s.w.org/images/core/emoji/13.1.0/svg/2b50.svg"
                          width={22}
                        />{" "}
                      </b>
                      {/*== text ends ==*/}
                    </span>
                  </p>
                  {/* animated hedline ends */}
                  <h1>Discover the smartest platform</h1>
                  <p className="dtr-intro-content color-dark">
                    Now everything is in your power to create high end &amp;
                    scalable interactive digital products with your team.
                  </p>
                  {/* button starts */}
                  <a
                    className="dtr-btn dtr-btn-small dtr-mt-50"
                    href="#"
                    role="button"
                  >
                    {/* icon */}
                    <i className="icon-rocket-launch-fill" aria-hidden="true" />
                    <p>
                      {" "}
                      {/* subtext */}
                      <span className="dtr-btn-subtext">Get a demo</span>
                      {/* text */}
                      <span className="dtr-btn-text">
                        Start Now - It’s Free
                      </span>{" "}
                    </p>
                  </a>
                  {/* button ends */}
                </div>
                <div className="col-12 col-md-6 small-device-space">
                  {" "}
                  <img src={SectionImage} alt="image" />{" "}
                </div>
              </div>
              {/*== row ends ==*/}
              {/*== row starts / logo slider ==*/}
              <div className="row dtr-pt-100">
                <div className="col-12 col-md-10 offset-md-1">
                  <div className="dtr-slick-slider dtr-slider-5col">
                    {/* img 1 */}
                    <div>
                      {" "}
                      <img src={img1} alt="image" />{" "}
                    </div>
                    {/* img 2 */}
                    <div>
                      {" "}
                      <img src={img2} alt="image" />{" "}
                    </div>
                    {/* img 3 */}
                    <div>
                      {" "}
                      <img src={img3} alt="image" />{" "}
                    </div>
                    {/* img 4 */}
                    <div>
                      {" "}
                      <img src={img4} alt="image" />{" "}
                    </div>
                    {/* img 5 */}
                    <div>
                      {" "}
                      <img src={img5} alt="image" />{" "}
                    </div>
                    {/* img 6 */}
                    <div>
                      {" "}
                      <img src={img6} alt="image" />{" "}
                    </div>
                  </div>
                </div>
              </div>
              {/*== row ends / logo slider ==*/}
            </div>
          </div>
        </section>
  )
}

export default HeroSection
