import React from "react";
import "./table.css";
import calender from "../../Assets/Images/calender.png";

const Table = () => {
  return (
    <div>
      <div className="container tablee my-4 ">
        <div className="d-flex justify-content-evenly align-items-center mb-3">
          <div>
            <img src={calender} alt="Calendar" className="img-fluid cal" />
          </div>
          <div>
            <p>Book a Table</p>
            <p>Powered by Open Table</p>
          </div>
        </div>
        <div className="d-flex flex-column">
          <input type="date" className="form-control my-2" />
          <input type="time" className="form-control my-2" />
          <select className="form-control my-2">
            <option value="" disabled selected>
              2 Persons
            </option>
            <option value="1">1 Person</option>
            <option value="2">2 Persons</option>
            <option value="3">3 Persons</option>
            <option value="4">4 Persons</option>
            <option value="5">5 Persons</option>
            <option value="6">6 Persons</option>
            <option value="7">7 Persons</option>
            <option value="8">8 Persons</option>
            <option value="9">9 Persons</option>
            <option value="10">10 Persons</option>
          </select>
        </div>
        <div className="d-flex justify-content-center mt-2 mb-3">
          <button className="btn findd ">Book a Table</button>
        </div>
      </div>
    </div>
  );
};

export default Table;
