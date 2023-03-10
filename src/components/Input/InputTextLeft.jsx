import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

const InputTextLeft = ({ children }) => {
  return <div className={styles.inputText}>{children}</div>;
};

InputTextLeft.propTypes = {};

export default InputTextLeft;
