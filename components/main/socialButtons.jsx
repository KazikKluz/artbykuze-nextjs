import React, { useEffect, useState } from "react";

import SocialMediaButtons from "react-social-media-buttons";

import styles from "./main.module.css";

const SocialButtons = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const links = [
    "https://facebook.com",
    "https://instagram.com",
    "https://behance.com",
  ];

  const buttonStyle = {
    backgroundColor: "transparent",
    width: "65px",
    height: "65px",
    margin: "-11px",
  };

  const iconStyle = { color: "#d81e5b" };

  return (
    <div
      className={styles.buttons}
      style={{ opacity: offset < 2100 && offset > 600 ? 1 : 0 }}
    >
      <SocialMediaButtons
        links={links}
        buttonStyle={buttonStyle}
        iconStyle={iconStyle}
      />
    </div>
  );
};

export default SocialButtons;
