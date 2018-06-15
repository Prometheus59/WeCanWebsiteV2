import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

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
      name: 'Ryan',
      message: 'Controlled',
      insuranceType: 'Auto'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

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
          placeholder='example@gmail.com'
          className={classes.textField}
          margin='normal'
          value={this.state.value}
          onChange={this.handleChange('email')}
        />
        <br />

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

        <TextField
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

        <input type='submit' value='Submit' />

      </form>
    )
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TextFields)
