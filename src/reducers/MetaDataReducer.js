import { GET_METADATA, GET_METADATA_ERROR } from "../actions/types";

const DEFAULT_STATE = {
  Metadata: [],
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
    default:
      return state;
  }
};
