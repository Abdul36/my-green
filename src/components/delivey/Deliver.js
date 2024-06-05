import React from "react";
import "./delivery.css";
import delivery from "../../Assets/Images/delivery.png";
import leaf from "../../Assets/Images/leaf.png";
import great from "../../Assets/Images/great.png";

const Deliver = () => {
  return (
    <div>
      <section className="container mt-4 position-relative">
        <div className="leafab position-absolute">
          <img src={leaf} alt="leaf" className="img-fluid" />
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 text-center">
            <img src={delivery} alt="Delivery" className="img-fluid" />
          </div>
          <div className="col-md-6 text-center text-md-start pt-5">
            <h4 className="ofr">WE OFFER</h4>
            <h2 className="fre">
              Free <span className="text-dark">Delivery!</span>
            </h2>
            <p className="insp">
              Celery potato scallion desert raisin horseradish spinach carrot
              soko. Lotus root water spinach fennel kombu maize bamboo shoot
              green bean swiss chard seakale pumpkin onion chickpea gram corn
              nuts salsify bunya pie sprout coriander water.
            </p>
            <button className="order text-white">ORDER NOW</button>
          </div>
        </div>
      </section>
      <div className="container my-5">
        <div className="d-lg-flex flex-lg-row flex-md-column align-items-center boc shadow p-4">
          <div className="d-flex flex-column flex-lg-row align-items-center mb-4 w-100">
            <div className="me-3">
              <img src={great} alt="great" className="img-fluid" />
            </div>
            <div className="text-center text-md-start">
              <b>Great Location</b>
              <p>
                Turnip greens <br /> yarrow ricebean <br /> rutabaga
              </p>
            </div>
          </div>
          <div className="d-flex flex-column flex-lg-row align-items-center mb-4 w-100">
            <div className="me-3">
              <img src={great} alt="great" className="img-fluid" />
            </div>
            <div className="text-center text-md-start">
              <b>Great Location</b>
              <p>
                Turnip greens <br /> yarrow ricebean <br /> rutabaga
              </p>
            </div>
          </div>
          <div className="d-flex flex-column flex-lg-row align-items-center mb-4 w-100">
            <div className="me-3">
              <img src={great} alt="great" className="img-fluid" />
            </div>
            <div className="text-center text-md-start">
              <b>Great Location</b>
              <p>
                Turnip greens <br /> yarrow ricebean <br /> rutabaga
              </p>
            </div>
          </div>
          <div className="d-flex flex-column flex-lg-row align-items-center mb-4 w-100">
            <div className="me-3">
              <img src={great} alt="great" className="img-fluid" />
            </div>
            <div className="text-center text-md-start">
              <b>Great Location</b>
              <p>
                Turnip greens <br /> yarrow ricebean <br /> rutabaga
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliver;
