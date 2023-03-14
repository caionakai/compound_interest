import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import CalculatorForm from "./components/CalculatorForm/CalculatorForm";
import ResultBox from "./components/ResultBox/ResultBox";

import styles from "./App.module.scss";

function App() {
  const [results, setResults] = useState({
    total: 0,
    totalInvested: 0,
    interest: 0,
  });

  return (
    <div className={styles.app}>
      <Navbar></Navbar>
      <div className={styles.main}>
        <CalculatorForm setResults={setResults} />
        <div className={styles.results}>
          <ResultBox title="Total" value={results.total} />
          <ResultBox title="Total Investido" value={results.totalInvested} />
          <ResultBox title="Juros" value={results.interest} />
        </div>
      </div>
    </div>
  );
}

export default App;
