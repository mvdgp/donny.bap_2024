import React from 'react';
import './contact.css';
import logo from '../../assets/Donnybap-logo resizable.svg';
import { FaInstagram } from "react-icons/fa";

// Handle social button click
const clickSocialButton = () => {
    const url = 'https://www.instagram.com/donny.bap?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        window.location.href = url;
    } else {
        window.open(url, '_blank');
    }
};

const Contact = () => {
    return (
        <div className="contact-container">
            <img src={logo} alt="Donnybap Logo" className="donny-logo-contact" />
            <div className="slogan-contact">
                <p className="pop-up">it's not a pop up...</p>
                <p className="bap-up">it's a BAP-UP</p>
                </div>
            <button className="contact-button" onClick={clickSocialButton}><FaInstagram />FOLLOW</button>
        </div>
    );
};

export default Contact;