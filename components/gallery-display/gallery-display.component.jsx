import React from "react";

import images from "./images";

import GalleryItem from "../gallery-item/gallery-item.component";

import styles from "./gallery-display.module.css";

const GalleryDisplay = () => {
  return (
    <div className={styles.gallery_display}>
      {images.map(({ id, ...otherProps }) => {
        return <GalleryItem key={id} {...otherProps} />;
      })}
    </div>
  );
};

export default GalleryDisplay;
