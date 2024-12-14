import { useEffect, useRef, useState } from 'react';
import './App.css';
import TitleBar from './components/titlebar/titlebar';
import Home from './components/home/home';
import Menu from './components/menu/menu';
import Location from './components/location/location';
import Contact from './components/contact/contact';

function App() {

  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      }),
      { threshold: 0.5 }
    );

    document.querySelectorAll('.App-body > div').forEach((section) => {
      observer.observe(section);
      sectionsRef.current[section.id] = section;
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <TitleBar />
      </header>
      <main className="App-body">
      <div id="home" className={activeSection === 'home' ? 'active' : ''}><Home /></div>
        <div id="menu" className={activeSection === 'menu' ? 'active' : ''}><Menu /></div>
        <div id="location" className={activeSection === 'location' ? 'active' : ''}><Location /></div>
        <div id="contact" className={activeSection === 'contact' ? 'active' : ''}><Contact /></div>
      </main>
    </div>
  );
}

export default App;