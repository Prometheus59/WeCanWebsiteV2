import React from 'react'
import Form from './Form'
import BizInfo from './BizInfo'
import Gmaps from './Gmaps'

export default class Contact extends React.Component {
  render () {
    return (
      <div className='formContainer'>
        <div className='companyInfo'>
          <Form />
          <BizInfo />
        </div>
        <Gmaps />
      </div>
    )
  }
}
