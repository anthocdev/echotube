const userPlaylistReducer = (
  state = {
    userPlaylistData: [],
    fetching: false,
    fetched: false,
    error: null
  },
  action
) => {
  switch (action.type) {
    case "FETCH_USER_PLAYLISTS_START": {
      return { ...state, fetching: true };
    }
    case "FETCH_USER_PLAYLISTS_SUCCESS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        userPlaylistData: action.payload
      };
    }
    case "FETCH_USER_PLAYLISTS_ERROR": {
      return { ...state, fetching: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default userPlaylistReducer;
