import { GET_YOUTUBE_VIDEO } from "../actions/types";

const DEFAULT_STATE = {
  fetched: false,
  data: "",
  errorMessage: ""
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_YOUTUBE_VIDEO:
      return {
        ...state,
        fetched: true,
        data: action.payload,
        errorMessage: ""
      };
    default:
      return state;
  }
};
