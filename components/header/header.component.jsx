import React, { useState, useEffect } from "react";

import Image from "next/image";

import styles from "./header.module.scss";

import Hamburger from "../hamburger/hamburger.component";
import HamburgerNav from "../hamburger-nav/hamburger-nav.component";

const Header = () => {
  const [visibility, setVisibility] = useState({ top: "0" });

  const [active, setActive] = useState("");

  const handleClick = () => {
    setActive((prevState) => {
      return prevState === "is-active" ? "" : "is-active";
    });
  };

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
    <div>
      <div className={styles.container} style={visibility}>
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
          <a className={styles.option}>ABOUT</a>
          <a className={styles.option}>PAINTINGS</a>
          <a className={styles.option}>DRAWINGS</a>
          <a className={styles.option}>EXIBITIONS</a>
          <a className={styles.option}>BLOG</a>
          <a className={styles.option}>CONTACT</a>
        </div>
        <Hamburger handleClick={handleClick} active={active} />
      </div>
      <HamburgerNav active={active} />
      <style jsx global>{`
        body {
          position: ${active ? "fixed" : "relative"};
        }
      `}</style>
    </div>
  );
};

export default Header;
