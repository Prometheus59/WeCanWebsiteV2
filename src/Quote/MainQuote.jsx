import React from "react";
import QuoteTitle from "./QuoteTitle";

export default class Quote extends React.Component {
  render() {
    return (
      <div id='quoteContainer'>
        <div id="instructions">
          <h3>
            Please select one of the insurance options below and answer the
            provided questions so that we may send you a quote.
          </h3>
        </div>
        <div className="quoteOptions">
          <QuoteTitle link="/quote/auto" title="Auto Quote" />
          <QuoteTitle link="/quote/home" title="Home Quote" />
          <QuoteTitle link="/quote/rental" title="Rental House Quote" />
          <QuoteTitle link="/quote/vacant" title="Vacant Property Quote" />
          <QuoteTitle link="/quote/boat" title="Boat Quote" />
          <QuoteTitle link="/quote/cottage" title="Cottage Quote" />
        </div>
      </div>
    );
  }
}
