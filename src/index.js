import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Update from "./admin/FormEdit";
import Login from "./Login/login";
import Home from "./page/home";
import Register from "./register/register";
import UserPage from "./admin/pages";
import YourComponent from "./dasboard/dasboard";
import Tipskerja from "./tipskerja/isitipskerja";
import Isi from "./isitipskerja/judul";
import Registeruser from "./admin/registeruser";
import TipsKerja1 from "./tipskerja/isitipskerja1";
import TipsKerja2 from "./tipskerja/isitipskerja2";
import Transaksi from "./transaksi/transaksi";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/pages" element={<UserPage />} />
      <Route path="/home" element={<App />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register" element={<Home />} />
      <Route path="/update/:id" element={<Update />} />
      <Route path="/dasboard" element={<YourComponent />} />
      <Route path="/isitips/*" element={<Tipskerja />} />
      <Route path="/Isi/*" element={<Isi/>} />
      <Route path="/Registeruser" element={<Registeruser/>} />
      <Route path="/isitips1" element={<TipsKerja1/>} />
      <Route path="/isitips2" element={<TipsKerja2/>} />
      <Route path="/Transaksi" element={<Transaksi/>} />


      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>Not Found</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);