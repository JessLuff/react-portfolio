import React from 'react';
import profile from '../../assets/images/profile.jpg';
import '../../styles/About.css';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p className="text">
      My name is Jessica Luff, I am an engineer from Sydney, Australia.
            I hold a Master of Biomedical Engineering and a Bachelor of Mechatronic Engineering from the University of New South Wales,
            and am currently completing the Coding Bootcamp with the University of Sydney.
      </p>
      <img className="picture" src={profile} alt="profile" />
    </div>
  );
}
