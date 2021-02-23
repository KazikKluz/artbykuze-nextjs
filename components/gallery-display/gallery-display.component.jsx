import React from "react";

import images from "./images";

import GalleryItem from "../gallery-item/gallery-item.component";

import styles from "./gallery-display.module.css";

const GalleryDisplay = () => {
  return (
    <div className={styles.gallery_display}>
      {images.map(({ imageUrl, id }) => {
        return <GalleryItem key={id} id={id} src={imageUrl} />;
      })}
    </div>
  );
};

export default GalleryDisplay;
