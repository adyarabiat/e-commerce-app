import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import logger from "redux-logger";

import combineReducers from "./root-reducer";

const middlewares = [logger];

export const store = createStore(
    combineReducers,
    applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);

export default store;
