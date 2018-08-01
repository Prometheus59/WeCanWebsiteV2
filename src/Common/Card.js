import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { HashLink } from 'react-router-hash-link';



const styles = {
  card: {
    maxWidth: 345,
    marginTop: '15px',
    marginRight: '10px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
}

function SimpleMediaCard (props) {
  const { classes } = props
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title='Car Insurance'
        />
        <CardContent>
          <Typography gutterBottom variant='headline' component='h2'>
            {props.title}
          </Typography>
          <Typography component='p'>
          {props.message}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' color='primary'>
          <HashLink smooth to='/contact#top'>Get a Quote</HashLink>
          </Button>
          <Button size='small' color='primary'>
            <HashLink smooth to={props.link}>Learn More</HashLink>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleMediaCard)
