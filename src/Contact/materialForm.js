import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SimpleSnackbar from "./SimpleSnackbar";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class TextFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "No name provided",
      email: "No email provided",
      message: "No message provided",
      policyNumber: "Policy Number not provided"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* This handler class handles all changes to state */
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit(event) {
    /*  event.preventDefault();
    window.setTimeout(function () {
      document.location.reload();
  }, 3000);
    //This will also open the email client */
  }

  render() {
    const { classes } = this.props;
    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        {/* Name and Email */}
        <div className="section1">
          <TextField
            id="name"
            label="Name"
            placeholder="John Smith"
            className={classes.textField}
            margin="normal"
            value={this.state.value}
            onChange={this.handleChange("name")}
          />
          <TextField
            id="email"
            label="Email"
            placeholder="example@example.com"
            className={classes.textField}
            margin="normal"
            value={this.state.value}
            onChange={this.handleChange("email")}
          />
        </div>
        {/* Policy Number */}
        <div className="section2">
          
          <TextField
            id="policy-number"
            label="Policy Number"
            placeholder="ABC 12345678"
            className={classes.textField}
            margin="normal"
            value={this.state.value}
            onChange={this.handleChange("policyNumber")}
          />

        </div>

        {/* Message / text-body */}
        <div className="section3">
          <TextField
            style={{ width: 300 }}
            id="message"
            label="Message"
            placeholder="Please write your message here"
            multiline
            value={this.state.value}
            onChange={this.handleChange("message")}
            rows="4"
            className={classes.textField}
            margin="normal"
          />
          <SimpleSnackbar
            cc={this.state.email}
            subject={this.state.name + ' - ' + this.state.policyNumber}
            body={this.state.message}
          />
        </div>
      </form>
    );
  }
}

/* Ensure that an object is passes as props */
TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
