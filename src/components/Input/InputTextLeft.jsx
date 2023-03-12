import React from "react";
import PropTypes from "prop-types";
import styles from "./InputGroup.module.scss";

const InputTextLeft = ({ children }) => {
  return <div className={styles.inputText}>{children}</div>;
};

InputTextLeft.propTypes = {
  children: PropTypes.string.isRequired,
};

export default InputTextLeft;
