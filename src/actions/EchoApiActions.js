import axios from "axios";
const APIDOMAIN = `http://localhost:3001`;
//GET Functions

export function getUserPlaylists(userId) {
  const userPlaylist = `http://localhost:3001/api/userPlaylist/${userId}`;

  return function(dispatch) {
    dispatch({ type: "FETCH_USER_PLAYLISTS_START" });
    axios
      .get(userPlaylist)
      .then(response => {
        dispatch({
          type: "FETCH_USER_PLAYLISTS_SUCCESS",
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({ type: "FETCH_USER_PLAYLISTS_ERROR", payload: err });
      });
  };
}

export function getPlaylistVideos(playlistId) {
  const playlistVideos = `${APIDOMAIN}/api/Playlist/${playlistId}`;

  return function(dispatch) {
    dispatch({ type: "FETCH_PLAYLIST_VIDEOS_START" });

    axios
      .get(playlistVideos)
      .then(response => {
        dispatch({
          type: "FETCH_PLAYLIST_VIDEOS_SUCCESS",
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({ type: "FETCH_PLAYLIST_VIDEOS_ERROR", payload: err });
      });
  };
}

//POST Functions

export function postVideoToPlaylist(playlistId, video) {
  const POST = `${APIDOMAIN}/api/Playlist/${playlistId}`;

  return function(dispatch) {
    dispatch({ type: "POST_PLAYLIST_VIDEO_START" });

    axios
      .post(POST, video)
      .then(response => {
        dispatch({
          type: "POST_PLAYLIST_VIDEO_SUCCESS",
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({ type: "POST_PLAYLIST_VIDEO_ERROR", payload: err });
      });
  };
}
