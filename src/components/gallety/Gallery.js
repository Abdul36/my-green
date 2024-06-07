import React from "react";
import "./gallery.css";
import img12 from "../../Assets/Images/img12.png";
import img13 from "../../Assets/Images/img13.png";
import img14 from "../../Assets/Images/img14.png";
import img15 from "../../Assets/Images/img15.png";
import img16 from "../../Assets/Images/img16.png";
import img17 from "../../Assets/Images/img17.png";

const Gallery = () => {
  return (
    <div>
      <section className="container-fluid">
        <h6 className="text-center pt-5 tast">TASTY & CRUNCHY</h6>
        <h2 className="text-center gal">Our Gallery</h2>
        <p className="insp text-center">
          Inspired by recipes and creations of world’s best chefs
        </p>
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="pcs">
              <img src={img12} alt="" className="img-fluid g1 mt-2" />
              <img src={img13} alt="" className="img-fluid ms-2 mt-2 g2" />
              <img src={img14} alt="" className="img-fluid ms-2 g3 mt-2" />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="pcs">
              <img src={img15} alt="" className="img-fluid mt-2 g2" />
              <img src={img16} alt="" className="img-fluid ms-2 g1 mt-2" />
              <img src={img17} alt="" className="img-fluid ms-2 g3 mt-2" />
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
