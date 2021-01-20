import React from "react";

import { SlideContainer, TheSlide, Background } from "./slide.styles";

const Slide = ({ picNo, show, id }) => {
  return (
    <SlideContainer show={show} id={id}>
      <TheSlide>
        <Background style={{ backgroundImage: `url(${picNo})` }} />
      </TheSlide>
    </SlideContainer>
  );
};

export default Slide;
