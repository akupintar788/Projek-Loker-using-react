import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../componen/footer";
import NavbarLanding from "../componen/navbar";
import "./tipskerja.css";
import art1 from "../assets/orang kerja 11.jpg";

function TipsKerja1() {
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
        <h1>4 Tips Mendapatkan Pekerjaan Setelah Lulus Kuliah</h1>
        <p>
          Mendapatkan pekerjaan setelah lulus kuliah pasti menjadi impian dari
          semua mahasiswa. Untuk itu simaklah, tips jitu memperoleh pekerjaan
          dan karier bagus setelah lulus kuliah dalam artikel ini.
        </p>
        <div className="image">
          <img width="700" height="612" src={art1} alt="" />{" "}
          {/* Make sure to replace with the actual alt text and srcset */}
        </div>
        <p>
          Tips mendapatkan pekerjaan setelah lulus kuliah – Mendapatkan
          pekerjaan setelah lulus kuliah merupakan impian dari semua mahasiswa.
          Namun, pada kenyataannya hal tersebut bukanlah hal yang mudah.
          Persaingan kerja saat ini semakin ketat setiap tahun karena terdapat
          jutaan lulusan mahasiswa setiap tahun. Nah, untuk itu dibutuhkan tips
          mendapatkan pekerjaan setelah lulus kuliah. Dengan menggunakan tips
          dan strategi yang benar, mendapatkan pekerjaan idaman setelah
          menyelesaikan kuliah bukanlah impian belaka. Lalu, apa sajakah tips
          tersebut? Untuk mengetahui tips lengkapnya, Anda dapat simak informasi
          ada di bawah ini.
        </p>
        <ol>
          <li>
            {/* Adjust as needed */}
            <strong>Bekerja Keras Meraih Nilai Bagus</strong>
          </li>
        </ol>
        <p>
          Dalam dunia kerja, terkadang nilai yang tinggi saat kuliah bukan
          menjadi standar utama penilaian. Meskipun begitu, beberapa perusahaan
          masih menjadikan nilai sebagai bahan pertimbangan penting dalam
          menerima karyawan. Untuk itu, tidak ada salahnya untuk berjuang
          mendapatkan nilai bagus saat ulangan. Paling tidak nilai tersebut
          dapat memudahkan Anda untuk lolos pada tahap awal seleksi.
        </p>

        <ol>
          <li>
            {/* Adjust as needed */}
            <strong>Aktif Mengikuti Kegiatan Kampus</strong>
          </li>
        </ol>
        <p>
          Pada saat di bangku kuliah, tentunya terdapat banyak sekali aktivitas
          dan kegiatan lain di luar aktivitas kampus. Anda dapat mengikuti
          kegiatan organisasi, olah raga, dan juga seni budaya. Dengan mengikuti
          kegiatan tersebut, Anda dapat memperoleh banyak keterampilan baru,
          khususnya jika kegiatan tersebut berhubungan dengan peran kepemimpinan
          di lingkungan masyarakat. Keterampilan yang diperoleh dari kegiatan
          kampus tersebut nantinya dapat dimanfaatkan untuk nilai tambah pada
          saat mencari pekerjaan. Perlu diketahui, perusahaan tidak hanya
          mencari lulusan yang pintar akademis saja tetapi juga punya
          keterampilan lain seperti leadership, komunikasi, dan skill lainnya.
        </p>

        <ol>
          <li>
            {/* Adjust as needed */}
            <strong>Mencari Tahu Tentang Dunia Kerja Sejak Awal Kuliah</strong>
          </li>
        </ol>
        <p>
          Kebanyakan orang akan mencari tahu tentang layanan karier pada saat
          masa kuliah akan selesai. Hal itu memang merupakan hal yang benar,
          namun akan lebih baik lagi jika dilakukan sejak awal perkuliahan.
          Dengan mengetahui dan mencari tahu lebih awal, Anda akan mempunyai
          persiapan dan bekal yang lebih baik lagi saat memasuki dunia kerja.
          Selain ke layanan karier, Anda juga harus rajin meminta saran dan
          pendapat senior atau orang-orang yang sudah lebih dulu terjun ke dunia
          kerja. Mintalah saran tentang pembuatan CV, posisi pekerjaan, tips
          wawancara, dan lain sebagainya. Dengan persiapan yang baik, Anda dapat
          memperoleh kesan yang baik dari perusahaan tempat Anda melamar.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default TipsKerja1;
