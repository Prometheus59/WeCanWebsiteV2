import React from 'react'
import { NavLink } from 'react-router-dom';
import './css/Header.css'

const logo = 'http://alumnigala.com/wp-content/uploads/2017/11/WeCan1.jpg'

export default class Header extends React.Component {
  render () {
    return (
      <div className='Header'>
        <img className='logo' src={logo} alt='WeCan Logo' />
        <div className='title'>WeCan Insurance</div>
        <button id='contact-btn'>
          <NavLink to='/contact'>
            Contact Us!
          </NavLink>
        </button>
      </div>
    )
  }
}
