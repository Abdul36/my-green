import React from "react";
import "./tasty.css";
import cart from "../../Assets/Images/cart.png";
import image7 from "../../Assets/Images/image7.png";
import image8 from "../../Assets/Images/image8.png";
import image9 from "../../Assets/Images/image9.png";
const Tast = () => {
  return (
    <div>
      <section className="container-fluid">
        <h5 className="text-center tas">TASTY & CRUNCHY</h5>
        <h2 className="text-center chs">Choose & Enjoy</h2>
        <p className="insp text-center">
          Inspired by recipes and creations of world’s best chefs
        </p>
        <div className="container p-4">
          <div className="d-lg-flex flex-lg-row flex-md-column justify-content-center align-items-center text-center">
            <div className="d-flex flex-column align-items-center mb-4">
              <img src={cart} alt="cartoon" className="img-fluid cart mb-3" />
              <b>Gorgeous Appetizers</b>
              <p className="insp text-center">
                Inspired by recipes and creations of world’s best chefs
              </p>
              <b>
                <u className="underline-green">View Full Menu</u>
              </b>
            </div>
            <div className="d-flex flex-column align-items-center mb-4">
              <img src={image7} alt="cartoon" className="img-fluid cart mb-3" />
              <b>Gorgeous Appetizers</b>
              <p className="insp text-center">
                Inspired by recipes and creations of world’s best chefs
              </p>
              <b>
                <u className="underline-green">BOOK YOUR TABLE</u>
              </b>
            </div>
            <div className="d-flex flex-column align-items-center mb-4">
              <img src={image8} alt="cartoon" className="img-fluid cart mb-3" />
              <b>Gorgeous Appetizers</b>
              <p className="insp text-center">
                Inspired by recipes and creations of world’s best chefs
              </p>
              <b>
                <u className="underline-green">CONTACT US</u>
              </b>
            </div>
            <div className="d-flex flex-column align-items-center mb-4">
              <img src={image9} alt="cartoon" className="img-fluid cart mb-3" />
              <b>Gorgeous Appetizers</b>
              <p className="insp text-center">
                Inspired by recipes and creations of world’s best chefs
              </p>
              <b>
                <u className="underline-green">MORE DETAILS</u>
              </b>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tast;
