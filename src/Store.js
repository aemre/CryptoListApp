import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import RootReducer from "./Reducers";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  // Root
  key: "root",
  // Storage Method (React Native)
  storage,
  // Whitelist (Save Specific Reducers)
  whitelist: ["crypto"],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: ["network"]
};

const middleware = applyMiddleware(thunk, logger);
const persistedReducer = persistReducer(persistConfig, RootReducer);
const Store = createStore(persistedReducer, {}, compose(middleware));

let persistor = persistStore(Store);

const getStore = () => Store;
const getState = () => {
  return store.getState();
};
const getPersistor = () => persistor;
export { getStore, getState, getPersistor };

export { Store, persistor };
