import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgProject from '../components/HeroImgProject';
import Socials from '../components/Socials';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImgProject heading="CONTACT." text="Let's have a chat!"/>
      <Socials/>
      <Footer/>
    </div>
  )
}

export default Contact