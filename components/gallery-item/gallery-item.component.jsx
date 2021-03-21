import React from "react";

import styles from "./gallery-item.module.scss";

const GalleryItem = ({ src }) => (
  <div className={styles.gallery_item}>
    <div className={styles.image_container}>
      <img className={styles.image} alt="" src={src} />
    </div>
    <p className={styles.description}>Some text</p>
  </div>
);

export default GalleryItem;
