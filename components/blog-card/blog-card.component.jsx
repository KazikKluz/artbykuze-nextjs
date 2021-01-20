import React from "react";

import styles from "./blog-card.module.css";

const BlogCard = ({ title, date, imgUrl }) => {
  return (
    <div className={styles.theCard}>
      <div className={styles.imageContainer}>
        <img className={styles.image} alt="" src={imgUrl} />
      </div>
      <h3 className={styleMedia.title}>{title}</h3>
      <p className={styles.postDate}>{date}</p>
    </div>
  );
};

export default BlogCard;
