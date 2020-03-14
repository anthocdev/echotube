import axios from "axios";
import { GET_YOUTUBE_VIDEO, GET_YOUTUBE_VIDEO_ERROR } from "./types";

export const getYouTubeVideo = videoId => {
  return async dispatch => {
    try {
      const res = await axios.get("http://localhost:3001/api/getVideo", {
        params: {
          videoId
        }
      });

      dispatch({
        type: GET_YOUTUBE_VIDEO,
        payload: res.data.items
      });

      console.log("res", res);
    } catch (err) {
      dispatch({
        type: GET_YOUTUBE_VIDEO_ERROR,
        payload: "Invalid Request"
      });
    }
  };
};
