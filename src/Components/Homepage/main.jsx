import React from "react";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/color.css";
import "../assets/css/plugins.css";
import "../assets/fonts/iconfont.css";
import SmHeader from "./smHeader";
import Header from "./header";
import HeroSection from "./heroSection";
import Section from "./section";
import Service from "./service";
import Section2 from "./section2";
import Tab from "./tab";
import Pricing from "./pricing";
import Faq from "./faq";
import Contact from "./contact";
import Footer from "./footer";


function Homepage() {
  return (
    <div id="dtr-wrapper" className="clearfix">
      
      <SmHeader />

      <Header />

      <div id="dtr-main-content">
        <HeroSection />
       

        <Section />

        <Service />

        <Section2 />

        <Tab />

        {/*  <Slider /> */}

        {/*  <Section3 /> */}

        <Pricing />

        <Faq />

        <Contact />
      </div>

      <Footer />

      <a id="take-to-top" href="#" className="dtr-fade-scroll " />
    </div>
  );
}

export default Homepage;
