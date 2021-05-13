import React, { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import { createStructuredSelector } from "reselect";

import styles from "../../styles/Gallery.module.css";
import Footer from "../../components/footer/footer.component";
import GalleryDisplay from "../../components/gallery-display/gallery-display.component";

import { connect } from "react-redux";
import { getCollectionByCategory } from "../../redux/collection/collection.actions";
import { selectCategory } from "../../redux/collection/collection.selector";

const Header = dynamic(
  () => import("../../components/header/header.component"),
  {
    ssr: false,
  }
);

const Gallery = ({ collection, getCollection }) => {
  const router = useRouter();
  const params = router.query.id;

  useEffect(() => {
    getCollection(params);
    console.log("render!");
  }, [params]);

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
        <GalleryDisplay params={router.query.id} collection={collection} />
        <Footer />
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: selectCategory,
});

const mapDispatchToProps = (dispatch) => ({
  getCollection: (params) => dispatch(getCollectionByCategory(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
