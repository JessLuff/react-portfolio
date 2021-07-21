import React from 'react';
import resume from '../../assets/Resume.pdf';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <a href={resume} download> <h1>Download Resume</h1></a>
      <h2>Skills and Proficiencies</h2>
      <ul>
        <li>C++</li>
        <li>Javascript</li>
        <li>SQL</li>
        <li>Backend</li>
        <li>Matlab</li>
        <li>Mechatronic Engineering</li>
        <li>Biomedical Engineering</li>
      </ul>
    </div>
  );
}
