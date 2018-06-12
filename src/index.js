import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './css/index.css'
// import App from './App';
import Header from './Header'
import Navbar from './Navbar'
import registerServiceWorker from './registerServiceWorker'

class App extends React.Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Navbar />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
