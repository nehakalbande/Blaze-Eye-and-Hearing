import React from "react";
import "./team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { members } from "../assets/Member";

const Team = (props) => {
  return (
    <div className="containerr1">
      {members.map((a, i) => (
        <div className="cards-wrapper">
          <div className="card2">
            <div className="card2-image">
              <img src={a.logo} alt={a.name} />
            </div>
            <ul class="sociall-icons">
              <a href={a.insta}>
                <FontAwesomeIcon icon={faInstagram} className="follow-icon-1" />
              </a>
              <a href={a.in}>
                <FontAwesomeIcon icon={faLinkedin} className="follow-icon-1" />
              </a>
            </ul>

            <div className="details">
              <h2 style={{ textAlign: "center" }}>
                {a.name}
                <br />
                <p class="job">{a.job}</p>
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
