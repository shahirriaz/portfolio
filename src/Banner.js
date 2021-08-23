import React from "react";
import "./Banner.css";
import avatar from "./images/avatar.png";
// import bottom from "./images/bottom.png";
import heroImage from "./images/hero.svg";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__container">
        <div className="banner__text">
          <div className="banner__heading">
            <h1>Designer, Front-end Developer</h1>
          </div>
          <div className="banner__intro">
            <h2>
              I design and code beautiful simple things, and I love what i do
            </h2>
          </div>
        </div>

        <div className="banner__avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="banner__bottom">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
