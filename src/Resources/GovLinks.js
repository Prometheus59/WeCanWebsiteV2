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
          title='Link 1'
          message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius consequuntur adipisci aliquam, quae error exercitationem sunt illo explicabo voluptates!'
          link='http://google.ca'
        />
        <PaperLink
          title='Link 2'
          message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius consequuntur adipisci aliquam, quae error exercitationem sunt illo explicabo voluptates!'
          link='http://google.ca'
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
