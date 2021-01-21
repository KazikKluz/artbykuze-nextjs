import React from "react";

import styles from "./slide.module.css";

const Slide = ({ picNo, show, id }) => {
  return (
    <div style={{ display: show === id ? "block" : "none" }}>
      <div className={styles.theSlide}>
        <div
          className={styles.background}
          style={{ backgroundImage: `url(/${picNo}.jpg)` }}
        />
      </div>
    </div>
  );
};

export default Slide;
