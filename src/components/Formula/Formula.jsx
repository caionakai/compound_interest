import { MathComponent } from "mathjax-react";

import styles from "./Formula.module.scss";

const Formula = () => {
  return (
    <>
      <b>Fórmula</b>
      <p>
        A fórmula para calcular os juros compostos com investimentos periódicos
        é a seguinte:
      </p>
      <div className={styles.formula}>
        <MathComponent
          tex={String.raw`FV = P \ast (1+\frac{r}{n})^{nt} + PMT \ast \frac{((1+\frac{r}{n})^{nt} - 1)}{\frac{r}{n}}`}
        />
        <MathComponent
          tex={String.raw`FV = P \ast (1+\frac{r}{n})^{nt} + PMT \ast \frac{((1+\frac{r}{n})^{nt} - 1)}{\frac{r}{n}}`}
        />
      </div>
    </>
  );
};

export default Formula;
