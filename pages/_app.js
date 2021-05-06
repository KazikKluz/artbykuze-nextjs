import { Provider } from "react-redux";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
