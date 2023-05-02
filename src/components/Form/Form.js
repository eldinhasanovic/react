import React, { useState } from "react";
export default function Form() {
  // Prvi nacin
  // const [name, setName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [hobby, setHobby] = useState("");

  // Drugi nacin
  const [userInput, setUserInput] = useState({
    name: "",
    lastName: "",
    email: "",
    hobby: "",
  });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ userInput });
      }}
    >
      <label htmlFor="Ime">Unesite vase ime</label>
      <input
        id="Ime"
        type="text"
        // innerText={"ime"}
        value={userInput.name}
        onChange={(event) => {
          setUserInput((prev) => ({
            ...prev,
            name: event.target.value,
          }));
        }}

        // onChange={() => {
        //   setName(event.target.value);
        // }}
      />
      <br />
      <label htmlFor="Prezime">Unesite vase Prezime</label>
      <input
        id="Prezime"
        type="text"
        value={userInput.lastName}
        onChange={(event) => {
          setUserInput((prev) => ({
            ...prev,
            lastName: event.target.value,
          }));
        }}

        // onChange={() => {
        //   setName(event.target.value);
        // }}
      />
      <br />
      <label htmlFor="Email">Unesite vas email</label>
      <input
        id="Email"
        type="email"
        value={userInput.email}
        onChange={(event) => {
          setUserInput((prev) => ({
            ...prev,
            email: event.target.value,
          }));
        }}
      />
      <br />
      <label htmlFor="hobi">Unesite vas hobi</label>
      <input
        id="hobi"
        type="text"
        // type = "tela"
        // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        value={userInput.hobby}
        onChange={(event) => {
          setUserInput((prev) => ({
            ...prev,
            hobby: event.target.value,
          }));
        }}
      />
      <br />
      <button type="submit"></button>
    </form>
  );
}
export { Form };
