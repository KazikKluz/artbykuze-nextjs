import React from "react";

const Hamburger = ({ active, handleClick }) => {
  return (
    <button
      onClick={() => handleClick()}
      className={`hamburger hamburger--spring u-hide-800 
       ${active}`}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
      <style jsx>{`
        @media screen and (min-width: 800px) {
          .hambuger {
            display: none;
          }
        }
      `}</style>
    </button>
  );
};

export default Hamburger;
