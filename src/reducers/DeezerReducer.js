import { GET_DEEZER_BY_NAME, GET_DEEZER_BY_NAME_ERROR } from "../actions/types";

const DEFAULT_STATE = {
  Songs: [],
  errorMessage: "",
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_DEEZER_BY_NAME:
      return {
        ...state,
        Songs: action.payload,
        errorMessage: "",
      };
    case GET_DEEZER_BY_NAME_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
