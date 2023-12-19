// import React, { useState } from "react";
// import logo from "../assets/gambar6.png";
// import axios from 'axios';


// export const Registeruser = (props) => {
// const [username, setUsername] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [repassword, setRepassword] = useState("");

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (username === "" || email === "" || password === "" || repassword === "") {
//     alert("Data Gagal ditambahkan, field tidak boleh ada yang kosong");
//   } else {
//     try {
//       await axios.post('http://localhost:8080/insert-users', {
//         username: username,
//         email: email,
//         password: password,
//         repassword: repassword,
//       });
      
//       alert("Data berhasil ditambahkan");
//       // Redirect atau navigasi ke halaman lain jika diperlukan
//       window.location.href = '/home';
//     } catch (error) {
//       console.error('Error adding product:', error);
//       alert("Data Gagal ditambahkan, terjadi kesalahan");
//     }
//   }
// };


// return (
//     <div className="register-form">
//     <img className="img2" src={logo} alt="Logo" />
//     <div className="register-form-container">
//         <h2>Sign up</h2>
//         <br></br>
//         <form className="register" onSubmit={handleSubmit}>
//         <input
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             type="text"
//             placeholder="Your Username"
//             id="username"
//             name="username"
//         />
//         <br></br>
//         <input
//             value={username}
//             onChange={(e) => setEmail(e.target.value)}
//             type="Email"
//             placeholder="Email"
//             id="Email"
//             name="Email"
//         />

//         <input
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             placeholder="Password"
//             id="password"
//             name="password"
//         />
//         <br></br>
//         <input
//             value={repassword}
//             onChange={(e) => setRepassword(e.target.value)}
//             type="password"
//             placeholder="Re-Password"
//             id="re-password"
//             name="re-password"
//         />

//         <button className="link-btn6" type="submit">
//             Sign Up
//         </button>
//         </form>
//         <button
//         className="link-btn5"
//         onClick={() => props.onFormSwitch("login")}
//         >
//         {" "}
//         create account
//         </button>
//     </div>
//     </div>
// );
// };
// export default Registeruser;
