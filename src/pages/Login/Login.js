import { useState } from "react";
import "./Login.css";
import axios from "axios";
export function Login() {
  async function Login(data) {
    try {
      const user = await axios.post(
        "https://nit-backend.onrender.com/users/login",
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
    Login({
      email,
      password,
    });
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="cointener">
      <form>
        <h1>Login</h1>
        <label className="label">Email</label>
        <input
          className="input"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          name="username"
          required
        ></input>
        <label className="label">Password</label>
        <input
          className="input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password "
          name="password "
          placeholder="Passwors"
          required
        ></input>
        <button id="login" onClick={handleClick}>
          Login
        </button>
        {/* <p style={{ fontSize: '2rem', color: 'black' }}> {email}</p> */}
      </form>
    </div>
  );
}
