import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div className='insuranceType' id='home'>
                <h2>Home Insurance</h2>
                <p> A house is often the largest financial investment someone will make in their entire life,
                     so it makes sense to protect that investment from potential disasters. Water damage, theft,
                     fire, crashes from aircraft or automobiles, and explosions are just a few possible reasons
                     to consider purchasing house insurance.
                </p>
                <p> Here at WeCan Insurance, we compare quotes with our numerous insurance partners to offer you
                    personalized service with the best rates and coverage available for your vehicle. Rest easy
                    knowing that all your valuable personal items & assests are insured.
                </p>
                <p> WeCan Insurance offers home insurance for many property types including:
                    <ul>
                        <li>Houses</li>
                        <li>Condominiums</li>
                        <li>Townhouses</li>
                        <li>Cottages</li>
                        <li>Recreational Properties</li>
                        <li>Rented Property</li>
                        <li>Antique / Collector Vechicles</li>
                    </ul>
                </p>
            </div>
        )
    }
}