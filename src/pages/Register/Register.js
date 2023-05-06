import { useState } from "react";
import "./Register.css";
import axios from "axios";
export function Register() {
  async function Register(data) {
    try {
      const user = await axios.post(
        "https://nit-backend.onrender.com/users",
        data
      );
      const userInfo = await user.data;
      console.log(userInfo);
    } catch (err) {
      console.log(err);
    }
  }
  function handleClick(e) {
    e.preventDefault();
    Register({
      name,
      email,
      password,
    });
  }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="rCointener">
      <form>
        <h1>Register</h1>
        <label>Name</label>
        <input
          className="rInput"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
          name="name"
          required
        ></input>
        <label>E-mail</label>
        <input
          type="text"
          className="rInput"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter E-mail"
          name="email"
          required
        ></input>
        <label>Password</label>
        <input
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="rInput"
          type="password "
          name="password "
          required
        ></input>
        <button onClick={handleClick}>Register</button>
      </form>
    </div>
  );
}
