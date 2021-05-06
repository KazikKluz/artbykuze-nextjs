import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Image from "next/image";

import styles from "./header.module.scss";

import Hamburger from "../hamburger/hamburger.component";
import HamburgerNav from "../hamburger-nav/hamburger-nav.component";

const Header = () => {
  const [visibility, setVisibility] = useState({ top: "0" });

  const [active, setActive] = useState("");

  const handleClick = () => {
    setActive((prevState) => {
      return prevState === "is-active" ? "" : "is-active";
    });
  };

  let position = 0;

  const handleScroll = () => {
    let currentScrollPos = document.body.scrollTop;
    if (currentScrollPos < position) {
      setVisibility({ transform: "translateY(0)" });
    } else {
      {
        !active &&
          setVisibility({
            transform: "translateY(-12vh)",
          });
      }
    }
    position = currentScrollPos;
  };

  useEffect(() => {
    document.body.addEventListener("scroll", handleScroll);

    return () => document.body.removeEventListener("scroll", handleScroll);
  }, [active]);

  const router = useRouter();

  return (
    <>
      <div style={visibility} className={styles.front}>
        <div className={styles.container}>
          <div className={styles.logo_container}>
            <Image
              width="525px"
              height="129px"
              src="/artbyKuzelogo.png"
              alt="logo"
            />
          </div>
          <div className={styles.options}>
            <a className={styles.option}>ABOUT</a>

            <a
              className={styles.option}
              onClick={() =>
                router
                  .push("/gallery/paintings")
                  .then(() => document.body.scrollTo(0, 0))
              }
            >
              PAINTINGS
            </a>
            <a
              className={styles.option}
              onClick={() => {
                router
                  .push("/gallery/drawings")
                  .then(() => document.body.scrollTo(0, 0));
              }}
            >
              DRAWINGS
            </a>
            <a className={styles.option}>EXIBITIONS</a>
            <a className={styles.option}>BLOG</a>
            <a className={styles.option}>CONTACT</a>
          </div>
          <Hamburger handleClick={handleClick} active={active} />
        </div>
        <div className={styles.behind}>
          <HamburgerNav handleClick={handleClick} active={active} />
        </div>
      </div>
    </>
  );
};

export default Header;
