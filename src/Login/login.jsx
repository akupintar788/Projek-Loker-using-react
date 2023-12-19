import React, { useState } from "react";
import axios from 'axios';
import logo from "../assets/gambar1.png";
function Login() {
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();

      if (username === "" || password === "") {
        alert("Data Gagal ditambahkan, field tidak boleh ada yang kosong");
      } else {
        try {
          await axios.post('http://localhost:8080/insert-users', {
            username: username,
            Password: password,
          });
  
          alert("Data berhasil ditambahkan");
          // Redirect atau navigasi ke halaman lain jika diperlukan
          window.location.href = '/dasboard';
        } catch (error) {
          console.error('Error adding product:', error);
          alert("Data Gagal ditambahkan, terjadi kesalahan");
        }
      }
    };

return (
    <div className="login-container">
    <img className="img1" src={logo} alt="Logo" />
    <div className="auth-form-container">
        <br></br><br></br>
        <h2>Login</h2>
        <h7>Welcome onboard with us!</h7> <br></br>
        <form className="login-form" onSubmit={handleFormSubmit}>
        <h5>Username :</h5>
        <label htmlFor="username"></label>
        <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="username"
            placeholder="yourusername"
            id="username"
            name="username"
        />
        <h5>Password :</h5>
        <label htmlFor="password"></label>
        <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
        />
        <br></br>
        <br></br>
        

        <button className="link-btn2" type="submit"> Log In </button>
        </form>
        <br></br>
        {/* <button className="link-btn3" onClick={() => props.onFormSwitch("register")}> New to Logo? Register here </button> */}
    </div>
    <div className="background"></div>
    </div>
);

}

export default Login;
