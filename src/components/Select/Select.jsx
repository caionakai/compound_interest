import PropTypes from "prop-types";
import SelectOption from "./SelectOption";

import styles from "./Select.module.scss";

const Select = ({ value, setState, children }) => {
  return (
    <select
      value={value}
      onChange={(e) => setState(e.target.value)}
      className={styles.select}
    >
      {children}
    </select>
  );
};

Select.Option = SelectOption;

Select.propTypes = {
  value: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Select;
