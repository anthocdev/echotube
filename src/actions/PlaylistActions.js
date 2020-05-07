import axios from "axios";
/* Actions for User Playlist Management */
import {
  GET_USER_PLAYLISTS,
  GET_USER_PLAYLISTS_ERROR,
  DELETE_USER_PLAYLIST,
  DELETE_USER_PLAYLIST_ERROR,
  CREATE_USER_PLAYLIST,
  CREATE_USER_PLAYLIST_ERROR,
  EDIT_USER_PLAYLIST,
  EDIT_USER_PLAYLIST_ERROR,
} from "./types";

export const getUserPlaylists = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:3001/api/playlist");

      dispatch({
        type: GET_USER_PLAYLISTS,
        payload: res.data,
      });

      console.log("res", res);
    } catch (err) {
      dispatch({
        type: GET_USER_PLAYLISTS_ERROR,
        payload: "Invalid JWT Token",
      });
    }
  };
};

export const createUserPlaylist = (data) => {
  return async (dispatch) => {
    try {
      console.log(data);
      const res = await axios.post("http://localhost:3001/api/playlist", {
        params: {
          data,
        },
        headers: {
          "content-type": "application/json",
        },
      });
      dispatch({
        type: CREATE_USER_PLAYLIST,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: CREATE_USER_PLAYLIST_ERROR,
        payload: "Invalid POST Request",
      });
    }
  };
};

export const deleteUserPlaylist = (id) => {
  return async (dispatch) => {
    try {
      console.log(id);

      const res = await axios.delete("http://localhost:3001/api/playlist", {
        data: { id },
      });
      dispatch({
        type: DELETE_USER_PLAYLIST,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: DELETE_USER_PLAYLIST_ERROR,
        payload: err,
      });
    }
  };
};

export const editUserPlaylist = (data) => {
  return async (dispatch) => {
    try {
      console.log(data);
      const res = await axios.put("http://localhost:3001/api/playlist", {
        params: {
          data,
        },
        headers: {
          "content-type": "application/json",
        },
      });
      dispatch({
        type: EDIT_USER_PLAYLIST,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: EDIT_USER_PLAYLIST_ERROR,
        payload: err,
      });
    }
  };
};
