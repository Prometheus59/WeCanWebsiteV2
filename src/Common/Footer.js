import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default class Footer extends React.Component {
  render () {
    return (
      <div className='footer'>
        <div className='mainLinks'>
        <div className='footerHeaders'>
            <h3><HashLink smooth to='/about#top'>About</HashLink></h3>
            <ul>
              <li><HashLink to='/about#parallaxTop'>About Us</HashLink></li>
              <li><HashLink to='/contact#top'>Contact Us</HashLink></li>
              <li><HashLink to='/partners#top'>Partners</HashLink></li>
              {/* rel="noopener noreferrer is to stop injection attacks */}
              <li><a href='http://www.soundinsurance.ca' target='_blank' rel="noopener noreferrer">Sound Insurance</a></li>
            </ul>
          </div>
          <div className='footerHeaders'>
            <h3><HashLink smooth to='/services#top'>Services</HashLink></h3>
            <ul>
              <li><HashLink smooth to='/services#auto'>Auto Insurance</HashLink></li>
              <li><HashLink smooth to='/services#home'>Home Insurance</HashLink></li>
              <li><HashLink smooth to='/services#commercial'>Commercial Insurance</HashLink></li>
              <li><HashLink smooth to='/services#travel'>Travel Insurance</HashLink></li>
            </ul>
          </div>
          <div className='footerHeaders'>
            <h3><Link to='/resources'>Resources</Link></h3>
            <ul>
              <li><Link to='/resources'>Gov. Links</Link></li>
              <li><Link to='/resources'>Downloadable Resources</Link></li>
              <li><Link to='/resources'>FAQs</Link></li>
            </ul>
          </div>
        </div>

        <div className='copyright'>
            <h5>&#169; 2018 WeCan Insurance</h5> {/*&#169; = copyright symbol*/}
        </div>
      </div>
    )
  }
}
