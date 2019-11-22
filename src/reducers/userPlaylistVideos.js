const userPlaylistVideosReducer = (
  state = {
    playlistVideoData: [],
    fetching: false,
    fetched: false,
    error: null
  },
  action
) => {
  switch (action.type) {
    case "FETCH_PLAYLIST_VIDEOS_START": {
      return { ...state, fetching: true };
    }
    case "FETCH_PLAYLIST_VIDEOS_SUCCESS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        playlistVideoData: action.payload
      };
    }
    case "FETCH_PLAYLIST_VIDEOS_ERROR": {
      return { ...state, fetching: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default userPlaylistVideosReducer;
