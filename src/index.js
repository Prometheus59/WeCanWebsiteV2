import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import TabMenu from './Common/Tabs';
import Footer from './Common/Footer';

require('typeface-roboto');

class App extends React.Component {
  render () {
    return (
      <div>
            <TabMenu />
            <Footer />
      </div>
    )
  }
}

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
