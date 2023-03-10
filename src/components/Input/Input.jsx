import PropTypes from "prop-types";

import InputTextLeft from "./InputTextLeft";

import styles from "./Input.module.scss";

const Input = ({ label, children, placeholder }) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor="">{label}</label>
      <div className={styles.wrapper}>
        {children}
        <input
          type="number"
          min="0.00"
          step="0.01"
          placeholder={placeholder}
          className={styles.input}
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
};

Input.TextLeft = InputTextLeft;

export default Input;
