import React from "react";

import { topButton } from "./top-button.module.css";

const TopButton = () => {
  return (
    <button className={topButton} title="Go to top">
      &#x25B2;
    </button>
  );
};

export default TopButton;
