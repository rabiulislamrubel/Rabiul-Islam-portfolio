import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='inner-footer'>
        <a
          href='https://www.linkedin.com/in/rabiul-islam-71a07a211/'
          target='_blank'
          className='social-media-icon'
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href='https://github.com/rabiulislamrubel'
          target='_blank'
          className='social-media-icon'
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href='https://www.facebook.com/booth.boss.3/'
          target='_blank'
          className='social-media-icon'
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </section>
  );
};

export default Footer;
