import React, { useState } from "react";

import SocialMediaButtons from "react-social-media-buttons";

const WithHover = ({ url }) => {
  const [isHover, setHover] = useState(false);

  // const normal = { color: "#d81e5b" };
  const iconStyle = { color: isHover ? "#510860" : "#d81e5b" };

  const links = [url];

  const buttonStyle = {
    backgroundColor: "transparent",
    width: "65px",
    height: "65px",
    margin: "-11px",
  };

  const handleHover = () => {
    setHover((prevState) => !prevState);
  };

  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <SocialMediaButtons
        links={links}
        buttonStyle={buttonStyle}
        iconStyle={iconStyle}
      />
    </div>
  );
};

export default WithHover;
