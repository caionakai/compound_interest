import PropTypes from "prop-types";
import styles from "./InputGroup.module.scss";

const Input = ({ value, setState }) => {
  return (
    <input
      type="number"
      min="0.00"
      step="0.01"
      placeholder="0.00"
      className={styles.input}
      value={value}
      onChange={(e) => setState(parseFloat(e.target.value))}
    />
  );
};

Input.propTypes = {
  value: PropTypes.number.isRequired,
  setState: PropTypes.func.isRequired,
};

export default Input;
