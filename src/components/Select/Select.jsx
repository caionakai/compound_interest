import PropTypes from "prop-types";
import SelectOption from "./SelectOption";

const Select = ({ value, setState, children }) => {
  return (
    <select value={value} onChange={(e) => setState(e.target.value)}>
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
