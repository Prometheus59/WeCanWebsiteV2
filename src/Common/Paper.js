import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  alignLeft: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    width: '20%',
    marginLeft: '15%',
  }),
  alignRight: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    width: '20%',
    marginLeft: 'auto',
    marginRight: '15%'
  })
})

function PaperSheet (props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.alignLeft} elevation={4}>
        <Typography align='alignLeft' variant='headline' component='h3'>
          {props.title}
        </Typography>
        <Typography align='alignLeft' component='p'>
          {props.message}
        </Typography>
      </Paper>
    </div>
  )
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PaperSheet)
