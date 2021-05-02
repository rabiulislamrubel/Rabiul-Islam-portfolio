import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import './singleProject.css';

const SingleProject = ({ project }) => {
  const {
    websiteName,
    websiteType,
    featureOne,
    featureTwo,
    featureThree,
    projectPhoto,
    preview,
    github,
  } = project;

  return (
    <ScrollAnimation
      animateIn='animationIn'
      animateOut='animationOut'
      duration={10}
    >
      <div className='col-md-12'>
        <div className='project-details shadow'>
          <div className='project-photo'>
            <img src={projectPhoto} alt='' />
          </div>
          <div className='project-content'>
            <h3>{websiteName}</h3>
            <h5>{websiteType}</h5>
            <ul>
              <li>{featureOne}</li>
              <li>{featureTwo}</li>
              <li>{featureThree}</li>
            </ul>
            <a className='btn border' href={preview} target='_blank'>
              Preview
            </a>

            <a className='btn border' href={github} target='_blank'>
              Github link
            </a>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default SingleProject;
