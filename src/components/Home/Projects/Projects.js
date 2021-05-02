import React from 'react';
import SingleProject from '../SingleProject/SingleProject';
import laundryBari from '../../Images/laundrybari.png';
import giftBox from '../../Images/fresh-valley.png';
import teamInfo from '../../Images/team-info.png';

const websiteProjectsDetails = [
  {
    websiteName: 'Laundry Bari',
    websiteType: 'A Laundry Service Website.',
    featureOne: 'Admin can add and remove a service',
    featureTwo: 'Client can place a service and post a review',
    featureThree:
      'Admin can add another ADMIN and change ordered service status',
    projectPhoto: laundryBari,
    preview: 'https://laundrybari-76ae7.firebaseapp.com/',
    github: 'https://github.com/rabiulislamrubel',
  },
  {
    websiteName: 'GiftBox',
    websiteType: 'A GiftBox E-Commerce Website.',
    featureOne: 'Client can add and remove an order',
    featureTwo: 'Admin can manage all product',
    featureThree: 'Firebase login system',
    projectPhoto: giftBox,
    preview: 'https://fresh-valley-2fd0e.web.app/',
    github: 'https://github.com/rabiulislamrubel',
  },
  {
    websiteName: 'Team Info',
    websiteType: 'A La Liga Teams Information Website.',
    featureOne: 'You can see all La Liga teams',
    featureTwo: 'You can know about one of the team detail by clinking',
    featureThree: 'You can select your favorite teams',
    projectPhoto: teamInfo,
    preview: 'https://team-info.netlify.app/',
    github: 'https://github.com/rabiulislamrubel',
  },
];

const Projects = () => {
  return (
    <div className='projects'>
      <h1 className='section-title'>PROJECTS</h1>
      <div className='inner-projects'>
        <div className='row m-0'>
          {websiteProjectsDetails.map((project) => (
            <SingleProject project={project}></SingleProject>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
