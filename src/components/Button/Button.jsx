import PropTypes from "prop-types";

import styles from "./Button.module.scss";

const Button = ({ name, variant }) => {
  const variantStyle = styles[variant];
  return <button className={`${styles.button} ${variantStyle}`}>{name}</button>;
};

Button.propTypes = {};

export default Button;
