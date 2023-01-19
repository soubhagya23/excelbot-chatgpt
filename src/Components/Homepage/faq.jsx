import React from 'react'

const Faq = () => {
  return (
    <section className="dtr-section dtr-py-100 bg-white">
          <div className="container">
            {/* heading starts */}
            <div className="dtr-section-intro text-center dtr-mb-30">
              <div className="dtr-intro-subheading-wrapper">
                <p className="dtr-intro-subheading">The FAQ</p>
              </div>
              <h2 className="dtr-intro-heading">Have questions in mind?</h2>
              <p className="dtr-intro-content">
                There are many variations of passages of lorem ipsum available
                <br />
                but the majority have suffered alteration
              </p>
            </div>
            {/* heading ends */}
            {/*== row starts ==*/}
            <div className="row">
              <div className="col-12 col-md-10 offset-md-1">
                {/*== accordion starts ==*/}
                <div
                  className="dtr-accordion accordion dtr-mt-30"
                  id="accordion1"
                >
                  {/* item 1 starts */}
                  <div className="accordion-item">
                    <p className="accordion-header" id="accordion1-headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion1-collapseOne"
                        aria-expanded="false"
                        aria-controls="accordion1-collapseOne"
                      >
                        {" "}
                        What is XaaS based service?{" "}
                      </button>
                    </p>
                    <div
                      id="accordion1-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="accordion1-headingOne"
                      data-bs-parent="#accordion1"
                    >
                      <div className="accordion-body">
                        There are many variations of passages of lorem ipsum
                        available, but the majority have suffered alteration in
                        some form by injected humour or randomised words which
                        don't look even slightly believable.
                      </div>
                    </div>
                  </div>
                  {/* item 1 ends */}
                  {/* item 2 starts */}
                  <div className="accordion-item">
                    <p className="accordion-header" id="accordion1-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion1-collapseTwo"
                        aria-expanded="false"
                        aria-controls="accordion1-collapseTwo"
                      >
                        {" "}
                        Can I see application in full action before purchase?{" "}
                      </button>
                    </p>
                    <div
                      id="accordion1-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordion1-headingTwo"
                      data-bs-parent="#accordion1"
                    >
                      <div className="accordion-body">
                        There are many variations of passages of lorem ipsum
                        available, but the majority have suffered alteration in
                        some form by injected humour or randomised words which
                        don't look even slightly believable.
                      </div>
                    </div>
                  </div>
                  {/* item 2 ends */}
                  {/* item 3 starts */}
                  <div className="accordion-item">
                    <p
                      className="accordion-header"
                      id="accordion1-headingThree"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion1-collapseThree"
                        aria-expanded="false"
                        aria-controls="accordion1-collapseThree"
                      >
                        {" "}
                        Does service required virtualized hardware?{" "}
                      </button>
                    </p>
                    <div
                      id="accordion1-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordion1-headingThree"
                      data-bs-parent="#accordion1"
                    >
                      <div className="accordion-body">
                        There are many variations of passages of lorem ipsum
                        available, but the majority have suffered alteration in
                        some form by injected humour or randomised words which
                        don't look even slightly believable.
                      </div>
                    </div>
                  </div>
                  {/* item 3 ends */}
                  {/* item 4 starts */}
                  <div className="accordion-item">
                    <p className="accordion-header" id="accordion1-headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion1-collapseFour"
                        aria-expanded="false"
                        aria-controls="accordion1-collapseFour"
                      >
                        {" "}
                        What are the benefits of XaaS?{" "}
                      </button>
                    </p>
                    <div
                      id="accordion1-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordion1-headingFour"
                      data-bs-parent="#accordion1"
                    >
                      <div className="accordion-body">
                        There are many variations of passages of lorem ipsum
                        available, but the majority have suffered alteration in
                        some form by injected humour or randomised words which
                        don't look even slightly believable.
                      </div>
                    </div>
                  </div>
                  {/* item 4 ends */}
                  {/* item 5 starts */}
                  <div className="accordion-item">
                    <p className="accordion-header" id="accordion1-headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion1-collapseFour"
                        aria-expanded="false"
                        aria-controls="accordion1-collapseFour"
                      >
                        {" "}
                        How much is the operation cost?{" "}
                      </button>
                    </p>
                    <div
                      id="accordion1-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordion1-headingFour"
                      data-bs-parent="#accordion1"
                    >
                      <div className="accordion-body">
                        There are many variations of passages of lorem ipsum
                        available, but the majority have suffered alteration in
                        some form by injected humour or randomised words which
                        don't look even slightly believable.
                      </div>
                    </div>
                  </div>
                  {/* item 5 ends */}
                </div>
                {/*== accordion ends ==*/}
              </div>
            </div>
            {/*== row ends ==*/}
            <p className="d-flex align-items-center justify-content-center dtr-mt-20 color-dark">
              <i className="icon-circle-wavy-question text-size-lg dtr-mr-10" />
              Still have a question? <a href="#">Ask your question here</a>
            </p>
          </div>
        </section>
  )
}

export default Faq
