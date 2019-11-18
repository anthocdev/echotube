const usersReducer = (
  state = {
    userData: [],
    fetching: false,
    fetched: false,
    error: null
  },
  action
) => {
  switch (action.type) {
    case "FETCH_USERS_START": {
      return { ...state, fetching: true };
    }
    case "FETCH_USERS_SUCCESS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        playlistData: action.payload
      };
    }
    case "FETCH_USERS_ERROR": {
      return { ...state, fetching: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
