import "./SocialsStyles.css"

import React from 'react'

import { FaMailBulk, FaInstagram, FaLinkedin } from "react-icons/fa"

const Socials = () => {
  return (
    <div className="socials">
      <div className="email">
          <h4> <FaMailBulk size={20} 
              style={{color: "#fff",
              marginRight: "2rem" }}
              />
          <a href="mailto:janald99@hotmail.com">janald99@hotmail.com</a>
          </h4>
      </div>
      <div className="linkedin">
          <h4> <FaLinkedin size={20} 
              style={{color: "#fff",
              marginRight: "2rem" }}
              />
            <a href="https://www.linkedin.com/in/janaldho/">
                janaldho
            </a>
          </h4>
      </div>
      <div className="instagram">
          <h4> <FaInstagram size={20} 
              style={{color: "#fff",
              marginRight: "2rem" }}
              />
            <a href="https://www.instagram.com/janald_ho/">
                janald_ho
            </a>
          </h4>
      </div>
  
    </div>
  )
}

export default Socials