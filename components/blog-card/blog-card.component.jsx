import React from "react";
import Imgix from "react-imgix";

import styles from "./blog-card.module.css";

const BlogCard = ({ title, date, imgUrl }) => {
  return (
    <div className={styles.theCard}>
      <div className={styles.imageContainer}>
        <Imgix
          className={styles.image}
          alt=""
          src={`https://artbykuze.imgix.net/${imgUrl}.jpg`}
          sizes="(max-width: 65rem) 70vw, 25vw"
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.postDate}>{date}</p>
    </div>
  );
};

export default BlogCard;
