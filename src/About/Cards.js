import React from 'react'
import SimpleMediaCard from '../Common/Card'
import car from '../images/car.jpg'
import house from '../images/house.jpg'
import comm from '../images/comm.jpg'
import travel from '../images/trav.jpg'

function SimpleMediaCards (props) {
  return (
    <div className='card'>
      <SimpleMediaCard
        title='Auto Coverage'
        message="With so many variables going into an auto insurance quote, you'll need to phone our office and speak with one of our knowledgeable brokers"
        image={car}
        link='/services#auto'
      />
      <SimpleMediaCard
        title='House Coverage'
        message="With so many variables going into an house insurance quote, you'll need to phone our office and speak with one of our knowledgeable brokers"
        image={house}
        link='/services#home'
      />
      <SimpleMediaCard
        title='Commercial Coverage'
        message="With so many variables going into an commercial insurance quote, you'll need to phone our office and speak with one of our knowledgeable brokers"
        image={comm}
        link='/services#commercial'
      />
      <SimpleMediaCard
        title='Travel Coverage'
        message="With so many variables going into an travel insurance quote, you'll need to phone our office and speak with one of our knowledgeable brokers"
        image={travel}
        link='/services#travel'
      />
    </div>
  )
}

export default SimpleMediaCards
