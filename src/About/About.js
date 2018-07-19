import React from 'react';
import pagesrc from '../images/MainPage.jpg';
import '../css/About.css';
import './Cards';
import PaperSheets from './PaperSheets';
import SimpleMediaCards from './Cards';
import ParallaxEffect from './Parallax';
import Partners from './Partners';

function Page () {
  return <img src={pagesrc} alt='mainImage' />
}

export default class About extends React.Component {
  render () {
    return (
      <div class='about'>
        <div id='aboutUs'>
          <Page />
          <div className='centered'>
          <div className='title'>WeCan Insurance</div>
          <div className='subTitle'>D/O Sound Insurance Services  Inc.</div>
          </div>
        </div>
        <br />
        <SimpleMediaCards />
        <ParallaxEffect />
        <Partners />
      {/* This will be a message saying to contact us */}
      </div>
    )
  }
}
