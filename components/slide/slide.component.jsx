import React from "react";
import Imgix from "react-imgix";

import styles from "./slide.module.css";

const Slide = ({ picNo, show, id }) => {
  return (
    <div
      className={styles.container}
      style={{ display: show === id ? "block" : "none" }}
    >
      <div className={styles.theSlide}>
        <Imgix
          className={styles.background}
          src={`https://artbykuze.imgix.net/${picNo}.jpg`}
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default Slide;

// <Imgix
//           className={styles.background}
//           src={`https://artbykuze.imgix.net/${picNo}.jpg?q=100`}
//           sizes="100vw"
//         />
