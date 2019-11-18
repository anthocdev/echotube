const playlistReducer = (
  state = {
    playlistData: [],
    fetching: false,
    fetched: false,
    error: null
  },
  action
) => {
  switch (action.type) {
    case "FETCH_PLAYLIST_DATA_START": {
      return { ...state, fetching: true };
    }
    case "FETCH_PLAYLIST_DATA_SUCCESS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        playlistData: action.payload
      };
    }
    case "FETCH_PLAYLIST_DATA_ERROR": {
      return { ...state, fetching: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default playlistReducer;
