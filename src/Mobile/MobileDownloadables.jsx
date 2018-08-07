import React from "react";
import Slider from "react-slick";
import "../Resources/Resource.css";
import PaperLink from "../Common/PaperLink";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../node_modules/slick-carousel/slick/slick.css";

class Downloadables extends React.Component {
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
            title="Auto Insurance Explained"
            message="Understanding your auto insurance policy is extremely important.
               Click the link below to download Insurnace Bureau of Canada's brochure for more information."
            link="http://assets.ibc.ca/Documents/Brochures/ON-Auto-Ins-Explained.pdf"
          />
        </div>
        <div class="MobileResourceCarouselSlides">
          <PaperLink
            title="Car Insurance Q&A"
            message="Learn useful information including how to lower your auto insurance premium, what a deductible is,
              and who is covered by your auto insurance policy."
            link="http://assets.ibc.ca/Documents/Brochures/Car-Insurance-Q-and-A.pdf"
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

export default Downloadables;
