import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
// import App from './App';
import Header from './Header'
import Navbar from './Navbar'
import About from './About'
import registerServiceWorker from './registerServiceWorker'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Navbar />
      </div>
    )
  }
}

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
