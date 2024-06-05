import "./App.css";
import Counter from "./components/counter/Counter";
import Deliver from "./components/delivey/Deliver";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";
import Tast from "./components/tasty/Tast";

function App() {
  return (
    <div>
      <Hero />
      <Deliver />
      <Tast />
      <Menu />
      <Counter />
    </div>
  );
}

export default App;
