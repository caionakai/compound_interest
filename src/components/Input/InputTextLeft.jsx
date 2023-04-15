import React from "react";
import PropTypes from "prop-types";
import styles from "./InputGroup.module.scss";

const InputTextLeft = ({ children }) => {
  return <div className={styles.inputText}>{children}</div>;
};

InputTextLeft.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default InputTextLeft;
