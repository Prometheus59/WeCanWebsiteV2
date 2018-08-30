import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import QuoteSnackbar from "./QuoteSnackbar";
import "./Quote.css";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "80vw",
    margin: "40px auto 40px auto"
  },
  textField: {
    marginLeft: "15px",
    marginRight: "15px",
    width: 200
  }
});

class AutoQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      use: "No use provided",
      carInfo: "No car info provided",
      address: "No address provided",
      driverInfo: "No driver info provided",
      accident: "No prior accidents/convictions",
      cdist: "No commuting distance provided"
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

  handleSubmit(event) {}

  render() {
    const { classes } = this.props;
    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <div className="quoteInput">
          <TextField
            style={{ width: 500 }}
            id="use"
            label="What is use of your vehicle?"
            placeholder="你的车有什么用？"
            multiline
            value={this.state.value}
            onChange={this.handleChange("use")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="carInfo"
            label="Vehicle year, make, model, and vin # (if possible)"
            placeholder="你车的year, make, model或, vin#"
            multiline
            value={this.state.value}
            onChange={this.handleChange("carInfo")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="address"
            label="Detailed address including postal code"
            placeholder="你的居住地址包括postal code"
            multiline
            value={this.state.value}
            onChange={this.handleChange("address")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="driverInfo"
            label="Each driver's name, date of birth, G1/G2/G license dates"
            placeholder="驾驶人 g1, g2, g 的日期"
            multiline
            value={this.state.value}
            onChange={this.handleChange("driverInfo")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="accident"
            label="Previous accident(s)? If so, provide dates and fault percentage"
            placeholder="驾驶人事故发生时间, percentage of at fault"
            multiline
            value={this.state.value}
            onChange={this.handleChange("accident")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="cdist"
            label="If commuting, what is the commuting distance one way?"
            placeholder="如果通勤，单程的通勤距离是多少"
            multiline
            value={this.state.value}
            onChange={this.handleChange("cdist")}
            className={classes.textField}
            margin="normal"
          />

          <QuoteSnackbar
            subject="Auto Quote Request"
            body={
              "Use of vehicle: " +
              this.state.use +
              "%0D%0A" +
              "Car Info: " +
              this.state.carInfo +
              "%0D%0A" +
              "Address: " +
              this.state.address +
              "%0D%0A" +
              "Driver Info: " +
              this.state.driverInfo +
              "%0D%0A" +
              "Accident Info: " +
              this.state.accident +
              "%0D%0A" +
              "Commute Distance (one way): " +
              this.state.cdist
            }
          />
        </div>
      </form>
    );
  }
}

/* Ensure that an object is passed as props */
AutoQuote.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AutoQuote);
