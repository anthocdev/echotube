// const playlistReducer = (
//   state = {
//     playlistData: [],
//     fetching: false,
//     fetched: false,
//     error: null
//   },
//   action
// ) => {
//   switch (action.type) {
//     case "FETCH_PLAYLIST_DATA_START": {
//       return { ...state, fetching: true };
//     }
//     case "FETCH_PLAYLIST_DATA_SUCCESS": {
//       return {
//         ...state,
//         fetching: false,
//         fetched: true,
//         playlistData: action.payload
//       };
//     }
//     case "FETCH_PLAYLIST_DATA_ERROR": {
//       return { ...state, fetching: false, error: action.payload };
//     }
//     default: {
//       return state;
//     }
//   }
// };

// export default playlistReducer;

import { GET_USER_PLAYLISTS, GET_USER_PLAYLISTS_ERROR } from "../actions/types";

const DEFAULT_STATE = {
  Nickname: "",
  Playlists: "",
  errorMessage: ""
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_USER_PLAYLISTS:
      return {
        ...state,
        Nickname: action.payload.Nickname,
        Playlists: action.payload.Playlists,
        errorMessage: ""
      };
    case GET_USER_PLAYLISTS_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
