import React from 'react'
import { Route, NavLink, BrowserRouter, Switch } from 'react-router-dom'
import './css/Navbar.css'
import About from './About'
import Contact from './Contact'


export default class Navbar extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <div className='menu'>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
          </div>
          <div className='content'>
            <Switch>
              <Route exact path='/' component={About} />
              <Route path='/services' component={About} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
