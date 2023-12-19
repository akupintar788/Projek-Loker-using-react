import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../componen/footer";
import NavbarLanding from "../componen/navbar";
import "./tipskerja.css";
import art from "../assets/orang kerja 10.jpg";

function TipsKerja() {
  return (
    <div>
      <NavbarLanding />
      <div className="search1 konten-header">
  <div className="search2">
    <div className="breadcrumb breadcrumb-tax" typeof="BreadcrumbList" vocab="http://schema.org/">
      <span property="itemListElement" typeof="ListItem">
        <a property="item" typeof="WebPage" title="Kahficorp" className="home" data-wpel-link="internal">
          <span property="position" content="1"></span>
        </a>
        <meta property="position" content="1" />
      </span>
      <span> &gt; </span>
      <span property="itemListElement" typeof="ListItem"></span>
      <span> &gt; Inilah 5 Daftar pekerjaan Paling Diminati Saat Ini</span>
    </div>
  </div>
</div>

      <div className="konten-body konten-artikelll">
        <form
          role="search"
          method="get"
          id="searchForm"
          action=""
        >
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
        <h1>Inilah 5 Daftar Pekerjaan Diminati Saat ini</h1>
        <p>
          Pada era sekarang ini, jenis pekerjaan ada banyak sekali macamnya.
          Namun, tahukah Anda pekerjaan apa yang paling diminati oleh orang saat
          ini? Yuk, simak daftarnya dalam artikel ini.
        </p>
        <div className="image">
          <img width="700" height="612" src={art} alt="" /> {/* Make sure to replace with the actual alt text and srcset */}
        </div>
        <p>
          Berbicara tentang jenis pekerjaan, pastinya terdapat banyak sekali
          macamnya. Terdapat pekerjaan dengan gaji ratusan ribu sampai dengan
          puluhan juta rupiah. Namun, tahukah Anda pekerjaan apa sekarang yang
          paling diminati oleh orang saat ini? Untuk mengetahui hal tersebut,
          berikut adalah daftar pekerjaan paling diminati saat ini.
        </p>
        <ol>
          <li>
            {/* Adjust as needed */}
            <strong>Fashion Stylist</strong>
          </li>
        </ol>
        <p>
          Sesuai dengan namanya, pekerjaan fashion stylist ini punya tugas
          terkait dengan gaya busana. Biasanya fashion stylist ini direkrut
          oleh para kalangan selebriti atau public figure. Kehadiran fashion
          stylist ini sangat penting bagi selebriti karena dapat membantu
          selebriti untuk memudahkan dalam menentukan fashion untuk digunakan
          pentas ataupun tampil di depan layar kaca.
        </p>

        <ol>
          <li>
            {/* Adjust as needed */}
            <strong>Fashion Stylist</strong>
          </li>
        </ol>
        <p>
          Sesuai dengan namanya, pekerjaan fashion stylist ini punya tugas
          terkait dengan gaya busana. Biasanya fashion stylist ini direkrut
          oleh para kalangan selebriti atau public figure. Kehadiran fashion
          stylist ini sangat penting bagi selebriti karena dapat membantu
          selebriti untuk memudahkan dalam menentukan fashion untuk digunakan
          pentas ataupun tampil di depan layar kaca.
        </p>

        <ol>
          <li>
            ::marker
            {/* Adjust as needed */}
            <strong>Fashion Stylist</strong>
          </li>
        </ol>
        <p>
          Sesuai dengan namanya, pekerjaan fashion stylist ini punya tugas
          terkait dengan gaya busana. Biasanya fashion stylist ini direkrut
          oleh para kalangan selebriti atau public figure. Kehadiran fashion
          stylist ini sangat penting bagi selebriti karena dapat membantu
          selebriti untuk memudahkan dalam menentukan fashion untuk digunakan
          pentas ataupun tampil di depan layar kaca.
        </p>


















      </div>
      <Footer />
    </div>
  );
}

export default TipsKerja;
