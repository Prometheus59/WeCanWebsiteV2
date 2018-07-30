import React from 'react';
import pagesrc from '../images/MainPage.jpg';
import '../css/About.css';
import './Cards';
import SimpleMediaCards from './Cards';
import ParallaxEffect from './Parallax';
import PartnersCarousel from './PartnersCarousel';
import MobilePartnersCarousel from '../Mobile/MobilePartnersCarousel';
import Speak from './Speak';

function Page () {
  return <img src={pagesrc} alt='mainImage' />
}

export default class About extends React.Component {
  render () {
    return (
      <div className='about'>
        <div id='aboutUs'>
          <Page />
          <div className='centered'>
          <div className='title'>WeCan Insurance</div>
          <div className='subTitle'>D/O Sound Insurance Services  Inc.</div>
          </div>
        </div>
        <PartnersCarousel />
        <MobilePartnersCarousel />
        <SimpleMediaCards />
        <ParallaxEffect />
        <Speak
          title='Get The Coverage You Deserve Today'
          message="Please don't hesitate to reach out to us with any questions you may have
          Click the button below re-direct to our contact page."
        />  
      </div>
    )
  }
}
