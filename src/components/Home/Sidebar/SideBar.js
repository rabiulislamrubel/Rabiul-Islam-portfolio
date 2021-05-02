import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='inner-sidebar'>
        <div className='sidebar-header'>
          <h1>Rabiul Islam</h1>
          <h4>Web Developer</h4>
          <a
            href='https://drive.google.com/uc?export=download&id=11qxczmbxeN3naJjf1Iv3aZMIE48ef2CH'
            target='_blank'
            className='btn border'
          >
            Download Resume
          </a>
        </div>
        <div className='sidebar-menu'>
          <ul>
            <li>
              <Link to='/about' className='link'>
                About
              </Link>
            </li>
            <li>
              <Link to='/allProject' className='link'>
                Project
              </Link>
            </li>
            <li>
              <Link to='/contactUs' className='link'>
                Contact us
              </Link>
            </li>
            <li>
              <Link to='/skills' className='link'>
                Skills
              </Link>
            </li>
          </ul>
        </div>
        <div className='sidebar-footer'></div>
      </div>
    </div>
  );
};

export default SideBar;
