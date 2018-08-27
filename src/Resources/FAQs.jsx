import React from "react";
import Slider from "react-slick";
import "./Resource.css";
import PaperLink from "../Common/PaperLink";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../node_modules/slick-carousel/slick/slick.css";

class FAQs extends React.Component {
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
            title="Glossary of terms"
            message="The definitions appearing in this Glossary are provided solely for general
             informational purposes. They are not intended to be complete descriptions of all terms,
              conditions and exclusions applicable to the products and services defined."
            link="http://www.soundinsurance.ca/Tools-Resources/Glossary-Of-Terms"
          />
        </div>
        <div className="resourceCarouselSlides">
          <PaperLink
            title="Insurance Tips"
            message="Please click on the links below to view some handy insurance tips we 
            have assembled. As always, our staff will be happy to provide you with all of the 
            information you need about the coverage we provide."
            link="http://google.ca"
          />
        </div>
        <div className="resourceCarouselSlides">
          <PaperLink
            title="Claims"
            message="Emergency Toll Free Numbers for our insurance partners"
            link="http://www.soundinsurance.ca/Tools-Resources/Claims"
          />
        </div>
        <div className="resourceCarouselSlides">
          <PaperLink
            title="Sound Insurance Web Links"
            message="Click the link below to find insurance resources links, insurance 
            association links, publications, safety links, financial links and more."
            link="http://www.soundinsurance.ca/Tools-Resources/Web-Links"
          />
        </div>
      </Slider>
    );
  }
}

export default FAQs;
