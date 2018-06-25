import React from 'react';
import pagesrc from '../images/MainPage.jpg';
import '../css/About.css';
import './Cards';
import PaperSheets from './PaperSheets';
import SimpleMediaCards from './Cards';

function Page () {
  return <img src={pagesrc} alt='mainImage' />
}

export default class About extends React.Component {
  render () {
    return (
      <div>
        <div id='aboutUs'>
          <Page />
          <div className='centered'>WeCan Insurance</div>
        </div>
        <br />
        <SimpleMediaCards />
        <PaperSheets />
      </div>
    )
  }
}
