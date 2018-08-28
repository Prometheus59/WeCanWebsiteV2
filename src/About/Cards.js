import React from "react";
import SimpleMediaCard from "../Common/Card";
import car from "../images/car.jpg";
import house from "../images/house.jpg";
import comm from "../images/comm.jpg";
import travel from "../images/trav.jpg";

function SimpleMediaCards(props) {
  return (
    <div className="card">
      <SimpleMediaCard
        title="Auto Coverage"
        message="With so many variables going into an auto insurance quote (including driving record, claims history and vehicle information), you'll need to contact one of our knowledgeable brokers to obtain a quote."
        image={car}
        link="/services#auto"
      />
      <SimpleMediaCard
        title="Home Coverage"
        message="Home insurance premium is dependant on many factors including replacement cost, renovations, past claims and more. Therefore it is neccessary to speak with our brokers to determine a quote."
        image={house}
        link="/services#home"
      />
      <SimpleMediaCard
        title="Commercial Coverage"
        message="It’s absolutely necessary to ensure your coverage is tailored to meet your unique business requirements wherein a customized policy may need to be assembled by one of our professional brokers."
        image={comm}
        link="/services#commercial"
      />
      <SimpleMediaCard
        title="Travel Coverage"
        message="When determining travel insurance, many factors influence the insurance premium, such as the length of the trip and the destination's location. For this reason, it is neccessary to speak with our brokers to determine a quote."
        image={travel}
        link="/services#travel"
      />
    </div>
  );
}

export default SimpleMediaCards;
