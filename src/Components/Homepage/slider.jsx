import React from 'react'
import Bg from '../assets/images/section-bg-img2.jpg' 
import slide1 from "../assets/images/user-1-80x80.jpg"
import slide2 from "../assets/images/user-2-80x80.jpg"
import slide3 from "../assets/images/user-3-80x80.jpg"
import slide4 from "../assets/images/user-1-80x80.jpg"

const Slider = () => {
  return (
    <section
          id="reviews"
          className="dtr-section dtr-section-with-bg dtr-py-100"
          style={{ backgroundImage: `url(${Bg})` }} 
        >
          {/* overlay */}
          <div className="dtr-overlay dtr-overlay-dark" />
          {/* content on overlay starts */}
          <div className="container-fluid dtr-overlay-content">
            {/* heading starts */}
            <div className="dtr-section-intro dtr-dark-bg-intro text-center dtr-mb-50">
              <div className="dtr-intro-subheading-wrapper">
                <p className="dtr-intro-subheading">The Reviews</p>
              </div>
              <h2 className="dtr-intro-heading">What people say!</h2>
              <p className="dtr-intro-content">
                There are many variations of passages of lorem ipsum available
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
            {/* heading ends */}
            {/*===== testimonial slider starts =====*/}
            <div className="dtr-slick-slider dtr-testimonial-slider dtr-slick-has-dots">
              {/*== slide 1 starts ==*/}
              <div className="dtr-testimonial bg-white">
                <div className="dtr-client-info">
                  <p className="dtr-testimonial-user">
                    <img
                      src={slide1} 
                      alt="Eleanor Jensen"
                    />
                  </p>
                  <div>
                    <h5 className="dtr-client-name">David James</h5>
                    <span className="dtr-client-job">Spin Automation</span>{" "}
                  </div>
                  <span className="dtr-testimonial-stars dtr-stars-5" />{" "}
                </div>
                <p className="dtr-testimonial-content">
                  “There are many variations of passages of lorem ipsum
                  available but the majority have suffered alteration in some
                  form by injected humour or randomised words which don’t look
                  even slightly believable.”
                </p>
              </div>
              {/*== slide 1 ends ==*/}
              {/*== slide 2 starts ==*/}
              <div className="dtr-testimonial bg-white">
                <div className="dtr-client-info">
                  <p className="dtr-testimonial-user">
                    <img
                      src={slide2}
                      alt="Eleanor Jensen"
                    />
                  </p>
                  <div>
                    <h5 className="dtr-client-name">Eleanor Jensen</h5>
                    <span className="dtr-client-job">Entrepreneur</span>{" "}
                  </div>
                  <span className="dtr-testimonial-stars dtr-stars-4" />{" "}
                </div>
                <p className="dtr-testimonial-content">
                  “There are many variations of passages of lorem ipsum
                  available but the majority have suffered alteration in some
                  form by injected humour or randomised words which don’t look
                  even slightly believable.”
                </p>
              </div>
              {/*== slide 2 ends ==*/}
              {/*== slide 3 starts ==*/}
              <div className="dtr-testimonial bg-white">
                <div className="dtr-client-info">
                  <p className="dtr-testimonial-user">
                    <img
                      src={slide3}
                      alt="Eleanor Jensen"
                    />
                  </p>
                  <div>
                    <h5 className="dtr-client-name">Alizee Denten</h5>
                    <span className="dtr-client-job">Kantole Global</span>{" "}
                  </div>
                  <span className="dtr-testimonial-stars dtr-stars-5" />{" "}
                </div>
                <p className="dtr-testimonial-content">
                  “There are many variations of passages of lorem ipsum
                  available but the majority have suffered alteration in some
                  form by injected humour or randomised words which don’t look
                  even slightly believable.”
                </p>
              </div>
              {/*== slide 3 ends ==*/}
              {/*== slide 4 starts ==*/}
              <div className="dtr-testimonial bg-white">
                <div className="dtr-client-info">
                  <p className="dtr-testimonial-user">
                    <img
                      src={slide4}
                      alt="Eleanor Jensen"
                    />
                  </p>
                  <div>
                    <h5 className="dtr-client-name">Andrew Graham</h5>
                    <span className="dtr-client-job">Entrepreneur</span>{" "}
                  </div>
                  <span className="dtr-testimonial-stars dtr-stars-4" />{" "}
                </div>
                <p className="dtr-testimonial-content">
                  “There are many variations of passages of lorem ipsum
                  available but the majority have suffered alteration in some
                  form by injected humour or randomised words which don’t look
                  even slightly believable.”
                </p>
              </div>
              {/*== slide 4 ends ==*/}
            </div>
            {/*===== testimonial slider ends =====*/}
          </div>
          {/* content on overlay ends */}
        </section>
  )
}

export default Slider
