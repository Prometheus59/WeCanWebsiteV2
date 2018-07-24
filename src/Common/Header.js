import React from 'react'
import '../css/Header.css'
import icon from '../images/newblue.png'
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import Translate from './Translation';

const logo = icon;

export default class Header extends React.Component {
  render() {
    return (
      <div className='Header'>
        <div className='main'>
          <img className='logo' src={logo} alt='WeCan Logo' />
          <div className='title'>WeCan Insurance</div>
        </div>
        <div className='btn'>
          <Translate />
          <Button variant="contained" color="primary" className="contact-btn" component={NavLink} to='/contact'>
            Contact Us
          </Button>
        </div>
      </div>
    )
  }
}