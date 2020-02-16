import axios from "axios";
import {
  TOGGLE_PLAYER,
  SET_PLAYER_VOLUME,
  SET_ACTIVE_ITEM,
  ADD_PLAYBACK_ITEM,
  REMOVE_PLAYBACK_ITEM
} from "./types";

export const AddPlaybackItem = Item => {
  return async dispatch => {
    try {
      dispatch({
        type: ADD_PLAYBACK_ITEM,
        payload: Item
      });

      console.log("item", Item);
    } catch (err) {
      console.log("ADD_PLAYBACK_ITEM ERR", err);
    }
  };
};

export const RemovePlaybackItem = Index => {
  return async dispatch => {
    try {
      dispatch({
        type: REMOVE_PLAYBACK_ITEM,
        payload: Index
      });
    } catch (err) {
      console.log("REMOVE_PLAYBACK_ITEM ERR", err);
    }
  };
};

export const TogglePlayer = () => {
  return async dispatch => {
    try {
      dispatch({
        type: TOGGLE_PLAYER
      });
    } catch (err) {
      console.log("TOGGLE_PLAYER ERR", err);
    }
  };
};

export const SetActiveItem = Index => {
  return async dispatch => {
    try {
      dispatch({
        type: SET_ACTIVE_ITEM,
        payload: Index
      });
    } catch (err) {
      console.log("SET_ACTIVE_ITEM ERR", err);
    }
  };
};

export const SetPlayerVolume = Volume => {
  return async dispatch => {
    try {
      dispatch({
        type: SET_PLAYER_VOLUME,
        payload: Volume
      });
    } catch (err) {
      console.log("SET_PLAYER_VOLUME ERR", err);
    }
  };
};

// export function togglePlayer(playerEnabled) {
//     return function(dispatch) {
//       dispatch({
//         type: "TOGGLE_PLAYER",
//         payload: !playerEnabled
//       });
//     };
//   }

//   export function updatePlaybackQueue(items) {
//     return function(dispatch) {
//       dispatch({
//         type: "UPDATE_PLAYBACK_ITEMS",
//         payload: items
//       });
//     };
//   }

//   export function setPlayingIndex(index) {
//     return function(dispatch) {
//       dispatch({
//         type: "SET_ACTIVE_ITEM",
//         payload: index
//       });
//     };
//   }
