import loggedReducer from "./isLogged";
import GetVideosReducer from "./GetVideos";
import PostUserVideosReducer from "./PostUserVideos";
import userPlaylistReducer from "./playlist";
import userPlaylistVideosReducer from "./userPlaylistVideos";
// import userPlaylistReducer from "./userPlaylists";
import playerReducer from "./player";
import authReducer from "./auth";
import userReducer from "./parseUser";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  userPlaylist: userPlaylistReducer,
  userPlaylistVideos: userPlaylistVideosReducer,
  video: GetVideosReducer,
  postUserVideo: PostUserVideosReducer,
  user: userReducer,
  player: playerReducer,
  auth: authReducer
});

//Root reducer override for resetting all states(clearing cached data) after logout
const rootReducer = (state, action) => {
  if (action.type == "GOOGLE_OAUTH_SIGNOUT") {
    state = undefined;
  }

  return allReducers(state, action);
};

export default rootReducer;
