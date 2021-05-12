import { storeWrapper } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";
import { persistStore } from "redux-persist";

import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  return (
    <PersistGate persistor={store.__PERSISTOR} loading={<div>Loading...</div>}>
      <Component {...pageProps} />
    </PersistGate>
  );
}

export default storeWrapper.withRedux(MyApp);
