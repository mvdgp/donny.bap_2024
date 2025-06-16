import React from 'react';
import './location.css';

const Location = () => {
    return (
        <div className="location-container">
            <div className="map-iframe">
                <iframe title="blok-noord-map" className="blok-noord-gmap"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.1539155370206!2d4.890395076185211!3d52.4038866448204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60942c2c960e7%3A0x68c56fca98c04e67!2sdonnybap!5e0!3m2!1sen!2snl!4v1746178436459!5m2!1sen!2snl"
                    width="600"
                    height="450"
                    style={{border:0}}
                ></iframe>
            </div>
            <div className="location-info">
                <p className="address">Tt. Melaniaweg 7<br/>1033 ST, Amsterdam</p><br/>
                <p className="sat-sun"><b>Every Thursday to Sunday</b><br/>12.00 - 16.00</p>
            </div>
        </div>
    );
};

export default Location;