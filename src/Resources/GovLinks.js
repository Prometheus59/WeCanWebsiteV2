import React from 'react'
import HideTemplate from './HideTemplate'

export default class GovLink extends React.Component {
  render () {
    return (
      <HideTemplate title='Government Links'>
      {/*Children prop is used to pass following elements directly into their output
      see https://reactjs.org/docs/composition-vs-inheritance.html#containment for more info*/}
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
