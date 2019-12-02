import axios from "axios";
const API_KEY = `AIzaSyB2yKogm2aT-hE-wd-AYqUXezzXcHCCKXs`; //@todo: User specific API keys
const MAX_RESULTS = 50;

//Gets all items from youtube playlist (by its ID)
export function fetchPlaylist(playlistId) {
  return function(dispatch) {
    const GET_PLAYLIST = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${MAX_RESULTS}&playlistId=${playlistId}&key=${API_KEY}`;

    dispatch({ type: "FETCH_PLAYLIST_DATA_START" });
    axios
      .get(GET_PLAYLIST)
      .then(response => {
        dispatch({
          type: "FETCH_PLAYLIST_DATA_SUCCESS",
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({ type: "FETCH_PLAYLIST_DATA_ERROR", payload: err });
      });
  };
}

//@todo: Verify if id or link is posted, then only use ID
//Gets all details regarding a video on youtube (by its id)
export function getVideoInfo(videoLink) {
  const GET_VIDEO = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoLink}&key=${API_KEY}`;
  return function(dispatch) {
    dispatch({ type: "FETCH_VIDEO_DATA_START" });
    axios
      .get(GET_VIDEO)
      .then(response => {
        dispatch({
          type: "FETCH_VIDEO_DATA_SUCCESS",
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({ type: "FETCH_VIDEO_DATA_ERROR", payload: err });
      });
  };
}
