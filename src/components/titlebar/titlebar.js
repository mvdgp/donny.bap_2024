import React from 'react';
import './titlebar.css';

const TitleBar = ({ activeSection }) => {
    
    const handleNavClick = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' , block: 'end'});
    };

    return (
            <nav className="titlebar">
               <ul className="nav-list">
                    <li className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}><a href="#home" onClick={handleNavClick}>Home</a></li>
                    <li className={`nav-item ${activeSection === 'menu' ? 'active' : ''}`}><a href="#menu" onClick={handleNavClick}>Menu</a></li>
                    <li className={`nav-item ${activeSection === 'location' ? 'active' : ''}`}><a href="#location" onClick={handleNavClick}>Location</a></li>
                    <li className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}><a href="#contact" onClick={handleNavClick}>Contact</a></li>
                </ul>
            </nav>
    );
};

export default TitleBar;