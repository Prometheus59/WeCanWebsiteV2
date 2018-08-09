import React from "react";
import Slider from "react-slick";
import "../Resources/Resource.css";
import PaperLink from "../Common/PaperLink";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../node_modules/slick-carousel/slick/slick.css";

class MobileFAQs extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      arrows: false,
      slidesToShow: 1,
      className: "MobileResourceCarousel",
      centerMode: true,
      centerPadding: "20px"
    };
    return (
      <Slider {...settings}>
        <div class="MobileResourceCarouselSlides">
          <PaperLink
            title="Link 1"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius consequuntur adipisci aliquam, quae error exercitationem sunt illo explicabo voluptates!"
            link="http://google.ca"
          />
        </div>
        <div class="MobileResourceCarouselSlides">
          <PaperLink
            title="Link 2"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius consequuntur adipisci aliquam, quae error exercitationem sunt illo explicabo voluptates!"
            link="http://google.ca"
          />
        </div>
        <div class="MobileResourceCarouselSlides">
          <PaperLink
            title="Link 2"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius consequuntur adipisci aliquam, quae error exercitationem sunt illo explicabo voluptates!"
            link="http://google.ca"
          />
        </div>
      </Slider>
    );
  }
}

export default MobileFAQs;
