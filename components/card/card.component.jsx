import React from "react";

import styles from "./card.module.css";

const Card = ({ title, imgUrl }) => {
  return (
    <div className={styles.the_card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.image_container}>
        <img className={styles.image} alt="" src={imgUrl} />
      </div>
    </div>
  );
};

export default Card;
