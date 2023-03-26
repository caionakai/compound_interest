import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./InputGroup.module.scss";

const Input = ({ value, setState }) => {
  const [isInputInvalid, setIsInputInvalid] = useState(false);
  const onBlur = () => {
    if (value) setIsInputInvalid(false);
    else setIsInputInvalid(true);
  };

  return (
    <input
      type="number"
      min="0.00"
      step="1.00"
      placeholder="0.00"
      className={`${styles.input} ${isInputInvalid && styles.invalidInput}`}
      value={value}
      onChange={(e) => setState(parseFloat(e.target.value))}
      onBlur={onBlur}
    />
  );
};

Input.propTypes = {
  value: PropTypes.number.isRequired,
  setState: PropTypes.func.isRequired,
};

export default Input;
