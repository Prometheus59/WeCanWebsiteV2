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
    maxWidth: "700px",
    margin: "40px auto 40px auto"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class CottageQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "No name/DOB provided",
      address: "No address provided",
      mortgage: "No mortgage bank name provided",
      year: "Year not provided",
      struct: "Structures not specified",
      basement: "Not specified",
      size: "size not provided",
      winter: "Not specified",
      boat: "Not specified",
      air: "Not specified",
      water: "Not specified"

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
            id="name"
            label="All buyer's name(s) and date(s) of birth"
            placeholder=""
            multiline
            value={this.state.value}
            onChange={this.handleChange("name")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="address"
            label="Detailed address of the cottage including postal code"
            placeholder=""
            multiline
            value={this.state.value}
            onChange={this.handleChange("address")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="mortgage"
            label="What is the mortgage bank name?"
            placeholder="你的居住地址包括postal code"
            value={this.state.value}
            onChange={this.handleChange("mortgage")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="year"
            label="What year was the cottage built?"
            placeholder=""
            value={this.state.value}
            onChange={this.handleChange("year")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="struct"
            label="How many detached structures & size of each structure (ft2)"
            placeholder=""
            multiline
            value={this.state.value}
            onChange={this.handleChange("struct")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="basement"
            label="Is there a basement?"
            placeholder=""
            value={this.state.value}
            onChange={this.handleChange("basement")}
            className={classes.textField}
            margin="normal"
          />
                    <TextField
            style={{ width: 500 }}
            id="size"
            label="How many stories is the cottage?"
            placeholder=""
            value={this.state.value}
            onChange={this.handleChange("size")}
            className={classes.textField}
            margin="normal"
          />
                    <TextField
            style={{ width: 500 }}
            id="winter"
            label="Is each detached structure winterized?"
            placeholder=""
            multiline
            value={this.state.value}
            onChange={this.handleChange("winter")}
            className={classes.textField}
            margin="normal"
          />
                    <TextField
            style={{ width: 500 }}
            id="boat"
            label="Are any boats included in the rental? How many are motorized?"
            placeholder=""
            multiline
            value={this.state.value}
            onChange={this.handleChange("boat")}
            className={classes.textField}
            margin="normal"
          />
                    <TextField
            style={{ width: 500 }}
            id="air"
            label="Is the cottage rented through Airbnb?"
            placeholder=""
            value={this.state.value}
            onChange={this.handleChange("air")}
            className={classes.textField}
            margin="normal"
          />
                    <TextField
            style={{ width: 500 }}
            id="water"
            label="Is there are a waterfront?"
            placeholder=""
            value={this.state.value}
            onChange={this.handleChange("water")}
            className={classes.textField}
            margin="normal"
          />

          <QuoteSnackbar
            subject="Cottage Quote Request"
            body={
              "Name: " +
              this.state.name +
              "%0D%0A" +
              "Address: " +
              this.state.address +
              "%0D%0A" +
              "Mortgage bank name: " +
              this.state.mortgage +
              "%0D%0A" +
              "Year: " +
              this.state.year +
              "%0D%0A" +
              "Structre(s) information: " +
              this.state.struct +
              "%0D%0A" +
              "Is there a basement: " +
              this.state.basement +
              "%0D%0A" + 
              "Cottage Size (stories): " +
              this.state.size +
              "%0D%0A" +
              "Each detached structure winterized: " +
              this.state.winter +
              "%0D%0A" +
              "Boat info: " +
              this.state.boat +
              "%0D%0A" +
              "Airbnb: " +
              this.state.air +
              "%0D%0A" +
              "Waterfront: " +
              this.state.water
            }
          />
        </div>
      </form>
    );
  }
}

/* Ensure that an object is passed as props */
CottageQuote.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CottageQuote);
