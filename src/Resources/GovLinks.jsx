import React from "react";
import Slider from "react-slick";
import "./Resource.css";
import PaperLink from "../Common/PaperLink";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../node_modules/slick-carousel/slick/slick.css";

class GovLinks extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      arrows: true,
      slidesToShow: 3,
      className: "resourceCarousel",
      centerMode: false,
      centerPadding: "20px"
    };
    return (
      <Slider {...settings}>
        <div className="resourceCarouselSlides">
          <PaperLink
            title="Auto Insurance"
            message="Visit the Insurance Bureau of Canada's website to understand what's included 
            in a standard automobile insurance policy. Learn what to do after an auto accident,
            recent changes in auto insurance, and other optional benefits."
            link="http://www.ibc.ca/on/auto"
          />
        </div>
        <div className="resourceCarouselSlides">
          <PaperLink
            title="Home Insurance"
            message="Learn what home insurance policies cover, how to buy home insurance,
            different types of coverage, buying tips and more. Click the link below to get started."
            link="http://www.ibc.ca/on/home"
          />
        </div>
        <div className="resourceCarouselSlides">
          <PaperLink
            title="Business Insurance"
            message="Learn how to insure your business to protect it from potentially
             major threats. Click the link below to gain a deeper understanding of risk
             management, deductibles, and policy limitations."
            link="http://www.ibc.ca/nb/business/business-insurance-coverage"
          />
        </div>
        <div className="resourceCarouselSlides">
          <PaperLink
            title="Insurance 101"
            message="Learn the basics of insurance to protect yourself and your property
            when buying a home, driving a car or starting a business."
            link="http://www.ibc.ca/on/insurance-101"
          />
        </div>
      </Slider>
    );
  }
}

export default GovLinks;
