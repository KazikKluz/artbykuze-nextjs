import Head from "next/head";

import dynamic from "next/dynamic";

import Footer from "../components/footer/footer.component";

const Header = dynamic(() => import("../components/header/header.component"), {
  ssr: false,
});

const ArtWork = () => {
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
      <div className="artwork">
        <Header />
        <div className="container">
          <div className="legend">some thext</div>
          <div className="picture">
            <img
              className="image"
              width="100%"
              heigth="100%"
              src="https://picsum.photos/700/550"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ArtWork;
