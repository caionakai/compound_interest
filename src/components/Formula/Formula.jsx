import { MathComponent } from "mathjax-react";
import useCompoundInterest from "../../hooks/useCompoundInterest";

import styles from "./Formula.module.scss";

const truncateDecimalNumber = (number, decimalCases) => {
  const strNumber = number.toString();
  const indexOfDot = strNumber.indexOf(".") + 1;
  return parseFloat(strNumber.substring(0, decimalCases + indexOfDot));
};

const Formula = () => {
  const {
    interestRateFrequency,
    periodFrequency,
    interestRate,
    period,
    initialValue: P,
    monthlyValue: PMT,
  } = useCompoundInterest();

  let r = interestRate / 100;
  let t = period;

  if (periodFrequency === "monthly") {
    t = truncateDecimalNumber(t / 12, 5);
  }
  // if interest rate is by month, then multiply by 12
  if (interestRateFrequency === "monthly") {
    r = truncateDecimalNumber(r * 12, 5);
  }

  const n = 12;

  const rN = truncateDecimalNumber(r / n, 5);
  const nT = truncateDecimalNumber(n * t, 5);
  const calcPow = Math.pow(1 + rN, nT);
  const pCalcPow = P * calcPow;
  const calcPowMinusOne = calcPow - 1;
  const calcPowMinusOneDividedByrN = calcPowMinusOne / rN;

  const renderFormulaResolution = () => {
    // if(formIsInvalid) return;
    return (
      <>
        <MathComponent
          tex={String.raw`FV = ${P} \ast (1+\frac{${r}}{${n}})^{${n}*${t}} + ${PMT} \ast \frac{((1+\frac{${r}}{${n}})^{${n}*${t}} - 1)}{\frac{${r}}{${n}}}`}
        />
        <MathComponent
          tex={String.raw`FV = ${P} \ast (1+${rN})^{${nT}} + ${PMT} \ast \frac{((1+${rN})^{${nT}} - 1)}{${rN}}`}
        />
        <MathComponent
          tex={String.raw`FV = ${truncateDecimalNumber(
            pCalcPow,
            5
          )} + ${PMT} \ast ${truncateDecimalNumber(
            calcPowMinusOneDividedByrN,
            5
          )}`}
        />
        <MathComponent
          tex={String.raw`FV = ${truncateDecimalNumber(
            pCalcPow + PMT * calcPowMinusOneDividedByrN,
            5
          )}`}
        />
      </>
    );
  };

  return (
    <>
      <b>Fórmula</b>
      <p>
        A fórmula para calcular os juros compostos com investimentos periódicos
        é a mostrada a seguir, sendo que:
        <ul>
          <li>P = valor inicial</li>
          <li>r = taxa de juros (em decimal)</li>
          <li>
            n = número de vezes que o juros é composto (12 = mensal, 4 =
            quadrimestre, 2 = bi anual, 1 = anual)
          </li>
          <li>t = período em anos (dividir por 12 se for mensal, etc)</li>
          <li>PMT = valor mensal</li>
        </ul>
      </p>
      <div className={styles.formula}>
        <MathComponent
          tex={String.raw`FV = P \ast (1+\frac{r}{n})^{nt} + PMT \ast \frac{((1+\frac{r}{n})^{nt} - 1)}{\frac{r}{n}}`}
        />
        {renderFormulaResolution()}
      </div>
    </>
  );
};

export default Formula;
