const getVideosReducer = (
  state = {
    videoData: [],
    fetching: false,
    fetched: false,
    error: null
  },
  action
) => {
  switch (action.type) {
    case "FETCH_VIDEO_DATA_START": {
      return { ...state, fetching: true };
    }
    case "FETCH_VIDEO_DATA_SUCCESS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        videoData: action.payload
      };
    }
    case "FETCH_VIDEO_DATA_ERROR": {
      return { ...state, fetching: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default getVideosReducer;
