import {
  GET_PROFILE_INFO_SUCCESS,
  GET_PROFILE_INFO_ERROR
} from "../actions/types";

const DEFAULT_STATE = {
  Nickname: "",
  ProfileImage: "",
  googleID: "",
  errorMessage: ""
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_PROFILE_INFO_SUCCESS:
      return {
        ...state,
        Nickname: action.payload.Nickname,
        ProfileImage: action.payload.UserImageLink,
        googleID: action.payload.googleID,
        errorMessage: ""
      };
    case GET_PROFILE_INFO_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
