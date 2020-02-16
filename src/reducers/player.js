const player = (
  state = {
    playbackItems: [],
    volume: 100,
    currentIndex: -1,
    currentTime: 0,
    isVisible: false
  },
  action
) => {
  switch (action.type) {
    //Add video items to playback queue
    case "UPDATE_PLAYBACK_ITEMS": {
      return {
        ...state,
        playbackItems: [...state.playbackItems, action.payload]
      };
    }
    //Set player visible/invisible
    case "TOGGLE_PLAYER": {
      return { ...state, isVisible: ![...state.isVisible] };
    }
    //Set player volume
    case "SET_VOLUME": {
      return {
        ...state,
        volume: action.payload
      };
    }
    //Set elapsed video time
    case "SET_CURRENT_TIME": {
      return { ...state, currentTime: action.payload };
    }
    //Set selected item in queue
    case "SET_ACTIVE_ITEM": {
      return { ...state, currentIndex: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default player;
