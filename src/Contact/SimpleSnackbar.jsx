import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

class SimpleSnackbar extends React.Component {

  state = {
    open: false,
  };

  handleClick = (event) => {
    this.setState({ open: true });
    event.preventDefault();
    window.setTimeout(function () {
      document.getElementById('emailLink').click();
      document.location.reload();
    }, 3000);
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };



  render() {
    const { classes } = this.props;

    // Javascript Concatenation to reduce spam mail
    var x = 'We';
    var y = 'Can';
    var z = 'Temp';
    var at = '@';
    var a = 'sound';
    var b = 'insurance';
    var c = '.ca';
    return (
      <div>
        <Button type='submit' variant='contained' value='submit' color='primary' onClick={this.handleClick}>
          Send
        </Button>

        <a id='emailLink' href={'mailto:' + x + y + z + at + a + b + c + '?cc=' + this.props.cc + '&subject=' +
          this.props.subject + '&body=' + this.props.body}>This should be hidden</a>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Please send email in your native mail client</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

SimpleSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSnackbar);