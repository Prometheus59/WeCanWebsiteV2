import React from 'react'
import '../css/Header.css'
import icon from '../images/newblue.png'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Translate from './Translation';

const logo = icon;

export default class Header extends React.Component {
  render() {
    return (
      <div className='Header' id='top'>
        <Link to='/about' className='main'>
        <img className='logo' src={logo} alt='WeCan Logo' />
        <div className='title'>WeCan Insurance</div>
        </Link>
          
        <div className='btn'>
          <Translate />
          <Button variant="contained" color="primary" className="contact-btn" component={Link} to='/contact'>
            Contact Us
          </Button>
        </div>
      </div>
    )
  }
}