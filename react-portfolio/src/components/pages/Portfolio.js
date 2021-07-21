import React from 'react';
import Card from './Project';
import bootcamphub from '../../assets/images/bootcamp-hub.png';
import passwordgen from '../../assets/images/password-generator.png';
import dayplanner from '../../assets/images/day-planner.png';
import weatherdash from '../../assets/images/weather-dashboard.png';
import javaquiz from '../../assets/images/javascript-quiz.png';
import budgettracker from '../../assets/images/budget-tracker.png';

const projects = [
  {
    name: 'Bootcamp Hub',
    description: 'This webpage serves as a study hub for students of the University of Sydney Coding Bootcamp',
    webpage: 'https://marora7926.github.io/bootcamp-hub/',
    github: 'https://github.com/marora7926/bootcamp-hub',
    picture: bootcamphub,
    id: 1,
  },
  {
    name: 'Password Generator',
    description: 'This webpage allows quick and easy generation of a secure password',
    webpage: 'https://jessluff.github.io/password-generator/',
    github: 'https://github.com/JessLuff/password-generator',
    picture: passwordgen,
    id: 2,
  },
  {
    name: 'Day Planner',
    description: 'This webpage helps time management by breaking down the day into hourly segments a user can save tasks to',
    webpage: 'https://jessluff.github.io/day-planner/',
    github: 'https://github.com/JessLuff/day-planner',
    picture: dayplanner,
    id: 3,
  },
  {
    name: 'Weather Dashboard',
    description: 'This webpage displays the current and forecasted weather',
    webpage: 'https://jessluff.github.io/weather-dashboard/',
    github: 'https://github.com/JessLuff/weather-dashboard',
    picture: weatherdash,
    id: 4,
  },
  {
    name: 'Javascript Quiz',
    description: 'This webpage is still underdevelopment. When finished, it will include a timed Javascript quiz',
    webpage: 'https://jessluff.github.io/javascript-quiz/',
    github: 'https://github.com/JessLuffjavascript-quiz',
    picture: javaquiz,
    id: 5,
  },
  {
    name: 'Budget Tracker',
    description: 'This webpage allows the user to track their budget by entering income and spendings each day',
    webpage: 'https://jessluff-budget-tracker.herokuapp.com/',
    github: 'https://github.com/JessLuff/offline-online-budget-tracker',
    picture: budgettracker,
    id: 6,
  },
];

export default function Projects() {
  return (
    <div> 
      <h1> Portfolio </h1>
      {projects.map((project) => (
        <Card name={project.name} description={project.description} webpage={project.site} github={project.github} picture={project.picture} key={project.id} />
      ))}
    </div>
  );
}
