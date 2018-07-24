import React from 'react';

export default class Travel extends React.Component {
    render() {
        return (
            <div className='insuranceType' id='travel'>
                <h2>Travel Insurance</h2>
                <p> Whether you're traveling to another country for a business meeting or taking some
                    time off to vaction, you'll want to protect yourself against unforeseen circumstances
                    that could occur before or during your time abroad.
                </p>

                <p>Some reasons why you may want to secure travel insurance include:
                    <ul>
                        <li>Sickness when abroad</li>
                        <li>Injuries sustained abroad</li>
                        <li>Lost/Delayed/Stolen baggage</li>
                        <li>If travel insurance is a requirement in the country</li>
                        <li>Emergency cancellations</li>
                    </ul>
                </p>

                <p> Here at WeCan Insurance, we compare quotes with our numerous insurance partners to offer you
                    personalized service with the best rates and coverage available. Rest easy
                    knowing that you're protected from the above risks of travelling.
                </p>

            </div>
        )
    }
}