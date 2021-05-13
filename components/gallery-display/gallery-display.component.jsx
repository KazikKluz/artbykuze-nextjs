import React, { useEffect } from "react";

import GalleryItem from "../gallery-item/gallery-item.component";

import styles from "./gallery-display.module.css";

const GalleryDisplay = ({ collection }) => {
  const reveal = () => {
    let reveals = document.querySelectorAll(".reveal");
    let windowheight = document.body.offsetHeight;

    for (let i = 0; i < reveals.length; i++) {
      let revealtop = reveals[i].getBoundingClientRect().top;
      let revealBottom = reveals[i].getBoundingClientRect().bottom;
      var revealpoint = 100;

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }

      if (revealBottom < revealpoint) {
        reveals[i].classList.add("non-active");
      } else {
        reveals[i].classList.remove("non-active");
      }
    }
  };

  useEffect(() => {
    reveal();
    document.body.addEventListener("scroll", reveal);

    return () => document.body.removeEventListener("scroll", reveal);
  }, [reveal]);

  if (!collection) return <div>Loading...</div>;
  console.log(collection);

  return (
    <div className={styles.gallery_display}>
      {collection.map(({ id, ...otherProps }) => {
        return <GalleryItem key={id} id={id} {...otherProps} />;
      })}
    </div>
  );
};

export default GalleryDisplay;
