import {
  GET_PLAYLIST_VIDEOS,
  GET_PLAYLIST_VIDEOS_ERROR
} from "../actions/types";

const DEFAULT_STATE = {
  PlaylistID: "",
  PlaylistName: "",
  Videos: [],
  errorMessage: ""
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_PLAYLIST_VIDEOS:
      return {
        ...state,
        PlaylistID: action.payload.PlaylistID,
        PlaylistName: action.payload.Name,
        Videos: action.payload.Videos,
        errorMessage: ""
      };
    case GET_PLAYLIST_VIDEOS_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
