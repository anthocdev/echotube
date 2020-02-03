import loggedReducer from "./isLogged";
import GetVideosReducer from "./GetVideos";
import PostUserVideosReducer from "./PostUserVideos";
import playlistReducer from "./playlist";
import userReducer from "./users";
import userPlaylistVideosReducer from "./userPlaylistVideos";
import userPlaylistReducer from "./userPlaylists";
import playerReducer from "./player";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  playlist: playlistReducer,
  userPlaylist: userPlaylistReducer,
  userPlaylistVideos: userPlaylistVideosReducer,
  video: GetVideosReducer,
  postUserVideo: PostUserVideosReducer,
  user: userReducer,
  player: playerReducer
});

export default allReducers;
