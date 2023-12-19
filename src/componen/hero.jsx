import React from "react";
import Button from "react-bootstrap/Button";
import landing from "../assets/gambar7.png";

function Hero() {
  return (
    <div className="container-fluid px-4 py-5 my-5 text-center" style={{ marginTop: "60px" }}>
      <div className="lc-block mb-4">
        <div className="row align-items-center"> {/* Gunakan align-items-center untuk vertikal centering */}
          <div className="col-lg-6 order-2 order-lg-1"> {/* Gunakan order untuk mengubah urutan di perangkat seluler */}
            <h3>Kahfi Corporation</h3><br></br>
            <p className="lead">
              The job vacancy company founded by Kahfi in 2023 in the Madiun area, located in Caruban Regency, is a company that provides job vacancy information.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="px-4"
              href="/"
              style={{
                backgroundColor: "orange",
                color: "black",
                marginTop: "20px",
              }}
            >
              More information
            </Button>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 text-center"> {/* Gunakan order untuk mengubah urutan di perangkat seluler */}
            <img src={landing} alt="gambar7.png" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
