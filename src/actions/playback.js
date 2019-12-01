export function togglePlayer(playerEnabled) {
  return function(dispatch) {
    dispatch({
      type: "TOGGLE_PLAYER",
      payload: !playerEnabled
    });
  };
}

export function updatePlaybackQueue(items) {
  return function(dispatch) {
    dispatch({
      type: "UPDATE_PLAYBACK_ITEMS",
      payload: items
    });
  };
}
