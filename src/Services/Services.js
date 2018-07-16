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
                {/*TODO: Add subsections here for different insurance*/}
                <div className='detailedInsurance'>
                    <div id='auto'>Car Insurance</div>
                    <div id='home'>home Insurance</div>
                    <div id='commercial'>comm Insurance</div>
                    <div id='travel'>travel Insurance</div>
                </div>
            </div>
        )
    }
}