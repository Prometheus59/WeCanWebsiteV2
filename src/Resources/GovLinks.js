import React from 'react'

export default class GovLink extends React.Component {
  constructor () {
    super()
    this.state = { hidden: false }

    this.handleChange = this.handleChange.bind(this)

    this.toggleInstance = (
      <div onClick={this.handleChange}>
        <h3>Government Links</h3>
      </div>
    )
  }

  handleChange (event) {
    this.setState({ hidden: !this.state.hidden })
  }

  render () {
    const style = this.state.hidden ? { display: 'none' } : {}

    return (
      <div>
        {this.toggleInstance}
        <div id='hidden1' style={style}>
          <ul>
            <li>Testing</li>
            <li>Test</li>
            <li>More Testing</li>
            <li>look at this, even more testing</li>
          </ul>
        </div>
      </div>
    )
  }
}
