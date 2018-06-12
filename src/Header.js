import React from 'react'
import { Link } from 'react-router-dom';
import './css/Header.css'

const logo = 'http://alumnigala.com/wp-content/uploads/2017/11/WeCan1.jpg'

export default class Header extends React.Component {
  render () {
    return (
      <div className='Header'>
        <img className='logo' src={logo} alt='WeCan Logo' />
        <div className='title'>WeCan Insurance</div>
        <button id='contact-btn'>
          <Link to='/contact'>
            Contact Us!
          </Link>
        </button>
      </div>
    )
  }
}
