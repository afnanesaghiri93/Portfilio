import React from "react";

const Skills = () => {
     return (
        <section id="skills" style={{ padding: '80px 20px', background: '#f9f9f9'}}>
            <h2>Technical Skills</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div>
          <h4>Languages & Tools</h4>
          <ul>
            <li>HTML5, CSS, JavaScript</li>
            <li>C++</li>
            <li>MATLAB</li>
          </ul>
        </div>
        <div>
          <h4>Frameworks</h4>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div>
          <h4>Hardware/Systems</h4>
          <ul>
            <li>Hardware Troubleshooting</li>
            <li>PCB Design</li>
            <li>Power Electronics</li>
            <li>Fiber Optic Technician</li>
          </ul>
        </div>
        <div>
          <h4>Electronics</h4>
          <ul>
            <li>Analog & Digital Circuits</li>
            <li>Battery Chargers</li>
            
            
          </ul>
        </div>
        <div>
          <h4>Soft Skills</h4>
          <ul>
            <li>Problem Solving</li>
            <li>Communication</li>
            <li>Organization</li>
            <li>Attention to Detail</li>
          </ul>
        </div>
      </div>
        </section>
     )
}
export default Skills;