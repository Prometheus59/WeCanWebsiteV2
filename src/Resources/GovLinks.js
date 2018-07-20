import React from 'react'
import HideTemplate from './HideTemplate'
import PaperLink from '../Common/PaperLink';

export default class GovLink extends React.Component {
  render() {
    return (
      <HideTemplate title='Insurance Bureau of Canada Links' id='gov'>
        {/*Children prop is used to pass following elements directly into their output
      see https://reactjs.org/docs/composition-vs-inheritance.html#containment 
      for more info*/}
        <PaperLink
          title='Auto Insurance'
          message="Visit the Insurance Bureau of Canada's website to understand what's included 
          in a standard automobile insurance policy. Learn what to do after an auto accident,
           recent changes in auto insurance, and other optional benefits."
          link='http://www.ibc.ca/on/auto'
        />
        <PaperLink
          title='Home Insurance'
          message='Learn what home insurance policies cover, how to buy home insurance,
          different types of coverage, buying tips and more. Click the link below to get started.'
          link='http://www.ibc.ca/on/home'
        />
        <PaperLink
          title='Insurance 101'
          message='Learn the basics of insurance to protect yourself and your property
          when buying a home, driving a car or starting a business.'
          link='http://www.ibc.ca/on/insurance-101'
        />
      </HideTemplate>
    )
  }
}
