import React from "react";
import Imgix from "react-imgix";

const GalleryItem = ({ imgUrl, title, medium }) => (
  <div>
    <div className="gallery_item reveal">
      <div className="image_container">
        <Imgix
          className="image"
          src={imgUrl}
          width="100%"
          height="auto"
          sizes="(max-width: 65rem) 70vw, 25vw"
        />
      </div>
      <div className="description">
        <p className="text_main">{title}</p>
        <p className="text_sub">{medium}</p>
      </div>
    </div>
  </div>
);

export default GalleryItem;
