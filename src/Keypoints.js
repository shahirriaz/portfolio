import React from "react";
import "./Keypoints.css";
import designer from "./images/designer.png";
import frontend from "./images/frontend.png";
import mentor from "./images/mentor.png";

function KeyPointsSection() {
  return (
    <div className="keyPointsSection">
      <div className="mainContainerKey">
        <div className="keyPointsSection__section--1">
          <div className="keyPointsSection__section--1__icon">
            <img style={{ objectFit: "contain" }} src={designer} />
          </div>
          <div className="keyPointsSection__section--1__heading">
            <h2 className="keyInformationHeading">Designer</h2>
          </div>
          <div className="keyPointsSection__section--1__text1">
            <p className="keyParagraph">
              I value simple content structure, clean <br /> design patterns,
              and thoughtful <br /> interactions
            </p>
          </div>
        </div>
        <div className="keyPointsSection__section--2">
          <div className="keyPointsSection__section--2__heading">
            <h3 className="keyInformationHeading purple">
              Things I enjoy designing:
            </h3>
          </div>
          <div className="keyPointsSection__section--2__text1">
            <p className="keyParagraph">UX, UI, Web, Mobile, Apps, Logos</p>
          </div>
        </div>

        <div className="keyPointsSection__section--3">
          <div className="keyPointsSection__section--3__heading">
            {/* <VisibilitySensor offset={{ bottom: 0 }}>
              {({ isVisible }) => (
                <div className="countUp--container" style={{ height: 80 }}>
                  {isVisible ? <CountUp duration={0.8} end={6} /> : null}
                </div>
              )}
            </VisibilitySensor> */}
            <p>års erfaring</p>
          </div>
        </div>
      </div>

      <div className="mainContainerKey">
        <div className="keyPointsSection__section--1">
          <div className="keyPointsSection__section--1__icon">
            <img style={{ objectFit: "contain" }} src={frontend} />
          </div>
          <div className="keyPointsSection__section--1__heading">
            <h2 className="keyInformationHeading">Front-end Developer</h2>
          </div>
          <div className="keyPointsSection__section--1__text1">
            <p className="keyParagraph">
              I like to code things from scratch, and <br /> enjoy bringing
              ideas to life in <br /> the browser.
            </p>
          </div>
        </div>
        <div className="keyPointsSection__section--2">
          <div className="keyPointsSection__section--2__heading">
            <h3 className="keyInformationHeading purple">Languages I speak:</h3>
          </div>
          <div className="keyPointsSection__section--2__text1">
            <p className="keyParagraph">HTML, Pug, Slim, CSS, Sass, Less</p>
          </div>
        </div>

        <div className="keyPointsSection__section--3">
          <div className="keyPointsSection__section--3__heading">
            {/* <VisibilitySensor offset={{ bottom: 0 }}>
              {({ isVisible }) => (
                <div className="countUp--container" style={{ height: 80 }}>
                  {isVisible ? <CountUp duration={2} end={60} /> : null}
                </div>
              )}
            </VisibilitySensor> */}
            <p>fornøyde kunder</p>
          </div>
        </div>
      </div>
      <div className="mainContainerKey">
        <div className="keyPointsSection__section--1">
          <div className="keyPointsSection__section--1__icon">
            <img style={{ objectFit: "contain" }} src={mentor} />
          </div>
          <div className="keyPointsSection__section--1__heading">
            <h2 className="keyInformationHeading">Mentor</h2>
          </div>
          <div className="keyPointsSection__section--1__text1">
            <p className="keyParagraph">
              I genuinely care about people, and love <br /> helping fellow
              designers work on their <br /> craft.
            </p>
          </div>
        </div>
        <div className="keyPointsSection__section--2">
          {/* <div className="keyPointsSection__section--2__icon">
            <img
              style={{ objectFit: "contain" }}
              src="https://img.icons8.com/color/48/000000/family.png"
            />
          </div> */}
          <div className="keyPointsSection__section--2__heading">
            <h3 className="keyInformationHeading purple">
              Experiences I draw from:
            </h3>
          </div>
          <div className="keyPointsSection__section--2__text1">
            <p className="keyParagraph">UX/UI, Product design, Freelancing</p>
          </div>
        </div>

        <div className="keyPointsSection__section--3">
          {/* <div className="keyPointsSection__section--3__icon">
            <CameraAltIcon className="svg-icon" />
          </div> */}
          <div className="keyPointsSection__section--3__heading">
            {/* <VisibilitySensor offset={{ bottom: 0 }}>
              {({ isVisible }) => (
                <div className="countUp--container" style={{ height: 80 }}>
                  {isVisible ? <CountUp duration={0.8} end={456} /> : null}
                </div>
              )}
            </VisibilitySensor> */}
            <p>redigerte bilder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyPointsSection;
