import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./counter.css";
import blur from "../../Assets/Images/blur.png";
import leaf from "../../Assets/Images/leaf.png";
const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2, // Adjust as needed
  });

  return (
    <div>
      <section className="container-fluid cntr mt-5" ref={ref}>
        <div className="blrrel">
          <img src={blur} alt="Blur Leaf" className="img-fluid blur" />
        </div>
        <h6 className="meet text-center pt-5">MEET US BETTER</h6>
        <h2 className="text-white text-center tav">Our Taverna in Numbers</h2>
        <hr className="her bg-primary"></hr>
        <p className="insp text-center pt-3">
          Inspired by recipes and creations of world’s best chefs
        </p>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="d-lg-flex gap-4">
                <div className="me-lg-4 text-center">
                  <CountUp
                    end={370}
                    duration={5}
                    start={inView ? 0 : null}
                    className="counter-number"
                  />
                  <p className="cases cse text-center">Cases Completed</p>
                </div>
                <div className="me-lg-4 text-center">
                  <CountUp
                    end={97}
                    duration={5}
                    start={inView ? 0 : null}
                    className="counter-number"
                  />
                  <p className="cases cse text-center">Experts Working</p>
                </div>
                <div className="me-lg-4 text-center">
                  <CountUp
                    end={100}
                    duration={5}
                    start={inView ? 0 : null}
                    className="counter-number"
                  />
                  <p className="cases cse text-center">Satisfied Clients%</p>
                </div>
                <div className="text-center">
                  <CountUp
                    end={128}
                    duration={5}
                    start={inView ? 0 : null}
                    className="counter-number"
                  />
                  <p className="cases cse text-center">Awards Winning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absleaf">
          <img src={leaf} alt="leaf " className="img-fluid leaf" />
        </div>
      </section>
    </div>
  );
};

export default Counter;
