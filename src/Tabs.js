import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import About from './About'
import Services from './Services'
import Contact from './Contact'

class TabMenu extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render () {
    const { value } = this.state

    return (
      <div className='frank'>
        <AppBar position='static'>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label='About' />
            <Tab label='Services' />
            <Tab label='Contact' href='#basic-tabs' />
          </Tabs>
        </AppBar>
        {value === 0 && <About />}
        {value === 1 && <Services />}
        {value === 2 && <Contact />}
      </div>
    )
  }
}

export default TabMenu
