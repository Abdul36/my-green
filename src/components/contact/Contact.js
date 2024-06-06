import React from "react";
import "./contact.css";
import clock from "../../Assets/Images/clock.svg";
import location from "../../Assets/Images/location.svg";
import facebook from "../../Assets/Images/facebook.svg";
import linkedin from "../../Assets/Images/linkedin.svg";
import pintrest from "../../Assets/Images/pintrest.svg";
import twitter from "../../Assets/Images/twitter.svg";

const Contact = () => {
  return (
    <div>
      <section className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-lg-6 bg-dark text-white text-center p-4">
            <button
              className="btn call text-white mb-3"
              style={{ marginTop: "10%", backgroundColor: "#8EC63F" }}
            >
              CALL US
            </button>
            <p className="phn text-center">+0123254568589</p>
            <div className="d-flex ntr">
              <div>
                <img src={clock} alt="" />
              </div>
              <div>
                <p className="timing">
                  Mon-Thu: 11.00 – 23.00 <br />
                  Sat: 12.00 – 23.00 <br />
                  Sun: 12.00 – 21.00
                </p>
              </div>
            </div>
            <div className="d-flex ntr pt-4">
              <div>
                <img src={location} alt="" />
              </div>
              <div>
                <p className="timing">
                  60 East 65th Street <br />
                  New York City <br />
                  NY 10065
                </p>
              </div>
            </div>
            <div className="social pt-4">
              <img src={facebook} alt="facebook" className="img-fluid" />
              <img src={linkedin} alt="linkedin" className="img-fluid ms-3" />
              <img src={pintrest} alt="pintrest" className="img-fluid ms-3" />
              <img src={twitter} alt="twitter" className="img-fluid ms-3" />
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.6539515752384!2d-122.43326742499578!3d37.77471151216504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580a46d120f2d%3A0x4190b4be5ef317b!2sChurch%20Of%208%20Wheels!5e0!3m2!1sen!2s!4v1717658705939!5m2!1sen!2s"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
