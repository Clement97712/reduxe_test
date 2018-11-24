import { createStore, compose, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { isreducers } from "../reducers/reducers";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(logger));
const store = createStore(isreducers, enhancer);

export default store;
