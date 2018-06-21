import React from 'react'
import pagesrc from './images/MainPage.jpg'
import './css/About.css'
import PaperSheet from './Paper'
import PaperSheetAlt from './PaperAlt';
import { Paper } from '@material-ui/core';

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
        <div className='paper'>
          <PaperSheet title='Title' message='Message' />
          <PaperSheetAlt title='Title 2' message='Message' />
          <PaperSheet title='Title 3' message='Message' />
        </div>
      </div>
    )
  }
}
