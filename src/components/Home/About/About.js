import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className='about'>
      <div className='about-photo-section'>
        <div className='about-me'>
          <h1>
            First time, <br /> I always observe the thing then take <br /> a
            decision for doing something better than others.
          </h1>
        </div>
      </div>
      <div className='about-content'>
        <h1 className='section-title'>ABOUT</h1>
        <div className='about-description'>
          <p>
            I'm Rabiul Islam. I'm from Bangladesh and have great enthusiasm for
            web development. I've been multiplying or developing my skills on
            HTML, CSS, JavaScript, Bootstrap, React.js, React Hook Form,
            Firebase, npmjs, Node.js, Express.js and MongoDB. I believe client
            satisfaction is all here in the web universe. That is why I always
            bear in mind the client's satisfaction and urgency as well.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
