let initialState = {
  users: [],
  loading: false,
};

let postReducers = (state = initialState, action) => {
  switch (action.type) {
    case "POST_USER": {
      return {
        ...state,
        users: action.payload.mockUsers,
      };
    }
    case "FETCH_USER": {
      return {
        ...state,
        users: action.payload,
      };
    }
    default:
      return state;
  }
};

export default postReducers;
