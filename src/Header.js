import React from 'react'
import './css/Header.css'
import icon from './images/newblue.png'
import Button from '@material-ui/core/Button';

const logo = icon;

export default class Header extends React.Component {
  render () {
    return (
      <div className='Header'>
        <img className='logo' src={logo} alt='WeCan Logo' />
        <div className='title'>WeCan Insurance</div>
        <div className='btn'>
        <Button variant="contained" color="primary" className="contact-btn">
        Contact Us
      </Button>
      </div>
      </div>
    )
  }
}

// Need to use props to activate contact button.