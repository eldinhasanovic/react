import React from "react";
import "./TeamCard.css";
export default function TeamCard(props) {
  return (
    <div className="card-container">
      <p>{props.name}dasdsa</p>
      <p>{props.matches}sdadsa</p>
      <p>{props.points}dasdsa</p>
      <button className="izbrisitim" onClick={props.deleteTeam}>
        Izbrisi Tim
      </button>
    </div>
  );
}
