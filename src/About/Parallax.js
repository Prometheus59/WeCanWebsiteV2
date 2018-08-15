import React from "react";
import { Parallax } from "react-parallax";
import PaperSheets from "./PaperSheets";
import Speak from "./Speak";

export default class ParallaxEffect extends React.Component {
  render() {
    return (
      <div id="parallaxTop">
        <Parallax
          blur={2}
          bgImage={require("../images/placeholder.jpg")}
          bgImageAlt="placeholder image"
          strength={300}
          className="parallax"
        >
          <Speak
            title="Get The Coverage You Deserve Today"
            message="Please don't hesitate to reach out to us with any questions you may have. 
          Click the button below re-direct to our contact page."
          />
        </Parallax>
      </div>
    );
  }
}
