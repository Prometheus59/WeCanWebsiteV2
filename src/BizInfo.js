import React from 'react'

export default class BizInfo extends React.Component {
  render () {
    return (
      <div className='contact-info'>
        <div id='address'>
          Fax Address
          <br /> (000) 000 - 000
          <br /> email@example.ca
          <br />
        </div>
        <div id='hours'>
          Hours of Operation
          <br /> Monday-Friday
          <br /> 8:30am - 4:30pm
        </div>
      </div>
    )
  }
}
