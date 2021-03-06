import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import aviva from "../images/partners/aviva.png";
import chubb from "../images/partners/chubb.png";
import coachman from "../images/partners/coachman.png";
import economical from "../images/partners/economical.png";
import economicalSelect from "../images/partners/economicalSelect.png";
import gore from "../images/partners/gore.png";
import intact from "../images/partners/intact.png";
import optimum from "../images/partners/optimum.png";
import perth from "../images/partners/perth.png";
import rsa from "../images/partners/RSA.png";
import travelers from "../images/partners/travelers.png";

export default class MobilePartnersCarousel extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      draggable: false,
      speed: 2000,
      touchMove: false,
      swipe: false,
      slidesToShow: 3,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 0,
      pauseOnHover: false,
      cssEase: "linear",
      className: "slides"
    };
    return (
      <div id="mpartners">
        <Slider {...settings}>
          <div>
            <img src={aviva} alt="aviva" />
          </div>
          <div>
            <img src={chubb} alt="chubb" />
          </div>
          <div>
            <img src={coachman} alt="coachman" />
          </div>
          <div>
            <img src={economical} alt="economical" />
          </div>
          <div>
            <img src={economicalSelect} alt="economicalSelect" />
          </div>
          <div>
            <img src={gore} alt="gore" />
          </div>
          <div>
            <img src={intact} alt="intact" />
          </div>
          <div>
            <img src={optimum} alt="optimum" />
          </div>
          <div>
            <img src={perth} alt="perth" />
          </div>
          <div>
            <img src={travelers} alt="travelers" />
          </div>
          <div>
            <img src={rsa} alt="rsa" />
          </div>
        </Slider>
        <div id="mviewPartners">
          <Link to="/partners">See all 31 of our partners</Link>
        </div>
      </div>
    );
  }
}
