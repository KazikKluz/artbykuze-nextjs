import React from "react";

import styles from "./gallery-item.module.scss";

const GalleryItem = ({ src }) => (
  <div className={styles.gallery_item}>
    <div className={styles.image_container}>
      <img className={styles.image} alt="" src={src} />
    </div>
    <div className={styles.description}>
      <p className={styles.text_main}>Some text</p>
      <p className={styles.text_sub}>More detailed description</p>
    </div>
  </div>
);

export default GalleryItem;
