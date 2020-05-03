import axios from "axios";
import { GET_METADATA, GET_METADATA_ERROR } from "./types";

export const getMetadata = (playlistVideoId) => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:3001/api/metaData", {
        params: {
          playlistVideoId,
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
