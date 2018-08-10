import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { HashLink } from "react-router-hash-link";
import "../css/About.css";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: 500,
    borderRadius: 8
  }),
  btn: theme.mixins.gutters({
    marginLeft: "auto",
    marginRight: "auto"
  })
});

function Speak(props) {
  const { classes } = props;
  return (
    <div id="speak">
      <Paper className={classes.root} elevation={4}>
        <Typography align="center" variant="headline" component="h3">
          {props.title}
        </Typography>
        <br />
        <Typography align="center" component="p">
          {props.message}
        </Typography>
        <br />
        <CardActions>
          <Button
            className={classes.btn}
            size="medium"
            variant="raised"
            component={HashLink}
            smooth
            to="/contact#top"
          >
            Contact
          </Button>
        </CardActions>
      </Paper>
    </div>
  );
}

Speak.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Speak);
