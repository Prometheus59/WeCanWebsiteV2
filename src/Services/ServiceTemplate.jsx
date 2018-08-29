import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  center: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    width: '90vw',
    maxWidth: '1625px',
    marginRight: 'auto',
    marginLeft: 'auto',
  }),
  title: {
    marginTop: 20,
    marginBottom: 30
  },
  font: {
    fontSize: 16
  }
});

function ServiceTemplate(props) {
  const { classes } = props;
  const items = props.items;
  const listItems = items.map(list => <li>{list}</li>);

  return (
    <div>
      <Paper className={classes.center} elevation={6}>
        <Typography
          align="center"
          variant="headline"
          component="h3"
          className={classes.title}
        >
          <strong>{props.title}</strong>
        </Typography>
        <Typography className={classes.font} align="left" paragraph="true">
          {props.message}
        </Typography>
        <Typography className={classes.font} align="left" paragraph="true">
          {props.message2}
        </Typography>
        <Typography className={classes.font}>
          {props.listIntro}
        </Typography>
        <Typography className={classes.font}>
          <ul>{listItems}</ul>
        </Typography>
      </Paper>
    </div>
  );
}

ServiceTemplate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ServiceTemplate);
