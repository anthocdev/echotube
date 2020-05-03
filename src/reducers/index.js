import loggedReducer from "./isLogged";
import GetVideosReducer from "./GetVideos";
import PostUserVideosReducer from "./PostUserVideos";
import userPlaylistReducer from "./UserPlaylistReducer";
import PlaylistVaideoReducer from "./PlaylistVideoReducer";
import PlayerReducer from "./PlayerReducer";
import userPlaylistVideosReducer from "./userPlaylistVideos";
// import userPlaylistReducer from "./userPlaylists";
import YouTubeReducer from "./YouTubeReducer";
import DeezerReducer from "./DeezerReducer";
import playerReducer from "./player";
import authReducer from "./auth";
import userReducer from "./parseUser";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const allReducers = combineReducers({
  userPlaylist: userPlaylistReducer,
  userPlaylistVideos: PlaylistVaideoReducer,
  video: GetVideosReducer,
  postUserVideo: PostUserVideosReducer,
  user: userReducer,
  player: PlayerReducer,
  auth: authReducer,
  youtube: YouTubeReducer,
  form: formReducer,
  deezer: DeezerReducer,
});

//Root reducer override for resetting all states(clearing cached data) after logout
const rootReducer = (state, action) => {
  if (action.type == "GOOGLE_OAUTH_SIGNOUT") {
    state = undefined;
  }

  return allReducers(state, action);
};

export default rootReducer;
