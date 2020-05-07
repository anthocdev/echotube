import {
  GET_USER_PLAYLISTS,
  GET_USER_PLAYLISTS_ERROR,
  CREATE_USER_PLAYLIST,
  CREATE_USER_PLAYLIST_ERROR,
  EDIT_USER_PLAYLIST,
  EDIT_USER_PLAYLIST_ERROR,
  DELETE_USER_PLAYLIST,
  DELETE_USER_PLAYLIST_ERROR,
} from "../actions/types";

const DEFAULT_STATE = {
  Nickname: "",
  Playlists: "",
  errorMessage: "",
  testField: [],
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_USER_PLAYLISTS:
      return {
        ...state,
        Nickname: action.payload.Nickname,
        Playlists: action.payload.Playlists,
        errorMessage: "",
      };
    case GET_USER_PLAYLISTS_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case CREATE_USER_PLAYLIST:
      return {
        ...state,
        testField: action.payload,
        errorMessage: "",
      };
    case CREATE_USER_PLAYLIST_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case EDIT_USER_PLAYLIST:
      return {
        ...state,
        testField: action.payload,
        errorMessage: "",
      };
    case EDIT_USER_PLAYLIST_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case DELETE_USER_PLAYLIST:
      return {
        ...state,
        testField: action.payload,
        errorMessage: "",
      };
    case DELETE_USER_PLAYLIST_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
