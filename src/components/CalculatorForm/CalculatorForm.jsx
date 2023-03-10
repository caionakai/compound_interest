import PropTypes from "prop-types";
import Button from "../Button/Button";
import Input from "../Input/Input";

import styles from "./CalculatorForm.module.scss";
const CalculatorForm = (props) => {
  return (
    <div className={styles.formWrapper}>
      <Input label="Valor Inicial" placeholder="0,00">
        <Input.TextLeft>€</Input.TextLeft>
      </Input>

      <Input label="Valor Mensal" placeholder="0,00">
        <Input.TextLeft>€</Input.TextLeft>
      </Input>

      <Input label="Taxa de Juros" placeholder="0,00">
        <Input.TextLeft>€</Input.TextLeft>
      </Input>

      <Input label="Período" placeholder="0,00">
        <Input.TextLeft>€</Input.TextLeft>
      </Input>

      <div className={styles.buttonsWrapper}>
        <Button name="Limpar" variant="noStyles" />
        <Button name="Calcular" variant="primary" />
      </div>
    </div>
  );
};

CalculatorForm.propTypes = {};

export default CalculatorForm;
