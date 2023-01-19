import React from 'react'
import pricingImg from "../assets/images/pricing-best-plan-label.png"

const Pricing = () => {
  return (
    <section id="pricing" className="dtr-section dtr-py-100">
          <div className="container">
            {/* heading starts */}
            <div className="dtr-section-intro text-center dtr-mb-150">
              <div className="dtr-intro-subheading-wrapper">
                <p className="dtr-intro-subheading">The Pricing</p>
              </div>
              <h2 className="dtr-intro-heading">Perfect plans for you!</h2>
              <p className="dtr-intro-content">
                There are many variations of passages of lorem ipsum available
                <br />
                but the majority have suffered alteration
              </p>
            </div>
            {/* heading ends */}
            {/*== row starts ==*/}
            <div className="row gx-0">
              {/* pricing column 1 starts */}
              <div className="col-12 col-md-4 dtr-mx-0">
                <div className="dtr-pricing  dtr-pricing-default dtr-box-rounded dtr-shadow bg-white">
                  {/* heading */}
                  <h4 className="dtr-pricing-heading">Basic</h4>
                  <div className="dtr-pricing-tagline">For getting started</div>
                  <span className="dtr-pricing-divider" />
                  {/* price */}
                  <p className="dtr-price-wrapper color-dark">
                    <span className="dtr-price-prefix">
                      <sup />
                    </span>
                    <span className="dtr-price">Free</span>
                    <span className="dtr-price-suffix">
                      <sub />
                    </span>
                  </p>
                  {/* button */}
                  <a
                    className="dtr-btn dtr-pricing-btn btn-white-bordered"
                    href="#"
                    role="button"
                  >
                    <span className="dtr-btn-text">Buy Now</span>
                  </a>
                  {/* list starts */}
                  <ul className="dtr-icon-list dtr-icon-list-default dtr-pricing-list">
                    <li>
                      {" "}
                      <span className="dtr-list-content">
                        {" "}
                        <span className="dtr-list-icon">
                          {" "}
                          <i className="icon-check-fill" />{" "}
                        </span>{" "}
                        <span className="dtr-list-text">
                          Customized reports{" "}
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
                          Unlimited user tests{" "}
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
                          Cross border fast payments{" "}
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
                          Invoice/custom billing{" "}
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
                          Custom integrations{" "}
                        </span>{" "}
                      </span>{" "}
                    </li>
                  </ul>
                  {/* list ends */}
                </div>
              </div>
              {/* pricing column 1 ends */}
              {/* pricing column 2 starts */}
              <div className="col-12 col-md-4 dtr-mx-0">
                <div className="dtr-pricing dtr-pricing-has-stamp dtr-pricing-focused dtr-box-rounded dtr-shadow bg-white">
                  <div className="dtr-pricing-stamp">
                    {" "}
                    <img
                      src= {pricingImg}
                      alt="image"
                    />{" "}
                  </div>
                  {/* heading */}
                  <h4 className="dtr-pricing-heading">Pro</h4>
                  <div className="dtr-pricing-tagline">
                    For power users and small teams
                  </div>
                  <span className="dtr-pricing-divider" />
                  {/* price */}
                  <p className="dtr-price-wrapper color-dark">
                    <span className="dtr-price-prefix">
                      <sup>$</sup>
                    </span>
                    <span className="dtr-price">69.90</span>
                    <span className="dtr-price-suffix">
                      <sub>/mo</sub>
                    </span>
                  </p>
                  {/* button */}
                  <a
                    className="dtr-btn dtr-pricing-btn btn-blue"
                    href="#"
                    role="button"
                  >
                    <span className="dtr-btn-text">Buy Now</span>
                  </a>
                  {/* list starts */}
                  <ul className="dtr-icon-list dtr-icon-list-default dtr-pricing-list">
                    <li>
                      {" "}
                      <span className="dtr-list-content">
                        {" "}
                        <span className="dtr-list-icon">
                          {" "}
                          <i className="icon-check-fill" />{" "}
                        </span>{" "}
                        <span className="dtr-list-text">
                          Customized reports{" "}
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
                          Unlimited user tests{" "}
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
                          Cross border fast payments{" "}
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
                          Invoice/custom billing{" "}
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
                          Custom integrations{" "}
                        </span>{" "}
                      </span>{" "}
                    </li>
                  </ul>
                  {/* list ends */}
                </div>
              </div>
              {/* pricing column 2 ends */}
              {/* pricing column 3 starts */}
              <div className="col-12 col-md-4">
                <div className="dtr-pricing  dtr-pricing-default dtr-box-rounded dtr-shadow bg-white">
                  {/* heading */}
                  <h4 className="dtr-pricing-heading">Business</h4>
                  <div className="dtr-pricing-tagline">
                    A flexible plan for growing teams
                  </div>
                  <span className="dtr-pricing-divider" />
                  {/* pricing */}
                  <p className="dtr-price-wrapper color-dark">
                    <span className="dtr-price-prefix">
                      <sup>$</sup>
                    </span>
                    <span className="dtr-price">99.90</span>
                    <span className="dtr-price-suffix">
                      <sub>/mo</sub>
                    </span>
                  </p>
                  {/* button */}
                  <a
                    className="dtr-btn dtr-pricing-btn btn-white-bordered"
                    href="#"
                    role="button"
                  >
                    <span className="dtr-btn-text">Buy Now</span>
                  </a>
                  {/* list starts */}
                  <ul className="dtr-icon-list dtr-icon-list-default dtr-pricing-list">
                    <li>
                      {" "}
                      <span className="dtr-list-content">
                        {" "}
                        <span className="dtr-list-icon">
                          {" "}
                          <i className="icon-check-fill" />{" "}
                        </span>{" "}
                        <span className="dtr-list-text">
                          Customized reports{" "}
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
                          Unlimited user tests{" "}
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
                          Cross border fast payments{" "}
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
                          Invoice/custom billing{" "}
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
                          Custom integrations{" "}
                        </span>{" "}
                      </span>{" "}
                    </li>
                  </ul>
                  {/* list ends */}
                </div>
              </div>
              {/* pricing column 3 ends */}
            </div>
            {/*== row ends ==*/}
          </div>
        </section>
  )
}

export default Pricing
