import React from "react";

import styles from "./cta.module.css";

const Cta = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner_box}>
        <h5 className={styles.heading}>EXPLORE MORE</h5>
        <p className={styles.paragraph}>&#10095; &emsp; PAINTINGS</p>
        <p className={styles.paragraph}>&#10095; &emsp; DRAWINGS</p>
        <p className={styles.paragraph}>&#10095; &emsp; EXHIBITION</p>
        <p className={styles.paragraph}>&#10095; &emsp; BLOG</p>
        <p className={styles.paragraph}>&#10095; &emsp; CONTACT</p>
      </div>
      <div className={styles.inner_box}>
        <h5 className={styles.heading}>ABOUT KUZE</h5>
        <p className={styles.paragraph}>
          My name is Ausrine Kuze. I am an artist originally from Lithuania. I
          have drawn ever since childhood and it has been a lifelong passion. I
          eventually pursued studying art at the third level and graduated from
          Art Academy with a Bachelor's degree in Glasswork studies. I moved to
          Dublin ten years ago where I studied illustration at Ballyfermot
          College of Further Education.
        </p>
      </div>
      <div className={styles.inner_box}>
        <h5 className={styles.heading}>LATEST POSTS</h5>
        <p className={styles.paragraph}>
          Small Paintings Now Available
          <br />
          <span style={{ fontSize: "1.06rem", letterSpacing: "-0.05rem" }}>
            29th November 2020
          </span>
        </p>
        <p className={styles.paragraph}>
          Kuze - International Artist
          <br />
          <span style={{ fontSize: "1.06rem", letterSpacing: "-0.05rem" }}>
            9th October 2020
          </span>
        </p>
        <p className={styles.paragraph}>
          Quality Time
          <br />
          <span style={{ fontSize: "1.06rem", letterSpacing: "-0.05rem" }}>
            26th April 2020
          </span>
        </p>
      </div>
      <div className={styles.inner_box}>
        <h5 className={styles.heading}>SHOP</h5>
        <p className={styles.paragraph}>&#10095; &emsp;Original Paintings</p>
        <p className={styles.paragraph}>&#10095; &emsp;Drawings</p>
        <p className={styles.paragraph}>&#10095; &emsp;Prints</p>
      </div>
    </div>
  );
};

export default Cta;
