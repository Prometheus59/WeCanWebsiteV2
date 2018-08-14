import React from "react";
import PaperSheet from "../Common/Paper";

function PaperSheets(props) {
  return (
    <div className="paper">
      <PaperSheet
        title="What We Do"
        message="We compare rates across all our insurance partners to give you the absolute best rate possible for your insurance needs."
      />
      <PaperSheet
        title="Our Goal"
        message="We aim to provide peace of mind knowing that should an insurable incident occur, your possessions and property will be restored to their full value."
      />
      <PaperSheet
        title="We Can Help"
        message="We offer a personalized touch with all of our brokerage services, so don't hesitate to reach out to us."
      />
    </div>
  );
}

export default PaperSheets;
