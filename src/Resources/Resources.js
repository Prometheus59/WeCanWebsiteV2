import React from 'react';
import './Resource.css';
import HideTemplate from './HideTemplate';
import GovLinks from './GovLinks';
import Downloadables from './Downloadables';
import FAQs from './FAQs';

export default class Resources extends React.Component {
  render() {
    return (
      <div>
        {/*Children prop is used to pass following elements directly into their output
      see https://reactjs.org/docs/composition-vs-inheritance.html#containment 
      for more info*/}
        <HideTemplate title="Insurance Bureau of Canada Links" id="gov">
          <GovLinks />
        </HideTemplate>
        <HideTemplate title="Downloadable Resources">
          <Downloadables />
        </HideTemplate>
        <HideTemplate title="FAQs">
          <FAQs />
        </HideTemplate>
      </div>
    );
  }
}
