import React from "react";
import "./hero.css";
import calender from "../../Assets/Images/calender.png";
import flogo from "../../Assets/Images/flogo.png";
import { Link } from "react-router-dom";
import Sign from "../sign/Sign";
import Table from "../table/Table";
const Hero = () => {
  return (
    <div>
      <section className="container-fluid hero">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navn">
          <div className="container-fluid">
            {/* Logo */}
            <a className="navbar-brand d-none d-lg-block" href="#">
              <img src={flogo} className="flogo" alt="Logo" />
            </a>
            {/* Toggle Button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Navbar Links */}
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Shop
                  </a>
                </li>
              </ul>
            </div>
            {/* SignIn Button */}
            <div className="sgn book">
              <button className="btn snf">
                <Link to="/sign" className="in">
                  SignIn
                </Link>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="container mt-5">
          <div className="row align-items-center justify-content-center">
            <div className="col-mdlg">
              <h2 className="go">
                <u style={{ color: "#8EC63F" }}>Go</u>
                <span className="text-white">Green</span>
              </h2>
              <p className="fresh text-white">
                Fresh, organic ingredients. Carefully prepared. Eat green for a
                reason
              </p>
              <button className=" get">Get Started</button>
              <button className=" our">Our Menu</button>
            </div>
            <div className="col-lg mt-4">
              <Table />
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
