import React from "react";
import Hero from "./hero/Hero";
import Deliver from "./delivey/Deliver";
import Tast from "./tasty/Tast";
import Menu from "./menu/Menu";
import Counter from "./counter/Counter";
import Gallery from "./gallety/Gallery";
import Order from "./order/Order";
import Contact from "./contact/Contact";
import Download from "./download/Download";

const Home = () => {
  return (
    <div>
      <Hero />
      <Deliver />
      <Tast />
      <Menu />
      <Counter />
      <Gallery />
      <Order />
      <Contact />
      <Download />
    </div>
  );
};

export default Home;
