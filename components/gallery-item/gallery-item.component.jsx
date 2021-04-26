import React from "react";
import Image from "next/image";

const GalleryItem = ({ imageUrl, width, height }) => (
  <div>
    <div className="gallery_item reveal">
      <div className="image_container">
        <Image
          className="image"
          src={imageUrl}
          width={width}
          height={height}
          layout="responsive"
        />
      </div>
      <div className="description">
        <p className="text_main">Some text</p>
        <p className="text_sub">More detailed description</p>
      </div>
    </div>
  </div>
);

export default GalleryItem;
