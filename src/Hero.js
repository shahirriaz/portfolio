import React from "react";
import "./Hero.css";
import Keypoints from "./Keypoints";
function Hero() {
  return (
    <main>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__text">
            <div className="hero__subHeading">
              <h1>Hei, Jeg er Shahir. Hyggelig å treffe deg.</h1>
            </div>
            <div className="hero__description">
              <p>
                Since beginning my journey as a freelance designer nearly 10
                years ago, I've done remote work for agencies, consulted for
                startups, and collaborated with talented people to create
                digital products for both business and consumer use. I'm quietly
                confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time.
              </p>
            </div>
          </div>
          <div className="hero__key">
            <Keypoints />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
