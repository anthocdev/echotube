import axios from "axios";
import {
  GET_USER_PLAYLISTS,
  GET_USER_PLAYLISTS_ERROR,
  DELETE_USER_PLAYLIST,
  DELETE_USER_PLAYLIST_ERROR,
  CREATE_USER_PLAYLIST,
  CREATE_USER_PLAYLIST_ERROR,
  EDIT_USER_PLAYLIST,
  EDIT_USER_PLAYLIST_ERROR
} from "./types";

export const getUserPlaylists = () => {
  return async dispatch => {
    try {
      const res = await axios.get("http://localhost:3001/api/playlist");

      dispatch({
        type: GET_USER_PLAYLISTS,
        payload: res.data
      });

      console.log("res", res);
    } catch (err) {
      dispatch({
        type: GET_USER_PLAYLISTS_ERROR,
        payload: "Invalid JWT Token"
      });
    }
  };
};
