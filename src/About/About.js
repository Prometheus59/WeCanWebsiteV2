import React from "react";
import pagesrc from "../images/MainPage.jpg";
import "../css/About.css";
import "./Cards";
import SimpleMediaCards from "./Cards";
import ParallaxEffect from "./Parallax";
import PartnersCarousel from "./PartnersCarousel";
import MobilePartnersCarousel from "../Mobile/MobilePartnersCarousel";
import PaperSheets from "./PaperSheets";

function Page() {
  return <img src={pagesrc} alt="mainImage" />;
}

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div id="aboutUs">
          <Page />
          <div className="centered">
            <PaperSheets />
          </div>
        </div>
        <PartnersCarousel />
        <MobilePartnersCarousel />
        <SimpleMediaCards />
        <ParallaxEffect />
      </div>
    );
  }
}
