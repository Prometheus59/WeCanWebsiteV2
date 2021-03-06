import React from "react";
import "./Resource.css";
import HideTemplate from "./HideTemplate";
import GovLinks from "./GovLinks";
import MobileGovLinks from "../Mobile/MobileGovLinks";
import Downloadables from "./Downloadables";
import MobileDownloadables from "../Mobile/MobileDownloadables";
import MobileFAQs from "../Mobile/MobileFAQs";
import FAQs from "./FAQs";

export default class Resources extends React.Component {
  render() {
    return (
      <div id="buttonTitles">
        {/*Children prop is used to pass following elements directly into their output
      see https://reactjs.org/docs/composition-vs-inheritance.html#containment 
      for more info*/}
        <HideTemplate title="Insurance Bureau of Canada Links" id="gov">
          <GovLinks />
          <MobileGovLinks />
        </HideTemplate>
        <HideTemplate title="Downloadable Resources">
          <Downloadables />
          <MobileDownloadables />
        </HideTemplate>
        <HideTemplate title="FAQs">
          <FAQs />
          <MobileFAQs />
        </HideTemplate>
      </div>
    );
  }
}
