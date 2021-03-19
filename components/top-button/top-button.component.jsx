import React, { useState, useEffect } from "react";

import { topButton } from "./top-button.module.css";

const TopButton = () => {
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

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={handleClick}
      style={{
        visibility: offset > 73 ? "visible" : "hidden",
        opacity: offset > 73 ? 0.6 : 0,
      }}
      className={topButton}
      title="Go to top"
    >
      &#x25B2;
    </button>
  );
};

export default TopButton;
