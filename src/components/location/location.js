import React from 'react';
import './location.css';

const Location = () => {
    return (
        <div className="location-container">
            <div className="map-iframe">
                <iframe title="blok-noord-map" className="blok-noord-gmap"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.160326789938!2d4.8902412761852085!3d52.403770444828915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60942c2c960e7%3A0x68c56fca98c04e67!2sdonnybap!5e0!3m2!1sen!2snl!4v1733768635424!5m2!1sen!2snl"
                    width="600"
                    height="450"
                    style={{border:0}}
                ></iframe>
            </div>
            <div className="location-info">
                <p className="address">Tt. Melaniaweg 11<br/>1033 ST, Amsterdam</p><br/>
                <p className="sat-sun"><b>Every Saturday & Sunday</b></p>
                <p>Open between 12pm - 3pm</p>
            </div>
        </div>
    );
};

export default Location;