import React, { useEffect, useState, useCallback } from "react";
import SectionImage from "../assets/images/section-img1.png";
import img1 from "../assets/images/client-1.png";
import img2 from "../assets/images/client-2.png";
import img3 from "../assets/images/client-3.png";
import img4 from "../assets/images/client-4.png";
import img5 from "../assets/images/client-5.png";
import img6 from "../assets/images/client-1.png";
import { IoRocketSharp } from "react-icons/io5";
// import AnimatedText from "react-animated-text-content";

const names = [
  "Blazing fast technology⚡",
  "Beautiful design interface✨",
  "Cloud-focused delivery⭐",
];

const HeroSection = () => {
  const [newName, setnewName] = useState("");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1700);
    return () => clearInterval(intervalID);
  }, [shuffle]);
  return (
    <section id="home" className="dtr-section">
      <div className="dtr-section bg-white dtr-hero-section-top-padding">
        <div className="container dtr-pb-100">
          {/*== row starts ==*/}
          <div className="row">
            <div className="col-12 col-md-6">
              {/* animated hedline starts */}
              <p
                className=" dtr-animated-headline text-left slide color-dark"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  animation: "slide-out 0.6s",
                }}
              >
                {/* <AnimatedText
                  type="words" // animate words or chars
                  animation={{
                    x: "200px",
                    y: "-20px",
                    scale: 1.1,
                    ease: "ease-in-out",
                  }}
                  animationType="blocks"
                  interval={0.06}
                  duration={0.8}
                  tag="p"
                  className="animated-paragraph"
                  includeWhiteSpaces
                  threshold={0.1}
                  rootMargin="20%"
                >
                  {newName}
                </AnimatedText> */}
              </p>

              <h1
                style={{
                  fontWeight: "800",
                  lineHeight: "1.2em",
                }}
              >
                Transform the way you solve problems
              </h1>
              <p className="dtr-intro-content color-dark">
              Our AI-based problem-solving tool is designed to revolutionize the way you approach and solve problems. Try it now and transform the way you work.
              </p>

              <a
                className="dtr-btn dtr-btn-small dtr-mt-50"
                href="#"
                role="button"
              >
                {/* icon */}
                <i className=".dtr-btn i">
                  {" "}
                  <IoRocketSharp />
                </i>

                <p>
                  {" "}
                  <span className="dtr-btn-subtext">Get a demo</span>
                  <span className="dtr-btn-text">
                    Start Now - It’s Free
                  </span>{" "}
                </p>
              </a>
            </div>
            <div className="col-12 col-md-6 small-device-space">
              {" "}
              <img src={SectionImage} alt="image" />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
