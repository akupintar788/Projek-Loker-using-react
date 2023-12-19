import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function NavbarLanding() {
  const navbarStyle = {
    padding: "0 50px",
    height: "80px",
    backgroundColor: "rgb(255, 200, 150)",
  };
  const buttonStyle = {
    minWidth: "100px",
    marginLeft: "10px",
    backgroundColor: "orange",
    color: "black",
  };

  return (
    <Navbar expand="lg" className="custom-navbar-class" style={navbarStyle}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto me-0 my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>

          <Link to="/isi">
            <Button variant="primary" style={buttonStyle}>
              Tips kerja
            </Button>
          </Link>

          <Link to="/pages">
            <Button variant="primary" style={buttonStyle}>
              UserLogin
            </Button>
          </Link>

          <Link to="/login">
            <Button variant="primary" style={buttonStyle}>
              Sign In
            </Button>
          </Link>

          <Link to="/register">
            <Button variant="success" style={buttonStyle}>
              Sign Up
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLanding;
