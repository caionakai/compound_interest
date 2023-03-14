import { useState } from "react";
import { GoCalendar } from "react-icons/go";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import InputGroup from "../Input/InputGroup";
import Select from "../Select/Select";

import styles from "./CalculatorForm.module.scss";

const CalculatorForm = ({ setResults }) => {
  const [interestRateFrequency, setInterestRateFrequency] = useState("yearly");
  const [periodFrequency, setPeriodFrequency] = useState("yearly");

  const [interestRate, setInterestRate] = useState(0);
  const [period, setPeriod] = useState(0);
  const [initialValue, setInitialValue] = useState(0);
  const [monthlyValue, setMonthlyValue] = useState(0);

  const cleanCalculator = () => {
    setInterestRateFrequency("yearly");
    setPeriodFrequency("yearly");
    setInterestRate(0);
    setPeriod(0);
    setInitialValue(0);
    setMonthlyValue(0);
  };

  const calculate = () => {
    // TO DO: make n dynamic, add another input so that user can
    // set the compound frequency
    // https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator
    // https://www.rankia.pt/bolsa/calculadora-de-juros-compostos/
    // FV = P * (1+ r/n)^nt + (PMT * ((1+r/n)^nt - 1)) / (r/n)
    // FV = future value of investment
    // P = principal amount invested
    // r = interest rate
    // n = number of times interest compounds
    // ** i.e. 12 = monthly, 4 = quarterly, 2 = semi-annually, 1 = annually
    // t = number of years investment will be active

    let numberOfTimesInterestCompounds = 12;
    let t = period;
    let r = interestRate;
    if (periodFrequency === "monthly") {
      t = period / 12;
    }
    // if interest rate is by month, then multiply by 12
    if (interestRateFrequency === "monthly") {
      r *= 12;
    }
    const nT = t * numberOfTimesInterestCompounds;
    const decimalInterestRate = r / 100;
    const rN = decimalInterestRate / numberOfTimesInterestCompounds;
    const calcInterest = Math.pow(1 + rN, nT);

    const total = parseFloat(
      initialValue * calcInterest + (monthlyValue * (calcInterest - 1)) / rN
    ).toFixed(2);

    const totalInvested = parseFloat(initialValue + monthlyValue * nT).toFixed(
      2
    );
    const interest = parseFloat(total - totalInvested).toFixed(2);
    setResults({ total, totalInvested, interest });
  };

  return (
    <div className={styles.formWrapper}>
      <InputGroup label="Valor Inicial">
        <InputGroup.TextLeft>€</InputGroup.TextLeft>
        <InputGroup.Input value={initialValue} setState={setInitialValue} />
      </InputGroup>

      <InputGroup label="Valor Mensal">
        <InputGroup.TextLeft>€</InputGroup.TextLeft>
        <InputGroup.Input value={monthlyValue} setState={setMonthlyValue} />
      </InputGroup>

      <InputGroup label="Taxa de Juros">
        <InputGroup.TextLeft>%</InputGroup.TextLeft>
        <InputGroup.Input value={interestRate} setState={setInterestRate} />
        <Select
          value={interestRateFrequency}
          setState={setInterestRateFrequency}
        >
          <Select.Option value="yearly">Ano</Select.Option>
          <Select.Option value="monthly">Mês</Select.Option>
        </Select>
      </InputGroup>

      <InputGroup label="Período">
        <InputGroup.TextLeft>
          <GoCalendar />
        </InputGroup.TextLeft>
        <InputGroup.Input value={period} setState={setPeriod} />
        <Select value={periodFrequency} setState={setPeriodFrequency}>
          <Select.Option value="yearly">Ano</Select.Option>
          <Select.Option value="monthly">Mês</Select.Option>
        </Select>
      </InputGroup>

      <div className={styles.buttonsWrapper}>
        <Button name="Limpar" variant="noStyles" onClick={cleanCalculator} />
        <Button name="Calcular" variant="primary" onClick={calculate} />
      </div>
    </div>
  );
};

CalculatorForm.propTypes = {
  setResults: PropTypes.func.isRequired,
};

export default CalculatorForm;
