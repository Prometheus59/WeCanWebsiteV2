import React from 'react';
import SimpleSlider from './Carousel';
import '../css/Services.css';


export default class Services extends React.Component {
    render() {
        return (
            // Make this a carousel selector
             <div>
                 <h1>Services Available</h1>
                 <SimpleSlider />
             </div>
        )
    }
}