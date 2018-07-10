import React from 'react';
import HideTemplate from './HideTemplate';
import PaperLink from '../Common/PaperLink';

export default class Dresources extends React.Component {
  render() {
    return (
      <HideTemplate title='Downloadable Resources'>
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
