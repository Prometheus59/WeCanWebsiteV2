import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
  render () {
    return (
      <div className='footer'>
        <div className='mainLinks'>
          <div>
            <h3><Link to='/services'>Services</Link></h3>
            <ul>
              <li><Link to='#'>Commercial Insurance</Link></li>
              <li><Link to='#'>Home Insurance</Link></li>
              <li><Link to='#'>Auto Insurance</Link></li>
              <li><Link to='#'>Travel Insurance</Link></li>
            </ul>
          </div>
          <div>
            <h3><Link to='/about'>About</Link></h3>
            <ul>
              <li><Link to='/about'>About Us</Link></li>
              <li><Link to='/contact/'>Contact Us</Link></li>
              {/* rel="noopener noreferrer is to stop injection attacks */}
              <li><a href='http://www.soundinsurance.ca' target='_blank' rel="noopener noreferrer">Sound Insurance</a></li>
            </ul>
          </div>
          <div>
            <h3><Link to='/resources'>Resources</Link></h3>
            <ul>
              <li><Link to='#'>Downloadable Resources</Link></li>
              <li><Link to='#'>FAQs</Link></li>
              <li><Link to='#'>Gov. Links</Link></li>
            </ul>
          </div>
        </div>

        <div className='copyright'>
            <h5>&#169; 2018 WeCan Insurance</h5>
        </div>
      </div>
    )
  }
}
