import React from "react";
import Footer from "../componen/footer";
import NavbarLanding from "../componen/navbar";
import "./isi.css";
import art from "../assets/orang kerja 10.jpg";
import art1 from "../assets/orang kerja 11.jpg";
import art2 from "../assets/orang kerja 12.jpg";
import art3 from "../assets/orang kerja 13.jpg";
import art4 from "../assets/orang kerja 14.jpg";
import art5 from "../assets/orang kerja 15.jpg";
import art6 from "../assets/orang kerja 16.jpg";
import { MDBCol, MDBInput } from "mdbreact";
import { Link } from 'react-router-dom';

function Isi() {
  return (
    <div>
    <NavbarLanding />
    <br></br>
    <br></br>
    <div class="inner artikel">
<from>
<MDBCol md="4" className="text-end">
  <MDBInput
    hint="Cari Lowongan"
    type="text"
    containerClass="active-pink active-pink-2 mt-0 mb-3"
    className="smaller-input"
  />
</MDBCol>
</from >
<div class="konten-artikel">

    <div class="konten-list">
      <div class="konten-left">
        <div class="a img">
          <img src={art} alt="" />
        </div>
      </div>
      <div class="konten-right">
      <Link to="/isitips">
    <h1>Inilah 5 Daftar Pekerjaan Diminati Saat ini</h1>
    </Link>
  <p>
    Pada era sekarang ini, jenis pekerjaan ada banyak sekali macamnya.
    Namun, tahukah Anda pekerjaan apa yang paling diminati oleh orang saat ini?
    Yuk, simak daftarnya dalam artikel ini.
  </p>
</div>

    </div>
  
</div>

<br></br>
<br></br>

<div class="konten-artikel">
  <div class="link-artikel">
    <div class="konten-list">
      <div class="konten-left">
        <div class="a img">
          <img src={art1} alt="" />
        </div>
      </div>
      <div class="konten-right">
        <h1>4 Tips Mendapatkan Pekerjaan Setelah lulus Kuliah</h1>
        <p>
        Mendapatkan pekerjaan setelah lulus kuliah pasti menjadi impian dari semua mahasiswa. 
        untuk itu simaklah, tips jitu memperoleh pekerjaan dan karier bagus setelah 
        lulus kuliah dalam artikel ini. 
        </p>
      </div>
    </div>
  </div>
</div>
<br></br>
<br></br>

<div class="konten-artikel">
  <div class="link-artikel">
    <div class="konten-list">
      <div class="konten-left">
        <div class="a img">
          <img src={art2} alt="" />
        </div>
      </div>
      <div class="konten-right">
        <h1>5 Pekerjaan Freelance Paling Menjanjikan Saat ini </h1>
        <p>
        Seiring dengan berkembanganya jaman, stigma masyarakat terkait dunia kerja pun juga mulai berubah. jika sebelumnya berkerja dikantor paling diminati, saat ini pekerjaan freelance pun mulai banyak dilirik oleh kalangan milenial.
        </p>
      </div>
    </div>
  </div>
</div>
<br></br>
<br></br>

<div class="konten-artikel">
  <div class="link-artikel">
    <div class="konten-list">
      <div class="konten-left">
        <div class="a img">
          <img src={art3} alt="" />
        </div>
      </div>
      <div class="konten-right">
        <h1>4 Pekerjaan paling menjajikan di Tahun 2023</h1>
        <p>
        Saat ini siapa yang tidak ingin memiliki pekerjaan dengan gaji yang besar? tentunya hal tersebut menjadi impian setiap orang. untuk itu, ketahuilah pekerjaan apa yang  paling menjajikan di tahun ini.
        </p>
      </div>
    </div>
  </div>
</div>
<br></br>
<br></br>

<div class="konten-artikel">
  <div class="link-artikel">
    <div class="konten-list">
      <div class="konten-left">
        <div class="a img">
          <img src={art4} alt="" />
        </div>
      </div>
      <div class="konten-right">
        <h1>7 Tips Menghindari Konflik di Tempat Kerja</h1>
        <p>
          konflik tertentu kerap kali terjadi dimana pun anda berada, tidak kecuali di tempat kerja. lalu bagaimana cara untuk mengatasi hal seperti ini?.
        </p>
      </div>
    </div>
  </div>
</div>
<br></br>
<br></br>

<div class="konten-artikel">
  <div class="link-artikel">
    <div class="konten-list">
      <div class="konten-left">
        <div class="a img">
          <img src={art5} alt="" />
        </div>
      </div>
      <div class="konten-right">
        <h1>3 Pekerjaan Online Ini Bisa Menghasilkan Gaji Besar</h1>
        <p>
        Saat ini tidak hanya pekerjaan offline di kantor saja yang bisa mendapatkan penghasilan besar. Seiring dengan berkembangnya jaman, saat ini pekerjaan bisa dilakukan di rumah hanya bermodal internet saja dan tetap menghasilkan pendapatan yang menguntungkan. Apa saja pekerjaan tersebut?.
        </p>
      </div>
    </div>
  </div>
</div>
</div>
<br></br>
<br></br>

    <Footer/>
    </div>
  );
}

export default Isi;
