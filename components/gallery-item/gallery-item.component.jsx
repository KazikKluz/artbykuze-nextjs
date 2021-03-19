import React from "react";

import styles from "./gallery-item.module.css";

const GalleryItem = ({ src }) => (
  <div className={styles.gallery_item}>
    <div className={styles.image_container}>
      <img className={styles.image} alt="" src={src} />
    </div>
  </div>
);

export default GalleryItem;
