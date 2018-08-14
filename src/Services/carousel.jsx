import React from "react";
import Slider from "react-slick";
import "./Services.css";

import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../node_modules/slick-carousel/slick/slick.css";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplaySpeed: 10000,
      arrows: true,
      autoplay: true,
      className: "carouselSlides",
      centerMode: true,
      centerPadding: "20px",
      fade: true,
      pauseOnHover: true
    };
    return (
      <Slider {...settings}>
        <div>
          <h2>Auto Insurance</h2>
          <h4>
            Vehicle insurance in Ontario is not just a preventative measure,
            it's a<strong> requirement</strong>. If you are caught driving
            without valid vehicle insurance, you may face fines from $5,000 -
            $50,000 and risk having your driver's license suspended and vehicle
            impounded.
          </h4>
        </div>
        <div>
          <h2>Home Insurance</h2>
          <h4>
            A house is often the largest financial investment someone will make
            in their entire life, so it makes sense to protect that investment
            from potential disasters. Water damage, theft, fire, crashes from
            aircraft or automobiles, and explosions are just a few possible
            reasons to consider purchasing house insurance.
          </h4>
        </div>
        <div>
          <h2>Commercial Insurance</h2>
          <h4>
            Building a business means investing money, time, energy and
            countless resources. Without commercial insurance, all those
            investments could dissapear overnight for any number of reasons.
            Property damage, lawsuits and business fraud are just a few reasons
            why businesses need commercial insurance.
          </h4>
        </div>
        <div>
          <h2>Travel Insurance</h2>
          <h4>
            Whether you're traveling to another country for a business meeting
            or taking some time off to vaction, you'll want to protect yourself
            against unforeseen circumstances that could occur before or during
            your time abroad.
          </h4>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
