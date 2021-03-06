import {
  GOOGLE_OAUTH_LOGIN,
  GOOGLE_OAUTH_ERROR,
  GOOGLE_OAUTH_SIGNOUT,
} from "../actions/types";
const DEFAULT_STATE = {
  isAuth: false,
  jwtToken: "",
  errorMessage: "",
};
/* Reducer for google authentication requests */
export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GOOGLE_OAUTH_LOGIN:
      return {
        ...state,
        jwtToken: action.payload,
        isAuth: true,
        errorMessage: "",
      };
    case GOOGLE_OAUTH_SIGNOUT:
      return {
        ...state,
        jwtToken: action.payload,
        isAuth: false,
        errorMessage: "",
      };
    case GOOGLE_OAUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
