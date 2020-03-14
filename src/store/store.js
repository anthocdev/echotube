import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import { default as thunk } from "redux-thunk";
import { createPromise } from "redux-promise-middleware";
import axios from "axios";

import reducer from "../reducers";
//Pulling JWT Token from local storage
const jwttoken = localStorage.getItem("JWT_TOKEN");
//Setting JWT Token as common header for axios
axios.defaults.headers.common["Authorization"] = jwttoken;
//Create store with middleware included
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Adding redux dev tool compatibility
const middleware = applyMiddleware(createPromise(), thunk, createLogger()); //Adding thunk and console logging for testing as middleware

export default createStore(
  reducer,
  {
    //Initializing auth state if JWT token is available
    auth: {
      jwtToken: jwttoken,
      isAuth: jwttoken ? true : false
    }
  },
  composeEnhancers(middleware)
);
