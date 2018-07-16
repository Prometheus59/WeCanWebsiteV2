import React from 'react';
import HideTemplate from './HideTemplate';
import PaperLink from '../Common/PaperLink';

export default class Dresources extends React.Component {
  render() {
    return (
      <HideTemplate title='Downloadable Resources'>
        <PaperLink
          title='IBC Auto Insurance Explained'
          message="Understanding your auto insurance policy is extremely important.
           Click the link below to download Insurnace Bureau of Canada's brochure for more information."
          link='http://assets.ibc.ca/Documents/Brochures/ON-Auto-Ins-Explained.pdf'
        />
        <PaperLink
          title='Car Insurance Q&A'
          message="Learn useful information including how to lower your auto insurance premium, what a deductible is,
          and who is covered by your auto insurance policy."
          link='http://assets.ibc.ca/Documents/Brochures/Car-Insurance-Q-and-A.pdf'
        />
        <PaperLink
          title='Link 2'
          message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius consequuntur adipisci aliquam, quae error exercitationem sunt illo explicabo voluptates!'
          link='http://google.ca'
        />
      </HideTemplate>
    )
  }
}
