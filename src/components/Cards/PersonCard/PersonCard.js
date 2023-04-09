import React from "react";
import "./PersonCard.css";
import { FaGithub } from "react-icons/fa";

export default function PersonCard(props) {
  return (
    <div className="card">
      <div className="firstPart">
        <img src={props.imgURL} alt={"profile_img"} className="img" />
        <h1>{props.fullName}</h1>
        <h3>{props.location}</h3>
      </div>
      <div className="secondPart">
        <p>{props.description}</p>
        <a href={props.goToGit} target="blank" style={{ color: "darkblue" }}>
          <FaGithub style={{ width: "50px", height: "50px" }} />
        </a>
      </div>
    </div>
  );
}
