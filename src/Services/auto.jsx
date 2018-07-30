import React from 'react';

export default class Auto extends React.Component {
    render() {
        return (
            <div className='insuranceType' id='auto'>
                <h2>Auto Insurance</h2>
                <p> Vehicle insurance in Ontario is not just a preventative measure, it's a 
                    <strong> requirement</strong>. If you are caught driving without valid vehicle insurance,
                    you may face fines from $5,000 - $50,000 and risk having your driver's license suspended and vehicle impounded.
                </p>
                <p> Here at WeCan Insurance, we compare quotes with our numerous insurance partners to offer you 
                    personalized service with the best rates and coverage available for your vehicle.
                </p>
                <p>We offer insurance for many vehicles including: </p>
                    <ul>
                        <li>Cars</li>
                        <li>Motorcycles</li>
                        <li>ATVs</li>
                        <li>Snow Mobiles</li>
                        <li>Motorhomes</li>
                        <li>Antique / Collector Vechicles</li>
                    </ul>
            </div>
        )
    }
}