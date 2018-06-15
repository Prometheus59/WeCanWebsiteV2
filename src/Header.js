import React from 'react'
import { Link } from 'react-router-dom';
import './css/Header.css'
import icon from './images/newblue.png'
import Tab from '@material-ui/core/Tab'

const logo = icon;

export default class Header extends React.Component {
  render () {
    return (
      <div className='Header'>
        <img className='logo' src={logo} alt='WeCan Logo' />
        <div className='title'>WeCan Insurance</div>
        <button id='contact-btn'>
          <Tab label='Contact' value='2'/>
        </button>
      </div>
    )
  }
}
