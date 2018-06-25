import React from 'react';
import pagesrc from '../images/MainPage.jpg';
import '../css/About.css';
import SimpleMediaCard from '../Common/Card';
import car from '../images/car.jpg';
import house from '../images/house.jpg';
import comm from '../images/comm.jpg';
import PaperSheets from './PaperSheets';

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
        <PaperSheets />
      </div>
    )
  }
}
