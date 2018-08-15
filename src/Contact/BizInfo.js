import React from "react";

export default class BizInfo extends React.Component {
  render() {
    var x = "We";
    var y = "Can";
    var z = "Temp";
    var at = "@";
    var a = "sound";
    var b = "insurance";
    var c = ".ca";
    return (
      <div className="contact-info">
        <div id="address">
          <a href={"tel:6479494241"}>Call/Text: (647) 949 - 4241</a>
          <br />
          <a href={"mailto:" + x + y + z + at + a + b + c}>
            {x + y + z + at + a + b + c}
          </a>
          <br /> Fax: (416) 756 - 1635
          <br />
        </div>
        <div id="hours">
          Hours of Operation
          <br /> Monday-Friday
          <br /> 8:30am - 4:30pm
        </div>
      </div>
    );
  }
}
