import React from 'react'
import './css/Contact.css'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      selectedOption: '',
      message: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRadio = this.handleRadio.bind(this)
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleRadio (event) {
    this.setState({
      selectedOption: event.target.value
    })
  }

  handleSubmit (event) {
    alert(
      'Name: ' +
        this.state.name +
        '\n' +
        'Email: ' +
        this.state.email +
        '\n' +
        'Selection: ' +
        this.state.selectedOption +
        '\n' +
        'Message: ' +
        this.state.message
    )
    // TODO: Replace above alert with an actual email submission here
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name='name'
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <br /><br />
        <label>
          Email:
          <input
            name='email'
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <br /><br />
        <label>
          Insurance Type:
          <br />
          <input
            type='radio'
            value='option1'
            checked={this.state.selectedOption === 'option1'}
            onChange={this.handleRadio}
          />
          Auto
        </label>
        <label>
          <input
            type='radio'
            value='option2'
            checked={this.state.selectedOption === 'option2'}
            onChange={this.handleRadio}
          />
          Home
        </label>
        <label>
          <input
            type='radio'
            value='option3'
            checked={this.state.selectedOption === 'option3'}
            onChange={this.handleRadio}
          />
          Other
        </label>
        <br /><br />
        <label>
          Message:
          <br />
          <textarea
            name='message'
            value={this.state.message}
            onChange={this.handleChange}
          />
        </label>
        <br /><br />
        <input type='submit' value='Submit' />
      </form>
    )
  }
}
