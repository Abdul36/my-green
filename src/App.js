import "./App.css";
import Contact from "./components/contact/Contact";
import Counter from "./components/counter/Counter";
import Deliver from "./components/delivey/Deliver";
import Gallery from "./components/gallety/Gallery";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";
import Order from "./components/order/Order";
import Tast from "./components/tasty/Tast";

function App() {
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
    </div>
  );
}

export default App;
