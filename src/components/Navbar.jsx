import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];

  return (
    <nav style={{ background: '#333', padding: '10px 0', position: 'sticky', top: 0, zIndex: 1000 }}>
      <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', margin: 0, padding: 0 }}>
        {sections.map((section) => (
          <li key={section} style={{ margin: '0 20px' }}>
            <button
              onClick={() => scrollToSection(section)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
