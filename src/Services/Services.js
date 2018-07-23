import React from 'react';
import SimpleSlider from './Carousel';
import '../css/Services.css';
import Auto from './Auto';
import Home from './Home';


export default class Services extends React.Component {
    render() {

        return (
            // Make this a carousel selector
            <div>
                <div id='ellip'>
                    <SimpleSlider />
                </div>
                <div className='detailedInsurance'>
                    <Auto />
                    <Home />
                    <div className='insuranceType' id='commercial'>
                        <h2>Commercial Insurance</h2>
                    </div>
                    <div className='insuranceType' id='travel'>
                        <h2>Travel Insurance</h2>
                    </div>
                </div>
            </div>
        )
    }
}