import React from 'react'
import secImg from "../assets/images/section-img4.png"

const Section2 = () => {
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
                <div className="dtr-section-intro text-left dtr-mb-50">
                  <div className="dtr-intro-subheading-wrapper">
                    <p className="dtr-intro-subheading">Power up workflow</p>
                  </div>
                  <h2 className="dtr-intro-heading">
                    Everything you need to bring ideas to life
                  </h2>
                  <p className="dtr-intro-content">
                    There are many variations of passages of lorem ipsum
                    available but the majority have suffered alteration.
                  </p>
                </div>
                {/* heading ends */}
                {/* list starts */}
                <ul className="dtr-icon-list">
                  <li>
                    {" "}
                    <span className="dtr-list-content">
                      {" "}
                      <span className="dtr-list-icon">
                        {" "}
                        <i className="icon-check-fill" />{" "}
                      </span>{" "}
                      <span className="dtr-list-text">
                        Power up your workflow with integrations{" "}
                      </span>{" "}
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="dtr-list-content">
                      {" "}
                      <span className="dtr-list-icon">
                        {" "}
                        <i className="icon-check-fill" />{" "}
                      </span>{" "}
                      <span className="dtr-list-text">
                        Blazing fast technology with productive features{" "}
                      </span>{" "}
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="dtr-list-content">
                      {" "}
                      <span className="dtr-list-icon">
                        {" "}
                        <i className="icon-check-fill" />{" "}
                      </span>{" "}
                      <span className="dtr-list-text">
                        Centralise feedback and ideas{" "}
                      </span>{" "}
                    </span>{" "}
                  </li>
                </ul>
                {/* list ends */}
                <a
                  className="dtr-btn dtr-px-lg btn-blue dtr-mt-50"
                  href="#"
                  role="button"
                >
                  {" "}
                  <span className="dtr-btn-text">Try For Free</span>{" "}
                </a>{" "}
              </div>
              {/* column 2 ends */}
            </div>
            {/*== row ends ==*/}
          </div>
        </section>
  )
}

export default Section2
