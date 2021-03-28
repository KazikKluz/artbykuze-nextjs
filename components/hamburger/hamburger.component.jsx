import React, { useState } from "react";

const Hamburger = () => {
  const [active, setActive] = useState("is-active");

  const handleClick = () => {
    setActive((prevState) => {
      return prevState === "is-active" ? "" : "is-active";
    });
  };

  return (
    <button
      onClick={handleClick}
      className={`hamburger hamburger--spring ${active}`}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
