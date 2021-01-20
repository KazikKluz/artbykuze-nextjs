import React from "react";

import styles from "./custom-button.module.css";

const CustomButton = ({ title, animated }) => (
  <a className={styles.theButton} animated={animated}>
    {title}
  </a>
);

export default CustomButton;
