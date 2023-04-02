import React from "react";
import "./Greeting.css";

function Greeting(props) {
  return (
    <main className="main">
      <h2>Dobrodosli u {props.appName}</h2>
      <h3>
        Hvala na posetiy
        {props.username}
      </h3>
    </main>
  );
}
export default Greeting;
