import React from "react";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/color.css";
import "../assets/css/plugins.css"
import SmHeader from "./smHeader";
import Header from "./header";
import HeroSection from "./heroSection";
import Section from "./section";
import Service from "./service";
import Section2 from "./section2";
import Process from "./process";
import Tab from "./tab";
import Slider from "./slider";
import Section3 from "./section3";
import Pricing from "./pricing";
import Faq from "./faq";
import Contact from "./contact";
import Footer from "./footer";

function Homepage() {
  return (
    <div id="dtr-wrapper" className="clearfix">
      {/* Small Devices Header
============================================= */}
      <SmHeader />
      {/* Small Devices Header ends
============================================= */}
      {/* header starts
============================================= */}
      <Header />
      {/* header ends
================================================== */}
      {/* == main content area starts == */}
      <div id="dtr-main-content">
        {/* hero section starts
================================================== */}
        <HeroSection />
        {/* hero section ends
================================================== */}
        {/* section starts
================================================== */}
        <Section />
        {/* section ends
================================================== */}
        {/* services section starts
================================================== */}
        <Service />
        {/* services section ends
================================================== */}
        {/* section starts
================================================== */}
        <Section2 />
        {/* section ends
================================================== */}
        {/* process section starts
================================================== */}
        <Process />
        {/* process section ends
================================================== */}
        {/* tab section starts
================================================== */}
        <Tab />
        {/* tab section ends
================================================== */}
        {/* testimonial section starts
================================================== */}
        <Slider />
        {/* testimonial section ends
================================================== */}
        {/* section starts
================================================== */}
        <Section3 />
        {/* section ends
================================================== */}
        {/* pricing section starts
================================================== */}
        <Pricing />
        {/* pricing section ends
================================================== */}
        {/* accordion section starts
================================================== */}
        <Faq />
        {/* accordion section ends
================================================== */}
        {/* contact section starts
================================================== */}
        <Contact />
        {/* contact section ends
================================================== */}
      </div>
      {/* == main content area ends == */}
      {/* footer section starts
================================================== */}
      <Footer />
      {/* footer section ends
================================================== */}
      {/* take top arrow */}
      <a id="take-to-top" href="#" className="dtr-fade-scroll " />
    </div>
  );
}

export default Homepage;
