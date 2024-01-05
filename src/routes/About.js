import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgProject from '../components/HeroImgProject';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImgProject heading="ABOUT." text="a Computer Science student from NUS, and an aspiring Software Engineer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About