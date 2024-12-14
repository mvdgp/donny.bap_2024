import { useEffect, useState } from 'react';
import './App.css';
import TitleBar from './components/titlebar/titlebar';
import Home from './components/home/home';
import Menu from './components/menu/menu';
import Location from './components/location/location';
import Contact from './components/contact/contact';

// App menu items
const sections = [
  { id: 'home', label: 'Home', component: Home },
  { id: 'menu', label: 'Menu', component: Menu },
  { id: 'location', label: 'Location', component: Location },
  { id: 'contact', label: 'Contact', component: Contact },
];

// Handle intersection observer for pagination
function useIntersectionObserver(setActiveSection) {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      }),
      { threshold: 0.5 }
    );

    document.querySelectorAll('.App-body > div').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);
  
}

// Main App component
function App() {

  const [activeSection, setActiveSection] = useState('home'); // Set default active section
  useIntersectionObserver(setActiveSection);

  return (
    <div className="App">
      <header className="App-header">
        <TitleBar activeSection={activeSection} sections={sections} />
      </header>
      <main className="App-body">
        {sections.map(({ id, component: Component }) => (
          <div key={id} id={id} className={activeSection === id ? 'active' : ''}>
            <Component />
          </div>
        ))}
      </main>
    </div>
  );

}

export default App;