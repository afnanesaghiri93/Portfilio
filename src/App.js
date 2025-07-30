import React from 'react';
// import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';
import Skills from './components/Skills'; 
import Experience from './components/Experience'; 
import Education from './components/Education';
// import Projects from './components/Projects';
// import Resume from './components/Resume';


const sectionStyle = {
  marginBottom: '40px',
  paddingBottom: '20px',
  borderBottom: '1px solid #eee',
};

function App(){
  return(
    <div className='App' style={{maxWidth:'900px', margin: '0 auto', padding: '20px' }}>
      <header style={{textAlign: 'center', padding: '40px 0', background: '#f0f0f0'}}>
        <h1 style={{ fontWeight: 'bold', fontSize: '36px', margin: 0 }}>
          AFNANE SAGHIRI
        </h1>
      </header>

      <Contact />

      <div style={sectionStyle}><About /></div>
      <div style={sectionStyle}><Skills /></div>
      <div style={sectionStyle}><Experience /></div>
      <div style={sectionStyle}><Education /></div>
      
    
    </div>
  )
}





export default App;
