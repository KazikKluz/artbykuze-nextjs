import Head from "next/head";
import { useRouter } from "next/router";

import dynamic from "next/dynamic";

import Footer from "../../components/footer/footer.component";
import {
  EmailShareButton,
  FacebookShareButton,
  PinterestShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  PinterestIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import withHover from "../../components/share_buttons/withHover";

const EmailIc = withHover(EmailIcon);
const FacebookIc = withHover(FacebookIcon);
const PinterestIc = withHover(PinterestIcon);
const TumblrIc = withHover(TumblrIcon);
const TwitterIc = withHover(TwitterIcon);
const WhatsappIc = withHover(WhatsappIcon);

const Header = dynamic(
  () => import("../../components/header/header.component"),
  {
    ssr: false,
  }
);

import styles from "../../styles/Artwork.module.scss";

const ArtWork = ({ id }) => {
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
      <Header />
      <div className={styles.artwork}>
        <div className={styles.container}>
          <div className={styles.legend}>
            <h3 className={styles.header}>Yet Another Masterpiece </h3>
            <p className={styles.detail}>Acryl on linen</p>
            <p className={styles.detail}>105cm x 105cm</p>
            <p className={styles.detail}>41 3/8 x 63 in</p>
            <div className={styles.price}>
              <a className={styles.euro}>&euro; 3500</a>
              <a href="" className={styles.btn_buy}>
                Add To Cart
              </a>
            </div>
            <div className={styles.share}>
              <div className={styles.paragraph}>Share: </div>
              <div className={styles.share_buttons}>
                <EmailShareButton url={"https://localhost:3000/artwork"}>
                  <EmailIc />
                </EmailShareButton>
                <FacebookShareButton>
                  <FacebookIc />
                </FacebookShareButton>
                <PinterestShareButton>
                  <PinterestIc />
                </PinterestShareButton>
                <TumblrShareButton>
                  <TumblrIc />
                </TumblrShareButton>
                <TwitterShareButton>
                  <TwitterIc />
                </TwitterShareButton>
                <WhatsappShareButton>
                  <WhatsappIc />
                </WhatsappShareButton>
              </div>
            </div>
          </div>
          <div className={styles.picture}>
            <img
              className={styles.image}
              src="https://picsum.photos/1900/900"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ArtWork;
