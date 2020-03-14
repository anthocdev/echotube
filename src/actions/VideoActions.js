import axios from "axios";
import {
  GET_PLAYLIST_VIDEOS,
  GET_PLAYLIST_VIDEOS_ERROR,
  ADD_PLAYLIST_VIDEO,
  ADD_PLAYLIST_VIDEOS_ERROR,
  DELETE_PLAYLIST_VIDEO,
  DELETE_PLAYLIST_VIDEOS_ERROR,
  EDIT_PLAYLIST_VIDEO,
  EDIT_PLAYLIST_VIDEOS_ERROR
} from "./types";

export const getPlaylistVideos = PlaylistID => {
  return async dispatch => {
    try {
      const res = await axios.get("http://localhost:3001/api/video", {
        params: {
          PlaylistID
        }
      });

      dispatch({
        type: GET_PLAYLIST_VIDEOS,
        payload: res.data
      });

      console.log("res", res);
    } catch (err) {
      dispatch({
        type: GET_PLAYLIST_VIDEOS_ERROR,
        payload: "Invalid JWT Token"
      });
    }
  };
};

export const addPlaylistVideo = (PlaylistID, data) => {
  return async dispatch => {
    try {
      console.log(PlaylistID, data);
      const res = await axios.post("http://localhost:3001/api/video", {
        params: {
          PlaylistID,
          data
        },
        headers: {
          "content-type": "application/json"
        }
      });
      dispatch({
        type: ADD_PLAYLIST_VIDEO,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ADD_PLAYLIST_VIDEOS_ERROR,
        payload: "Invalid POST Request"
      });
    }
  };
};
