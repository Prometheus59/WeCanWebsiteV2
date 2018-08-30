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

class HomeQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "Not specified",
        address: "Not specified",
        year: "Not specified",
        size: "Not specified",
        basement: "Not specified",
        close: "Not specified",
        use: "Not specified",
        bank: "Not specified",
        alarm: "Not specified",
        ins: "Not specified",
        claim: "Not specified"
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
            label="All buyer's name(s), date of birth"
            placeholder="所有买家的名字拼写，生日和电话"
            multiline
            value={this.state.value}
            onChange={this.handleChange("name")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="address"
            label="Detailed address including postal code"
            placeholder="房子具体地址包括邮编"
            multiline
            value={this.state.value}
            onChange={this.handleChange("address")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="year"
            label="Year built"
            placeholder="房子多少年新"
            value={this.state.value}
            onChange={this.handleChange("year")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="size"
            label="How big is the house (sqaure feet)"
            placeholder="居住面积是多少（平方英尺）"
            value={this.state.value}
            onChange={this.handleChange("size")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="basement"
            label="Is the basement finished?"
            placeholder="地下室是否完成"
            value={this.state.value}
            onChange={this.handleChange("basement")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            style={{ width: 500 }}
            id="close"
            label="Closing date"
            placeholder="交接日期"
            multiline
            value={this.state.value}
            onChange={this.handleChange("close")}
            className={classes.textField}
            margin="normal"
          />
                    <TextField
            style={{ width: 500 }}
            id="use"
            label="Use of the house (principle residence or renting out?)"
            placeholder="房子的用途（自主还是出租）"
            multiline
            value={this.state.value}
            onChange={this.handleChange("use")}
            className={classes.textField}
            margin="normal"
          />
                    <TextField
            style={{ width: 500 }}
            id="bank"
            label="Bank name for mortgage"
            placeholder="贷款银行"
            value={this.state.value}
            onChange={this.handleChange("bank")}
            className={classes.textField}
            margin="normal"
          />
                    <TextField
            style={{ width: 500 }}
            id="alarm"
            label="Is there monitored alarm system?"
            placeholder="是否有监控"
            value={this.state.value}
            onChange={this.handleChange("alarm")}
            className={classes.textField}
            margin="normal"
          />
                    <TextField
            style={{ width: 500 }}
            id="ins"
            label="Any prior insurance?"
            placeholder="以前是否买过房屋保险"
            multiline
            value={this.state.value}
            onChange={this.handleChange("ins")}
            className={classes.textField}
            margin="normal"
          />
                    <TextField
            style={{ width: 500 }}
            id="claim"
            label="Any prior insurance claim(s)?"
            placeholder="以前是否有保险索赔"
            multiline
            value={this.state.value}
            onChange={this.handleChange("claim")}
            className={classes.textField}
            margin="normal"
          />

          <QuoteSnackbar
            subject="Home Quote Request"
            body={
              "Name: " +
              this.state.name +
              "%0D%0A" +
              "Year: " +
              this.state.year +
              "%0D%0A" +
              "Address: " +
              this.state.address +
              "%0D%0A" +
              "Size of home: " +
              this.state.size +
              "%0D%0A" +
              "Basement: " +
              this.state.basement +
              "%0D%0A" +
              "Handover date: " +
              this.state.close +
              "Use of house: " +
              this.state.use +
              "%0D%0A" +
              "Bank name for mortgage: " +
              this.state.bank +
              "%0D%0A" +
              "Monitored alarm system: " +
              this.state.alarm +
              "%0D%0A" +
              "Prior insurance: " +
              this.state.ins +
              "%0D%0A" +
              "Prior insurance claim(s): " +
              this.state.claim +
              "%0D%0A"
            }
          />
        </div>
      </form>
    );
  }
}

/* Ensure that an object is passed as props */
HomeQuote.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeQuote);
