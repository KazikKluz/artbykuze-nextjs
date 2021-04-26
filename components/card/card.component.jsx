import React from "react";
import Imgix from "react-imgix";

import styles from "./card.module.css";

const Card = ({ title, imgUrl }) => {
  return (
    <div className={styles.the_card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.image_container}>
        <Imgix
          className={styles.image}
          alt=""
          src={`https://artbykuze.imgix.net/${imgUrl}.jpg`}
          sizes="(max-width: 80rem) 70vw, 25vw"
        />
      </div>
    </div>
  );
};

export default Card;
