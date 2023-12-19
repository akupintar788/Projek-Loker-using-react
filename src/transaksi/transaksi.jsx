import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../componen/footer";
import NavbarLanding from "../componen/navbar";
import "./transaksi.css";
import art from "../assets/orang kerja 10.jpg";

function Transaksi() {
  return (
    <div>
      <NavbarLanding />
      
      {/* <div className="search1 konten-header">
        <div className="search2">
          <div
            className="breadcrumb breadcrumb-tax"
            typeof="BreadcrumbList"
            vocab="http://schema.org/"
          >
            <span property="itemListElement" typeof="ListItem">
              <a
                property="item"
                typeof="WebPage"
                title="Kahficorp"
                className="home"
                data-wpel-link="internal"
              >
                <span property="position" content="1"></span>
              </a>
              <meta property="position" content="1" />
            </span>
            <span> &gt; </span>
            <span property="itemListElement" typeof="ListItem">
              <span property="name">
                Inilah 5 Daftar pekerjaan Paling Diminati Saat Ini
              </span>
              <meta property="position" content="2" />
            </span>
          </div>
        </div>
      </div> */}
<br />
<br />
<br />
      <div className="loker-container">
        <div className="loker-page">
          <div className="img-perusahaan">
            <img src={art} alt="Perusahaan" width="100" height="87" />
          </div>
          <div className="link-perusahaan">
            {/* Add your link here */}
          </div>
          <h1>
            <span className="perusahaan">PT. Solusindo Bintang Pratama</span>
            <span className="lowongan">Membuka lowongan</span>
          </h1>
          <div className="clearfix"></div>
          <span className="deskripsi">
            <p>"PT. Solusindo Pratama adalah perusahaan"</p>
          </span>
          <h2>Ringkasan</h2>
          <ul className="ringkasan">
            <li className="pendidikan">
              Tingkat Pendidikan
              <span>:</span>
            </li>
            <li>SMA/SMK</li>
          </ul>

          <ul className="ringkasan">
            <li className="pendidikan">
              Gender
              <span>:</span>
            </li>
            <li>Pria/wanita</li>
          </ul>

          <ul className="ringkasan">
            <li className="pendidikan">
              Umur
              <span>:</span>
            </li>
            <li>17-40 Tahun</li>
          </ul>

          <ul className="ringkasan">
            <li className="pendidikan">
              Status Kerja
              <span>:</span>
            </li>
            <li>Full time </li>
          </ul>

          <ul className="ringkasan">
            <li className="pendidikan">
              Besaran gaji 
              <span>:</span>
            </li>
            <li>2,5 -3,5 juta</li>
          </ul>
          <ul className="ringkasan">
            <li className="pendidikan">
              Lokasi kerja 
              <span>:</span>
            </li>
            <li>JL. Basuki rahmad no 2 madiun jawa timur </li>
          </ul>
          <h2>
            
            <span>Deskripsi Pekerjaan</span>
          </h2>
          <span className="loker-detail">
            <ul>
            <li>Menawarkan produk internet wifi</li>
            <li> Mencapai target penjualan</li>
            <li>Membantu pengajuan registrasi calon customer</li>
            <li>Memaintenance pembayaran customer</li>
            <li>Menjalin hubungan baik dengan customer</li>
            </ul>
          </span>

          <h2>
            <span>Syarat Pekerjaan</span>
          </h2>
          <span className="loker-detail">
            <ul>
            <li>Pria/wanita 17 – 40 tahun</li>
            <li> Pendidikan SMA/SMK/sederajat</li>
            <li>Mempunyai kendaraan bermotor</li>
            <li>Berpengalaman sales atau di bidang yang sama</li>
            <li>Komunikatif</li>
            <li>Bersedia bekerja di lapangan</li>
            <li>Pekerja keras</li>
            <li>Bersedia bekerja di bawah tekanan</li>
            <li>Siap bekerja individu / tim</li>
            <li>Jujur dan bertanggung jawab</li>
            </ul>
          </span>
          <h2></h2>


          <h2>
            <span>Kirim Lamaran</span>
          </h2>
          <ul className="ringkasan kontak">
            <li className="email">
              email
              <span>:</span>
            </li>
            <li>
              <span className="text">dede@comet.net.id</span>
              <span className="copy"></span>
            </li>
            <li className="telepon">
              Nomor Telepon
              <span>:</span>
            </li>
            <li>
              <span className="txt">+6282364572</span>
              <span className="copy"></span>
            </li>
          </ul>
          <div className="loker-tool">
            <div className="tombol">
              <div className="tombol-lamar kontak">
                lamar
                <div className="lamar-box">
                  <div className="blur">
                    <div className="formulir-web">Formulir</div>
                  </div>
                  <a href="mailto:dede@comet.net.id?subject=Lamaran%20Pekerjaan%20di%20PT.%20Solusindo%20Bintang%20Pratama">
                    <div className="email">Email</div>
                  </a>
                  <a
                    href="https://wa.me/6281802096187?text=Halo%20PT.%20Solusindo%20Bintang%20Pratama%2C%20saya%20*..NAMA..*%20mendapatkan%20informasi%20lowongan%20kerja%20dari%20LokerBandung.id.%20Saya%20berminat%20untuk%20melamar%20kerja%20sebagai%20Direct%20Sales"
                    target="_blank"
                    rel="nofollow"
                    data-wpel-link="external"
                  >
                    <div className="whatsapp">Whatsapp</div>
                  </a>
                </div>
              </div>
              <div
                className="simplefavorite-button"
                data-positid="45021"
                data-siteid="1"
                data-groupid="1"
                data-favoritecount="0"
                style={{ marginRight: "10px" }}
              >
                simpan
              </div>
              <div className="tombol-share">
                bagikan
                <div className="share-box">
                  <a
                    href="http://www.facebook.com/sharer.php?u=https://www.lokerbandung.id/lowongan/direct-sales-di-pt-solusindo-bintang-pratama/"
                    title="Share on Facebook!"
                    target="_blank"
                    rel="nofollow"
                    data-wpel-link="internet"
                  >
                    <div className="facebook"></div>
                  </a>
                </div>
              </div>
            </div>
            <div className="info-tambahan">
              <div className="published">Terbit hari ini</div>
              <div className="lapor">Lapor</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Transaksi;
