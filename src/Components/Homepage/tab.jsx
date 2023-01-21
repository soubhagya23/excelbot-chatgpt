import React from 'react'
import tabImg1 from "../assets/images/tab-img1.png"
import tabImg2 from "../assets/images/tab-img2.png"
import tabimg3 from "../assets/images/tab-img3.png"

const Tab = () => {
  return (
    <section className="dtr-section dtr-py-100 bg-white">
          <div className="container">
            {/* heading starts */}
            <div className="dtr-section-intro text-left dtr-mb-50">
              <div className="dtr-intro-subheading-wrapper">
                <p className="dtr-intro-subheading">Why AIBot?</p>
              </div>
              <h2 className="dtr-intro-heading">
                Fast and intuitive integration
              </h2>
              <p className="dtr-intro-content">
                There are many variations of passages of lorem ipsum available
                <br />
                but the majority have suffered alteration in some form by
                <br />
                injected humour or randomised words.
              </p>
            </div>
            {/* heading ends */}
            {/* tabs starts */}
            <div className="dtr-tabs">
              <div className="row d-flex align-items-center offset-md-1">
                {/* left column starts */}
                <div className="col-12 col-md-5">
                  <div className="tab-content">
                    {/* tab 1 */}
                    <div
                      className="tab-pane active"
                      id="features-tab-1"
                      role="tabpanel"
                      aria-labelledby="features-tab-1-tab"
                    >
                      {" "}
                      <img src={tabImg1} alt="image" />{" "}
                    </div>
                    {/* tab 2 */}
                    <div
                      className="tab-pane"
                      id="features-tab-2"
                      role="tabpanel"
                      aria-labelledby="features-tab-2-tab"
                    >
                      <img src={tabImg2} alt="image" />
                    </div>
                    {/* tab 3 */}
                    <div
                      className="tab-pane"
                      id="features-tab-3"
                      role="tabpanel"
                      aria-labelledby="features-tab-3-tab"
                    >
                      <img src={tabimg3} alt="image" />
                    </div>
                  </div>
                </div>
                {/* left column ends */}
                {/* right (nav) column starts */}
                <div className="col-12 col-md-5 small-device-space">
                  <div
                    className="nav flex-column nav-pills"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    {/* tab 1 content starts */}
                    <a
                      className="nav-link show active"
                      id="features-tab-1-tab"
                      data-bs-toggle="pill"
                      href="#features-tab-1"
                      role="tab"
                      aria-controls="features-tab-1"
                    >
                      <h4 className="dtr-tabs-heading">Create your tasks</h4>
                      <p>
                        There are many variations of passages of lorem ipsum
                        dolor amet available.
                      </p>
                    </a>
                    {/* tab 1 content ends */}
                    {/* tab 2 content starts */}
                    <a
                      className="nav-link"
                      id="features-tab-2-tab"
                      data-bs-toggle="pill"
                      href="#features-tab-2"
                      role="tab"
                      aria-controls="features-tab-2"
                    >
                      <h4 className="dtr-tabs-heading">Build your flow</h4>
                      <p>
                        There are many variations of passages of lorem ipsum
                        dolor amet available.
                      </p>
                    </a>
                    {/* tab 2 content ends */}
                    {/* tab 3 content starts */}
                    <a
                      className="nav-link"
                      id="features-tab-3-tab"
                      data-bs-toggle="pill"
                      href="#features-tab-3"
                      role="tab"
                      aria-controls="features-tab-3"
                    >
                      <h4 className="dtr-tabs-heading">Aquire new users</h4>
                      <p>
                        There are many variations of passages of lorem ipsum
                        dolor amet available.
                      </p>
                    </a>
                    {/* tab 3 content ends */}
                  </div>
                </div>
                {/* right (nav) column ends */}
              </div>
            </div>
          </div>
        </section>
  )
}

export default Tab
