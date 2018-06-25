import React from 'react'
import pagesrc from '../images/MainPage.jpg'
import '../css/About.css'
import PaperSheet from '../Common/Paper'
import SimpleMediaCard from '../Common/Card'
import car from '../images/car.jpg'
import house from '../images/house.jpg'
import comm from '../images/comm.jpg'

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
        <div className='card'>
          <SimpleMediaCard
            title='Auto Coverage'
            message="With so many variables going into an auto insurance quote, you'll need to phone our office and speak with one of our knowledgeable brokers"
            image={car}
          />
          <SimpleMediaCard
            title='House Coverage'
            message="With so many variables going into an house insurance quote, you'll need to phone our office and speak with one of our knowledgeable brokers"
            image={house}
          />
          <SimpleMediaCard
            title='Commercial Coverage'
            message="With so many variables going into an commercial insurance quote, you'll need to phone our office and speak with one of our knowledgeable brokers"
            image={comm}
          />
        </div>

        <div className='paper'>
          <PaperSheet
            title='Our Goal'
            message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius consequuntur adipisci aliquam, quae error exercitationem sunt illo explicabo voluptates!'
          />
          <PaperSheet
            title='What We Do'
            message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius consequuntur adipisci aliquam, quae error exercitationem sunt illo explicabo voluptates!'
          />
          <PaperSheet
            title='We Can Help'
            message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius consequuntur adipisci aliquam, quae error exercitationem sunt illo explicabo voluptates!'
          />
        </div>
      </div>
    )
  }
}
