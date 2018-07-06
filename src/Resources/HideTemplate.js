import React from 'react'

export default class HideTemplate extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hidden: true }

    this.handleChange = this.handleChange.bind(this)

    this.toggleInstance = (
      <div onClick={this.handleChange}>
        <h3>{this.props.title}</h3>
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
        <div style={style}>
        {/*Children prop passes children elements directly into their output --> see GovLinks.js for more detail*/}
          {this.props.children}
        </div>
      </div>
    )
  }
}
