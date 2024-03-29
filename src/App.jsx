import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import CalculatorForm from "./components/CalculatorForm/CalculatorForm";
import ResultBox from "./components/ResultBox/ResultBox";
import Formula from "./components/Formula/Formula";

import styles from "./App.module.scss";

function App() {
  const results = useSelector((state) => state.compoundInterest.results);
  return (
    <div className={styles.app}>
      <Navbar></Navbar>
      <div className={styles.main}>
        <CalculatorForm />
        <div className={styles.results}>
          <ResultBox title="Total" value={results.total} />
          <ResultBox title="Total Investido" value={results.totalInvested} />
          <ResultBox title="Juros" value={results.interest} />
        </div>
      </div>
      <div className={styles.body}>
        <b>O que são juros compostos?</b>
        <p>
          Juros compostos são a adição de juros ao valor principal de um
          empréstimo ou depósito, ou seja, juros sobre o valor principal mais
          juros. É o resultado de reinvestir os juros, ou adicioná-los ao
          capital emprestado em vez de pagá-los, ou exigir o pagamento do
          credor, de modo que os juros no próximo período sejam ganhos sobre a
          soma principal mais os juros acumulados anteriormente.
        </p>

        <Formula />
      </div>
    </div>
  );
}

export default App;
