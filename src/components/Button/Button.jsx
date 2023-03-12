import PropTypes from "prop-types";

import styles from "./Button.module.scss";

const Button = ({ name, variant, onClick }) => {
  const variantStyle = styles[variant];
  return (
    <button className={`${styles.button} ${variantStyle}`} onClick={onClick}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
