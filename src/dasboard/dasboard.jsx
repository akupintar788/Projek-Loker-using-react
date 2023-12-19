
import React from "react";
import PPK from "../assets/BUMN.png";
import PPK1 from "../assets/biznet.jpeg";
import PPK2 from "../assets/pama.png";
import PPK3 from "../assets/pln.png";
import PPK4 from "../assets/kai.jpg";
import PPK5 from "../assets/pertamina.jpg";
import PPK6 from "../assets/BUMN.png";
import Footer from "../componen/footer";
import NavbarLanding from "../componen/navbar";
import "./dasboard.css";
import { Container, Row, Col } from "react-bootstrap";
// Initialization for ES Users
import { Input, Ripple, initMDB } from "mdb-ui-kit";
import { MDBCol, MDBInput } from "mdbreact";
import { Link } from 'react-router-dom';


initMDB({ Input, Ripple });
function Dashboard() {
  return (
    <div>
      <NavbarLanding />
      <br />
      <br />
      <MDBCol md="4" className="text-end">
  <MDBInput
    hint="Cari Lowongan"
    type="text"
    containerClass="active-pink active-pink-2 mt-0 mb-3"
    className="smaller-input"
  />
</MDBCol>

{/* <Form className="checkbox-form">
  {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label ="Freelance"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="Full Time"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
      <Form.Check
        inline
        label="Part Time"
        type={type}
        id={`inline-${type}-3`}
      />
    </div>
  ))}
</Form> */}

<Container className="containerrr">
  {[
    {
      id: 1,
      imageSrc: PPK, // Replace PPK1 with the appropriate image source
      title: "TELLER BANK BUMN 1",
      link: "https://www.jobstreet.co.id/id/PT-Mutualplus-Global-Resources-jobs",
      education: "S1/D4",
      employmentType: "Full Time",
      location: "Kota Bandung",
    },
    {
      id: 2,
      imageSrc: PPK2, // Replace PPK1 with the appropriate image source
      title: "TELLER BANK BUMN 1",
      link: "https://www.jobstreet.co.id/id/PT-Mutualplus-Global-Resources-jobs",
      education: "S1/D4",
      employmentType: "Full Time",
      location: "Kota Bandung",
    },
    {
      id: 2,
      imageSrc: PPK5, // Replace PPK1 with the appropriate image source
      title: "TELLER BANK BUMN 1",
      link: "https://www.jobstreet.co.id/id/PT-Mutualplus-Global-Resources-jobs",
      education: "S1/D4",
      employmentType: "Full Time",
      location: "Kota Bandung",
    },
    {
      id: 2,
      imageSrc: PPK3, // Replace PPK1 with the appropriate image source
      title: "TELLER BANK BUMN 1",
      link: "https://www.jobstreet.co.id/id/PT-Mutualplus-Global-Resources-jobs",
      education: "S1/D4",
      employmentType: "Full Time",
      location: "Kota Bandung",
    },
    {
      id: 2,
      imageSrc: PPK4, // Replace PPK1 with the appropriate image source
      title: "TELLER BANK BUMN 1",
      link: "https://www.jobstreet.co.id/id/PT-Mutualplus-Global-Resources-jobs",
      education: "S1/D4",
      employmentType: "Full Time",
      location: "Kota Bandung",
    },
    

  ].map((item) => (
    <Col key={item.id} md={4}>
      <div className="abi">
        <div className="abi2">
          <div className="img">
            <img src={item.imageSrc} alt={`Image ${item.id}`} />
          </div>
          <div className="abi3">
          <Link to="/Transaksi">
          <h1>{item.title}</h1>
          </Link>
            <p>{item.link}</p>
            <p>{item.education}</p>
            <p>{item.employmentType}</p>
            <p>{item.location}</p>
          </div>
        </div>
      </div>
    </Col>
  ))}



    </Container>
      <Container className="containerr">
        <Row>

          <Col md={4}>
            <div className="abidin">
              <div className="abidin1">
                <div className="column1">
                  <div className="img">
                    <img src={PPK1} alt="" srcset="" />
                  </div>
                  <div className="penjelasan">
                    <h1>TELLER  BANK BUMN</h1>
                    <p>https://www.jobstreet.co.id/id/PT-Mutualplus-Global-Resources-jobs</p>
                    <p>S1/D4</p>
                    <p>Full Time</p>
                    <p>Kota Bandung</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Item 2 */}
          <Col md={4}>
            <div className="abidin">
              <div className="abidin1">
                <div className="column1">
                  <div className="img">
                    <img src={PPK2} alt="" srcset="" />
                  </div>
                  <div className="penjelasan">
                    <h1>TELLER  BANK BUMN</h1>
                    <p>https://www.jobstreet.co.id/id/PT-Mutualplus-Global-Resources-jobs</p>
                    <p>S1/D4</p>
                    <p>Full Time</p>
                    <p>Kota Bandung</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Item 3 */}
          <Col md={4}>
            <div className="abidin">
              <div className="abidin1">
                <div className="column1">
                  <div className="img">
                    <img src={PPK3} alt="" srcset="" />
                  </div>
                  <div className="penjelasan">
                    <h1>TELLER  BANK BUMN</h1>
                    <p>https://www.jobstreet.co.id/id/PT-Mutualplus-Global-Resources-jobs</p>
                    <p>S1/D4</p>
                    <p>Full Time</p>
                    <p>Kota Bandung</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className="abidin">
              <div className="abidin1">
                <div className="column1">
                  <div className="img">
                    <img src={PPK4} alt="" srcset="" />
                  </div>
                  <div className="penjelasan">
                    <h1>TELLER  BANK BUMN</h1>
                    <p>https://www.jobstreet.co.id/id/PT-Mutualplus-Global-Resources-jobs</p>
                    <p>S1/D4</p>
                    <p>Full Time</p>
                    <p>Kota Bandung</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className="abidin">
              <div className="abidin1">
                <div className="column1">
                  <div className="img">
                    <img src={PPK5} alt="" srcset="" />
                  </div>
                  <div className="penjelasan">
                    <h1>TELLER  BANK BUMN</h1>
                    <p>https://www.jobstreet.co.id/id/PT-Mutualplus-Global-Resources-jobs</p>
                    <p>S1/D4</p>
                    <p>Full Time</p>
                    <p>Kota Bandung</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className="abidin">
              <div className="abidin1">
                <div className="column1">
                  <div className="img">+
                    <img src={PPK6} alt="" srcset="" />
                  </div>
                  <div className="penjelasan">
                    <h1>TELLER  BANK BUMN</h1>
                    <p>https://www.jobstreet.co.id/id/PT-Mutualplus-Global-Resources-jobs</p>
                    <p>S1/D4</p>
                    <p>Full Time</p>
                    <p>Kota Bandung</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Dashboard;