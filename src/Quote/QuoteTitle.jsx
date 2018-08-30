import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = theme => ({
  button: {
    marginTop: "30px",
    marginBottom: "15px",
    display: "block",
    fontSize: "1.3em"
  }
});

function QuoteTitle(props) {
  const { classes } = props;

  return (
    <Button
      size="large"
      variant="contained"
      color="primary"
      className={classes.button}
      component={Link}
      to={props.link}
    >
      {props.title}
    </Button>
  );
}

export default withStyles(styles)(QuoteTitle);
