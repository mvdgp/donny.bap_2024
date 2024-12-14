import React from 'react';
import './home.css';
import dishTofu from '../../assets/tofu_side.png';
import dishBeef from '../../assets/beef_side.png';
import logo from '../../assets/Donnybap-logo resizable.svg';
import { FaInstagram } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";

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

// Main Home component
const Home = () => {
    return (
        <main className="home">
            <div className="home-content">
                {/*<div className="home-text">
                    <h1 className="slogan">Bibimbap.<br/>Donny's way.</h1>
                    <h4 className="subtitle">EVERY SATURDAY & SUNDAY</h4>
                    <button className="social-button" onClick={clickSocialButton}><FaInstagram />FOLLOW</button>
                </div>*/}
                <div className="logo">
                        {/*
                        <img src={dishTofu} alt="tofu-side" className="dish-tofu" />
                        <img src={dishBeef} alt="beef-side" className="dish-beef" />
                        */}
                </div>
            </div>
            <div className="arrow"><FaAngleDoubleDown /></div>
        </main>
    );
};

export default Home;