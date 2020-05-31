import {
  GET_PLAYLIST_VIDEOS,
  GET_PLAYLIST_VIDEOS_ERROR,
  DELETE_PLAYLIST_VIDEO,
  DELETE_PLAYLIST_VIDEO_ERROR,
} from "../actions/types";
/* Reducer for playlist videos */
const DEFAULT_STATE = {
  PlaylistID: "",
  PlaylistName: "",
  Videos: [],
  errorMessage: "",
  successMessage: "",
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_PLAYLIST_VIDEOS:
      return {
        ...state,
        PlaylistID: action.payload.PlaylistID,
        PlaylistName: action.payload.Name,
        Videos: action.payload.Videos,
        errorMessage: "",
      };
    case GET_PLAYLIST_VIDEOS_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case DELETE_PLAYLIST_VIDEO:
      return {
        ...state,
        successMessage: "",
        errorMessage: "",
      };
    case DELETE_PLAYLIST_VIDEO_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
