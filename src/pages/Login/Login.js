import { useState } from "react";
import "./Login.css";
import axios from "axios";
export function Login() {
  async function loginUser(data) {
    try {
      const user = await axios.post("https://nit-backend.onrender.com");
      const userInfo = await user.data;
      console.log(userInfo);
    } catch (err) {
      console.log(err.response.data.err);
    }
  }
  function handleClick(e) {
    e.preventDefault();
    loginUser({
      email,
      password,
    });
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <form>
        <h1>Login</h1>
        <label className="label">Email</label>
        <input
          className="input"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
          name="email"
          required
        ></input>
        <label className="label">Password</label>
        <input
          className="input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          required
        ></input>
        <button id="login" onClick={handleClick}>
          Login
        </button>
        {/* <p style={{ fontSize: "2rem", color: "black" }}> {email}</p> */}
      </form>
    </div>
  );
}
