import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginTop: 0
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
})

function SendButton (params) {
  const { classes } = params;

  return (
    <Button variant='contained' type='submit' value='submit' color='primary' className={classes.button}>
      Send
    </Button>
  )
}

SendButton.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SendButton)
