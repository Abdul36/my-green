import React from "react";
import "./order.css";

const Order = () => {
  return (
    <div>
      <section className="container-fluid odr">
        <h6 className="tast text-center pt-5">Free and Fast</h6>
        <h4 className="oder text-center">Order Now</h4>
        <p className="insp text-center">
          Inspired by recipes and creations of world’s best chefs
        </p>
        <div className="container shadow bg-white">
          <div className="row">
            <div className="col-md">
              <form action="">
                <div className="form-group pt-4 ps-3">
                  <label for="exampleInputtext">Your Name</label>
                  <input
                    type="text"
                    className="form-control custom-placeholder custom-input"
                    id="exampleInputtext"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group pt-2 ps-3">
                  <label for="exampleInputtext">Your Order</label>
                  <input
                    type="text"
                    className="form-control custom-placeholder custom-input"
                    id="exampleInputtext"
                    placeholder="Enter order Number"
                  />
                </div>
                <div className="form-group pt-2 ps-3">
                  <label for="exampleInputtext">How Much</label>
                  <input
                    type="text"
                    className="form-control custom-placeholder custom-input"
                    id="exampleInputtext"
                    placeholder="Enter Quantity"
                  />
                </div>
                <div className="form-group pt-2 pb-2 ps-3">
                  <label for="exampleFormControlTextarea1">Your Address</label>
                  <textarea
                    className="form-control custom-placeholder custom-input"
                    id="exampleFormControlTextarea1"
                    rows="5"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="col-md">
              <form action="">
                <div className="form-group pt-4 ps-3">
                  <label for="exampleInputtext">Your Name</label>
                  <input
                    type="text"
                    className="form-control custom-placeholder custom-input"
                    id="exampleInputtext"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group pt-2 ps-3">
                  <label for="exampleInputtext">Your Order</label>
                  <input
                    type="text"
                    className="form-control custom-placeholder custom-input"
                    id="exampleInputtext"
                    placeholder="Enter order Number"
                  />
                </div>
                <div className="form-group pt-2 ps-3">
                  <label for="exampleInputtext">How Much</label>
                  <input
                    type="text"
                    className="form-control custom-placeholder custom-input"
                    id="exampleInputtext"
                    placeholder="Enter Quantity"
                  />
                </div>
                <div className="form-group pt-2 pb-2 ps-3">
                  <label for="exampleFormControlTextarea1">Your Address</label>
                  <textarea
                    className="form-control custom-placeholder custom-input"
                    id="exampleFormControlTextarea1"
                    rows="5"
                  ></textarea>
                </div>
                <button className="btn now"> ORDER NOW</button>
                <br></br>
                <br></br>
              </form>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </section>
    </div>
  );
};

export default Order;
