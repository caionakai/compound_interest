import { GoCalendar } from "react-icons/go";
import Button from "../Button/Button";
import InputGroup from "../Input/InputGroup";
import Select from "../Select/Select";
import useCompoundInterest from "../../hooks/useCompoundInterest";

import styles from "./CalculatorForm.module.scss";

const CalculatorForm = () => {
  const {
    interestRateFrequency,
    dispatchInterestRateFrequency,
    periodFrequency,
    dispatchPeriodFrequency,
    interestRate,
    dispatchInterestRate,
    period,
    dispatchPeriod,
    initialValue,
    dispatchInitialValue,
    monthlyValue,
    dispatchMonthlyValue,
    calculateInterest,
    cleanCalculator,
  } = useCompoundInterest();

  return (
    <div className={styles.formWrapper}>
      <InputGroup label="Valor Inicial">
        <InputGroup.TextLeft>€</InputGroup.TextLeft>
        <InputGroup.Input
          value={initialValue}
          setState={dispatchInitialValue}
        />
      </InputGroup>

      <InputGroup label="Valor Mensal">
        <InputGroup.TextLeft>€</InputGroup.TextLeft>
        <InputGroup.Input
          value={monthlyValue}
          setState={dispatchMonthlyValue}
        />
      </InputGroup>

      <InputGroup label="Taxa de Juros">
        <InputGroup.TextLeft>%</InputGroup.TextLeft>
        <InputGroup.Input
          value={interestRate}
          setState={dispatchInterestRate}
        />
        <Select
          value={interestRateFrequency}
          setState={dispatchInterestRateFrequency}
        >
          <Select.Option value="yearly">Ano</Select.Option>
          <Select.Option value="monthly">Mês</Select.Option>
        </Select>
      </InputGroup>

      <InputGroup label="Período">
        <InputGroup.TextLeft>
          <GoCalendar />
        </InputGroup.TextLeft>
        <InputGroup.Input value={period} setState={dispatchPeriod} />
        <Select value={periodFrequency} setState={dispatchPeriodFrequency}>
          <Select.Option value="yearly">Ano</Select.Option>
          <Select.Option value="monthly">Mês</Select.Option>
        </Select>
      </InputGroup>

      <div className={styles.buttonsWrapper}>
        <Button name="Limpar" variant="noStyles" onClick={cleanCalculator} />
        <Button name="Calcular" variant="primary" onClick={calculateInterest} />
      </div>
    </div>
  );
};

export default CalculatorForm;
