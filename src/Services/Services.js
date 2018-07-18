import React from 'react';
import SimpleSlider from './Carousel';
import '../css/Services.css';


export default class Services extends React.Component {
    render() {

        return (
            // Make this a carousel selector
            <div>
                <div id='ellip'>
                <h1 id='servicesAvailable'>Services Available</h1>                
                <SimpleSlider />
                </div>
                <div className='detailedInsurance'>
                    <div className='insuranceType' id='auto'>Car Insurance</div>
                    <div className='insuranceType' id='home'>home Insurance</div>
                    <div className='insuranceType' id='commercial'>comm Insurance</div>
                    <div className='insuranceType' id='travel'>travel Insurance</div>
                </div>
            </div>
        )
    }
}