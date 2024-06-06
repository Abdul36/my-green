import React from "react";
import "./table.css";
import calender from "../../Assets/Images/calender.png";
const Table = () => {
  return (
    <div>
      <div className="tablee mt-5 ms-5">
        <div className="d-flex">
          <div>
            <img
              src={calender}
              alt="Calender"
              className="img-fluid cal pt-5 ms-3"
            />
          </div>
          <div className="ms-3">
            <p className="text-white pt-5">Book a table</p>
            <p className="text-white"> Power By Open table</p>
          </div>
        </div>
        <div className="ms-3">
          <input type="text" className="ispcc" placeholder="17/08/2024" />{" "}
          <br></br>
          <input
            type="text"
            className="ispcc mt-2"
            placeholder="07:00 PM"
          />{" "}
          <br></br>
          <input type="text" className="ispcc mt-2" placeholder="2 People" />
        </div>
        <button className="fndd">Find a Table </button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default Table;
