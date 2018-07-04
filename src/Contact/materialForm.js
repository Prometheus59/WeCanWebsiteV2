import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import SendButton from './Send'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
})

const insuranceTypes = [
  {
    value: 'car',
    label: 'Auto'
  },
  {
    value: 'home',
    label: 'Home'
  },
  {
    value: 'commercial',
    label: 'Commercial'
  },
  {
    value: 'other',
    label: 'Other'
  }
]

class TextFields extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'No name provided',
      email: 'No email provided',
      message: 'No message provided',
      insuranceType: 'Auto'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /* This handler class handles all changes to state */
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
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
        this.state.insuranceType +
        '\n' +
        'Message: ' +
        this.state.message
    )
    // TODO: Add email submission here
  }

  render () {
    const { classes } = this.props
    return (
      <form
        className={classes.container}
        noValidate
        autoComplete='off'
        onSubmit={this.handleSubmit}
      >
        {/* Name and Email */}
        <div className='section1'>
          <TextField
            id='name'
            label='Name'
            placeholder='John Smith'
            className={classes.textField}
            margin='normal'
            value={this.state.value}
            onChange={this.handleChange('name')}
          />
          <TextField
            id='email'
            label='Email'
            placeholder='example@example.com'
            className={classes.textField}
            margin='normal'
            value={this.state.value}
            onChange={this.handleChange('email')}
          />
        </div>
        {/* Insurance Selector Menu */}
        <div className='section2'>
          <TextField
            id='select-insurance'
            select
            label='Insurance Type'
            className={classes.textField}
            value={this.state.insuranceType}
            onChange={this.handleChange('insuranceType')}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText='Please select your insurance type'
            margin='normal'
          >
            {insuranceTypes.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        {/* Message / text-body */}
        <div className='section3'>
          <TextField
            style={{ width: 300 }}
            id='message'
            label='Message'
            placeholder='Please write your message here'
            multiline
            value={this.state.value}
            onChange={this.handleChange('message')}
            rows='4'
            className={classes.textField}
            margin='normal'
          />
          <div
            className='g-recaptcha'
            data-sitekey='6LeLz2AUAAAAAIPJxf_BvDSQWh81XkZv4pEQmZHR'
          />
          <SendButton />

        </div>
      </form>
    )
  }
}

/* Ensure that an object is passes as props */
TextFields.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TextFields)
