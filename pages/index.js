import Head from "next/head";

import styles from "../styles/Home.module.css";

import SlideShow from "../components/slideshow/slideshow.component";
import Main from "../components/main/main.component";
import Header from "../components/header/header.component";

const Home = () => {
  return (
    <>
      <Head>
        <title>Art By Kuze | Visual Artist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homepage}>
        <Header />
        <SlideShow />
        <Main />
      </div>
    </>
  );
};

export default Home;
