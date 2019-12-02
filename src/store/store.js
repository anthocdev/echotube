import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import { default as thunk } from "redux-thunk";
import { createPromise } from "redux-promise-middleware";

import reducer from "../reducers";

//Create store with middleware included

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Adding redux dev tool compatibility
const middleware = applyMiddleware(createPromise(), thunk, createLogger()); //Adding thunk and console logging for testing as middleware

export default createStore(reducer, composeEnhancers(middleware));
