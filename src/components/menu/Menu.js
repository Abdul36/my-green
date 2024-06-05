import React, { useState } from "react";
import "./menu.css";

const Menu = () => {
  const [showFullMenu, setShowFullMenu] = useState(false);

  const handleShowFullMenu = () => {
    setShowFullMenu(!showFullMenu);
  };

  return (
    <div>
      <section className="container-fluid">
        <h6 className="text-center pt-5 tast">TASTY & CRUNCHY</h6>
        <h2 className="text-center men">Our Menu</h2>
        <p className="insp text-center pb-4">
          Inspired by recipes and creations of world’s best chefs
        </p>
        <div className="container">
          <div className="row">
            <div className="col-md">
              <b className="">TOMATO CAPRESE</b>
              <b className="price"> $ 4.00</b>
              <p>
                Heirloom cherry tomatoes, high-quality extra-virgin olive oil
              </p>
              <hr className="hor"></hr>
            </div>
            <div className="col-md">
              <b className="">TOMATO CAPRESE</b>
              <b className="price"> $ 4.00</b>
              <p>
                Heirloom cherry tomatoes, high-quality extra-virgin olive oil
              </p>
              <hr className="hor"></hr>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <b className="">TOMATO CAPRESE</b>
              <b className="price"> $ 4.00</b>
              <p>
                Heirloom cherry tomatoes, high-quality extra-virgin olive oil
              </p>
              <hr className="hor"></hr>
            </div>
            <div className="col-md">
              <b className="">TOMATO CAPRESE</b>
              <b className="price"> $ 4.00</b>
              <p>
                Heirloom cherry tomatoes, high-quality extra-virgin olive oil
              </p>
              <hr className="hor"></hr>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <b className="">TOMATO CAPRESE</b>
              <b className="price"> $ 4.00</b>
              <p>
                Heirloom cherry tomatoes, high-quality extra-virgin olive oil
              </p>
              <hr className="hor"></hr>
            </div>
            <div className="col-md">
              <b className="">TOMATO CAPRESE</b>
              <b className="price"> $ 4.00</b>
              <p>
                Heirloom cherry tomatoes, high-quality extra-virgin olive oil
              </p>
              <hr className="hor"></hr>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <b className="">TOMATO CAPRESE</b>
              <b className="price"> $ 4.00</b>
              <p>
                Heirloom cherry tomatoes, high-quality extra-virgin olive oil
              </p>
              <hr className="hor"></hr>
            </div>
            <div className="col-md">
              <b className="">TOMATO CAPRESE</b>
              <b className="price"> $ 4.00</b>
              <p>
                Heirloom cherry tomatoes, high-quality extra-virgin olive oil
              </p>
              <hr className="hor"></hr>
            </div>
          </div>

          {/* Additional menu items */}
          {showFullMenu && (
            <>
              <div className="row">
                <div className="col-md">
                  <b className="">TOMATO CAPRESE</b>
                  <b className="price"> $ 4.00</b>
                  <p>
                    Heirloom cherry tomatoes, high-quality extra-virgin olive
                    oil
                  </p>
                  <hr className="hor"></hr>
                </div>
                <div className="col-md">
                  <b className="">TOMATO CAPRESE</b>
                  <b className="price"> $ 4.00</b>
                  <p>
                    Heirloom cherry tomatoes, high-quality extra-virgin olive
                    oil
                  </p>
                  <hr className="hor"></hr>
                </div>
              </div>

              <div className="row">
                <div className="col-md">
                  <b className="">TOMATO CAPRESE</b>
                  <b className="price"> $ 4.00</b>
                  <p>
                    Heirloom cherry tomatoes, high-quality extra-virgin olive
                    oil
                  </p>
                  <hr className="hor"></hr>
                </div>
                <div className="col-md">
                  <b className="">TOMATO CAPRESE</b>
                  <b className="price"> $ 4.00</b>
                  <p>
                    Heirloom cherry tomatoes, high-quality extra-virgin olive
                    oil
                  </p>
                  <hr className="hor"></hr>
                </div>
              </div>
            </>
          )}

          <button className="btn1" onClick={handleShowFullMenu}>
            {showFullMenu ? "SHOW LESS" : "VIEW FULL MENU"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Menu;
