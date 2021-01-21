import React, { useState, useEffect } from "react";

import Image from "next/image";

import styles from "./header.module.css";

const Header = () => {
  const [visibility, setVisibility] = useState({ top: "0" });

  let prevScrollPos = window.pageYOffset;

  const handleScroll = () => {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      setVisibility({ top: 0 });
    } else {
      setVisibility({ top: "-12vh" });
    }
    prevScrollPos = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={visibility}>
      <div className={styles.logo_container}>
        <Image
          // className={styles.logo_image}
          width="525px"
          height="129px"
          src="/artbyKuzelogo.png"
          alt="logo"
        />
      </div>
      <div className={styles.options}>
        <div className={styles.option}>ABOUT</div>
        <div className={styles.option}>PAINTINGS</div>
        <div className={styles.option}>DRAWINGS</div>
        <div className={styles.option}>EXIBITIONS</div>
        <div className={styles.option}>BLOG</div>
        <div className={styles.option}>CONTACT</div>
      </div>
    </div>
  );
};

export default Header;
