import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import About from '../About/About';
import Services from '../Services/services';
import Contact from '../Contact/Contact';
import Partners from '../About/Partners';
import Header from './Header';
import Resources from '../Resources/Resources';
import { NavLink, Route, Switch } from 'react-router-dom';
import Sticky from 'react-sticky-el';
import '../css/Navbar.css';

class TabMenu extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render () {
    const { value } = this.state

    return (
        <div id='tabs'>
          <Header />
          <Sticky>
            <AppBar position='relative' id='navBar'>
              <Tabs value={value} onChange={this.handleChange}>
                <Tab label='About' component={NavLink} to='/about' />
                <Tab label='Services' component={NavLink} to='/services' />
                <Tab label='Resources' component={NavLink} to='/resources'/>
                <Tab label='Contact' component={NavLink} to='/contact' />
              </Tabs>
            </AppBar>
          </Sticky>
          <div id='content'>
            <Switch>
              <Route exact path='/' component={About} />
              <Route path='/services' component={Services} />
              <Route path='/about' component={About} />
              <Route path='/resources' component={Resources} />
              <Route path='/contact' component={Contact} />
              <Route path='/partners' component={Partners} />
            </Switch>
          </div>
        </div>
    )
  }
}

export default TabMenu
