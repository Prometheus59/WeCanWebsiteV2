import React from 'react'
import BizInfo from './BizInfo'
import Gmaps from './Gmaps'
import TextFields from './materialForm'

export default class Contact extends React.Component {
  render () {
    return (
      <div className='formContainer'>
        <TextFields />
        <div className='companyInfo'>
          <Gmaps />
          <BizInfo />
        </div>

      </div>
    )
  }
}
