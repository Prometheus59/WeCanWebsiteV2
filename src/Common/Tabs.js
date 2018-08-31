import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";
import About from "../About/About";
import Services from "../Services/services";
import Contact from "../Contact/Contact";
import Partners from "../About/Partners";
import Header from "./Header";
import Resources from "../Resources/Resources";
import { Link, Route, Switch } from "react-router-dom";
import Sticky from "react-sticky-el";
import "../css/Navbar.css";
import Quote from "../Quote/MainQuote";
import AutoQuote from "../Quote/AutoQuote";
import BoatQuote from "../Quote/BoatQuote";
import CottageQuote from "../Quote/CottageQuote";
import RentalQuote from "../Quote/RentalQuote";
import HomeQuote from "../Quote/HomeQuote";
import VacantQuote from "../Quote/CottageQuote";

const styles = theme => ({
  tabsIndicator: {
    backgroundColor: "#3f51b5"
  }
});

class TabMenu extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const { classes } = this.props;

    return (
      <div id="tabs">
        <Header />
        <Sticky>
          <AppBar position="sticky" id="navBar">
            <Tabs
              id="standard"
              value={value}
              onChange={this.handleChange}
              classes={{ indicator: classes.tabsIndicator }}
            >
              <Tab label="About" component={Link} to="/about" />
              <Tab label="Services" component={Link} to="/services" />
              <Tab label="Quote" component={Link} to="/quote" />
              <Tab label="Resources" component={Link} to="/resources" />
              <Tab label="Contact" component={Link} to="/contact" />
            </Tabs>
            <Tabs
              id="fullwidth"
              fullWidth
              value={value}
              onChange={this.handleChange}
              classes={{ indicator: classes.tabsIndicator }}
            >
              <Tab label="About" component={Link} to="/about" />
              <Tab label="Services" component={Link} to="/services" />
             {/* <Tab label="Quote" component={Link} to="/quote" /> */}
              <Tab label="Resources" component={Link} to="/resources" />
              <Tab label="Contact" component={Link} to="/contact" />
            </Tabs>
          </AppBar>
        </Sticky>
        <div id="content">
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/about" component={About} />
            <Route path="/partners" component={Partners} />
            <Route path="/services" component={Services} />
            <Route exact path="/quote" component={Quote} />
            <Route path="/quote/auto" component={AutoQuote} />
            <Route path="/quote/boat" component={BoatQuote} />
            <Route path="/quote/cottage" component={CottageQuote} />
            <Route path="/quote/home" component={HomeQuote} />
            <Route path="/quote/rental" component={RentalQuote} />
            <Route path="/quote/vacant" component={VacantQuote} />
            <Route path="/resources" component={Resources} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(TabMenu);
