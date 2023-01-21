import React from 'react'
import LogoDark from "../assets/images/logo-dark.png";

const SmHeader = () => {
  return (
    <div>
      <div className="dtr-responsive-header header-with-slick-menu fixed-top">
        <div className="container">
          {/* small devices logo */}
          <div className="dtr-responsive-header-left">
            {" "}
            <a className="dtr-logo" href="index.html">
             {/*  <img src={LogoDark} alt="logo" /> */}
            </a>{" "}
          </div>
          {/* small devices logo ends */}
          {/* menu button */}
          <button id="dtr-menu-button" className="dtr-hamburger" type="button">
            <span className="dtr-hamburger-lines-wrapper">
              <span className="dtr-hamburger-lines" />
            </span>
          </button>
        </div>
        <div className="dtr-responsive-header-menu" />
      </div>
    </div>
  )
}

export default SmHeader
