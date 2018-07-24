import React from 'react';
import SimpleSlider from './carousel';
import './Services.css';
import Auto from './auto';
import Home from './home';
import Commercial from './commercial';
import Travel from './travel';


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
                    <Commercial />
                    <Travel />
                </div>
            </div>
        )
    }
}