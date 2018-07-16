import React from 'react';
import SimpleSlider from './Carousel';
import '../css/Services.css';


export default class Services extends React.Component {
    render() {

        var style = {
            height: 500
          };
      
        return (
            // Make this a carousel selector
             <div>
                 <h1>Services Available</h1>
                 <SimpleSlider />
                 {/*TODO: Add subsections here for different insurance*/}
                 <div style={style} id='auto'>Car Insurance</div>
                 <div style={style} id='home'>home Insurance</div>
                 <div style={style} id='commercial'>comm Insurance</div>
                 <div style={style} id='travel'>travel Insurance</div>
             </div>
        )
    }
}