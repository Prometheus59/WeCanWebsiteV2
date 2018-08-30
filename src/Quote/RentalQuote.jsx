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

class RentalQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Not Specified",
      address: "Not Specified",
      handover: "Not Specified",
      lease: "Not Specified",
      mail: "Not Specified",
      bank: "Not Specified",
      manager: "Not Specified",
      units: "Not Specified",
      room: "Not Specified",
      quantity: "Not Specified",
      student: "Not Specified"
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
            id="Name"
            label="Rental house owner's name, date of birth, phone#"
            placeholder="所有买家的名字拼写, 生日和电话"
            multiline
            value={this.state.value}
            onChange={this.handleChange("Name")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="Handover"
            label="Handover Date"
            placeholder="交接日期"
            multiline
            value={this.state.value}
            onChange={this.handleChange("Handover")}
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
            id="mail"
            label="Mailing Address"
            placeholder="和买家居住地址"
            multiline
            value={this.state.value}
            onChange={this.handleChange("mail")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="lease"
            label="Are you leasing to a family or subletting?"
            placeholder="出租给一家人还是分租"
            multiline
            value={this.state.value}
            onChange={this.handleChange("lease")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="bank"
            label="Name of the bank for the mortgage"
            placeholder="贷款银行"
            multiline
            value={this.state.value}
            onChange={this.handleChange("bank")}
            className={classes.textField}
            margin="normal"
          />

          <TextField
            style={{ width: 500 }}
            id="manager"
            label="Who manages the rental property?"
            placeholder="谁打理出租房"
            multiline
            value={this.state.value}
            onChange={this.handleChange("manager")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="units"
            label="How many self-contained units in this house?"
            placeholder="这栋房子里有多少独立单位？"
            multiline
            value={this.state.value}
            onChange={this.handleChange("units")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="room"
            label="Do you want to rent by rooms?"
            placeholder="你想按房间租房吗？"
            multiline
            value={this.state.value}
            onChange={this.handleChange("room")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="quantity"
            label="How many families are you renting to?"
            placeholder="你租了几个家庭？"
            multiline
            value={this.state.value}
            onChange={this.handleChange("quantity")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="student"
            label="Do you want to rent to students?"
            placeholder="你想租给学生吗？"
            multiline
            value={this.state.value}
            onChange={this.handleChange("student")}
            className={classes.textField}
            margin="normal"
          />

          <QuoteSnackbar
            subject="Rental Quote Request"
            body={
              "Rental house owner's name, date of birth, phone#: " +
              this.state.name +
              "%0D%0A" +
              "Mailing Address: " +
              this.state.mail +
              "%0D%0A" +
              "Rental house address: " +
              this.state.address +
              "%0D%0A" +
              "Handover Date: " +
              this.state.handover +
              "%0D%0A" +
              "Self-contained units: " +
              this.state.units +
              "%0D%0A" +
              "Name of mortgage bank: " +
              this.state.bank +
              "%0D%0A" +
              "Manager of rental property: " +
              this.state.manager +
              "%0D%0A" +
              "Renting by rooms: " +
              this.state.room +
              "%0D%0A" +
              "Number of families rented to: " +
              this.state.quantity +
              "%0D%0A" +
              "Renting to students: " +
              this.state.student +
              "%0D%0A" +
              "Leasing to a family or subletting: " +
              this.state.lease
            }
          />
        </div>
      </form>
    );
  }
}

/* Ensure that an object is passed as props */
RentalQuote.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RentalQuote);
