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

class BoatQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boatInfo: "No boat info provided",
      hull: "Hull material not specified",
      engine: "Engine type not specified.",
      speed: "Top speed not specified"
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
            id="boatInfo"
            label="Boat year, brand, model, and price"
            placeholder="年/品牌/型号/价格"
            multiline
            value={this.state.value}
            onChange={this.handleChange("boatInfo")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="hull"
            label="Is the hull aluminum, steel, fiberglass or wood?"
            placeholder="船身是铝，钢，玻璃纤还是木?"
            value={this.state.value}
            onChange={this.handleChange("hull")}
            className={classes.textField}
            margin="normal"
          />

          <TextField
            style={{ width: 500 }}
            id="engine"
            label="Is the engine inboard, outboard, or jetted?"
            placeholder="发动机是舷内，舷外，还是喷射"
            value={this.state.value}
            onChange={this.handleChange("engine")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="speed"
            label="What is the top speed (mph)"
            placeholder="最高时速可达多少mph?"
            multiline
            value={this.state.value}
            onChange={this.handleChange("speed")}
            className={classes.textField}
            margin="normal"
          />
          <QuoteSnackbar
            subject="Boat Quote Request"
            body={
              "Boat year/brand/model/price: " +
              this.state.boatInfo +
              "%0D%0A" +
              "Hull info: " +
              this.state.hull +
              "%0D%0A" +
              "engine info: " +
              this.state.engine +
              "%0D%0A" +
              "Top Speed: " +
              this.state.speed
            }
          />
          <h5>Please include a copy of the purchase contract in the email</h5>
        </div>  
      </form>
    );
  }
}

/* Ensure that an object is passed as props */
BoatQuote.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BoatQuote);
