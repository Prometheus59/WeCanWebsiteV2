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

class VacantQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birth: "Not Specified",
      phone: "Not Specified",
      mail: "Not Specified",
      date: "Not Specified",
      vacancy: "Not Specified",
      decorate: "Not Specified",
      bank: "Not Specified",
      monitor: "Not Specified",
      ins: "Not Specified",
      claim: "Not Specified"
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
            id="birth"
            label="Homeowner's birthday"
            placeholder="屋主生日"
            value={this.state.value}
            onChange={this.handleChange("birth")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="phone"
            label="Phone Number"
            placeholder="电话"
            value={this.state.value}
            onChange={this.handleChange("phone")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="mail"
            label="mailing address"
            placeholder="通讯地址"
            multiline
            value={this.state.value}
            onChange={this.handleChange("mail")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="date"
            label="Effective date"
            placeholder="生效日期"
            value={this.state.value}
            onChange={this.handleChange("date")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="vacancy"
            label="Length of vacancy"
            placeholder="计划空置多久"
            value={this.state.value}
            onChange={this.handleChange("vacancy")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="decorate"
            label="Do you want to decorate? If so, what is the budget / how long will it take?"
            placeholder="是否要进行装修? 如果要装修，预算多少? 多长时间装完。"
            multiline
            value={this.state.value}
            onChange={this.handleChange("decorate")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="bank"
            label="What is the name of your loan bank"
            placeholder="贷款银行"
            value={this.state.value}
            onChange={this.handleChange("bank")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="vacancy"
            label="Length of vacancy"
            placeholder="计划空置多久"
            value={this.state.value}
            onChange={this.handleChange("vacancy")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="monitor"
            label="Is there monitoring?"
            placeholder="是否有监控"
            value={this.state.value}
            onChange={this.handleChange("monitor")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="ins"
            label="Have you ever bought home insurance?"
            placeholder="以前是否买过房屋保险"
            value={this.state.value}
            onChange={this.handleChange("ins")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="claim"
            label="Have you had any insurance claim before?"
            placeholder="以前是否有保险索赔"
            value={this.state.value}
            onChange={this.handleChange("claim")}
            className={classes.textField}
            margin="normal"
          />

          <QuoteSnackbar
            subject="Vacant Quote Request"
            body={
              "Homeowner's birthday: " +
              this.state.birth +
              "%0D%0A" +
              "Phone Number: " +
              this.state.phone +
              "%0D%0A" +
              "Mailing address: " +
              this.state.mail +
              "%0D%0A" +
              "Effective date: " +
              this.state.date +
              "%0D%0A" +
              "Length of vacancy: " +
              this.state.vacancy +
              "%0D%0A" +
              "Does client want to decorate (Budget/time)" +
              this.state.decorate + 
              "%0D%0A" +
              "Name of loan bank: " +
              this.state.bank +
              "%0D%0A" +
              "Is there monitoring: " +
              this.state.monitor +
              "%0D%0A" +
              "Has client bought home insurance before: " +
              this.state.ins +
              "%0D%0A" +
              "Has client had any insurance claims before: " +
              this.state.claim
            }
          />
        </div>
      </form>
    );
  }
}

/* Ensure that an object is passed as props */
VacantQuote.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VacantQuote);
