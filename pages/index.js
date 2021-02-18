import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

import SlideShow from "../components/slideshow/slideshow.component";
import Main from "../components/main/main.component";
import TopButton from "../components/top-button/top-button.component";
const Header = dynamic(() => import("../components/header/header.component"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <Head>
        <title>Art By Kuze | Visual Artist</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        <link
          href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homepage}>
        <Header />
        <SlideShow />
        <Main />
        <TopButton />
      </div>
    </>
  );
};

export default Home;
