import React from "react";

import SocialButtons from "./socialButtons";
import styles from "./footer.module.css";

const Year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.container}>
        <p className={styles.paragraph}>
          © {Year} Art By Kuze - Visual Artist. All rights reserved. Site by
          Webfuzee
        </p>
        <SocialButtons />
      </div>
    </div>
  );
};

export default Footer;
