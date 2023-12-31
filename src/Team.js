import React from "react";
import { Link } from "react-router-dom";
import "./Team.css";
import ktm from "./members_images/knowtheteam.jpg";

function Team() {
  return (
    <div className="container team-container">
      <div className="row team-section-head">
        <div className="team">
          <p className="teams">Team</p>
        </div>
        <div className="team-desc-button-box">
          <Link to="/ourteam">
            <button className="team-desc-button">Know the team</button>
          </Link>
        </div>
      </div>
      <div className="row team-section-body">
        <img src={ktm}></img>
      </div>
    </div>
  );
}

export default Team;
