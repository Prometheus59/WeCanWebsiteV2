import React from 'react'
import pagesrc from './images/MainPage.jpg'
import './css/About.css'
import PaperSheet from './Paper'

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
          <PaperSheet title='Title' message='message' />
        </div>
      </div>
    )
  }
}
