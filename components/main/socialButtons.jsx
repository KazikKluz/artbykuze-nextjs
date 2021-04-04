import React, { useEffect, useState } from "react";

import WithHover from "./withHover";

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

  return (
    <div
      className={styles.buttons}
      style={{
        visibility: offset < 1965 && offset > 594 ? "visible" : "hidden",
        opacity: offset < 1965 && offset > 594 ? 1 : 0,
      }}
    >
      <WithHover url="https://facebook.com" />
      <WithHover url="https://instagram.com" />
      <WithHover url="https://behance.com" />
    </div>
  );
};

export default SocialButtons;
