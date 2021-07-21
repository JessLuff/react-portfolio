import React from 'react';
import '../styles/Footer.css';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';

const styles = {
  logoStyle: {
     width: '50px',
     margin: '20px',
  },
};

function Footer() {
  return (
    <footer style={styles.footerStyle} className="header">
      <a href="https://www.linkedin.com/in/jessicaluff/" target="_blank" rel="noreferrer">
          <img style={styles.logoStyle} src={linkedin} alt='LinkedIn Logo'/>
          </a>
      <a href="https://github.com/JessLuff" target="_blank" rel="noreferrer">
          <img style={styles.logoStyle} src={github} alt='Github Logo'/>
          </a>
    </footer>
  );
}

export default Footer;