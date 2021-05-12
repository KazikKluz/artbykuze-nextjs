import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { createWrapper } from "next-redux-wrapper";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";
import LogRocket from "logrocket";

const middlewares = [logger];

// const store = () => createStore(rootReducer, applyMiddleware(...middlewares));

const store = () => {
  let store;

  const isClient = typeof window !== "undefined";

  if (isClient) {
    const { persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
      key: "root",
      whitelist: ["collection"],
      storage,
    };

    store = createStore(
      persistReducer(persistConfig, rootReducer),
      undefined,
      applyMiddleware(...middlewares)
    );

    store.__PERSISTOR = persistStore(store);
  } else {
    store = createStore(
      rootReducer,
      applyMiddleware(...middlewares, LogRocket.reduxMiddleware())
    );
  }

  return store;
};

export const storeWrapper = createWrapper(store);
