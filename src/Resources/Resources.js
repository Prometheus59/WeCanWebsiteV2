import React from 'react'
import GovLink from './GovLinks'
import Dresources from './Dresources'
import FAQ from './FAQ';

export default class Resources extends React.Component {
  render () {
    return (
      <div>
        <GovLink />
        <Dresources />
        <FAQ />
      </div>
    )
  }
}
