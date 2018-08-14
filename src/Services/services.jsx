import React from "react";
import SimpleSlider from "./carousel";
import "./Services.css";
import MobileSimpleSlider from "../Mobile/MobileCarousel";
import ServiceTemplate from "./ServiceTemplate";

export default class Services extends React.Component {
  render() {
    const autoList = [
      "Cars",
      "Motorcycles",
      "ATVs",
      "Snow Mobiles",
      "Motorhomes",
      "Antique / Collector Vehicles"
    ];
    const homeList = [
      "Houses",
      "Condominiums",
      "Townhouses",
      "Cottages",
      "Recreational Properties",
      "Rented Properties"
    ];
    const travelList = [
      "Sickness when abroad",
      "Injuries sustained abroad",
      "Lost/Delayed/Stolen baggage",
      "If travel insurance is a requirement in the country",
      "Emergency cancellations"
    ];
    return (
      // Make this a carousel selector
      <div>
        <div id="ellip">
          <SimpleSlider />
          <MobileSimpleSlider />
        </div>
        <div className="detailedInsurance">
          <div id="auto">
            <ServiceTemplate
              title="Auto Insurance"
              message="Vehicle insurance in Ontario is not just a
                     preventative measure, it's a requirement. If you are caught driving without valid vehicle insurance,
                    you may face fines from $5,000 - $50,000 and risk having your driver's license 
                    suspended and vehicle impounded."
              message2="Here at WeCan Insurance, we compare quotes with our numerous insurance partners to offer you 
            personalized service with the best rates and coverage available for your vehicle."
              listIntro="We offer insurance for many vehicles including:"
              items={autoList}
            />
          </div>
          <div id="home">
            <ServiceTemplate
              title="Home Insurance"
              message="A house is often the largest financial investment someone will make in their entire life,
          so it makes sense to protect that investment from potential disasters. Water damage, theft,
          fire, crashes from aircraft or automobiles, and explosions are just a few possible reasons
          to consider purchasing house insurance."
              message2="Here at WeCan Insurance, we compare quotes with our numerous insurance partners to offer you
          personalized service with the best rates and coverage available for your vehicle. Rest easy
          knowing that all your valuable personal items & assests are insured."
              listIntro="WeCan Insurance offers home insurance for many property types including:"
              items={homeList}
            />
          </div>
          <div id="commercial">
            <ServiceTemplate
              title="Commercial Insurance"
              message="Building a business means investing money, time, energy and countless resources. Without 
            commercial insurance, all those investments could dissapear overnight for any number of reasons.
            Property damage, lawsuits and business fraud are just a few reasons why businesses need
            commercial insurance."
              message2="Here at WeCan Insurance, we compare quotes with our numerous insurance partners to ensure all
            parts of your business are properly protected for the lowest rates."
              items={[]}
            />
          </div>
          <div id="trave">
            <ServiceTemplate
              title="Travel Insurance"
              message="Whether you're traveling to another country for a business meeting or taking some
            time off to vaction, you'll want to protect yourself against unforeseen circumstances
            that could occur before or during your time abroad."
              message2="Here at WeCan Insurance, we compare quotes with our numerous insurance partners to offer you
            personalized service with the best rates and coverage available. Rest easy
            knowing that you're protected from the above risks of travelling."
              listIntro="Some reasons why you may want to secure travel insurance include:"
              items={travelList}
            />
          </div>
        </div>
      </div>
    );
  }
}
