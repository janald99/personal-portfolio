import "./WordCardStyles.css";

import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="project1"/>
    <h2 className="project-title">{props.title}</h2>
    <div className="project-details">
        <p>{props.text}</p>
        <div className="pro-btns">
            <NavLink className="btn" to={props.view}>
                View
            </NavLink>
        </div>
    </div>
</div>
  )
}

export default WorkCard