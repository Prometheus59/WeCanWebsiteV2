import React from 'react';
import '../css/Footer.css';


export default class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div>
                    <h3>Services</h3>
                    <ul>
                        <li>Commercial Insurance</li>
                        <li>Home Insurance</li>
                        <li>Auto Insurance</li>
                        <li>Travel Insurance</li>
                    </ul>
                </div>
                <div>
                    <h3>About</h3>
                    <ul>
                        <li>About US</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h3></h3>
                </div>
            </div>
        )
    }
}
