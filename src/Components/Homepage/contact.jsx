import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="dtr-section dtr-py-100">
          <div className="container">
            {/* heading starts */}
            <div className="dtr-section-intro text-center dtr-mb-50">
              <div className="dtr-intro-subheading-wrapper">
                <p className="dtr-intro-subheading">Contact Us</p>
              </div>
              <h2 className="dtr-intro-heading">How can we help you</h2>
              <p className="dtr-intro-content">
                Have a question, or just want to say Hi{" "}
                <img
                  draggable="false"
                  role="img"
                  className="emoji"
                  alt="👋"
                  src="https://s.w.org/images/core/emoji/13.1.0/svg/1f44b.svg"
                  width="20px"
                />{" "}
                Fill in the form below
              </p>
            </div>
            {/* heading ends */}
            {/*== row starts ==*/}
            <div className="row">
              {/* column 1 starts */}
              <div className="col-12 col-md-10 offset-md-1">
                <div className="dtr-box-wrapper">
                  <div className="dtr-box dtr-shadow">
                    {/* form starts */}
                    <form
                      id="contactform"
                      method="post"
                      action="php/contact-form.php"
                    >
                      <fieldset>
                        <div className="dtr-form-row-2col">
                          <p className="dtr-form-column">
                            <label>Your name</label>
                            <input name="name" type="text" placeholder="Name" />
                          </p>
                          <p className="dtr-form-column">
                            <label>Your email</label>
                            <input
                              name="email"
                              className="required email"
                              type="text"
                              placeholder="Email Address"
                            />
                          </p>
                        </div>
                        <p className="dtr-form-field">
                          <label>Your message</label>
                          <textarea
                            rows={5}
                            name="message"
                            className="required"
                            placeholder="Message..."
                            defaultValue={""}
                          />
                        </p>
                        <p className="antispam">
                          Leave this empty: <br />
                          <input name="url" />
                        </p>
                        <p
                          className="text-end"
                          style={{ marginTop: "-40px", marginRight: 20 }}
                        >
                          <button className="dtr-btn" type="submit">
                            Submit
                          </button>
                        </p>
                        <div id="contactresult" />
                      </fieldset>
                    </form>
                    {/* form ends */}
                  </div>
                </div>
              </div>
              {/* column 1 ends */}
            </div>
            {/*== row ends ==*/}
          </div>
        </section>
  )
}

export default Contact
