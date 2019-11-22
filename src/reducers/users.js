const usersReducer = (
  state = {
    userData: [],
    selectedUser: [],
    userSelected: false,
    loggedIn: false,
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
        userData: action.payload
      };
    }
    case "FETCH_USERS_ERROR": {
      return { ...state, fetching: false, error: action.payload };
    }
    case "SELECT_USER": {
      return { ...state, userSelected: true };
    }
    case "SELECT_USER_SUCCESS": {
      return { ...state, loggedIn: true, selectedUser: action.payload };
    }
    case "SELECT_USER_ERROR": {
      return { ...state, userSelected: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
