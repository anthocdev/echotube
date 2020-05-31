import axios from "axios";
import { GET_DEEZER_BY_NAME, GET_DEEZER_BY_NAME_ERROR } from "./types";
/* Deezer Request Actions */
export const getDeezerByName = (videoTitle) => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:3001/api/deezerQuery", {
        params: {
          videoTitle,
        },
      });

      dispatch({
        type: GET_DEEZER_BY_NAME,
        payload: res.data,
      });

      console.log("res", res);
    } catch (err) {
      dispatch({
        type: GET_DEEZER_BY_NAME_ERROR,
        payload: "Invalid Request",
      });
    }
  };
};
