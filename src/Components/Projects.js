import React from 'react';
import ProjectBox from './ProjectBox';
import './Projects.css';  // make sure to import your new CSS

const Projects = () => {
  const projectKeys = [
    "RivellaExplore",
    "Ecommerce",
    "Sara7aApp",
    "ZMovies",
    "ChallengeHub"
  ];

  return (
    <div className="projectsSection">
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className="projectsContainer">
        {projectKeys.map(key => (
          <ProjectBox key={key} projectKey={key} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
