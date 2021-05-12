import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { getCollectionByCategory } from "../../redux/collection/collection.actions";
import { selectCategory } from "../../redux/collection/collection.selector";
import { createStructuredSelector } from "reselect";

import GalleryItem from "../gallery-item/gallery-item.component";

import styles from "./gallery-display.module.css";

const GalleryDisplay = ({ collection, getCollection, params }) => {
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

  const router = useRouter();

  useEffect(() => {
    getCollection(router.query.id);
    reveal();
    document.body.addEventListener("scroll", reveal);
    console.log("render!");

    return () => document.body.removeEventListener("scroll", reveal);
  }, [params]);

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

const mapStateToProps = createStructuredSelector({
  collection: selectCategory,
});

// const mapStateToProps = (state) => ({
//   collection: state.collection.collection,
// });

const mapDispatchToProps = (dispatch) => ({
  getCollection: (params) => dispatch(getCollectionByCategory(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryDisplay);
