import * as React from "react";
import { useEffect, useState } from "react";

import styles from "./testimonials.module.css";
import Image from "next/image";

export default function Testimonials() {
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
    <div className={styles.hero}>
      <Image
        className={styles.image}
        src="../../public/testim.jpg"
        alt="test"
        width="2173px"
        style={{
          transform: `translateY(${offset * 0.5 - 1600}px)`,
        }}
      />
    </div>
  );
}
