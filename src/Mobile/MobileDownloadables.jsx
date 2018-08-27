import React from "react";
import Slider from "react-slick";
import "../Resources/Resource.css";
import PaperLink from "../Common/PaperLink";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../node_modules/slick-carousel/slick/slick.css";

class MobileDownloadables extends React.Component {
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
        <div className="MobileResourceCarouselSlides">
          <PaperLink
            title="Home Maintenance Checklist"
            message="Spending time now to maintain your home can save lots of money and frustrations
            in the future. Click the link below to download a home maintenance schedule to keep a
            record of completed home maintenance tasks."
            link="http://google.ca"
          />
        </div>
        <div className="MobileResourceCarouselSlides">
          <PaperLink
            title="Auto Insurance Explained"
            message="Understanding your auto insurance policy is extremely important.
               Click the link below to download Insurnace Bureau of Canada's brochure for more information."
            link="http://assets.ibc.ca/Documents/Brochures/ON-Auto-Ins-Explained.pdf"
          />
        </div>
        <div className="MobileResourceCarouselSlides">
          <PaperLink
            title="Car Insurance Q&A"
            message="Learn useful information including how to lower your auto insurance premium, what a deductible is,
              and who is covered by your auto insurance policy."
            link="http://assets.ibc.ca/Documents/Brochures/Car-Insurance-Q-and-A.pdf"
          />
        </div>
        <div className="MobileResourceCarouselSlides">
          <PaperLink
            title="Home Inventory Form"
            message="In the event of a burglary, fire, or some other unfortunate event, an inventory 
            of possessions and their value will be very helpful to your insurer and the police. Download
             the form below to get started tracking your possessions."
            link="http://www.soundinsurance.ca/Common/insurance-forms/household_inventory.pdf"
          />
        </div>
        <div className="MobileResourceCarouselSlides">
          <PaperLink
            title="Brochures"
            message="Download PDFs with more detailed information about home, business and auto insurance."
            link="http://www.ibc.ca/nb/resources/consumer-resources/brochures"
          />
        </div>
      </Slider>
    );
  }
}

export default MobileDownloadables;
