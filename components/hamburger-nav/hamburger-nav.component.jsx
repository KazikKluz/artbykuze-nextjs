import React from "react";
import { useRouter } from "next/router";

const HamburgerNav = ({ active, handleClick }) => {
  const router = useRouter();
  return (
    <div className="hamnav u-text-center ">
      <a className="hamnav__option u-mb-10 t-ham-option opt1" href="#">
        ABOUT
      </a>
      <a
        onClick={() => {
          router
            .push("/gallery/paintings")
            .then(() => document.body.scrollTo(0, 0));
          handleClick();
        }}
        className="hamnav__option u-mb-10  t-ham-option opt2"
        href="#"
      >
        PAINTINGS
      </a>
      <a
        onClick={() => {
          router
            .push("/gallery/drawings")
            .then(() => document.body.scrollTo(0, 0));
          handleClick();
        }}
        href="#"
        className="hamnav__option u-mb-10 t-ham-option opt3"
      >
        DRAWINGS
      </a>
      <a className="hamnav__option u-mb-10 t-ham-option opt4" href="#">
        EXIBITIONS
      </a>
      <a className="hamnav__option u-mb-10 t-ham-option opt5" href="#">
        BLOG
      </a>
      <a className="hamnav__option u-mb-10 t-ham-option opt6" href="#">
        CONTACT
      </a>
      <style jsx>{`
        .hamnav {
          top: ${active ? "0" : "-150rem"};
          opacity: ${active ? "0.95" : "0"};
        }
        .hamnav__option {
          display: ${active ? "inline-block" : "none"};
        }
      `}</style>
    </div>
  );
};

export default HamburgerNav;
