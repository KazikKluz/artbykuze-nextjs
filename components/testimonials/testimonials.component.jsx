import * as React from "react";
import { useEffect, useState } from "react";

export default function Testimonials() {
  // const [offset, setOffset] = useState(0);
  // useEffect(() => {
  //   function handleScroll() {
  //     setOffset(window.pageYOffset);
  //   }
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div
      className="parallax"
      width="2173px"
      height="1569px"
      // style={{
      //   transform: `translateY(${offset * 0.5 - 1600}px)`,
      // }}
    />
  );
}
