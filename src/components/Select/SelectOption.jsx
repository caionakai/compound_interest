import PropTypes from "prop-types";

const SelectOption = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};

SelectOption.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SelectOption;
