import React from 'react';
import pagesrc from '../images/MainPage.jpg';
import '../css/About.css';
import './Cards';
import PaperSheets from './PaperSheets';
import SimpleMediaCards from './Cards';
import ParallaxEffect from './Parallax';

function Page () {
  return <img src={pagesrc} alt='mainImage' />
}

export default class About extends React.Component {
  render () {
    return (
      <div>
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
        <PaperSheets />
      </div>
    )
  }
}
