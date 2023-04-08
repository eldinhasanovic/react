import React from "react";
import "./PersonCard.css";
import { FaGithub } from "react-icons/fa";

export default function PersonCard() {
  return (
    <div className="card">
      <div className="firstPart">
        <img
          src={"https://avatars.githubusercontent.com/u/86130682?v=4"}
          alt={"profile_img"}
          className="img"
        />
        <h1>Eldin Hasanovic</h1>
        <h3>NOVI PAZAR, SERBIA</h3>
      </div>
      <div className="secondPart">
        <p>Eldin is a student, and he is studying programming in centar Nit</p>
        <a
          href="https://github.com/eldinhasanovic?tab=repositories"
          target="blank"
          style={{ color: "darkblue" }}
        >
          <FaGithub style={{ width: "50px", height: "50px" }} />
        </a>
      </div>
    </div>
  );
}
