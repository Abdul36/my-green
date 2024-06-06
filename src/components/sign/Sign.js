import React, { useState } from "react";
import "./sign.css";
import { Link } from "react-router-dom";
import Register from "../register/Register";
import flogo from "../../Assets/Images/flogo.png";
import blur from "../../Assets/Images/blur.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Sign = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <section className="container-fluid blc">
        <div className="bx">
          <img src={flogo} alt="flogo" className="img-fluid sgnlogo" />
        </div>
        <div className="container  pt-5">
          <div className="row ing">
            <div className="col-md">
              <h4 className="my">
                Sign In to <br />
                My <i style={{ color: "#8EC63F" }}>Application</i>
              </h4>
              <p className="insp acc">
                If you don’t have an account <br />
                you can
                <Link to="/register">
                  <span className="re"></span>Register here
                </Link>
              </p>
            </div>
            <div className="col-md shadow">
              <h4 className="text-center pt-3 sni tast">Sign In</h4>
              <p className="text-center insp">
                Access your account by entering your username and password.
                Enjoy personalized features and secure access to our services.
              </p>
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control mt-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group pt-3">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <div className="password-input-container mt-2">
                    <input
                      type={passwordShown ? "text" : "password"}
                      className="form-control password-input"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                    <span
                      className="password-toggle"
                      onClick={togglePasswordVisibility}
                    >
                      <FontAwesomeIcon
                        icon={passwordShown ? faEyeSlash : faEye}
                      />
                    </span>
                  </div>
                </div>
                <p className="for text-end">
                  <u>Forgot Password</u>
                </p>
                <button className="btn lgn">Log In</button>
              </form>
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>
      <div className="blg">
        <img src={blur} alt="" className="img-fluid bhc" />
      </div>
    </div>
  );
};

export default Sign;
