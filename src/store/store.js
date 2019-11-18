import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import { default as thunk } from "redux-thunk";
import { createPromise } from "redux-promise-middleware";

import reducer from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(createPromise(), thunk, createLogger());

export default createStore(reducer, composeEnhancers(middleware));
