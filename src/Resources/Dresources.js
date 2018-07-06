import React from 'react';
import HideTemplate from './HideTemplate';

export default class Dresources extends React.Component {
  render () {
    return (
      <HideTemplate title='Downloadable Resources'>
        <ul>
          <li>Resource 1</li>
          <li>Resource 2</li>
          <li>More Resources</li>
          <li>A few more bit more resources</li>
        </ul>
      </HideTemplate>
    )
  }
}
