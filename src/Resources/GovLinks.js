import React from 'react'
import HideTemplate from './HideTemplate'
import PaperLink from '../Common/PaperLink';

export default class GovLink extends React.Component {
  render() {
    return (
      <HideTemplate title='Government Links'>
        {/*Children prop is used to pass following elements directly into their output
      see https://reactjs.org/docs/composition-vs-inheritance.html#containment 
      for more info*/}
        <PaperLink
          title='Understanding Automobile Insurance'
          message="Understand what's included in a standard automobile insurance policy. Learn
          how to increase your liability and accident benefits coverage as well as exclusions in
          standard auto policies."
          link='https://www.fsco.gov.on.ca/en/auto/brochures/Pages/brochure_autoins.aspx'
        />
        <PaperLink
          title='Important Changes to Auto Insurance'
          message='Auto insurance is changing - Learn what you need to do, the most
           significant changes to auto insurance, and other optional benefits. 
           Click the link for more information.'
          link='https://www.fsco.gov.on.ca/en/auto/brochures/Pages/brochure_changes10.aspx'
        />
        <PaperLink
          title='After Auto Accident'
          message='Learn what to do after an auto accident. Click the link for more information 
          about reporting the accident to your broker, getting your vehicle repaired and 
          applying for accident benefit.'
          link='https://www.fsco.gov.on.ca/en/auto/brochures/Pages/brochure_claims.aspx'
        />
      </HideTemplate>
    )
  }
}
