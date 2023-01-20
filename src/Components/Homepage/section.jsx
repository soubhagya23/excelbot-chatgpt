import React from 'react'
import secImg from "../assets/images/section-img2.png" 

const Section = () => {
  return (
    <section className="dtr-section dtr-py-100">
          <div className="container">
            {/*== row starts ==*/}
            <div className="row">
              {/* column 1 starts */}
              <div className="col-12 col-md-6">
                {" "}
                <img src={secImg} alt="image" />{" "}
              </div>
              {/* column 1 ends */}
              {/* column 2 starts */}
              <div className="col-12 col-md-6 small-device-space">
                {/* heading starts */}
                <div className="dtr-section-intro text-left">
                  <div className="dtr-intro-subheading-wrapper">
                    <p className="dtr-intro-subheading" style={{fontWeight:'400'}}>The XaaS App</p>
                  </div>
                  <h2 className="dtr-intro-heading"  style={{
                  fontWeight: "800",
                  fontSize: "3em",
                  lineHeight: "1.2em",
                }}>
                    Increase your
                    <br />
                    conversion rate by 100%
                    <br />- for free.
                  </h2>
                  <p className="dtr-intro-content">
                    There are many variations of passages of lorem ipsum
                    available but the majority have suffered alteration in some
                    form by injected humour or randomised words.
                  </p>
                </div>
                {/* heading ends */}
                {/* button */}
                <a
                  className="dtr-btn btn-blue dtr-px-lg dtr-mt-50"
                  href="#"
                  role="button"
                >
                  {" "}
                  <span className="dtr-btn-text">Try For Free</span>{" "}
                </a>
              </div>
              {/* column 2 ends */}
            </div>
            {/*== row ends ==*/}
          </div>
        </section>
  )
}

export default Section
