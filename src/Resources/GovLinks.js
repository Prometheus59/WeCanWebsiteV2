import React from 'react'
import HideTemplate from './HideTemplate'

export default class GovLink extends React.Component {
  render () {
    return (
      <HideTemplate title='Government Links'>
        <ul>
          <li>First Gov. Link</li>
          <li>Gov link 2</li>
          <li>Another Link</li>
          <li>Gov Link 4</li>
        </ul>
      </HideTemplate>
    )
  }
}
