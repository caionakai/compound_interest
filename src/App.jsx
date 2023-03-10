import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import CalculatorForm from "./components/CalculatorForm/CalculatorForm";
import ResultBox from "./components/ResultBox/ResultBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="main">
        <CalculatorForm />
        <div className="results">
          <ResultBox title="Total" value="€ 1000000" />
          <ResultBox title="Total Investido" value="€ 1000000" />
          <ResultBox title="Juros" value="€ 1000000" />
        </div>
      </div>
    </div>
  );
}

export default App;
