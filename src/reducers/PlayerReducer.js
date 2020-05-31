import {
  TOGGLE_PLAYER,
  SET_PLAYER_VOLUME,
  SET_ACTIVE_ITEM,
  ADD_PLAYBACK_ITEM,
  REMOVE_PLAYBACK_ITEM,
} from "../actions/types";
/* Reducer for playback player navigation */
const DEFAULT_STATE = {
  IsActive: false,
  PlaybackQueue: [],
  CurrentIndex: -1,
  CurrentTime: 0,
  Volume: 100,
  errorMessage: "",
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TOGGLE_PLAYER:
      return { ...state, IsActive: !state.IsActive };
    case SET_PLAYER_VOLUME:
      return {
        ...state,
        Volume: action.payload,
      };
    case SET_ACTIVE_ITEM:
      return {
        ...state,
        CurrentIndex:
          state.PlaybackQueue.length < action.payload + 1
            ? state.CurrentIndex
            : action.payload,
      };
    case ADD_PLAYBACK_ITEM:
      return {
        ...state,
        PlaybackQueue: [...state.PlaybackQueue, action.payload],
      };
    case REMOVE_PLAYBACK_ITEM:
      state.PlaybackQueue.splice(action.payload, 1);
      return {
        ...state,
        PlaybackQueue: state.PlaybackQueue,
      };

    default:
      return state;
  }
};
