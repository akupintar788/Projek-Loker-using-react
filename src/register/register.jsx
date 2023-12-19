import React, { useState } from "react";
import logo from "../assets/gambar6.png";
import { Link } from "react-router-dom";

export const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="register-form">
      <img className="img2" src={logo} alt="Logo" />
      <div className="register-form-container">
        <h2>Sign up</h2>
        <br></br>
        <form className="register" onSubmit={handleSubmit}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Your Username"
            id="username"
            name="username"
          />
          <br></br>
          <input
            value={username}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            id="Email"
            name="Email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
          <br></br>
          <input
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            type="password"
            placeholder="Re-Password"
            id="re-password"
            name="re-password"
          />


<Link to="/login">
<button className="link-btn6" type="submit">
            Sign Up
          </button>
    </Link>
        </form>

        <Link to="/">
        <button className="link-btn5"> create account</button>
    </Link>
      </div>
    </div>
  );
};
export default Register;
