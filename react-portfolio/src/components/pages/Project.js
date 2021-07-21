import React from 'react';
//import testpic from './tech.jpg';

export default function Card(projects) {
  const cardStyle = {
    width: '30%',
    flex: 1,
  };

  const headStyle = {
    align: 'centre',
  };

  return (
    <div>
      <div className="card" style={cardStyle}>
        
        <div className="card-body">
           <h5 className="card-title" style={headStyle}>{projects.name}</h5>
           <img
           className="card-img-top"
           src={projects.picture}
           alt="Project"
           />
           <p className="card-text">{projects.description}</p>
           <a href={projects.webpage} className="btn btn-outline-dark">
            Deployed Webpage
           </a>
           <a href={projects.github} className="btn btn-outline-dark">
            Github Repository
           </a>
        </div>
      </div>
    </div>
  );
}
