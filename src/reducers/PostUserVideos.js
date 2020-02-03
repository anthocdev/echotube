const postUserVideosReducer = (
  state = {
    videoResponse: [],
    posting: false,
    posted: false,
    error: null
  },
  action
) => {
  switch (action.type) {
    case "POST_PLAYLIST_VIDEO_START": {
      return { ...state, posting: true };
    }
    case "POST_PLAYLIST_VIDEO_SUCCESS": {
      return {
        ...state,
        posting: false,
        posted: true,
        videoData: action.payload
      };
    }
    case "POST_PLAYLIST_VIDEO_ERROR": {
      return { ...state, posting: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default postUserVideosReducer;
