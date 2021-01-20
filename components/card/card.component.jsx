import React from "react";

import styles from "./card.module.css";

const Card = ({ title, imgUrl }) => {
  return (
    <div className={styles.title}>
      <h3 className={styles.titles}>{title}</h3>
      <div className={styles.image_container}>
        <img className={styles.image} alt="" src={imgUrl} />
      </div>
    </div>
  );
};

export default Card;
