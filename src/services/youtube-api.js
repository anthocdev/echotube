import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";

const API_KEY = `AIzaSyB2yKogm2aT-hE-wd-AYqUXezzXcHCCKXs`;
const GET_PLAYLIST = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLo54HDlG7fz1kQqxl2q2sp7JndjyziP8o&key=${API_KEY}`;

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PLAYLIST_DATA_START": {
    }
    case "RECEIVE_PLAYLIST_DATA": {
    }
    case "FETCH_PLAYLIST_DATA_ERROR": {
    }
  }
  return state;
};

const middleware = applyMiddleware(thunk, logger());
const store = createStore(reducer, middleware);

store.dispatch(dispatch => {
  dispatch({ type: "FETCH_PLAYLIST_DATA_START" });
  axios
    .get(GET_PLAYLIST)
    .then(Response => {
      dispatch({ type: "RECEIVE_PLAYLIST_DATA", payload: response.json() });
    })
    .catch(err => {
      dispatch({ type: "FETCH_PLAYLIST_DATA_ERROR", payload: err });
    });
});

/* Requests for YouTube API */

// const API_KEY = `AIzaSyB2yKogm2aT-hE-wd-AYqUXezzXcHCCKXs`;

// export function getPlaylistItems() {
//   var playlistData = [];
//   const GET_PLAYLIST = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLo54HDlG7fz1kQqxl2q2sp7JndjyziP8o&key=${API_KEY}`;
//   fetch(GET_PLAYLIST)
//     .then(res => res.json())
//     .then(data => {
//       playlistData = data.items;
//     })
//     .catch(console.log);
//   return playlistData;
// }
