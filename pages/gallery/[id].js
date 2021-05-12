import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import styles from "../../styles/Gallery.module.css";
import Footer from "../../components/footer/footer.component";
import GalleryDisplay from "../../components/gallery-display/gallery-display.component";

const Header = dynamic(
  () => import("../../components/header/header.component"),
  {
    ssr: false,
  }
);

const Gallery = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Art By Kuze | Visual Artist</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />{" "}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.gallery}>
        <Header />
        <GalleryDisplay params={router.query.id} />
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
