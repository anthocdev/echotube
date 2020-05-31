import axios from "axios";
import {
  GOOGLE_OAUTH_LOGIN,
  GOOGLE_OAUTH_ERROR,
  GOOGLE_OAUTH_SIGNOUT,
  GET_PROFILE_INFO_SUCCESS,
  GET_PROFILE_INFO_ERROR,
} from "./types";
/* Authentication related actions */
//Google OAuth authentication using access_token, sent to our API
export const googleOauth = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:3001/api/oauth/google", {
        access_token: data,
      });

      dispatch({
        type: GOOGLE_OAUTH_LOGIN,
        payload: res.data.token,
      });
      localStorage.setItem("JWT_TOKEN", res.data.token);
      axios.defaults.headers.common["Authorization"] = res.data.token;
      console.log("res", res);
    } catch (err) {
      dispatch({
        type: GOOGLE_OAUTH_ERROR,
        payload: "Invalid Auth",
      });
      console.error("err", err);
    }
  };
};

export const signOut = () => {
  return (dispatch) => {
    localStorage.removeItem("JWT_TOKEN");
    console.log("itworked");
    axios.defaults.headers.common["Authorization"] = "";
    dispatch({
      type: GOOGLE_OAUTH_SIGNOUT,
      payload: "",
    });
  };
};

export const getProfileInfo = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:3001/api/userInfo");

      dispatch({
        type: GET_PROFILE_INFO_SUCCESS,
        payload: res.data.userData,
      });

      console.log("res", res);
    } catch (err) {
      dispatch({
        type: GET_PROFILE_INFO_ERROR,
        payload: "Invalid JWT Token",
      });
    }
  };
};
