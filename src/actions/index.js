import axios from "axios";
import {
  GOOGLE_OAUTH_LOGIN,
  GOOGLE_OAUTH_ERROR,
  GOOGLE_OAUTH_SIGNOUT
} from "./types";

export const signup = data => {
  return async dispatch => {
    // HTTP Request to back-end
    // Back end response
    // Dispatch
    // Store into localStorage
  };
};

//Google OAuth authentication using access_token, sent to our API
export const googleOauth = data => {
  return async dispatch => {
    try {
      const res = await axios.post("http://localhost:3001/api/oauth/google", {
        access_token: data
      });

      dispatch({
        type: GOOGLE_OAUTH_LOGIN,
        payload: res.data.token
      });
      localStorage.setItem("JWT_TOKEN", res.data.token);
      axios.defaults.headers.common["Authorization"] = res.data.token;
      console.log("res", res);
    } catch (err) {
      dispatch({
        type: GOOGLE_OAUTH_ERROR,
        payload: "Invalid Auth"
      });
      console.error("err", err);
    }
  };
};

export const signOut = () => {
  return dispatch => {
    localStorage.removeItem("JWT_TOKEN");
    axios.defaults.headers.common["Authorization"] = "";
    dispatch({
      type: GOOGLE_OAUTH_SIGNOUT,
      payload: ""
    });
  };
};
