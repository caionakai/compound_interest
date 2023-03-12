import PropTypes from "prop-types";

import InputTextLeft from "./InputTextLeft";
import Input from "./Input";

import styles from "./InputGroup.module.scss";

const InputGroup = ({ label, children }) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor="">{label}</label>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

InputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
};

InputGroup.TextLeft = InputTextLeft;
InputGroup.Input = Input;

export default InputGroup;
