import loggedReducer from "./isLogged";
import playlistReducer from "./playlist";
import userReducer from "./users";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  isLogged: loggedReducer,
  playlist: playlistReducer,
  user: userReducer
});

export default allReducers;
