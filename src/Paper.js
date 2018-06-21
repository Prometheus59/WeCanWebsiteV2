import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    width: '20%',
    marginLeft: '15%',
  })
})

function PaperSheet (props) {
  const { classes } = props
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography align='left' variant='headline' component='h3'>
          {props.title}
        </Typography>
        <Typography align='left' component='p'>
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
