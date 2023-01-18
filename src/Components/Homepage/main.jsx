import React from "react";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/color.css";
import "../assets/css/plugins.css";
import SectionImage from "../assets/images/section-img1.png"
import LogoDark from "../assets/images/logo-dark.png";

function Homepage() {
  return (
    <div id="dtr-wrapper" className="clearfix">
      {/* Small Devices Header
============================================= */}
      <div className="dtr-responsive-header header-with-slick-menu fixed-top">
        <div className="container">
          {/* small devices logo */}
          <div className="dtr-responsive-header-left">
            {" "}
            <a className="dtr-logo" href="index.html">
              <img src={LogoDark} alt="logo" />
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
      {/* Small Devices Header ends
============================================= */}
      {/* header starts
============================================= */}
      <header id="dtr-header-global" className="fixed-top">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            {/* header left starts */}
            <div className="dtr-header-left">
              {/* logo */}
              <a className="logo-default dtr-scroll-link" href="#home">
                <img src={LogoDark} alt="logo" />
              </a>
              {/* logo on scroll */}
              <a className="logo-alt dtr-scroll-link" href="#home">
                <img src={LogoDark} alt="logo" />
              </a>
              {/* logo on scroll ends */}
            </div>
            {/* header left ends */}
            {/* menu starts*/}
            <div className="main-navigation">
              <ul className="sf-menu dtr-nav dark-nav-on-load dark-nav-on-scroll">
                <li>
                  {" "}
                  <a className="nav-link" href="#home">
                    Home
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="nav-link" href="#services">
                    Features
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="nav-link" href="#team">
                    The Team
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="nav-link" href="#reviews">
                    Reviews
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="nav-link" href="#pricing">
                    Pricing
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="nav-link" href="#blog">
                    Blog
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>{" "}
                </li>
              </ul>
            </div>
            {/* menu ends */}
          </div>
        </div>
      </header>
      {/* header ends
================================================== */}
      {/* == main content area starts == */}
      <div id="dtr-main-content">
        {/* hero section starts
================================================== */}
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
                      <img src="./assets/images/client-1.png" alt="image" />{" "}
                    </div>
                    {/* img 2 */}
                    <div>
                      {" "}
                      <img src="./assets/images/client-2.png" alt="image" />{" "}
                    </div>
                    {/* img 3 */}
                    <div>
                      {" "}
                      <img src="./assets/images/client-3.png" alt="image" />{" "}
                    </div>
                    {/* img 4 */}
                    <div>
                      {" "}
                      <img src="./assets/images/client-4.png" alt="image" />{" "}
                    </div>
                    {/* img 5 */}
                    <div>
                      {" "}
                      <img src="./assets/images/client-5.png" alt="image" />{" "}
                    </div>
                    {/* img 6 */}
                    <div>
                      {" "}
                      <img src="./assets/images/client-1.png" alt="image" />{" "}
                    </div>
                  </div>
                </div>
              </div>
              {/*== row ends / logo slider ==*/}
            </div>
          </div>
        </section>
        {/* hero section ends
================================================== */}
        {/* section starts
================================================== */}
        <section className="dtr-section dtr-py-100">
          <div className="container">
            {/*== row starts ==*/}
            <div className="row">
              {/* column 1 starts */}
              <div className="col-12 col-md-6">
                {" "}
                <img src="./assets/images/section-img2.png" alt="image" />{" "}
              </div>
              {/* column 1 ends */}
              {/* column 2 starts */}
              <div className="col-12 col-md-6 small-device-space">
                {/* heading starts */}
                <div className="dtr-section-intro text-left">
                  <div className="dtr-intro-subheading-wrapper">
                    <p className="dtr-intro-subheading">The XaaS App</p>
                  </div>
                  <h2 className="dtr-intro-heading">
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
        {/* section ends
================================================== */}
        {/* services section starts
================================================== */}
        <section
          id="services"
          className="dtr-section dtr-pt-100 dtr-pb-70 bg-white"
        >
          <div className="container">
            {/* heading starts */}
            <div className="dtr-section-intro text-left dtr-mb-50">
              <div className="dtr-intro-subheading-wrapper">
                <p className="dtr-intro-subheading">The Features</p>
              </div>
              <h2 className="dtr-intro-heading">Flexible &amp; Scalable...</h2>
              <p className="dtr-intro-content">
                There are many variations of passages of lorem ipsum available
                <br />
                but the majority have suffered alteration in some form by
                <br />
                injected humour or randomised words.
              </p>
            </div>
            {/* heading ends */}
            {/*== row 1 starts ==*/}
            <div className="row wow fadeInUp" data-wow-delay="0.2s">
              {/* column 1 starts */}
              <div className="col-12 col-md-4">
                <div className="dtr-servicebox-wrapper dtr-servicebox-offset-border dtr-box-rounded">
                  <div className="dtr-servicebox dtr-shadow bg-light-orange">
                    {" "}
                    <span className="dtr-servicebox-number">01</span>
                    <div className="dtr-servicebox-head">
                      <div className="dtr-servicebox-icon color-orange">
                        {" "}
                        <i className="icon-user-circle-plus-fill" />{" "}
                      </div>
                      <h4 className="dtr-servicebox-heading">
                        User
                        <br />
                        Onboarding
                      </h4>
                    </div>
                    <div className="dtr-servicebox-content">
                      Lorem ipsum dolor amet consectetur adipiscing labore et
                      dolore magna aliqua.{" "}
                    </div>
                  </div>
                </div>
              </div>
              {/* column 1 ends */}
              {/* column 2 starts */}
              <div className="col-12 col-md-4">
                <div className="dtr-servicebox-wrapper dtr-servicebox-offset-border dtr-box-rounded">
                  <div className="dtr-servicebox dtr-shadow bg-light-cyan">
                    {" "}
                    <span className="dtr-servicebox-number">02</span>
                    <div className="dtr-servicebox-head">
                      <div className="dtr-servicebox-icon color-cyan">
                        {" "}
                        <i className="icon-intersect" />{" "}
                      </div>
                      <h4 className="dtr-servicebox-heading">
                        Flexible
                        <br />
                        Workflow{" "}
                      </h4>
                    </div>
                    <div className="dtr-servicebox-content">
                      Lorem ipsum dolor amet consectetur adipiscing labore et
                      dolore magna aliqua.{" "}
                    </div>
                  </div>
                </div>
              </div>
              {/* column 2 ends */}
              {/* column 3 starts */}
              <div className="col-12 col-md-4">
                <div className="dtr-servicebox-wrapper dtr-servicebox-offset-border dtr-box-rounded">
                  <div className="dtr-servicebox dtr-shadow bg-light-blue">
                    {" "}
                    <span className="dtr-servicebox-number">03</span>
                    <div className="dtr-servicebox-head">
                      <div className="dtr-servicebox-icon color-sky-blue">
                        {" "}
                        <i
                          className="icon-timer-fill"
                          aria-hidden="true"
                        />{" "}
                      </div>
                      <h4 className="dtr-servicebox-heading">
                        Real-time
                        <br />
                        Insights{" "}
                      </h4>
                    </div>
                    <div className="dtr-servicebox-content">
                      Lorem ipsum dolor amet consectetur adipiscing labore et
                      dolore magna aliqua.{" "}
                    </div>
                  </div>
                </div>
              </div>
              {/* column 3 ends */}
            </div>
            {/*== row 1 ends ==*/}
            {/*== row 2 starts ==*/}
            <div className="row wow fadeInUp" data-wow-delay="0.5s">
              {/* column 1 starts */}
              <div className="col-12 col-md-4">
                <div className="dtr-servicebox-wrapper dtr-servicebox-offset-border dtr-box-rounded">
                  <div className="dtr-servicebox dtr-shadow bg-dark color-white">
                    {" "}
                    <span className="dtr-servicebox-number color-dark-secondary">
                      04
                    </span>
                    <div className="dtr-servicebox-head">
                      <div className="dtr-servicebox-icon color-white">
                        {" "}
                        <i className="icon-chart-pie-fill" />{" "}
                      </div>
                      <h4 className="dtr-servicebox-heading">
                        Advance
                        <br />
                        Analytics
                      </h4>
                    </div>
                    <div className="dtr-servicebox-content">
                      Lorem ipsum dolor amet consectetur adipiscing labore et
                      dolore magna aliqua.{" "}
                    </div>
                  </div>
                </div>
              </div>
              {/* column 1 ends */}
              {/* column 2 starts */}
              <div className="col-12 col-md-4">
                <div className="dtr-servicebox-wrapper dtr-servicebox-offset-border dtr-box-rounded">
                  <div className="dtr-servicebox dtr-shadow bg-gray">
                    {" "}
                    <span className="dtr-servicebox-number">05</span>
                    <div className="dtr-servicebox-head">
                      <div className="dtr-servicebox-icon color-dark">
                        {" "}
                        <i className="icon-app-window-fill" />{" "}
                      </div>
                      <h4 className="dtr-servicebox-heading">
                        Single
                        <br />
                        Dashboard
                      </h4>
                    </div>
                    <div className="dtr-servicebox-content">
                      Lorem ipsum dolor amet consectetur adipiscing labore et
                      dolore magna aliqua.{" "}
                    </div>
                  </div>
                </div>
              </div>
              {/* column 2 ends */}
              {/* column 3 starts */}
              <div className="col-12 col-md-4">
                <div className="dtr-servicebox-wrapper dtr-servicebox-offset-border dtr-box-rounded">
                  <div className="dtr-servicebox dtr-shadow bg-purple">
                    {" "}
                    <span className="dtr-servicebox-number">06</span>
                    <div className="dtr-servicebox-head">
                      <div className="dtr-servicebox-icon color-blue">
                        {" "}
                        <i className="icon-target-fill" />{" "}
                      </div>
                      <h4 className="dtr-servicebox-heading">
                        Custom
                        <br />
                        Reporting
                      </h4>
                    </div>
                    <div className="dtr-servicebox-content">
                      Lorem ipsum dolor amet consectetur adipiscing labore et
                      dolore magna aliqua.{" "}
                    </div>
                  </div>
                </div>
              </div>
              {/* column 3 ends */}
            </div>
            {/*== row 2 ends ==*/}
          </div>
        </section>
        {/* services section ends
================================================== */}
        {/* section starts
================================================== */}
        <section className="dtr-section dtr-py-100">
          <div className="container">
            {/*== row starts ==*/}
            <div className="row">
              {/* column 1 starts */}
              <div className="col-12 col-md-6">
                {" "}
                <img src="./assets/images/section-img4.png" alt="image" />{" "}
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
        {/* section ends
================================================== */}
        {/* process section starts
================================================== */}
        <section id="process" className="dtr-section dtr-py-100 bg-white">
          <div className="container">
            {/* heading starts */}
            <div className="dtr-section-intro text-left dtr-mb-50">
              <div className="dtr-intro-subheading-wrapper">
                <p className="dtr-intro-subheading">The Process</p>
              </div>
              <h2 className="dtr-intro-heading">Experience the better</h2>
              <p className="dtr-intro-content">
                There are many variations of passages of lorem ipsum available
                <br />
                but the majority have suffered alteration in some form by
                <br />
                injected humour or randomised words.
              </p>
            </div>
            {/* heading ends */}
            {/*== row starts ==*/}
            <div className="row">
              {/* process bar starts */}
              <div className="dtr-process-bar-center dtr-mb-100 dtr-pt-30 color-dark">
                <div className="dtr-process-bar dtr-shadow">
                  <ul className="dtr-process-list">
                    <li> Onboard </li>
                    <li> Collaborate </li>
                    <li> Automate </li>
                  </ul>
                </div>
              </div>
              {/* process bar ends */}
              {/* column 1 starts */}
              <div className="col-12 col-md-4">
                <div className="dtr-feature dtr-feature-top dtr-feature-circle dtr-feature-large text-left ">
                  <div className="dtr-feature-icon bg-orange">
                    {" "}
                    <i className="icon-user-plus" aria-hidden="true" />{" "}
                  </div>
                  <div className="dtr-feature-content">
                    <h4 className="dtr-feature-heading">Onboard</h4>
                  </div>
                </div>
                <p className="dtr-pt-20">
                  There are many variations of passages of lorem ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
              {/* column 1 ends */}
              {/* column 2 starts */}
              <div className="col-12 col-md-4 small-device-space">
                <div className="dtr-feature dtr-feature-top dtr-feature-circle dtr-feature-large text-left ">
                  <div className="dtr-feature-icon bg-cyan">
                    {" "}
                    <i className="icon-intersect" aria-hidden="true" />{" "}
                  </div>
                  <div className="dtr-feature-content">
                    <h4 className="dtr-feature-heading">Collaborate</h4>
                  </div>
                </div>
                <p className="dtr-pt-20">
                  There are many variations of passages of lorem ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
              {/* column 2 ends */}
              {/* column 3 starts */}
              <div className="col-12 col-md-4">
                <div className="dtr-feature dtr-feature-top dtr-feature-circle dtr-feature-large text-left ">
                  <div className="dtr-feature-icon bg-sky-blue">
                    {" "}
                    <i className="icon-timer-fill" aria-hidden="true" />{" "}
                  </div>
                  <div className="dtr-feature-content">
                    <h4 className="dtr-feature-heading">Automate</h4>
                  </div>
                </div>
                <p className="dtr-pt-20">
                  There are many variations of passages of lorem ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
              {/* column 3 ends */}
            </div>
            {/*== row ends ==*/}
          </div>
        </section>
        {/* process section ends
================================================== */}
        {/* team section starts
================================================== */}
        <section id="team" className="dtr-section dtr-pt-100 dtr-pb-70">
          <div className="container">
            {/* heading starts */}
            <div className="dtr-section-intro text-center dtr-mb-50">
              <div className="dtr-intro-subheading-wrapper">
                <p className="dtr-intro-subheading">The Team</p>
              </div>
              <h2 className="dtr-intro-heading">People behind XaaSvik</h2>
              <p className="dtr-intro-content">
                There are many variations of passages of lorem ipsum available
                <br />
                but the majority have suffered alteration
              </p>
            </div>
            {/* heading ends */}
            {/*== row starts ==*/}
            <div className="row">
              {/* column 1 starts */}
              <div className="col-12 col-md-6 col-lg-3">
                {/* member starts */}
                <div className="dtr-team dtr-team-social-onhover text-center dtr-team-offset-border dtr-box-rounded">
                  <div className="dtr-team-content-wrapper dtr-shadow">
                    <div className="dtr-team-img">
                      {" "}
                      <img
                        src="./assets/images/team-member-1.jpg"
                        alt="image"
                      />{" "}
                    </div>
                    <div className="dtr-team-content bg-white">
                      <h5 className="dtr-team-title">Will McMilan</h5>
                      <p className="dtr-team-subtitle">CEO</p>
                      {/* team social starts */}
                      <div className="dtr-team-social">
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
                      </div>
                      {/* team social ends */}
                    </div>
                  </div>
                </div>
                {/* member ends */}
              </div>
              {/* column 1 ends */}
              {/* column 2 starts */}
              <div className="col-12 col-md-6 col-lg-3">
                {/* member starts */}
                <div className="dtr-team dtr-team-social-onhover text-center dtr-team-offset-border dtr-box-rounded">
                  <div className="dtr-team-content-wrapper dtr-shadow">
                    <div className="dtr-team-img">
                      {" "}
                      <img
                        src="./assets/images/team-member-2.jpg"
                        alt="image"
                      />{" "}
                    </div>
                    <div className="dtr-team-content bg-white">
                      <h5 className="dtr-team-title">Alexa Smith</h5>
                      <p className="dtr-team-subtitle">Business Head</p>
                      {/* team social starts */}
                      <div className="dtr-team-social">
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
                      </div>
                      {/* team social ends */}
                    </div>
                  </div>
                </div>
                {/* member ends */}
              </div>
              {/* column 2 ends */}
              {/* column 3 starts */}
              <div className="col-12 col-md-6 col-lg-3">
                {/* member starts */}
                <div className="dtr-team dtr-team-social-onhover text-center dtr-team-offset-border dtr-box-rounded">
                  <div className="dtr-team-content-wrapper dtr-shadow">
                    <div className="dtr-team-img">
                      {" "}
                      <img
                        src="./assets/images/team-member-3.jpg"
                        alt="image"
                      />{" "}
                    </div>
                    <div className="dtr-team-content bg-white">
                      <h5 className="dtr-team-title">Anthony Sommers</h5>
                      <p className="dtr-team-subtitle">Product Lead</p>
                      {/* team social starts */}
                      <div className="dtr-team-social">
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
                      </div>
                      {/* team social ends */}
                    </div>
                  </div>
                </div>
                {/* member ends */}
              </div>
              {/* column 3 ends */}
              {/* column 4 starts */}
              <div className="col-12 col-md-6 col-lg-3">
                {/* member starts */}
                <div className="dtr-team dtr-team-social-onhover text-center dtr-team-offset-border dtr-box-rounded">
                  <div className="dtr-team-content-wrapper dtr-shadow">
                    <div className="dtr-team-img">
                      {" "}
                      <img
                        src="./assets/images/team-member-4.jpg"
                        alt="image"
                      />{" "}
                    </div>
                    <div className="dtr-team-content bg-white">
                      <h5 className="dtr-team-title">Jade Anderson</h5>
                      <p className="dtr-team-subtitle">CTO</p>
                      {/* team social starts */}
                      <div className="dtr-team-social">
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
                      </div>
                      {/* team social ends */}
                    </div>
                  </div>
                </div>
                {/* member ends */}
              </div>
              {/* column 4 ends */}
            </div>
            {/*== row ends ==*/}
          </div>
        </section>
        {/* team section ends
================================================== */}
        {/* tab section starts
================================================== */}
        <section className="dtr-section dtr-py-100 bg-white">
          <div className="container">
            {/* heading starts */}
            <div className="dtr-section-intro text-left dtr-mb-50">
              <div className="dtr-intro-subheading-wrapper">
                <p className="dtr-intro-subheading">Why XaaSvik?</p>
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
                      <img src="./assets/images/tab-img1.png" alt="image" />{" "}
                    </div>
                    {/* tab 2 */}
                    <div
                      className="tab-pane"
                      id="features-tab-2"
                      role="tabpanel"
                      aria-labelledby="features-tab-2-tab"
                    >
                      <img src="./assets/images/tab-img2.png" alt="image" />
                    </div>
                    {/* tab 3 */}
                    <div
                      className="tab-pane"
                      id="features-tab-3"
                      role="tabpanel"
                      aria-labelledby="features-tab-3-tab"
                    >
                      <img src="./assets/images/tab-img3.png" alt="image" />
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
            {/* tabs ends */}
          </div>
        </section>
        {/* tab section ends
================================================== */}
        {/* testimonial section starts
================================================== */}
        <section
          id="reviews"
          className="dtr-section dtr-section-with-bg dtr-py-100"
          style={{ backgroundImage: "url(./assets/images/section-bg-img2.jpg)" }}
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
                      src="./assets/images/user-1-80x80.jpg"
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
                      src="./assets/images/user-2-80x80.jpg"
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
                      src="./assets/images/user-3-80x80.jpg"
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
                      src="./assets/images/user-1-80x80.jpg"
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
        {/* testimonial section ends
================================================== */}
        {/* section starts
================================================== */}
        <section className="dtr-section dtr-pt-100">
          <div className="container">
            {/* heading starts */}
            <div className="dtr-section-intro text-left dtr-mb-50">
              <div className="dtr-intro-subheading-wrapper">
                <p className="dtr-intro-subheading">The Results</p>
              </div>
              <h2 className="dtr-intro-heading">Numbers &amp; Satisfaction</h2>
              <p className="dtr-intro-content">
                There are many variations of passages of lorem ipsum available
                <br />
                but the majority have suffered alteration in some form by
                <br />
                injected humour or randomised words.
              </p>
            </div>
            {/* heading ends */}
            {/*== row starts ==*/}
            <div className="row">
              {/* column 1 starts */}
              <div className="col-12 col-md-4 dtr-py-50">
                {/* counter starts */}
                <div className="dtr-counter">
                  {" "}
                  <i className="icon-cursor-fill color-blue" />
                  <div>
                    {" "}
                    <span
                      className="dtr-counter-number counting-number color-blue"
                      data-from={1}
                      data-to={20}
                      data-speed={1600}
                    >
                      90
                    </span>{" "}
                    <span className="dtr-counter-suffix color-light-purple">
                      %
                    </span>
                    <p className="dtr-count-text">Clickthrough Rate</p>
                  </div>
                </div>
                {/* counter ends */}
              </div>
              {/* column 1 ends */}
              {/* column 2 starts */}
              <div className="col-12 col-md-4 dtr-py-50 dtr-border-left dtr-border-right">
                {/* counter starts */}
                <div className="dtr-counter">
                  {" "}
                  <i className="icon-cloud-arrow-down-fill color-blue" />
                  <div>
                    {" "}
                    <span
                      className="dtr-counter-number counting-number color-blue"
                      data-from={1}
                      data-to={236}
                      data-speed={1600}
                    >
                      236
                    </span>{" "}
                    <span className="dtr-counter-suffix color-light-purple">
                      +
                    </span>
                    <p className="dtr-count-text">Downloads</p>
                  </div>
                </div>
                {/* counter ends */}
              </div>
              {/* column 2 ends */}
              {/* column 3 starts */}
              <div className="col-12 col-md-4 dtr-py-50">
                {/* counter starts */}
                <div className="dtr-counter">
                  {" "}
                  <i className="icon-user-circle-gear-fill color-blue" />
                  <div>
                    <span
                      className="dtr-counter-number counting-number color-blue"
                      data-from={1}
                      data-to={82}
                      data-speed={1600}
                    >
                      82
                    </span>{" "}
                    <span className="dtr-counter-suffix color-light-purple">
                      %
                    </span>
                    <p className="dtr-count-text">Active Users</p>
                  </div>
                </div>
                {/* counter ends */}
              </div>
              {/* column 3 ends */}
            </div>
            {/*== row ends ==*/}
            {/*== video starts ==*/}
            <div className="dtr-video-box dtr-rounded overflow-hidden dtr-mt-100">
              {/* overlay */}
              <div className="dtr-overlay" />
              {/* image */}
              <img src="./assets/images/video-bg.jpg" alt="image" />
              {/* pulsating button starts */}
              <div className="dtr-video-pulse-wrapper dtr-overlay-content">
                <div className="dtr-video-pulse pulse-blue">
                  <div className="pulse pulse-1" />
                  <div className="pulse pulse-2" />
                  <div className="pulse pulse-3" />
                  {/* video link */}
                  <a
                    className="dtr-video-popup dtr-video-button vbox-item"
                    data-autoplay="true"
                    data-vbtype="video"
                    href="https://www.youtube.com/watch?v=kuceVNBTJio"
                  />{" "}
                </div>
              </div>
              {/* pulsating button ends */}
            </div>
            {/*== video ends ==*/}
          </div>
        </section>
        {/* section ends
================================================== */}
        {/* pricing section starts
================================================== */}
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
                      src="./assets/images/pricing-best-plan-label.png"
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
        {/* pricing section ends
================================================== */}
        {/* accordion section starts
================================================== */}
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
        {/* accordion section ends
================================================== */}
        {/* screenshot section starts
================================================== */}
        <section
          className="dtr-section dtr-section-with-bg dtr-py-100"
          style={{ backgroundImage: "url(./assets/images/section-bg-img2.jpg)" }}
        >
          {/*overlay */}
          <div className="dtr-overlay dtr-overlay-dark" />
          {/* content on overlay starts */}
          <div className="container-fluid dtr-overlay-content">
            {/* heading starts */}
            <div className="dtr-section-intro dtr-dark-bg-intro text-center">
              <div className="dtr-intro-subheading-wrapper">
                <p className="dtr-intro-subheading">UI Blocks</p>
              </div>
              <h2 className="dtr-intro-heading">The Screenshots</h2>
              <p className="dtr-intro-content">
                There are many variations of passages of lorem ipsum available
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
            {/* heading ends */}
            {/* slider starts */}
            <div className="dtr-slick-slider dtr-slider-3col dtr-slick-has-dots dtr-mt-50">
              {/* img 1 */}
              <div>
                {" "}
                <img src="./assets/images/carousel-img1.png" alt="image" />{" "}
              </div>
              {/* img 2 */}
              <div>
                {" "}
                <img src="./assets/images/carousel-img2.png" alt="image" />{" "}
              </div>
              {/* img 3 */}
              <div>
                {" "}
                <img src="./assets/images/carousel-img3.png" alt="image" />{" "}
              </div>
              {/* img 4 */}
              <div>
                {" "}
                <img src="./assets/images/carousel-img1.png" alt="image" />{" "}
              </div>
              {/* img 5 */}
              <div>
                {" "}
                <img src="./assets/images/carousel-img2.png" alt="image" />{" "}
              </div>
            </div>
            {/* slider ends */}
          </div>
          {/* content on overlay ends */}
        </section>
        {/* screenshot section ends
================================================== */}
        {/* blog section starts
================================================== */}
        <section id="blog" className="dtr-section dtr-py-100 bg-white">
          <div className="container">
            {/* heading starts */}
            <div className="dtr-section-intro text-center dtr-mb-50">
              <div className="dtr-intro-subheading-wrapper">
                <p className="dtr-intro-subheading">News &amp; Articles</p>
              </div>
              <h2 className="dtr-intro-heading"> Latest blog posts</h2>
              <p className="dtr-intro-content">
                There are many variations of passages of lorem ipsum available
                <br />
                but the majority have suffered alteration
              </p>
            </div>
            {/* heading ends */}
            {/*== row starts ==*/}
            <div className="row">
              {/* column 1 starts */}
              <div className="col-12 col-md-4">
                <div className="dtr-post-item">
                  <div className="dtr-post-img">
                    {" "}
                    <img src="./assets/images/post-img1.jpg" alt="image" />{" "}
                  </div>
                  <div className="dtr-post-content">
                    {" "}
                    <span className="dtr-meta-category">
                      <a href="#">DevOps</a>
                    </span>
                    <h5 className="dtr-post-title">
                      <a href="#" rel="bookmark">
                        Adapting &amp; onboarding users in a virtual workplace
                      </a>
                    </h5>
                    <div className="dtr-meta color-dark-gray">
                      {" "}
                      <span className="dtr-meta-author-avatar">
                        <img src="./assets/images/user-1-80x80.jpg" alt="image" />
                      </span>{" "}
                      Aurora Walker
                      <span className="dtr-meta-date">15. 08. 2021</span>
                    </div>
                    <p className="dtr-post-excerpt">
                      There are many variations of passages of lorem ipsum
                      available but the majority have suffered alteration in
                      some form by…
                    </p>
                    <a className="dtr-read-more" href="#">
                      <span className="dtr-read-more-content">
                        Continue Reading ...
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* column 1 ends */}
              {/* column 2 starts */}
              <div className="col-12 col-md-4">
                <div className="dtr-post-item">
                  <div className="dtr-post-img">
                    {" "}
                    <img src="./assets/images/post-img2.jpg" alt="image" />{" "}
                  </div>
                  <div className="dtr-post-content">
                    {" "}
                    <span className="dtr-meta-category">
                      <a href="#">Application</a>
                    </span>
                    <h5 className="dtr-post-title">
                      <a href="#" rel="bookmark">
                        The Benefits of XaaS Cloud Solutions
                      </a>
                    </h5>
                    <div className="dtr-meta color-dark-gray">
                      {" "}
                      <span className="dtr-meta-author-avatar">
                        <img src="./assets/images/user-2-80x80.jpg" alt="image" />
                      </span>{" "}
                      Noah Wilson
                      <span className="dtr-meta-date">20. 07. 2021</span>
                    </div>
                    <p className="dtr-post-excerpt">
                      There are many variations of passages of lorem ipsum
                      available but the majority have suffered alteration in
                      some form by…
                    </p>
                    <a className="dtr-read-more" href="#">
                      <span className="dtr-read-more-content">
                        Continue Reading ...
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* column 2 ends */}
              {/* column 3 starts */}
              <div className="col-12 col-md-4">
                <div className="dtr-post-item">
                  <div className="dtr-post-img">
                    {" "}
                    <img src="./assets/images/post-img3.jpg" alt="image" />{" "}
                  </div>
                  <div className="dtr-post-content">
                    {" "}
                    <span className="dtr-meta-category">
                      <a href="#">DevOps</a>
                    </span>
                    <h5 className="dtr-post-title">
                      <a href="#" rel="bookmark">
                        Why SaaS application usage exploding!
                      </a>
                    </h5>
                    <div className="dtr-meta color-dark-gray">
                      {" "}
                      <span className="dtr-meta-author-avatar">
                        <img src="./assets/images/user-1-80x80.jpg" alt="image" />
                      </span>{" "}
                      Aurora Walker
                      <span className="dtr-meta-date">22. 06. 2021</span>
                    </div>
                    <p className="dtr-post-excerpt">
                      There are many variations of passages of lorem ipsum
                      available but the majority have suffered alteration in
                      some form by…
                    </p>
                    <a className="dtr-read-more" href="#">
                      <span className="dtr-read-more-content">
                        Continue Reading ...
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* column 3 ends */}
            </div>
            {/*== row ends ==*/}
          </div>
        </section>
        {/* blog section ends
================================================== */}
        {/* contact section starts
================================================== */}
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
        {/* contact section ends
================================================== */}
      </div>
      {/* == main content area ends == */}
      {/* footer section starts
================================================== */}
      <footer id="dtr-footer">
        {/*== main footer row starts ==*/}
        <div className="dtr-main-footer">
          <div className="container">
            <div className="row">
              {/*== column 1 starts ==*/}
              <div className="col-12 col-md-6 col-lg-5">
                <a className="dtr-scroll-link" href="#home">
                  <img src="./assets/images/logo-light.png" alt="logo" />
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
      {/* footer section ends
================================================== */}
      {/* take top arrow */}
      <a id="take-to-top" href="#" className="dtr-fade-scroll " />
    </div>
  );
}

export default Homepage;
