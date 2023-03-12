import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import CalculatorForm from "./components/CalculatorForm/CalculatorForm";
import ResultBox from "./components/ResultBox/ResultBox";
import "./App.css";

function App() {
  const [results, setResults] = useState({
    total: 0,
    totalInvested: 0,
    interest: 0,
  });

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="main">
        <CalculatorForm setResults={setResults} />
        <div className="results">
          <ResultBox title="Total" value={results.total} />
          <ResultBox title="Total Investido" value={results.totalInvested} />
          <ResultBox title="Juros" value={results.interest} />
        </div>
      </div>
    </div>
  );
}

export default App;
