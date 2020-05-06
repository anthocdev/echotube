import axios from "axios";
import {
  GET_METADATA,
  GET_METADATA_ERROR,
  ADD_METADATA,
  ADD_METADATA_ERROR,
} from "./types";

export const getMetadata = (PlaylistVideoID) => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:3001/api/metadata", {
        params: {
          PlaylistVideoID,
        },
      });

      dispatch({
        type: GET_METADATA,
        payload: res.data,
      });

      console.log("res", res);
    } catch (err) {
      dispatch({
        type: GET_METADATA_ERROR,
        payload: "Invalid Request",
      });
    }
  };
};

export const addMetadata = (PlaylistVideoID, data) => {
  return async (dispatch) => {
    try {
      console.log(PlaylistVideoID, data);
      const res = await axios.post("http://localhost:3001/api/metadata", {
        params: {
          PlaylistVideoID,
          data,
        },
        headers: {
          "content-type": "application/json",
        },
      });
      dispatch({
        type: ADD_METADATA,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ADD_METADATA_ERROR,
        payload: "Invalid POST Request",
      });
    }
  };
};
