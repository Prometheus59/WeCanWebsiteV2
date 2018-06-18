import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import TabMenu from './Tabs';

require('typeface-roboto');

class App extends React.Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
            <TabMenu />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
