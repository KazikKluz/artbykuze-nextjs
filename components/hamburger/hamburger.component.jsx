import React from "react";

const Hamburger = ({ active, handleClick }) => {
  return (
    <button
      onClick={() => handleClick()}
      className={`hamburger hamburger--spring  
       ${active}`}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
