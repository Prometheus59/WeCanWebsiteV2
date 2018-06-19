import React from 'react';
import './css/Contact.css';

export default class Gmaps extends React.Component {
    render() {
        return (
            <div className="gmaps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.3839285416866!2d-79.386140384591!3d43.847870479115066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2b4a7062e60b%3A0x46397fe8eef86ff1!2s1+West+Pearce+St%2C+Richmond+Hill%2C+ON+L4B+3K3!5e0!3m2!1sen!2sca!4v1527169756193"
            allowFullScreen async defer></iframe>
        </div>
        )
    }
}