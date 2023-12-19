import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../componen/footer";
import NavbarLanding from "../componen/navbar";
import "./tipskerja.css";
import art2 from "../assets/orang kerja 12.jpg";

function TipsKerja2() {
  return (
    <div>
      <NavbarLanding />
      <div className="search1 konten-header">
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
            <span property="itemListElement" typeof="ListItem"></span>
            <span>
              {" "}
              &gt; Inilah 5 Daftar pekerjaan Paling Diminati Saat Ini
            </span>
          </div>
        </div>
      </div>

      <div className="konten-body konten-artikelll">
        <form role="search" method="get" id="searchForm" action="">
          <input
            type="text"
            name="s"
            id="s"
            className="search-text search-single"
            placeholder="Cari artikel disini.."
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "cari artikel disini..")}
          />
          <input type="hidden" name="post-type" value="post" />
        </form>
        <h1>5 Pekerjaan Freelance Paling Menjanjikan Saat Ini</h1>
        <p>
          Seiring dengan berkembangnya jaman, stigma masyarakat terkait dunia
          kerja pun juga mulai berubah. Jika sebelumnya bekerja di kantor paling
          diminati, saat ini pekerjaan freelance pun mulai banyak dilirik oleh
          kalangan milenial.
        </p>
        <div className="image">
          <img width="700" height="612" src={art2} alt="" />{" "}
          {/* Make sure to replace with the actual alt text and srcset */}
        </div>
        <p>
          Pekerjaan Freelance Paling Menjanjikan – Pada beberapa tahun lalu,
          bekerja kantoran merupakan pekerjaan paling diminati dan bergengsi.
          Bahkan, orang yang tidak bekerja di kantor kerap kali dianggap sebagai
          pengangguran. Namun, saat ini stigma tersebut sudah mulai berubah.
          Saat ini, pekerjaan freelance mulai banyak diminati oleh kalangan anak
          muda milenial. Nah, berikut ini adalah daftar pekerjaan freelance
          paling menjanjikan untuk dilakukan.
        </p>
        <ol>
          <li>
            {/* Adjust as needed */}
            <strong>Penulis Artikel/Konten</strong>
          </li>
        </ol>
        <p>
          Pekerjaan freelance pertama dengan penghasilan menjanjikan adalah
          penulis artikel atau konten. Pekerjaan ini biasa dikenal dengan nama
          freelance writer. Jenis pekerjaan ini dapat dilakukan kapan saja dan
          juga di mana saja. Untuk dapat menjadi writer freelance, Anda cukup
          bermodalkan kemampuan menulis dan juga laptop. Jika dulu profesi
          penulis identik dengan menulis di buku, media cetak, koran, dan juga
          majalah, namun writer freelancer menuliskan karyanya untuk konten
          digital. Anda dapat menjadi penulis freelance untuk website, blog,
          ataupun penulisan konten artikel SEO. Dari menjadi penulis freelance,
          Anda dapat mendapatkan penghasilan jutaan rupiah setiap bulan.
        </p>

        <ol>
          <li>
            {/* Adjust as needed */}
            <strong>Desain Grafis</strong>
          </li>
        </ol>
        <p>
          Menjadi desainer grafis juga merupakan pekerjaan freelancer dengan
          penghasilan yang cukup besar. Bahkan, jika Anda dapat menjadi desain
          grafis untuk klien influencer penghasilan yang diperoleh dapat
          mencapai hingga puluhan juta rupiah per bulan. Untuk menawarkan jasa
          desain grafis tersebut, Anda dapat memanfaatkan platform-platform
          pencari kerja.
        </p>

        <ol>
          <li>
            {/* Adjust as needed */}
            <strong>Translator</strong>
          </li>
        </ol>
        <p>
          Bagi Anda yang berminat dan memiliki kemampuan dalam menggunakan
          bahasa asing, peluang untuk mendapatkan pekerjaan sebagai freelance
          translator sangat terbuka. Pekerjaan sebagai translator ini dapat Anda
          lakukan kapan dan di mana saja. Sebagai translator, Anda bertugas
          untuk menerjemahkan film asing, dokumen asing, penerjemah buku, dan
          lain sebagainya. Tentunya, untuk dapat mendalami profesi ini, Anda
          harus pandai dan menguasai bahasa asing tertentu. Bukan hanya sekadar
          bisa, tetapi Anda juga harus mengetahui kaidah penulisan bahasa
          tersebut. Untuk urusan gaji, pekerjaan sebagai translator ini cukup
          menjanjikan untuk ditekuni.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default TipsKerja2;
