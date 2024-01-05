import "./AboutContentStyles.css";

import React from 'react'

import { Link } from "react-router-dom";

import paragliding from "../assets/paragliding.jpg";
import bungee from "../assets/bungee.jpg";


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>About Me</h1>
            <p>I am a student pursuing a Computer Science degree in NUS, on the road to becoming a Software Engineer. Once in a while, I crave for exciting adventures which are part of my bucket list!</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={bungee} className="img" alt="pic1"/>
                </div>
                <div className="img-stack bottom">
                    <img src={paragliding} className="img" alt="pic2"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent