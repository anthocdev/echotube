import {
  GET_METADATA,
  GET_METADATA_ERROR,
  ADD_METADATA,
  ADD_METADATA_ERROR,
} from "../actions/types";

/* Reducer for metadata requests */
const DEFAULT_STATE = {
  Metadata: [],
  postdata: [],
  errorMessage: "",
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_METADATA:
      return {
        ...state,
        Metadata: action.payload,
        errorMessage: "",
      };
    case GET_METADATA_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case ADD_METADATA:
      return {
        ...state,
        postdata: action.payload,
        errorMessage: "",
      };
    case ADD_METADATA_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
