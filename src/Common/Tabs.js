import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import About from '../About/About'
import Services from '../Services/Services'
import Contact from '../Contact/Contact'
import Header from '../Common/Header'
import { NavLink, BrowserRouter, Route, Switch } from 'react-router-dom'
import Sticky from 'react-sticky-el'

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
      <BrowserRouter>
        <div>
          <Header />
          <Sticky>
            <AppBar position='static' id='navBar'>
              <Tabs value={value} onChange={this.handleChange}>
                <Tab label='About' component={NavLink} to='/about' />
                <Tab label='Services' component={NavLink} to='/services' />
                <Tab
                  label='Sound Insurance'
                  disabled
                  component={NavLink}
                  to='/soundInsurance'
                />
                <Tab label='Contact' component={NavLink} to='/contact' />
              </Tabs>
            </AppBar>
          </Sticky>
          <div className='content'>
            <Switch>
              <Route exact path='/' component={About} />
              <Route path='/services' component={Services} />
              <Route path='/about' component={About} />
              <Route
                path='/soundInsurance'
                component={() =>
                  (window.location.href = 'http://www.soundinsurance.ca')}
              />
              <Route path='/contact' component={Contact} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default TabMenu
