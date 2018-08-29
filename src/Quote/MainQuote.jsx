import React from "react";

export default class Quote extends React.Component {
  render() {
    return (
      <div className="quoteOptions">
        <ul>
          <li>
            <a href="/quote/auto">Auto Quote</a>
          </li>
          <li>
            <a href="/quote/home">Home Quote</a>
          </li>
          <li>
            <a href="/quote/rental">Rental House Quote</a>
          </li>
          <li>
            <a href="/quote/vacant">Vacant Property Quote</a>
          </li>
          <li>
            <a href="/quote/boat">Boat Quote</a>
          </li>
          <li>
            <a href="/quote/cottage">Cottage Quote</a>
          </li>
        </ul>
      </div>
    );
  }
}
