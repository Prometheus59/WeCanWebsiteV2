import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './css/Navbar.css';
import About from './About';
import Contact from './Contact';
import Services from './Services';

export default class Navbar extends React.Component {
  render () {
    return (
        <div>
          <div className='menu'>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/soundInsurance'>Sound Insurance</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
          </div>
          <div className='content'>
            <Switch>
              <Route exact path='/' component={About} />
              <Route path='/services' component={Services} />
              <Route path='/soundInsurance' component={() => window.location = 'www.soundinsurance.ca'}/>
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </div>
        </div>
    )
  }
}
