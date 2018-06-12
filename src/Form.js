import React from 'react'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit (event) {
    alert('Data submitted - Name is :'+ this.state.name + ' and email is: ' + this.state.email)
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
        <input type='submit' value='Submit' />
      </form>
    )
  }
}
