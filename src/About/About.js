import React from 'react'
import pagesrc from '../images/MainPage.jpg'
import '../css/About.css'
import PaperSheet from '../Common/Paper'
import PaperSheetAlt from '../Common/PaperAlt';

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
          <PaperSheet title='Our Goal' message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius consequuntur adipisci aliquam, quae error exercitationem sunt illo explicabo voluptates!' />
          <PaperSheetAlt title='What We Do' message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius consequuntur adipisci aliquam, quae error exercitationem sunt illo explicabo voluptates!' />
          <PaperSheet title='We Can Help' message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius consequuntur adipisci aliquam, quae error exercitationem sunt illo explicabo voluptates!' />
        </div>
      </div>
    )
  }
}