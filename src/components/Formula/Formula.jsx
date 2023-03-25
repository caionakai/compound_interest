import { MathComponent } from "mathjax-react";
import useCompoundInterest from "../../hooks/useCompoundInterest";

import styles from "./Formula.module.scss";

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
    t = t / 12;
  }
  // if interest rate is by month, then multiply by 12
  if (interestRateFrequency === "monthly") {
    r *= 12;
  }

  const n = 12;

  const rN = r / n;
  const nT = n * t;
  const calcPow = Math.pow(1 + rN, nT);
  const pCalcPow = P * calcPow;
  const calcPowMinusOne = calcPow - 1;
  const calcPowMinusOneDividedByrN = calcPowMinusOne / rN;
  return (
    <>
      <b>Fórmula</b>
      <p>
        A fórmula para calcular os juros compostos com investimentos periódicos
        é a mostrada a seguir, sendo que P = valor inicial, r = taxa de juros, n
        = número de vezes que o juros é composto (12 = mensal, 4 = quadrimestre,
        2 = bi anual, 1 = anual), t = período em anos (dividir por 12 se for
        mensal, etc), PMT = valor mensal.
      </p>
      <div className={styles.formula}>
        <MathComponent
          tex={String.raw`FV = P \ast (1+\frac{r}{n})^{nt} + PMT \ast \frac{((1+\frac{r}{n})^{nt} - 1)}{\frac{r}{n}}`}
        />
        <MathComponent
          tex={String.raw`FV = ${P} \ast (1+\frac{${r}}{${n}})^{${n}*${t}} + ${PMT} \ast \frac{((1+\frac{${r}}{${n}})^{${n}*${t}} - 1)}{\frac{${r}}{${n}}}`}
        />
        <MathComponent
          tex={String.raw`FV = ${P} \ast (1+${rN})^{${nT}} + ${PMT} \ast \frac{((1+${rN})^{${nT}} - 1)}{${rN}}`}
        />
        <MathComponent
          tex={String.raw`FV = ${pCalcPow} + ${PMT} \ast ${calcPowMinusOneDividedByrN}`}
        />
        <MathComponent
          tex={String.raw`FV = ${pCalcPow + PMT * calcPowMinusOneDividedByrN}`}
        />
      </div>
    </>
  );
};

export default Formula;
