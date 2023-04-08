import React from "react";
import "./PersonCard.css";
import { FaGithub } from "react-icons/fa";

export default function PersonCard(props) {
  return (
    <div className="card">
      <div className="firstPart">
        <img src={props.ImgURL} alt={"profile_img"} className="img" />
        <h1>{props.FullName}</h1>
        <h3>{props.Location}</h3>
      </div>
      <div className="secondPart">
        <p>Eldin is a student, and he is studying programming in centar Nit</p>
        <a href={props.gotoGit} target="blank" style={{ color: "darkblue" }}>
          <FaGithub style={{ width: "50px", height: "50px" }} />
        </a>
      </div>
    </div>
  );
}
