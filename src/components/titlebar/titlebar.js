import React from 'react';
import './titlebar.css';

// Handle navigation click event
const handleNavClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' , block: 'end'});
};

// Main Titlebar component
const TitleBar = ({ activeSection, sections }) => {
    return (
        <nav className="titlebar">
            <ul className="nav-list">
                {sections.map(({ id, label }) => (
                    <li key={id} className={`nav-item ${activeSection === id ? 'active' : ''}`}>
                        <a href={`#${id}`} onClick={handleNavClick}>{label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TitleBar;