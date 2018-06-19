import React from 'react'
import BizInfo from './BizInfo'
import Gmaps from './Gmaps'
import TextFields from './materialForm';

export default class Contact extends React.Component {
  render () {
    return (
      <div className='formContainer'>
        <div className='companyInfo'>
          <TextFields />
          <BizInfo />
        </div>
        <Gmaps />
      </div>
    )
  }
}
