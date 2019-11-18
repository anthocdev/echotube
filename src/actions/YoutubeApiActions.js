import axios from "axios";
const API_KEY = `AIzaSyB2yKogm2aT-hE-wd-AYqUXezzXcHCCKXs`;
const GET_PLAYLIST = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLo54HDlG7fz1kQqxl2q2sp7JndjyziP8o&key=${API_KEY}`;

export function fetchPlaylist() {
  return function(dispatch) {
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
