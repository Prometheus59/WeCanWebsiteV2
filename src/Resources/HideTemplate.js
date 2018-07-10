import React from 'react'

export default class HideTemplate extends React.Component {
  constructor (props) {
    super(props)
    this.state = { visible: false } // Change to visible

    this.handleChange = this.handleChange.bind(this)

    this.toggleInstance = (
      <div onClick={this.handleChange}>
        <h2 className='titles'>{this.props.title}</h2>
      </div>
    )
  }

  handleChange (event) {
    this.setState({ visible: !this.state.visible }) //Change this to visible too
  }

  render () {
    const style = this.state.visible ? { visibility: 'visible',
       transition: 'visibility 0.5s, opacity 0.2s linear, max-height 1s ease', opacity:1, maxHeight: '1000px' }: 
       {visibility: 'hidden', opacity: 0, transition: 'visibility 0.5s, opacity 0.5s linear, max-height 0.5s ease', maxHeight: 0}

    return (
      <div>
        {this.toggleInstance}
        <div style={style}>
        {/*Children prop passes children elements directly into their output --> see GovLinks.js for more detail*/}
          <div className='links'>{this.props.children}</div>
        </div>
      </div>
    )
  }
}
