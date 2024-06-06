import React from "react";
import "./hero.css";
import calender from "../../Assets/Images/calender.png";
import flogo from "../../Assets/Images/flogo.png";
import { Link } from "react-router-dom";
import Sign from "../sign/Sign";
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
            <div className="col-md">
              <h2 className="go">
                <u style={{ color: "#8EC63F" }}>Go</u>{" "}
                <span className="text-white">Green</span>
              </h2>
              <p className="fresh text-white">
                Fresh, organic ingredients. Carefully prepared. Eat green for a
                reason
              </p>
              <button className="btn book text-white get">Get Started</button>
              <button className="btn text-white our ms-2">Our Menu</button>
            </div>
            <div className="col-md">
              <div className="box text-white">
                <div className="d-flex cal">
                  <div>
                    <img
                      src={calender}
                      alt="calender"
                      className="img-fluid calender"
                    />
                  </div>
                  <div>
                    <p>Book a Table</p>
                    <p className="power">Powered by OpenTable</p>
                  </div>
                </div>
                <span>
                  <input type="text" className="fx" placeholder="5/18/2023" />{" "}
                  <br></br>
                  <input
                    type="text"
                    className="fx mt-2"
                    placeholder="7:00 pm"
                  />
                  <br></br>
                  <input
                    type="text"
                    className="fx mt-2"
                    placeholder="2 People"
                  />
                  <br></br>
                  <button className="btn book mt-3 mb-3">Book a Table</button>
                  <br></br>
                </span>
                <br></br>
              </div>
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
