import React from 'react'

export default class BizInfo extends React.Component {
  render () {
    var x = 'We';
    var y = 'Can';
    var z = 'Temp';
    var at = '@';
    var a = 'sound';
    var b = 'insurance';
    var c = '.ca';
    return (
      
      <div className='contact-info'>
        <div id='address'>
          Fax Address
          <br /> (000) 000 - 000
          <br /> {x + y + z + at + a + b + c}
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
