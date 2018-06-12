import React from 'react';
import pagesrc from './images/MainPage.jpg';
import './css/About.css';

function Page () {
  return <img src={pagesrc} alt='mainImage'/>
}

export default class Contact extends React.Component {
  render () {
    return (
      <div id="aboutUs">
        <Page />
        <div className='centered'>Contact stuffs</div>
      </div>
    )
  }
}