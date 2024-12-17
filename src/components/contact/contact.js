import React from 'react';
import './contact.css';
import logo from '../../assets/Donnybap-logo resizable.svg';
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact-container">
            <img src={logo} alt="Donnybap Logo" className="donny-logo-contact" />
            <div className="slogan-contact">
                <p className="pop-up">it's not a pop up...</p>
                <p className="bap-up">it's a BAP-UP</p>
                </div>
            <button className="contact-button"><FaInstagram />FOLLOW</button>
        </div>
    );
};

export default Contact;