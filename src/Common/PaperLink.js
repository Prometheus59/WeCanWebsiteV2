import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: 370,
    minHeight: 235,
    borderRadius: 8
  }),
  btn: theme.mixins.gutters({
    marginLeft: "auto",
    marginRight: "auto"
  })
});

function PaperLink(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography align="center" variant="headline" component="h3">
          {props.title}
        </Typography>
        <br />
        <Typography align="left" component="p">
          {props.message}
        </Typography>
        <br />
        <CardActions>
          <Button
            className={classes.btn}
            size="medium"
            variant="raised"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </Button>
        </CardActions>
      </Paper>
    </div>
  );
}

PaperLink.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperLink);
