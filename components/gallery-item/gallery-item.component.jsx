import React from "react";
import Image from "next/image";

import styles from "./gallery-item.module.scss";

const GalleryItem = ({ src }) => (
  <div className={styles.gallery_item}>
    <div className={styles.image_container}>
      <Image
        className={styles.image}
        width="300px"
        height="300px"
        alt=""
        src={src}
      />
    </div>
    <p className={styles.description}>Some text</p>
  </div>
);

export default GalleryItem;
