import React from "react";

import styles from "./main.module.css";

import Card from "../card/card.component";
import BlogSection from "../blog-section/blog-section.component";
import Testimonials from "../testimonials/testimonials.component";
import Cta from "../cta/cta.component";
import Footer from "../footer/footer.component";
import SocialButtons from "./socialButtons";

let cards = [
  {
    title: "Kuze's Drawings",
    imageUrl: "kuze4",
    id: 1,
    linkUrl: "shop/hats",
  },
  {
    title: "Available Paintings",
    imageUrl: "kuze5",
    id: 2,
    linkUrl: "shop/jackets",
  },
  {
    title: "Prints",
    imageUrl: "kuze6",
    id: 3,
    linkUrl: "shop/sneakers",
  },
];

const Main = () => (
  <div id="main" className={styles.container}>
    <div className={styles.cards_container}>
      {cards.map(({ title, id, imageUrl }) => (
        <Card key={id} title={title} imgUrl={imageUrl} />
      ))}
    </div>
    <SocialButtons />
    <BlogSection />
    <Testimonials />
    <Cta />
    <Footer />
  </div>
);

export default Main;
