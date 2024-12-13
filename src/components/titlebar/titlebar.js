import React from 'react';
import './titlebar.css';

const TitleBar = () => {
    // navclick function here

    return (
            <nav className="titlebar">
               <ul>
                     <li><a href="#home">Home</a></li>
                     <li><a href="#menu">Menu</a></li>
                     <li><a href="#location">Location</a></li>
                     <li><a href="#contact">Contact</a></li>
               </ul>
            </nav>
    );
};

export default TitleBar;