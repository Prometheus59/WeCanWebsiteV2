import React from 'react'
import { Route, NavLink, BrowserRouter } from 'react-router-dom'
import './css/Navbar.css'
import About from './About'
import Contact from './Contact';

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
            <Route exact path='/' Component={About} />
            <Route path='/services' Component={About} />
            <Route path='/about' Component={About} />
            <Route path='/contact' Component={Contact} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
