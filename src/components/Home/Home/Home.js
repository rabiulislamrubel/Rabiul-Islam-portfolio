import React from 'react';
import About from '../About/About';
import SideBar from '../Sidebar/SideBar';
import Projects from '../Projects/Projects';
import './home.css';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <section className='home'>
      <div className='side-bar'>
        <SideBar />
      </div>
      <div className='main-side'>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
