import React from 'react'
import '../css/Footer.css'

export default class Footer extends React.Component {
  render () {
    return (
      <div className='footer'>
        <div className='mainLinks'>
          <div>
            <h3>Services</h3>
            <ul>
              <li>Commercial Insurance</li>
              <li>Home Insurance</li>
              <li>Auto Insurance</li>
              <li>Travel Insurance</li>
            </ul>
          </div>
          <div>
            <h3>About</h3>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              {/* rel="noopener noreferrer is to stop injection attacks */}
              <li><a href='http://www.soundinsurance.ca' target='_blank' rel="noopener noreferrer">Sound Insurance</a></li>
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul>
              <li>FAQs</li>
              <li>Downloadable Resources</li>
              <li>Gov. Links</li>
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
