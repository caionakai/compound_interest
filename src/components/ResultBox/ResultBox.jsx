import PropTypes from "prop-types";

import styles from "./ResultBox.module.scss";

const ResultBox = ({ title, value }) => {
  return (
    <div className={styles.resultBox}>
      <p>{title}</p>
      <span>{value}</span>
    </div>
  );
};

ResultBox.propTypes = {};

export default ResultBox;
