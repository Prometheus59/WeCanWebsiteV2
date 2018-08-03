import React from "react";
import PaperSheet from "../Common/Paper";

function PaperSheets(props) {
  return (
    <div className="paper">
      <PaperSheet
        title="Our Goal"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius consequuntur adipisci aliquam, quae error exercitationem sunt illo explicabo voluptates!"
      />
      <PaperSheet
        title="What We Do"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius consequuntur adipisci aliquam, quae error exercitationem sunt illo explicabo voluptates!"
      />
      <PaperSheet
        title="We Can Help"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius consequuntur adipisci aliquam, quae error exercitationem sunt illo explicabo voluptates!"
      />
    </div>
  );
}

export default PaperSheets;
